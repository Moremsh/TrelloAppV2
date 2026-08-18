import type { Board, List, Task } from "./types";
export function getListsForBoard(board : Board , allLists: Record<string,List>) : List[]  {
  
  return board.listIds.map((listId) => {
    const list = allLists[listId]
    if(!list) throw new Error("Not found")
    return list
  })
}

export function getTasksForList(list : List , allTasks : Record<string,Task>) : Task[]{
  return list.taskIds.map((taskId)=> {
    const task = allTasks[taskId]
    if(!task) throw new Error("Not found")
    return task
  })
}

export function getBoardById(id : string, boards : Record<string,Board>): Board {
  const board = boards[id]
  if(!board) throw new Error("Not Found")
  return board
}
 
export function filterByTitle(items: Task[] , query: string){
  if (!query) return items
  return items.filter((item) => item.title.toLowerCase().includes(query.toLowerCase())
  )
}