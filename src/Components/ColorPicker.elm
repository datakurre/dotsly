module Components.ColorPicker exposing (view)

{-| Color picker component for selecting colors.

@docs view

-}

import Html exposing (Html, div, text)
import Html.Attributes exposing (style)
import Html.Events exposing (onClick)
import Model exposing (Model)
import Msg exposing (Msg(..))


{-| View the color picker with loaded colors or fallback to basic colors.
-}
view : Model -> Html Msg
view model =
    let
        colors =
            if List.isEmpty model.colors then
                -- Fallback colors if CSV not loaded yet
                [ ( "#05131D", "Black" )
                , ( "#FFFFFF", "White" )
                , ( "#C91A09", "Red" )
                , ( "#0055BF", "Blue" )
                , ( "#237841", "Green" )
                , ( "#F2CD37", "Yellow" )
                , ( "#FF8C00", "Orange" )
                , ( "#C870A0", "Dark Pink" )
                , ( "#583927", "Brown" )
                , ( "#9BA19D", "Light Gray" )
                , ( "#6D6E5C", "Dark Gray" )
                , ( "#4B9F4A", "Bright Green" )
                , ( "#B4D2E3", "Light Blue" )
                , ( "#FC97AC", "Pink" )
                , ( "#55A5AF", "Light Turquoise" )
                , ( "#008F9B", "Dark Turquoise" )
                ]

            else
                -- Use loaded colors, take first 32 for the palette
                model.colors
                    |> List.take 32
                    |> List.map (\c -> ( c.rgb, c.name ))
    in
    div []
        [ div [ style "font-weight" "bold", style "margin-bottom" "8px" ] 
            [ text "Color Palette" ]
        , div 
            [ style "display" "grid"
            , style "grid-template-columns" "repeat(4, 32px)"
            , style "gap" "4px"
            , style "max-height" "300px"
            , style "overflow-y" "auto"
            ]
            (List.map (viewColorSwatch model.primaryColor) colors)
        ]


{-| View a single color swatch.
-}
viewColorSwatch : String -> ( String, String ) -> Html Msg
viewColorSwatch selectedColor ( color, name ) =
    div
        [ onClick (SelectPrimaryColor color)
        , style "width" "32px"
        , style "height" "32px"
        , style "background" color
        , style "border" 
            (if selectedColor == color then 
                "3px solid #2196F3" 
             else 
                "1px solid #ccc"
            )
        , style "cursor" "pointer"
        , style "box-sizing" "border-box"
        , Html.Attributes.title name
        ]
        []
