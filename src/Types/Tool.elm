module Types.Tool exposing
    ( ToolType(..)
    , toolToString
    , stringToTool
    )

{-| Tool type definitions for the Dotsly application.


# Types

@docs ToolType


# Helper Functions

@docs toolToString, stringToTool

-}


{-| The different drawing and editing tools available.

  - Draw: Click/drag to place shapes
  - Select: Rectangle selection for copy/paste
  - Fill: Flood fill for contiguous areas
  - ColorPicker: Sample colors from the canvas

-}
type ToolType
    = Draw
    | Select
    | Fill
    | ColorPicker


{-| Convert a ToolType to a string representation.
-}
toolToString : ToolType -> String
toolToString tool =
    case tool of
        Draw ->
            "draw"

        Select ->
            "select"

        Fill ->
            "fill"

        ColorPicker ->
            "colorPicker"


{-| Convert a string to a ToolType, defaulting to Draw if invalid.
-}
stringToTool : String -> ToolType
stringToTool str =
    case str of
        "draw" ->
            Draw

        "select" ->
            Select

        "fill" ->
            Fill

        "colorPicker" ->
            ColorPicker

        _ ->
            Draw
