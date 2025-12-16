module Main exposing (main)

{-| Main entry point for the Dotsly application.

@docs main

-}

import Browser
import Html exposing (Html)
import Model exposing (Model)
import Msg exposing (Msg(..))
import Update exposing (update)
import View exposing (view)


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


{-| Subscriptions for the application.
-}
subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none
