module Utils.Keyboard exposing (keyDecoder)

{-| Keyboard shortcut handling.


# Functions

@docs keyDecoder

-}

import Json.Decode as Decode exposing (Decoder)
import Msg exposing (Msg(..))


{-| Key combination type.
-}
type alias KeyCombo =
    { key : String
    , ctrl : Bool
    , shift : Bool
    , alt : Bool
    , meta : Bool
    }


{-| Decoder for keyboard events.
-}
keyComboDecoder : Decoder KeyCombo
keyComboDecoder =
    Decode.map5 KeyCombo
        (Decode.field "key" Decode.string)
        (Decode.field "ctrlKey" Decode.bool)
        (Decode.field "shiftKey" Decode.bool)
        (Decode.field "altKey" Decode.bool)
        (Decode.field "metaKey" Decode.bool)


{-| Decode keyboard events to messages.
-}
keyDecoder : Decoder Msg
keyDecoder =
    keyComboDecoder
        |> Decode.andThen
            (\combo ->
                let
                    key =
                        String.toLower combo.key

                    ctrl =
                        combo.ctrl || combo.meta
                in
                if key == "z" && ctrl && combo.shift then
                    Decode.succeed Redo

                else if key == "z" && ctrl then
                    Decode.succeed Undo

                else if key == "y" && ctrl then
                    Decode.succeed Redo

                else if key == "c" && ctrl then
                    Decode.succeed Copy

                else if key == "x" && ctrl then
                    Decode.succeed Cut

                else if key == "v" && ctrl then
                    Decode.succeed Paste

                else if key == "escape" || key == "delete" || key == "backspace" then
                    Decode.succeed ClearSelection

                else
                    Decode.succeed NoOp
            )
