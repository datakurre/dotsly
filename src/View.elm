module View exposing (view)

{-| Main view function for the application.

@docs view

-}

import Components.ColorPicker
import Components.DrawingBoard
import File
import Html exposing (Html, button, div, input, label, text)
import Html.Attributes exposing (accept, class, style, type_, value)
import Html.Events exposing (on, onClick, onInput)
import Json.Decode as Decode
import Model exposing (Model)
import Msg exposing (Msg(..))
import Types.Shape
import Types.Tool exposing (ToolType(..))


{-| Main view function.
-}
view : Model -> Html Msg
view model =
    div
        [ style "display" "flex"
        , style "flex-direction" 
            (case model.toolbarPosition of
                Model.Left -> "row"
                Model.Top -> "column"
            )
        , style "height" "100vh"
        , style "font-family" "sans-serif"
        ]
        [ viewToolbar model
        , viewCanvas model
        ]


{-| Toolbar view.
-}
viewToolbar : Model -> Html Msg
viewToolbar model =
    div
        [ style "background" "#f0f0f0"
        , style "padding" "16px"
        , style "border-right" "1px solid #ccc"
        , style "display" "flex"
        , style "flex-direction" 
            (case model.toolbarPosition of
                Model.Left -> "column"
                Model.Top -> "row"
            )
        , style "gap" "16px"
        , style "overflow-y" "auto"
        ]
        [ viewToolSelector model
        , viewShapeSelector model
        , viewGridSizeControls model
        , viewFileOperations model
        , viewActions model
        , Components.ColorPicker.view model
        , viewColorInfo model
        , viewDebugInfo model
        ]


{-| Tool selector.
-}
viewToolSelector : Model -> Html Msg
viewToolSelector model =
    div []
        [ div [ style "font-weight" "bold", style "margin-bottom" "8px" ] [ text "Tools" ]
        , div [ style "display" "flex", style "flex-direction" "column", style "gap" "4px" ]
            [ toolButton "Draw" Draw (model.selectedTool == Draw)
            , toolButton "Fill" Fill (model.selectedTool == Fill)
            , toolButton "Select" Select (model.selectedTool == Select)
            , toolButton "Color Picker" ColorPicker (model.selectedTool == ColorPicker)
            ]
        ]


toolButton : String -> ToolType -> Bool -> Html Msg
toolButton label tool isActive =
    button
        [ onClick (SelectTool tool)
        , style "padding" "8px"
        , style "background" (if isActive then "#4CAF50" else "#fff")
        , style "color" (if isActive then "#fff" else "#000")
        , style "border" "1px solid #ccc"
        , style "cursor" "pointer"
        ]
        [ text label ]


{-| Shape selector.
-}
viewShapeSelector : Model -> Html Msg
viewShapeSelector model =
    div []
        [ div [ style "font-weight" "bold", style "margin-bottom" "8px" ] [ text "Shapes" ]
        , div [ style "display" "flex", style "flex-direction" "column", style "gap" "4px" ]
            [ shapeButton "Square" Types.Shape.Square (model.selectedShape == Types.Shape.Square)
            , shapeButton "Circle" Types.Shape.Circle (model.selectedShape == Types.Shape.Circle)
            , shapeButton "Quarter" Types.Shape.Quarter (model.selectedShape == Types.Shape.Quarter)
            , shapeButton "Half Circle" Types.Shape.HalfCircle (model.selectedShape == Types.Shape.HalfCircle)
            ]
        ]


shapeButton : String -> Types.Shape.ShapeType -> Bool -> Html Msg
shapeButton label shape isActive =
    button
        [ onClick (SelectShape shape)
        , style "padding" "8px"
        , style "background" (if isActive then "#2196F3" else "#fff")
        , style "color" (if isActive then "#fff" else "#000")
        , style "border" "1px solid #ccc"
        , style "cursor" "pointer"
        ]
        [ text label ]


{-| Grid size controls.
-}
viewGridSizeControls : Model -> Html Msg
viewGridSizeControls model =
    div []
        [ div [ style "font-weight" "bold", style "margin-bottom" "8px" ] [ text "Grid Size" ]
        , div [ style "display" "flex", style "flex-direction" "column", style "gap" "8px" ]
            [ div []
                [ label [] [ text "Width: " ]
                , input
                    [ type_ "number"
                    , value model.widthInput
                    , onInput SetGridWidth
                    , style "width" "60px"
                    ]
                    []
                ]
            , div []
                [ label [] [ text "Height: " ]
                , input
                    [ type_ "number"
                    , value model.heightInput
                    , onInput SetGridHeight
                    , style "width" "60px"
                    ]
                    []
                ]
            , button
                [ onClick ResizeGrid
                , style "padding" "8px"
                , style "background" "#FF9800"
                , style "color" "#fff"
                , style "border" "none"
                , style "cursor" "pointer"
                ]
                [ text "Resize Grid" ]
            ]
        ]


