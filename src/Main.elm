module Main exposing (main)

{-| Main entry point for the Dotsly application.

@docs main

-}

import Browser
import Html exposing (Html, div, text)
import Html.Attributes exposing (style)
import Model exposing (Model)
import Msg exposing (Msg(..))


{-| Main application entry point.
-}
main : Program () Model Msg
main =
    Browser.element
        { init = \_ -> Model.init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }


{-| Update function - handles all state changes.
-}
update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

        _ ->
            -- TODO: Implement all message handlers
            ( model, Cmd.none )


{-| View function - renders the application.
-}
view : Model -> Html Msg
view model =
    div
        [ style "font-family" "sans-serif"
        , style "padding" "20px"
        ]
        [ div []
            [ text "Dotsly - Elm Version" ]
        , div []
            [ text ("Grid size: " ++ String.fromInt model.gridWidth ++ "x" ++ String.fromInt model.gridHeight) ]
        , div []
            [ text "🚧 Under construction - converting from SvelteKit to Elm" ]
        ]


{-| Subscriptions for the application.
-}
subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none
