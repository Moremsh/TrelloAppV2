import type { RootState } from "@/app/store"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import ListCard from "@/features/tasks/components/ListCard"
import { getBoardById, getListsForBoard} from "@/features/tasks/utils"
import { useSelector } from "react-redux"
import {Navigate, useParams } from "react-router"



const BoardPage = () => {
  const {tasks,boards,lists} = useSelector((state : RootState) => state.tasks)
  const params = useParams()
  if(!params.boardId) return <Navigate to={'not-found'} />
  const board = getBoardById(params.boardId! , boards)
  const boardLists = getListsForBoard(board, lists)
  return <div className="w-[50%] m-auto">
      <Card className="">
        <CardHeader>
          {board.title}
        </CardHeader>
        <CardContent className="flex space-x-3 flex-wrap">
          {boardLists?.map((list) => <ListCard key={list.id} list={list} tasks={tasks} /> )}
        </CardContent>
      
      </Card>
    </div>
}

export default BoardPage
