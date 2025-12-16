module Model exposing
    ( Model
    , Selection
    , ClipboardData
    , ToolbarPosition(..)
    , init
    )

{-| Application state model.

@docs Model, Selection, ClipboardData, ToolbarPosition, init

-}

import Types.Color exposing (Color)
import Types.Shape exposing (Grid, GridCell, ShapeType(..))
import Types.Tool exposing (ToolType(..))


{-| Position of the toolbar in the UI.
-}
type ToolbarPosition
    = Left
    | Top


{-| Selection state for the selection tool.
-}
type alias Selection =
    { startX : Int
    , startY : Int
    , endX : Int
    , endY : Int
    , active : Bool
    , cells : Maybe (List (Maybe GridCell))
    }


{-| Clipboard data for copy/paste operations.
-}
type alias ClipboardData =
    { cells : List (Maybe GridCell)
    , width : Int
    , height : Int
    }


{-| The application model containing all state.
-}
type alias Model =
    { -- Grid state
      grid : Grid
    , gridWidth : Int
    , gridHeight : Int

    -- Tool state
    , selectedTool : ToolType
    , selectedShape : ShapeType
    , primaryColor : String
    , secondaryColor : String

    -- History
    , history : List Grid
    , historyIndex : Int
    , maxHistory : Int

    -- Clipboard
    , clipboard : Maybe ClipboardData
    , selection : Selection

    -- Drag state
    , isDragging : Bool
    , lastDragX : Maybe Int
    , lastDragY : Maybe Int

    -- UI state
    , toolbarPosition : ToolbarPosition
    , zoom : Float
    , panX : Float
    , panY : Float

    -- Data
    , colors : List Color
    , availableColors : List String

    -- Input fields
    , widthInput : String
    , heightInput : String
    }


{-| Initialize the model with default values.
-}
init : ( Model, Cmd msg )
init =
    let
        defaultWidth =
            32

        defaultHeight =
            32

        initialGrid =
            List.repeat (defaultWidth * defaultHeight) Nothing
    in
    ( { grid = initialGrid
      , gridWidth = defaultWidth
      , gridHeight = defaultHeight
      , selectedTool = Draw
      , selectedShape = Square
      , primaryColor = "#05131D"
      , secondaryColor = "#FFFFFF"
      , history = [ initialGrid ]
      , historyIndex = 0
      , maxHistory = 50
      , clipboard = Nothing
      , selection =
            { startX = 0
            , startY = 0
            , endX = 0
            , endY = 0
            , active = False
            , cells = Nothing
            }
      , isDragging = False
      , lastDragX = Nothing
      , lastDragY = Nothing
      , toolbarPosition = Left
      , zoom = 1.0
      , panX = 0
      , panY = 0
      , colors = []
      , availableColors = []
      , widthInput = String.fromInt defaultWidth
      , heightInput = String.fromInt defaultHeight
      }
    , Cmd.none
    )