{-| File operations (save/load).
-}
viewFileOperations : Model -> Html Msg
viewFileOperations model =
    div []
        [ div [ style "font-weight" "bold", style "margin-bottom" "8px" ] [ text "File" ]
        , div [ style "display" "flex", style "flex-direction" "column", style "gap" "4px" ]
            [ button
                [ onClick SaveDesign
                , style "padding" "8px"
                , style "background" "#4CAF50"
                , style "color" "#fff"
                , style "border" "none"
                , style "cursor" "pointer"
                ]
                [ text "Save Design" ]
            , label
                [ style "padding" "8px"
                , style "background" "#2196F3"
                , style "color" "#fff"
                , style "border" "none"
                , style "cursor" "pointer"
                , style "text-align" "center"
                ]
                [ text "Load Design"
                , input
                    [ type_ "file"
                    , accept ".json"
                    , on "change" (Decode.map LoadDesign fileDecoder)
                    , style "display" "none"
                    ]
                    []
                ]
            ]
        ]


{-| Decoder for file input.
-}
fileDecoder : Decode.Decoder File.File
fileDecoder =
    Decode.at [ "target", "files", "0" ] File.decoder


{-| Actions (undo/redo, clipboard).
-}
viewActions : Model -> Html Msg
viewActions model =
    div []
        [ div [ style "font-weight" "bold", style "margin-bottom" "8px" ] [ text "Actions" ]
        , div [ style "display" "flex", style "flex-direction" "column", style "gap" "4px" ]
            [ button
                [ onClick Undo
                , style "padding" "8px"
                , style "background" "#fff"
                , style "border" "1px solid #ccc"
                , style "cursor" "pointer"
                ]
                [ text "Undo (Ctrl+Z)" ]
            , button
                [ onClick Redo
                , style "padding" "8px"
                , style "background" "#fff"
                , style "border" "1px solid #ccc"
                , style "cursor" "pointer"
                ]
                [ text "Redo (Ctrl+Shift+Z)" ]
            , button
                [ onClick Copy
                , style "padding" "8px"
                , style "background" "#fff"
                , style "border" "1px solid #ccc"
                , style "cursor" "pointer"
                ]
                [ text "Copy (Ctrl+C)" ]
            , button
                [ onClick Cut
                , style "padding" "8px"
                , style "background" "#fff"
                , style "border" "1px solid #ccc"
                , style "cursor" "pointer"
                ]
                [ text "Cut (Ctrl+X)" ]
            , button
                [ onClick Paste
                , style "padding" "8px"
                , style "background" "#fff"
                , style "border" "1px solid #ccc"
                , style "cursor" "pointer"
                ]
                [ text "Paste (Ctrl+V)" ]
            , button
                [ onClick ClearSelection
                , style "padding" "8px"
                , style "background" "#fff"
                , style "border" "1px solid #ccc"
                , style "cursor" "pointer"
                ]
                [ text "Clear (Del)" ]
            ]
        ]


{-| Color info display.
-}
viewColorInfo : Model -> Html Msg
viewColorInfo model =
    div []
        [ div [ style "font-weight" "bold", style "margin-bottom" "8px" ] [ text "Colors" ]
        , div [ style "display" "flex", style "flex-direction" "column", style "gap" "8px" ]
            [ div [ style "display" "flex", style "align-items" "center", style "gap" "8px" ]
                [ text "Primary:"
                , div
                    [ style "width" "32px"
                    , style "height" "32px"
                    , style "background" model.primaryColor
                    , style "border" "1px solid #000"
                    ]
                    []
                ]
            , div [ style "display" "flex", style "align-items" "center", style "gap" "8px" ]
                [ text "Secondary:"
                , div
                    [ style "width" "32px"
                    , style "height" "32px"
                    , style "background" model.secondaryColor
                    , style "border" "1px solid #000"
                    ]
                    []
                ]
            ]
        ]


{-| Debug info.
-}
viewDebugInfo : Model -> Html Msg
viewDebugInfo model =
    div [ style "margin-top" "auto", style "padding-top" "16px", style "border-top" "1px solid #ccc" ]
        [ div [ style "font-size" "12px", style "color" "#666" ]
            [ text "🚧 Elm Version - Phase 5"
            , div [] [ text ("Tool: " ++ Types.Tool.toolToString model.selectedTool) ]
            , div [] [ text ("Zoom: " ++ String.fromFloat model.zoom) ]
            , div [] [ text ("History: " ++ String.fromInt (List.length model.history)) ]
            ]
        ]


{-| Canvas view.
-}
viewCanvas : Model -> Html Msg
viewCanvas model =
    div
        [ style "flex" "1"
        , style "overflow" "auto"
        , style "background" "#fff"
        , style "display" "flex"
        , style "align-items" "center"
        , style "justify-content" "center"
        ]
        [ Components.DrawingBoard.view model
        ]
