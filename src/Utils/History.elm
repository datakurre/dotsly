module Utils.History exposing
    ( History
    , init
    , addState
    , undo
    , redo
    , canUndo
    , canRedo
    , getCurrentState
    , clear
    )

{-| Undo/redo history management for the application.


# Types

@docs History


# Functions

@docs init, addState, undo, redo, canUndo, canRedo, getCurrentState, clear

-}

import Types.Shape exposing (Grid)


{-| History state for undo/redo functionality.

  - past: List of past states (most recent first)
  - present: Current state
  - future: List of future states for redo (most recent first)
  - maxSize: Maximum number of history states to keep

-}
type alias History =
    { past : List Grid
    , present : Grid
    , future : List Grid
    , maxSize : Int
    }


{-| Initialize a history with an initial grid state.
-}
init : Grid -> History
init initialGrid =
    { past = []
    , present = initialGrid
    , future = []
    , maxSize = 50
    }


{-| Add a new state to the history, clearing any future states.
-}
addState : Grid -> History -> History
addState newGrid history =
    let
        newPast =
            List.take (history.maxSize - 1) (history.present :: history.past)
    in
    { history
        | past = newPast
        , present = newGrid
        , future = []
    }


{-| Undo to the previous state if available.
Returns Nothing if there's no previous state.
-}
undo : History -> Maybe ( Grid, History )
undo history =
    case history.past of
        [] ->
            Nothing

        previousState :: restOfPast ->
            Just
                ( previousState
                , { history
                    | past = restOfPast
                    , present = previousState
                    , future = history.present :: history.future
                  }
                )


{-| Redo to the next state if available.
Returns Nothing if there's no next state.
-}
redo : History -> Maybe ( Grid, History )
redo history =
    case history.future of
        [] ->
            Nothing

        nextState :: restOfFuture ->
            Just
                ( nextState
                , { history
                    | past = history.present :: history.past
                    , present = nextState
                    , future = restOfFuture
                  }
                )


{-| Check if undo is possible.
-}
canUndo : History -> Bool
canUndo history =
    not (List.isEmpty history.past)


{-| Check if redo is possible.
-}
canRedo : History -> Bool
canRedo history =
    not (List.isEmpty history.future)


{-| Get the current state.
-}
getCurrentState : History -> Grid
getCurrentState history =
    history.present


{-| Clear all history.
-}
clear : Grid -> History
clear currentGrid =
    init currentGrid
