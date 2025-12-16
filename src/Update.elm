module Update exposing (update)

{-| Update logic for The Elm Architecture.

@docs update

-}

import Data.Design
import File exposing (File)
import Json.Decode as Decode
import Model exposing (ClipboardData, Model, Selection)
import Msg exposing (Msg(..))
import Task
import Types.Shape exposing (Grid, GridCell, Rotation(..), ShapeType)
import Types.Tool exposing (ToolType(..))
import Utils.Clipboard as Clipboard
import Utils.Fill as Fill
import Utils.History as History


{-| Get cell at a specific grid position.
-}
getCell : Int -> Int -> Model -> Maybe GridCell
getCell x y model =
    let
        index =
            y * model.gridWidth + x
    in
    if index >= 0 && index < List.length model.grid then
        case List.drop index model.grid |> List.head of
            Just cell ->
                cell

            Nothing ->
                Nothing

    else
        Nothing


{-| Set cell at a specific grid position and add to history.
-}
setCell : Int -> Int -> Maybe GridCell -> Model -> Model
setCell x y cell model =
    let
        index =
            y * model.gridWidth + x

        newGrid =
            List.indexedMap
                (\i oldCell ->
                    if i == index then
                        cell

                    else
                        oldCell
                )
                model.grid

        history =
            History.init model.grid
                |> History.addState newGrid
    in
    { model | grid = newGrid }


{-| Create a GridCell from current tool state.
-}
createCell : Model -> GridCell
createCell model =
    { shape = model.selectedShape
    , color = model.primaryColor
    , rotation = Rotate0
    }


