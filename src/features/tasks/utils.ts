import type { Board, List, Task } from "./types";
export function getListsForBoard(board : Board , allLists: List[]) : List[]  {
  
  return board.listIds.map((listId) => {
    const list = allLists.find((list) => list.id === listId)
    if(!list) throw new Error("Not found")
    return list
  })
}

export function getTasksForList(list : List , allTasks : Task[]) : Task[]{
  return list.taskIds.map((taskId)=> {
    const task = allTasks.find((task)=> taskId === task.id )
    if(!task) throw new Error("Not found")
    return task
  })
}

export function getBoardById(id : string, boards : Board[]): Board {
  const board = boards.find((board)=> board.id === id)
  if(!board) throw new Error("Not Found")
  return board
}
 