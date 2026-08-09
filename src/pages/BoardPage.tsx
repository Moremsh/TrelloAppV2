import { Card, CardContent, CardHeader } from "@/components/ui/card"
import ListCard from "@/features/tasks/components/ListCard"
import { boards, lists, tasks} from "@/features/tasks/constants"
import { getBoardById, getListsForBoard, getTasksForList} from "@/features/tasks/utils"
import {Navigate, useParams } from "react-router"



const BoardPage = () => {
  const params = useParams()
  if(!params.boardId) return <Navigate to={'not-found'} />
  const board = getBoardById(params.boardId! , boards)
  const boardLists = getListsForBoard(board, lists)
  return <Card className="w-full max-w-sm">
    <CardHeader>
      {board.title}
    </CardHeader>
    <CardContent className="flex space-x-2 justify-center items-center">
       {boardLists?.map((list) => <ListCard key={list.id} list={list} tasks={getTasksForList(list,tasks)}/> )}
    </CardContent>
     
  </Card>
}

export default BoardPage
