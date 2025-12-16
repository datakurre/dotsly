module Msg exposing (Msg(..))

{-| Message types for The Elm Architecture.

@docs Msg

-}

import File exposing (File)
import Types.Color exposing (Color)
import Types.Shape exposing (GridCell, Rotation, ShapeType)
import Types.Tool exposing (ToolType)


{-| All possible messages in the application.
-}
type Msg
    = -- Tool Selection
      SelectTool ToolType
    | SelectShape ShapeType
    | SelectPrimaryColor String
    | SelectSecondaryColor String
      -- Grid Interactions
    | GridClick Int Int
    | GridDragStart Int Int
    | GridDrag Int Int
    | GridDragEnd
      -- History
    | Undo
    | Redo
      -- Clipboard
    | Copy
    | Cut
    | Paste
    | ClearSelection
      -- Selection Tool
    | SelectionStart Int Int
    | SelectionDrag Int Int
    | SelectionEnd
      -- Image Upload
    | ImageSelected File
    | ImageLoaded String
    | ImageProcessed (List (Maybe GridCell))
      -- Grid Size
    | SetGridWidth String
    | SetGridHeight String
    | ResizeGrid
      -- File Operations
    | SaveDesign
    | LoadDesign File
    | DesignLoaded String
      -- UI
    | ToggleToolbar
    | SetZoom Float
    | Pan Float Float
      -- Data Loading
    | ColorsLoaded (Result String (List Color))
    | NoOp
