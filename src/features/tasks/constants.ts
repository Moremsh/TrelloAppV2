import type { Board, List, Task } from "./types";

export const boards : Board[] = [
  {
    id : "123",
    listIds : ["1"],
    title : "First"
  } ,
  {
    id: "222",
    listIds: ["2" , "3"],
    title: "Second"
  }
]

export const lists : List[] = [
  {
    id : "1",
    taskIds : ["1"],
    title : "To-DO List"
  },
    {
    id : "2",
    taskIds : ["3"],
    title : "onGoing"
  },
    {
    id : "3",
    taskIds : ["2"],
    title : "finished"
  }
]

export const tasks : Task[] = [
  {
    id : "1",
    title : "swim"
  },
  {
    id : "2",
    title : "warm Up"
  },
  {
    id : "3",
    title : "study"
  }
]