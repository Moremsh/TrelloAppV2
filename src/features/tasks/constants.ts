import type { Board, List, Task } from "./types";

export const boards : Record<string, Board> = 
  {
    '123': {id : "123",listIds : ["1"],title : "First"} ,
    "222" : {id: "222",listIds: ["2" , "3"],title: "Second"}
  }

export const lists : Record<string, List> = 
  {
    "1" : {id : "1",taskIds : ["1"],title : "To-DO List"},
    '2' : {id : "2",taskIds : ["3"],title : "onGoing"},
    '3' : {id : "3",taskIds : ["2"],title : "finished"}
  }

    


export const tasks : Record<string, Task> ={
  '1': {id : "1", title : "swim"},
  '2': {id : "2",title : "warm Up"},
  '3':  {id : "3",title : "study"}
}
  
  
 
