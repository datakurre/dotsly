module Data.Design exposing (encodeDesign, decodeDesign, saveDesign)

{-| Design serialization and file operations.

@docs encodeDesign, decodeDesign, saveDesign

-}

import File.Download as Download
import Json.Decode as Decode exposing (Decoder)
import Json.Encode as Encode
import Model exposing (Model)
import Types.Shape exposing (Grid, GridCell, Rotation(..), ShapeType(..))


{-| Encode a design to JSON.
-}
encodeDesign : Model -> Encode.Value
encodeDesign model =
    Encode.object
        [ ( "version", Encode.int 1 )
        , ( "gridWidth", Encode.int model.gridWidth )
        , ( "gridHeight", Encode.int model.gridHeight )
        , ( "grid", encodeGrid model.grid )
        ]


{-| Encode the grid.
-}
encodeGrid : Grid -> Encode.Value
encodeGrid grid =
    Encode.list encodeCell grid


{-| Encode a single cell.
-}
encodeCell : Maybe GridCell -> Encode.Value
encodeCell maybeCell =
    case maybeCell of
        Nothing ->
            Encode.null

        Just cell ->
            Encode.object
                [ ( "shape", encodeShape cell.shape )
                , ( "color", Encode.string cell.color )
                , ( "rotation", Encode.int (rotationToInt cell.rotation) )
                ]


{-| Encode a shape type.
-}
encodeShape : ShapeType -> Encode.Value
encodeShape shape =
    Encode.string <|
        case shape of
            Square ->
                "square"

            Circle ->
                "circle"

            Quarter ->
                "quarter"

            HalfCircle ->
                "halfCircle"


{-| Convert rotation to int.
-}
rotationToInt : Rotation -> Int
rotationToInt rotation =
    case rotation of
        Rotate0 ->
            0

        Rotate90 ->
            90

        Rotate180 ->
            180

        Rotate270 ->
            270


{-| Decode a design from JSON.
-}
decodeDesign : Decoder ( Int, Int, Grid )
decodeDesign =
    Decode.map3 (\w h g -> ( w, h, g ))
        (Decode.field "gridWidth" Decode.int)
        (Decode.field "gridHeight" Decode.int)
        (Decode.field "grid" decodeGrid)


{-| Decode the grid.
-}
decodeGrid : Decoder Grid
decodeGrid =
    Decode.list decodeCell


{-| Decode a single cell.
-}
decodeCell : Decoder (Maybe GridCell)
decodeCell =
    Decode.oneOf
        [ Decode.null Nothing
        , Decode.map3
            (\shape color rotation ->
                Just
                    { shape = shape
                    , color = color
                    , rotation = rotation
                    }
            )
            (Decode.field "shape" decodeShape)
            (Decode.field "color" Decode.string)
            (Decode.field "rotation" decodeRotation)
        ]


{-| Decode a shape type.
-}
decodeShape : Decoder ShapeType
decodeShape =
    Decode.string
        |> Decode.andThen
            (\str ->
                case str of
                    "square" ->
                        Decode.succeed Square

                    "circle" ->
                        Decode.succeed Circle

                    "quarter" ->
                        Decode.succeed Quarter

                    "halfCircle" ->
                        Decode.succeed HalfCircle

                    _ ->
                        Decode.fail ("Unknown shape: " ++ str)
            )


{-| Decode rotation.
-}
decodeRotation : Decoder Rotation
decodeRotation =
    Decode.int
        |> Decode.andThen
            (\deg ->
                case deg of
                    0 ->
                        Decode.succeed Rotate0

                    90 ->
                        Decode.succeed Rotate90

                    180 ->
                        Decode.succeed Rotate180

                    270 ->
                        Decode.succeed Rotate270

                    _ ->
                        Decode.succeed Rotate0
            )


{-| Save design as JSON file.
-}
saveDesign : Model -> Cmd msg
saveDesign model =
    let
        json =
            encodeDesign model

        jsonString =
            Encode.encode 2 json

        filename =
            "dotsly-design.json"
    in
    Download.string filename "application/json" jsonString
