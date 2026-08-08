import {describe , it , expect} from 'vitest'
import { boards, lists, tasks } from './constants'
import { getListsForBoard, getTasksForList } from './utils'

describe('getListsForBoard',()=>{
  it('returns the lists for board in reference' ,()=>{
    const board = boards[1]
    const result = getListsForBoard(board, lists)

    expect(result).toEqual([{id : "2",taskIds : ["3"],title : "onGoing"},{id : "3",taskIds : ["2"],title : "finished"}])
  })

  it('throws when a referenced list does not exist' ,()=>{

    expect(()=> getListsForBoard(boards[1], [])).toThrow("Not found")
  })

})

describe('getTasksForList',()=>{
  it('returns tasks for list given .',()=>{
    const list = lists[0]
    const result = getTasksForList(list, tasks)
    expect(result).toEqual([{id : "1",title : "swim"}])
  })

  it('throws when no tasks found',()=>{
    expect(()=> getTasksForList(lists[0],[])).toThrow("Not found")
  })

})