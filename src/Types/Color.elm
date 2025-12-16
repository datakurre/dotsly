module Types.Color exposing
    ( Color
    , ColorHSL
    , emptyColor
    , colorToString
    )

{-| Color type definitions for the Dotsly application.


# Types

@docs Color, ColorHSL


# Helper Functions

@docs emptyColor, colorToString

-}


{-| A brick color definition.

  - id: Unique color identifier
  - name: Human-readable color name
  - rgb: RGB color as hex string (e.g., "#FF0000")
  - isTrans: Whether the color is transparent/translucent

-}
type alias Color =
    { id : Int
    , name : String
    , rgb : String
    , isTrans : Bool
    }


{-| A color with HSL values for palette organization.

  - h: Hue (0-360 degrees)
  - s: Saturation (0-1)
  - l: Lightness (0-1)

-}
type alias ColorHSL =
    { id : Int
    , name : String
    , rgb : String
    , isTrans : Bool
    , h : Float
    , s : Float
    , l : Float
    }


{-| Create a default/empty color (black).
-}
emptyColor : Color
emptyColor =
    { id = 0
    , name = "Black"
    , rgb = "#000000"
    , isTrans = False
    }


{-| Convert a Color to its RGB string representation.
-}
colorToString : Color -> String
colorToString color =
    color.rgb