{-| Main update function.
-}
update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

        -- Tool Selection
        SelectTool tool ->
            ( { model
                | selectedTool = tool
                , selection = { startX = 0, startY = 0, endX = 0, endY = 0, active = False, cells = Nothing }
              }
            , Cmd.none
            )

        SelectShape shape ->
            ( { model | selectedShape = shape }, Cmd.none )

        SelectPrimaryColor color ->
            ( { model | primaryColor = color }, Cmd.none )

        SelectSecondaryColor color ->
            ( { model | secondaryColor = color }, Cmd.none )

        -- Grid Interactions
        GridClick x y ->
            case model.selectedTool of
                Draw ->
                    ( setCell x y (Just (createCell model)) model, Cmd.none )

                Fill ->
                    let
                        newGrid =
                            Fill.floodFill x y model.gridWidth model.gridHeight (Just (createCell model)) model.grid
                    in
                    ( { model | grid = newGrid }, Cmd.none )

                ColorPicker ->
                    case getCell x y model of
                        Just cell ->
                            ( { model | primaryColor = cell.color }, Cmd.none )

                        Nothing ->
                            ( model, Cmd.none )

                Select ->
                    ( { model
                        | selection =
                            { startX = x
                            , startY = y
                            , endX = x
                            , endY = y
                            , active = True
                            , cells = Nothing
                            }
                      }
                    , Cmd.none
                    )

        GridDragStart x y ->
            ( { model | isDragging = True, lastDragX = Just x, lastDragY = Just y }
            , Cmd.none
            )

        GridDrag x y ->
            if model.isDragging then
                case model.selectedTool of
                    Draw ->
                        if model.lastDragX /= Just x || model.lastDragY /= Just y then
                            ( setCell x y (Just (createCell model)) { model | lastDragX = Just x, lastDragY = Just y }
                            , Cmd.none
                            )

                        else
                            ( model, Cmd.none )

                    Select ->
                        let
                            oldSelection =
                                model.selection

                            newSelection =
                                { oldSelection | endX = x, endY = y }
                        in
                        ( { model | selection = newSelection }, Cmd.none )

                    _ ->
                        ( model, Cmd.none )

            else
                ( model, Cmd.none )

        GridDragEnd ->
            ( { model | isDragging = False, lastDragX = Nothing, lastDragY = Nothing }
            , Cmd.none
            )

        -- History
        Undo ->
            -- TODO: Implement with History module
            ( model, Cmd.none )

        Redo ->
            -- TODO: Implement with History module
            ( model, Cmd.none )

        -- Clipboard
        Copy ->
            if model.selection.active then
                let
                    clipboardData =
                        Clipboard.copy model.grid model.selection model.gridWidth
                in
                ( { model | clipboard = Just clipboardData }, Cmd.none )

            else
                ( model, Cmd.none )

        Cut ->
            if model.selection.active then
                let
                    ( clipboardData, newGrid ) =
                        Clipboard.cut model.grid model.selection model.gridWidth
                in
                ( { model | clipboard = Just clipboardData, grid = newGrid }, Cmd.none )

            else
                ( model, Cmd.none )

        Paste ->
            case model.clipboard of
                Just clipboardData ->
                    let
                        -- Paste at selection start or at (0,0)
                        ( x, y ) =
                            if model.selection.active then
                                ( model.selection.startX, model.selection.startY )

                            else
                                ( 0, 0 )

                        newGrid =
                            Clipboard.paste model.grid clipboardData x y model.gridWidth model.gridHeight
                    in
                    ( { model | grid = newGrid }, Cmd.none )

                Nothing ->
                    ( model, Cmd.none )

        ClearSelection ->
            let
                newGrid =
                    if model.selection.active then
                        Clipboard.deleteSelection model.grid model.selection model.gridWidth

                    else
                        model.grid

                clearedSelection =
                    { startX = 0, startY = 0, endX = 0, endY = 0, active = False, cells = Nothing }
            in
            ( { model | selection = clearedSelection, grid = newGrid }, Cmd.none )

        -- Selection Tool
        SelectionStart x y ->
            ( { model
                | selection =
                    { startX = x
                    , startY = y
                    , endX = x
                    , endY = y
                    , active = True
                    , cells = Nothing
                    }
              }
            , Cmd.none
            )

        SelectionDrag x y ->
            let
                oldSelection =
                    model.selection

                newSelection =
                    { oldSelection | endX = x, endY = y }
            in
            ( { model | selection = newSelection }, Cmd.none )

        SelectionEnd ->
            ( model, Cmd.none )

        -- Image Upload
        ImageSelected file ->
            -- TODO: Implement image processing
            ( model, Cmd.none )

        ImageLoaded imageData ->
            -- TODO: Implement image processing
            ( model, Cmd.none )

        ImageProcessed cells ->
            ( { model | grid = cells }, Cmd.none )

        -- Grid Size
        SetGridWidth width ->
            ( { model | widthInput = width }, Cmd.none )

        SetGridHeight height ->
            ( { model | heightInput = height }, Cmd.none )

        ResizeGrid ->
            case ( String.toInt model.widthInput, String.toInt model.heightInput ) of
                ( Just width, Just height ) ->
                    if width > 0 && height > 0 && width <= 256 && height <= 256 then
                        let
                            newGrid =
                                List.repeat (width * height) Nothing
                        in
                        ( { model
                            | gridWidth = width
                            , gridHeight = height
                            , grid = newGrid
                          }
                        , Cmd.none
                        )

                    else
                        ( model, Cmd.none )

                _ ->
                    ( model, Cmd.none )

        -- File Operations
        SaveDesign ->
            ( model, Data.Design.saveDesign model )

        LoadDesign file ->
            ( model
            , Task.perform DesignLoaded (File.toString file)
            )

        DesignLoaded jsonString ->
            case Decode.decodeString Data.Design.decodeDesign jsonString of
                Ok ( width, height, grid ) ->
                    ( { model
                        | gridWidth = width
                        , gridHeight = height
                        , grid = grid
                        , widthInput = String.fromInt width
                        , heightInput = String.fromInt height
                      }
                    , Cmd.none
                    )

                Err _ ->
                    ( model, Cmd.none )

        -- UI
        ToggleToolbar ->
            let
                newPosition =
                    case model.toolbarPosition of
                        Model.Left ->
                            Model.Top

                        Model.Top ->
                            Model.Left
            in
            ( { model | toolbarPosition = newPosition }, Cmd.none )

        SetZoom zoom ->
            ( { model | zoom = max 0.1 (min 5.0 zoom) }, Cmd.none )

        Pan dx dy ->
            ( { model | panX = model.panX + dx, panY = model.panY + dy }, Cmd.none )

        -- Data Loading
        ColorsLoaded result ->
            case result of
                Ok colors ->
                    let
                        availableColors =
                            List.map .rgb colors
                    in
                    ( { model | colors = colors, availableColors = availableColors }, Cmd.none )

                Err _ ->
                    ( model, Cmd.none )
