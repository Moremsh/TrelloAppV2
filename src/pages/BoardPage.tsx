import type { RootState } from "@/app/store"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import ListCard from "@/features/tasks/components/ListCard"
import { getBoardById, getListsForBoard} from "@/features/tasks/utils"
import { useDispatch, useSelector } from "react-redux"
import {Navigate, useParams, useSearchParams } from "react-router"
import {DragDropContext, type DropResult} from "@hello-pangea/dnd"
import { moveTask } from "@/features/tasks/store/taskSlice"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"



const BoardPage = () => {
  const {tasks,boards,lists} = useSelector((state : RootState) => state.tasks)
  const params = useParams()
  const [searchParams , setSearchParams] = useSearchParams()
  const query = searchParams.get('q') ?? ''
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
    <div className="w-full p-20 h-screen m-auto">
      <Card className="h-full">
        <CardHeader>
          <div className="flex justify-between mx-5">
            {board.title}
            <Field orientation="horizontal" className="w-[35%]">
              <Input type="search" placeholder="Search..." value={query} onChange={(e)=> setSearchParams({q : e.target.value})} />
          </Field>
          </div>
        </CardHeader>
        <CardContent className="flex space-x-3 flex-wrap">
          {boardLists?.map((list) => <ListCard  query={query} key={list.id} list={list} tasks={tasks} /> )}
        </CardContent>
      
      </Card>
    </div>
  </DragDropContext>
}

export default BoardPage
