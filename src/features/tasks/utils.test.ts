import {describe , it , expect} from 'vitest'
import { boards, lists, tasks } from './constants'
import { filterByTitle, getBoardById, getListsForBoard, getTasksForList } from './utils'

describe('getListsForBoard',()=>{
  it('returns the lists for board in reference' ,()=>{
    const board = boards['222']
    const result = getListsForBoard(board, lists)

    expect(result).toEqual([{id : "2",taskIds : ["3"],title : "onGoing"},{id : "3",taskIds : ["2"],title : "finished"}])
  })

  it('throws when a referenced list does not exist' ,()=>{

    expect(()=> getListsForBoard(boards['222'], {})).toThrow("Not found")
  })

})

describe('getTasksForList',()=>{
  it('returns tasks for list given .',()=>{
    const list = lists['1']
    const result = getTasksForList(list, tasks)
    expect(result).toEqual([{id : "1",title : "swim"}])
  })

  it('throws when no tasks found',()=>{
    expect(()=> getTasksForList(lists['1'],{})).toThrow("Not found")
  })

})


describe('return board by id',()=>{
  it('returns the board for given id .',()=>{
    const board = getBoardById('123',boards)
    expect(board).toEqual({id : "123",listIds : ["1"], title : "First"})
  })

  it('Throws when no board found',()=>{
    expect(()=>{getBoardById('11111',boards)}).toThrow("Not Found")
  })
})

describe('return filtered tasks by title ',()=>{
  it('returns the task in each list for given title',()=>{
    const allTasks = getTasksForList(lists['2'],tasks)
    expect(filterByTitle(allTasks,'stu')).toEqual([{id : "3",title : "study"}])
  })

  it('returns Not Found if no matches',()=>{
    const allTasks = getTasksForList(lists['2'],tasks)
    expect(()=> filterByTitle(allTasks,'')).toThrow("Not Found")
  })

})



