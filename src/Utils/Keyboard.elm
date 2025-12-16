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
                case ( String.toLower combo.key, combo.ctrl || combo.meta, combo.shift, combo.alt ) of
                    -- Undo/Redo
                    ( "z", True, False, False ) ->
                        Decode.succeed Undo

                    ( "z", True, True, False ) ->
                        Decode.succeed Redo

                    ( "y", True, False, False ) ->
                        Decode.succeed Redo

                    -- Clipboard
                    ( "c", True, False, False ) ->
                        Decode.succeed Copy

                    ( "x", True, False, False ) ->
                        Decode.succeed Cut

                    ( "v", True, False, False ) ->
                        Decode.succeed Paste

                    -- Selection
                    ( "escape", False, False, False ) ->
                        Decode.succeed ClearSelection

                    ( "delete", False, False, False ) ->
                        Decode.succeed ClearSelection

                    ( "backspace", False, False, False ) ->
                        Decode.succeed ClearSelection

                    -- Default: no message
                    _ ->
                        Decode.succeed NoOp
            )
