module Types.Shape exposing
    ( ShapeType(..)
    , GridCell
    , Grid
    , Rotation(..)
    , emptyCell
    , rotationToDegrees
    , degreesToRotation
    )

{-| Shape type definitions for the Dotsly application.


# Types

@docs ShapeType, GridCell, Grid, Rotation


# Helper Functions

@docs emptyCell, rotationToDegrees, degreesToRotation

-}


{-| The different types of shapes that can be used in the grid.

  - Square: A solid square shape
  - Circle: A circle with a center dot (dual-color)
  - Quarter: A quarter circle with diagonal split (rotatable)
  - HalfCircle: A half circle with vertical/horizontal split (rotatable)

-}
type ShapeType
    = Square
    | Circle
    | Quarter
    | HalfCircle


{-| Rotation angles in degrees: 0, 90, 180, or 270.
-}
type Rotation
    = Rotate0
    | Rotate90
    | Rotate180
    | Rotate270


{-| A cell in the drawing grid.

  - shape: The type of shape in this cell
  - color: The color as a CSS color string (e.g., "#FF0000")
  - rotation: The rotation angle for shapes that support rotation

-}
type alias GridCell =
    { shape : ShapeType
    , color : String
    , rotation : Rotation
    }


{-| The grid is a list of cells, where Nothing represents an empty cell.
-}
type alias Grid =
    List (Maybe GridCell)


{-| Create an empty cell (Nothing).
-}
emptyCell : Maybe GridCell
emptyCell =
    Nothing


{-| Convert a Rotation to degrees as an integer.
-}
rotationToDegrees : Rotation -> Int
rotationToDegrees rotation =
    case rotation of
        Rotate0 ->
            0

        Rotate90 ->
            90

        Rotate180 ->
            180

        Rotate270 ->
            270


{-| Convert degrees to a Rotation, defaulting to Rotate0 if invalid.
-}
degreesToRotation : Int -> Rotation
degreesToRotation degrees =
    case degrees of
        0 ->
            Rotate0

        90 ->
            Rotate90

        180 ->
            Rotate180

        270 ->
            Rotate270

        _ ->
            Rotate0
