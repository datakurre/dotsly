module Utils.Fill exposing (floodFill)

{-| Flood fill algorithm for contiguous areas.


# Functions

@docs floodFill

-}

import Set exposing (Set)
import Types.Shape exposing (Grid, GridCell)


{-| Get cell at a specific grid position.
-}
getCell : Int -> Int -> Int -> Grid -> Maybe GridCell
getCell x y gridWidth grid =
    let
        index =
            y * gridWidth + x
    in
    if index >= 0 && index < List.length grid then
        case List.drop index grid |> List.head of
            Just cell ->
                cell

            Nothing ->
                Nothing

    else
        Nothing


{-| Set cell at a specific grid position.
-}
setCell : Int -> Int -> Int -> Maybe GridCell -> Grid -> Grid
setCell x y gridWidth cell grid =
    let
        index =
            y * gridWidth + x
    in
    List.indexedMap
        (\i oldCell ->
            if i == index then
                cell

            else
                oldCell
        )
        grid


{-| Check if two cells match for flood fill purposes.
Cells match if both are Nothing, or if both have the same color and shape.
-}
cellsMatch : Maybe GridCell -> Maybe GridCell -> Bool
cellsMatch cell1 cell2 =
    case ( cell1, cell2 ) of
        ( Nothing, Nothing ) ->
            True

        ( Just c1, Just c2 ) ->
            c1.color == c2.color && c1.shape == c2.shape

        _ ->
            False


{-| Flood fill starting from (x, y) with the given cell.
-}
floodFill : Int -> Int -> Int -> Int -> Maybe GridCell -> Grid -> Grid
floodFill startX startY gridWidth gridHeight newCell grid =
    let
        targetCell =
            getCell startX startY gridWidth grid

        -- Don't fill if trying to fill with the same color/shape
        shouldFill =
            not (cellsMatch targetCell newCell)
    in
    if shouldFill then
        floodFillHelper startX startY gridWidth gridHeight targetCell newCell grid Set.empty

    else
        grid


{-| Helper function for flood fill using a visited set.
-}
floodFillHelper : Int -> Int -> Int -> Int -> Maybe GridCell -> Maybe GridCell -> Grid -> Set ( Int, Int ) -> Grid
floodFillHelper x y gridWidth gridHeight targetCell newCell grid visited =
    let
        posKey =
            ( x, y )
    in
    if
        x < 0
            || x >= gridWidth
            || y < 0
            || y >= gridHeight
            || Set.member posKey visited
    then
        grid

    else
        let
            currentCell =
                getCell x y gridWidth grid
        in
        if cellsMatch currentCell targetCell then
            let
                newGrid =
                    setCell x y gridWidth newCell grid

                newVisited =
                    Set.insert posKey visited

                -- Recursively fill in all 4 directions
                grid1 =
                    floodFillHelper (x + 1) y gridWidth gridHeight targetCell newCell newGrid newVisited

                grid2 =
                    floodFillHelper (x - 1) y gridWidth gridHeight targetCell newCell grid1 newVisited

                grid3 =
                    floodFillHelper x (y + 1) gridWidth gridHeight targetCell newCell grid2 newVisited

                grid4 =
                    floodFillHelper x (y - 1) gridWidth gridHeight targetCell newCell grid3 newVisited
            in
            grid4

        else
            grid
