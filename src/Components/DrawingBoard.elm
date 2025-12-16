module Components.DrawingBoard exposing (view)

{-| Drawing board component with SVG-based grid rendering.

@docs view

-}

import Html exposing (Html)
import Model exposing (Model)
import Msg exposing (Msg(..))
import Svg exposing (Svg, circle, g, line, rect, svg)
import Svg.Attributes exposing (cx, cy, fill, height, r, stroke, strokeWidth, transform, viewBox, width, x, x1, x2, y, y1, y2)
import Svg.Events exposing (onClick)
import Types.Shape exposing (GridCell, Rotation(..), ShapeType(..))


{-| Cell size in pixels.
-}
cellSize : Float
cellSize =
    20.0


{-| View the drawing board.
-}
view : Model -> Html Msg
view model =
    let
        gridWidth =
            toFloat model.gridWidth * cellSize

        gridHeight =
            toFloat model.gridHeight * cellSize

        viewBoxStr =
            "0 0 " ++ String.fromFloat gridWidth ++ " " ++ String.fromFloat gridHeight
    in
    svg
        [ viewBox viewBoxStr
        , width (String.fromFloat gridWidth)
        , height (String.fromFloat gridHeight)
        , Svg.Attributes.style "border: 1px solid #ccc; display: block; margin: 20px;"
        ]
        [ viewGrid model
        , viewCells model
        , viewSelection model
        ]


{-| View the grid lines.
-}
viewGrid : Model -> Svg Msg
viewGrid model =
    let
        gridWidth =
            toFloat model.gridWidth * cellSize

        gridHeight =
            toFloat model.gridHeight * cellSize

        verticalLines =
            List.range 0 model.gridWidth
                |> List.map
                    (\i ->
                        line
                            [ x1 (String.fromFloat (toFloat i * cellSize))
                            , y1 "0"
                            , x2 (String.fromFloat (toFloat i * cellSize))
                            , y2 (String.fromFloat gridHeight)
                            , stroke "#e0e0e0"
                            , strokeWidth "0.5"
                            ]
                            []
                    )

        horizontalLines =
            List.range 0 model.gridHeight
                |> List.map
                    (\i ->
                        line
                            [ x1 "0"
                            , y1 (String.fromFloat (toFloat i * cellSize))
                            , x2 (String.fromFloat gridWidth)
                            , y2 (String.fromFloat (toFloat i * cellSize))
                            , stroke "#e0e0e0"
                            , strokeWidth "0.5"
                            ]
                            []
                    )
    in
    g [] (verticalLines ++ horizontalLines)


{-| View all cells in the grid.
-}
viewCells : Model -> Svg Msg
viewCells model =
    let
        cellViews =
            List.indexedMap
                (\index maybeCell ->
                    let
                        gridX =
                            modBy model.gridWidth index

                        gridY =
                            index // model.gridWidth
                    in
                    viewCell gridX gridY maybeCell
                )
                model.grid
    in
    g [] cellViews


{-| View a single cell.
-}
viewCell : Int -> Int -> Maybe GridCell -> Svg Msg
viewCell gridX gridY maybeCell =
    let
        xPos =
            toFloat gridX * cellSize

        yPos =
            toFloat gridY * cellSize
    in
    g
        [ onClick (GridClick gridX gridY)
        , Svg.Attributes.style "cursor: pointer;"
        ]
        [ -- Background for click area
          rect
            [ x (String.fromFloat xPos)
            , y (String.fromFloat yPos)
            , width (String.fromFloat cellSize)
            , height (String.fromFloat cellSize)
            , fill "transparent"
            ]
            []
        , case maybeCell of
            Just cell ->
                viewShape xPos yPos cell

            Nothing ->
                Svg.text ""
        ]


{-| View a shape in a cell.
-}
viewShape : Float -> Float -> GridCell -> Svg Msg
viewShape xPos yPos cell =
    let
        centerX =
            xPos + cellSize / 2

        centerY =
            yPos + cellSize / 2

        rotation =
            Types.Shape.rotationToDegrees cell.rotation

        transformStr =
            "rotate(" ++ String.fromInt rotation ++ " " ++ String.fromFloat centerX ++ " " ++ String.fromFloat centerY ++ ")"
    in
    case cell.shape of
        Square ->
            rect
                [ x (String.fromFloat xPos)
                , y (String.fromFloat yPos)
                , width (String.fromFloat cellSize)
                , height (String.fromFloat cellSize)
                , fill cell.color
                ]
                []

        Circle ->
            g []
                [ circle
                    [ cx (String.fromFloat centerX)
                    , cy (String.fromFloat centerY)
                    , r (String.fromFloat (cellSize / 2))
                    , fill cell.color
                    ]
                    []
                , circle
                    [ cx (String.fromFloat centerX)
                    , cy (String.fromFloat centerY)
                    , r (String.fromFloat (cellSize / 6))
                    , fill "#000"
                    ]
                    []
                ]

        Quarter ->
            Svg.path
                [ Svg.Attributes.d
                    ("M " ++ String.fromFloat xPos ++ " " ++ String.fromFloat yPos
                        ++ " L " ++ String.fromFloat (xPos + cellSize) ++ " " ++ String.fromFloat yPos
                        ++ " L " ++ String.fromFloat xPos ++ " " ++ String.fromFloat (yPos + cellSize)
                        ++ " Z"
                    )
                , fill cell.color
                , transform transformStr
                ]
                []

        HalfCircle ->
            Svg.path
                [ Svg.Attributes.d
                    ("M " ++ String.fromFloat xPos ++ " " ++ String.fromFloat yPos
                        ++ " L " ++ String.fromFloat (xPos + cellSize) ++ " " ++ String.fromFloat yPos
                        ++ " L " ++ String.fromFloat (xPos + cellSize) ++ " " ++ String.fromFloat (yPos + cellSize)
                        ++ " L " ++ String.fromFloat xPos ++ " " ++ String.fromFloat (yPos + cellSize)
                        ++ " Z"
                    )
                , fill cell.color
                , transform transformStr
                ]
                []


{-| View the selection rectangle.
-}
viewSelection : Model -> Svg Msg
viewSelection model =
    if model.selection.active then
        let
            startX =
                min model.selection.startX model.selection.endX

            startY =
                min model.selection.startY model.selection.endY

            endX =
                max model.selection.startX model.selection.endX

            endY =
                max model.selection.startY model.selection.endY

            xPos =
                toFloat startX * cellSize

            yPos =
                toFloat startY * cellSize

            selWidth =
                toFloat (endX - startX + 1) * cellSize

            selHeight =
                toFloat (endY - startY + 1) * cellSize
        in
        rect
            [ x (String.fromFloat xPos)
            , y (String.fromFloat yPos)
            , width (String.fromFloat selWidth)
            , height (String.fromFloat selHeight)
            , fill "none"
            , stroke "#2196F3"
            , strokeWidth "2"
            , Svg.Attributes.strokeDasharray "5,5"
            ]
            []

    else
        Svg.text ""
