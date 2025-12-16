module Utils.Color exposing
    ( rgbToHsl
    , hexToRgb
    , colorDistance
    , findClosestColor
    , parseColorCSV
    )

{-| Color conversion and matching utilities.


# Functions

@docs rgbToHsl, hexToRgb, colorDistance, findClosestColor, parseColorCSV

-}

import Types.Color exposing (Color, ColorHSL)


{-| Convert RGB (0-255) to HSL (h: 0-360, s: 0-1, l: 0-1).
-}
rgbToHsl : Int -> Int -> Int -> { h : Float, s : Float, l : Float }
rgbToHsl r g b =
    let
        rf =
            toFloat r / 255

        gf =
            toFloat g / 255

        bf =
            toFloat b / 255

        maxC =
            max rf (max gf bf)

        minC =
            min rf (min gf bf)

        delta =
            maxC - minC

        l =
            (maxC + minC) / 2

        s =
            if delta == 0 then
                0

            else
                delta / (1 - abs (2 * l - 1))

        h =
            if delta == 0 then
                0

            else if maxC == rf then
                60 * (modBy 6 (round ((gf - bf) / delta)))

            else if maxC == gf then
                60 * (((bf - rf) / delta) + 2)

            else
                60 * (((rf - gf) / delta) + 4)

        hNormalized =
            if h < 0 then
                h + 360

            else
                h
    in
    { h = hNormalized, s = s, l = l }


{-| Parse hex color string to RGB values.
Supports both #RGB and #RRGGBB formats.
-}
hexToRgb : String -> Maybe { r : Int, g : Int, b : Int }
hexToRgb hex =
    let
        cleanHex =
            String.replace "#" "" hex

        parseHex str =
            String.toInt ("0x" ++ str)
    in
    case String.length cleanHex of
        3 ->
            -- #RGB format
            Maybe.map3
                (\r g b ->
                    { r = r * 17, g = g * 17, b = b * 17 }
                )
                (parseHex (String.slice 0 1 cleanHex))
                (parseHex (String.slice 1 2 cleanHex))
                (parseHex (String.slice 2 3 cleanHex))

        6 ->
            -- #RRGGBB format
            Maybe.map3
                (\r g b -> { r = r, g = g, b = b })
                (parseHex (String.slice 0 2 cleanHex))
                (parseHex (String.slice 2 4 cleanHex))
                (parseHex (String.slice 4 6 cleanHex))

        _ ->
            Nothing


{-| Calculate color distance using simple Euclidean distance in RGB space.
For better results, consider implementing CIE76 or CIEDE2000 in the future.
-}
colorDistance : { r : Int, g : Int, b : Int } -> { r : Int, g : Int, b : Int } -> Float
colorDistance c1 c2 =
    let
        dr =
            toFloat (c1.r - c2.r)

        dg =
            toFloat (c1.g - c2.g)

        db =
            toFloat (c1.b - c2.b)
    in
    sqrt (dr * dr + dg * dg + db * db)


{-| Find the closest color from a palette to a given RGB color.
-}
findClosestColor : Int -> Int -> Int -> List Color -> Maybe Color
findClosestColor r g b palette =
    let
        targetRgb =
            { r = r, g = g, b = b }

        calculateDistance color =
            case hexToRgb color.rgb of
                Just rgb ->
                    Just ( color, colorDistance targetRgb rgb )

                Nothing ->
                    Nothing

        distances =
            List.filterMap calculateDistance palette
    in
    distances
        |> List.sortBy Tuple.second
        |> List.head
        |> Maybe.map Tuple.first


{-| Parse a CSV line into a Color record.
Expected format: id,name,rgb,is_trans
-}
parseColorCSV : String -> Maybe Color
parseColorCSV line =
    let
        fields =
            String.split "," line
    in
    case fields of
        [ idStr, name, rgb, isTransStr ] ->
            Maybe.map2
                (\id isTrans ->
                    { id = id
                    , name = String.trim name
                    , rgb = String.trim rgb
                    , isTrans = isTrans
                    }
                )
                (String.toInt (String.trim idStr))
                (case String.trim (String.toLower isTransStr) of
                    "t" ->
                        Just True

                    "true" ->
                        Just True

                    "1" ->
                        Just True

                    "f" ->
                        Just False

                    "false" ->
                        Just False

                    "0" ->
                        Just False

                    _ ->
                        Nothing
                )

        _ ->
            Nothing
