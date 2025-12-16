module Utils.Clipboard exposing
    ( copy
    , cut
    , paste
    , deleteSelection
    )

{-| Clipboard operations for copy/cut/paste functionality.


# Functions

@docs copy, cut, paste, deleteSelection

-}

import Model exposing (ClipboardData, Selection)
import Types.Shape exposing (Grid, GridCell)


{-| Normalize selection coordinates to ensure start is before end.
-}
normalizeSelection : Selection -> { startX : Int, startY : Int, endX : Int, endY : Int }
normalizeSelection selection =
    { startX = min selection.startX selection.endX
    , startY = min selection.startY selection.endY
    , endX = max selection.startX selection.endX
    , endY = max selection.startY selection.endY
    }


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


{-| Copy selected cells to clipboard data.
-}
copy : Grid -> Selection -> Int -> ClipboardData
copy grid selection gridWidth =
    let
        normalized =
            normalizeSelection selection

        width =
            normalized.endX - normalized.startX + 1

        height =
            normalized.endY - normalized.startY + 1

        cells =
            List.range normalized.startY normalized.endY
                |> List.concatMap
                    (\y ->
                        List.range normalized.startX normalized.endX
                            |> List.map (\x -> getCell x y gridWidth grid)
                    )
    in
    { cells = cells
    , width = width
    , height = height
    }


{-| Cut selected cells (copy and then delete).
-}
cut : Grid -> Selection -> Int -> ( ClipboardData, Grid )
cut grid selection gridWidth =
    let
        clipboardData =
            copy grid selection gridWidth

        newGrid =
            deleteSelection grid selection gridWidth
    in
    ( clipboardData, newGrid )


{-| Paste clipboard data at a specific position.
-}
paste : Grid -> ClipboardData -> Int -> Int -> Int -> Int -> Grid
paste grid clipboardData x y gridWidth gridHeight =
    let
        pasteCell dy dx cell currentGrid =
            let
                targetX =
                    x + dx

                targetY =
                    y + dy
            in
            if targetX >= 0 && targetX < gridWidth && targetY >= 0 && targetY < gridHeight then
                setCell targetX targetY gridWidth cell currentGrid

            else
                currentGrid

        pasteRow dy cells currentGrid =
            List.indexedMap (\dx cell -> ( dx, cell )) cells
                |> List.foldl (\( dx, cell ) accGrid -> pasteCell dy dx cell accGrid) currentGrid

        cellRows =
            List.range 0 (clipboardData.height - 1)
                |> List.map
                    (\dy ->
                        let
                            startIdx =
                                dy * clipboardData.width

                            endIdx =
                                startIdx + clipboardData.width
                        in
                        clipboardData.cells
                            |> List.drop startIdx
                            |> List.take clipboardData.width
                    )
    in
    List.indexedMap (\dy cells -> ( dy, cells )) cellRows
        |> List.foldl (\( dy, cells ) accGrid -> pasteRow dy cells accGrid) grid


{-| Delete all cells in the selection.
-}
deleteSelection : Grid -> Selection -> Int -> Grid
deleteSelection grid selection gridWidth =
    let
        normalized =
            normalizeSelection selection

        shouldDelete x y =
            x >= normalized.startX && x <= normalized.endX && y >= normalized.startY && y <= normalized.endY

        deleteIfInSelection index cell =
            let
                x =
                    modBy gridWidth index

                y =
                    index // gridWidth
            in
            if shouldDelete x y then
                Nothing

            else
                cell
    in
    List.indexedMap deleteIfInSelection grid
