import type { RootState } from "@/app/store"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import ListCard from "@/features/tasks/components/ListCard"
import { getBoardById, getListsForBoard} from "@/features/tasks/utils"
import { useDispatch, useSelector } from "react-redux"
import {Navigate, useParams } from "react-router"
import {DragDropContext, type DropResult} from "@hello-pangea/dnd"
import { moveTask } from "@/features/tasks/store/taskSlice"



const BoardPage = () => {
  const {tasks,boards,lists} = useSelector((state : RootState) => state.tasks)
  const params = useParams()
  const dispatch = useDispatch()
  // Check For not valid endpoints...
  if(!params.boardId) return <Navigate to={'not-found'} />
  const board = getBoardById(params.boardId! , boards)
  const boardLists = getListsForBoard(board, lists)


 

  function handleDragEnd(result : DropResult){
    if(!result.destination) return

    dispatch(moveTask({
      taskId : result.draggableId,
      sourceListId : result.source.droppableId,
      destinationListId: result.destination.droppableId,
      destinationIndex: result.destination.index
    }))
  }
  
  return <DragDropContext onDragEnd={handleDragEnd}>
    <div className="w-[50%] m-auto">
      <Card className="">
        <CardHeader>
          {board.title}
        </CardHeader>
        <CardContent className="flex space-x-3 flex-wrap">
          {boardLists?.map((list) => <ListCard key={list.id} list={list} tasks={tasks} /> )}
        </CardContent>
      
      </Card>
    </div>
  </DragDropContext>
}

export default BoardPage
