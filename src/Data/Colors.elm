module Data.Colors exposing (loadColors, parseColors)

{-| Color data loading and parsing.

@docs loadColors, parseColors

-}

import Http
import Types.Color exposing (Color)
import Utils.Color


{-| Load colors from the CSV file.
-}
loadColors : (Result String (List Color) -> msg) -> Cmd msg
loadColors toMsg =
    Http.get
        { url = "/dotsly/data/colors.csv"
        , expect = Http.expectString (handleResponse toMsg)
        }


{-| Handle HTTP response.
-}
handleResponse : (Result String (List Color) -> msg) -> Result Http.Error String -> msg
handleResponse toMsg result =
    case result of
        Ok csvText ->
            toMsg (Ok (parseColors csvText))

        Err error ->
            toMsg (Err (httpErrorToString error))


{-| Convert HTTP error to string.
-}
httpErrorToString : Http.Error -> String
httpErrorToString error =
    case error of
        Http.BadUrl url ->
            "Bad URL: " ++ url

        Http.Timeout ->
            "Request timeout"

        Http.NetworkError ->
            "Network error"

        Http.BadStatus status ->
            "Bad status: " ++ String.fromInt status

        Http.BadBody body ->
            "Bad body: " ++ body


{-| Parse colors from CSV text.
Expected format: id,name,rgb,is_trans,num_parts,num_sets,y1,y2
We'll skip the header line and parse each data line.
-}
parseColors : String -> List Color
parseColors csvText =
    csvText
        |> String.lines
        |> List.drop 1
        -- Skip header
        |> List.filterMap parseLine
        |> List.filter (\color -> not color.isTrans)


{-| Parse a single CSV line into a Color.
Format: id,name,rgb,is_trans,num_parts,num_sets,y1,y2
-}
parseLine : String -> Maybe Color
parseLine line =
    let
        fields =
            String.split "," line
    in
    case fields of
        id :: name :: rgb :: isTrans :: _ ->
            Maybe.map2
                (\colorId isTransparent ->
                    { id = colorId
                    , name = String.trim name
                    , rgb = "#" ++ String.trim rgb
                    , isTrans = isTransparent
                    }
                )
                (String.toInt (String.trim id))
                (parseBoolean (String.trim isTrans))

        _ ->
            Nothing


{-| Parse boolean from string.
-}
parseBoolean : String -> Maybe Bool
parseBoolean str =
    case String.toLower str of
        "true" ->
            Just True

        "false" ->
            Just False

        "t" ->
            Just True

        "f" ->
            Just False

        _ ->
            Nothing
