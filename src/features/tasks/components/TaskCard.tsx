import { Item, ItemActions, ItemTitle } from '@/components/ui/item'
import { Separator } from '@base-ui/react/separator'
import type { List, Task } from '../types'
import { Button } from '@/components/ui/button'
import { useDispatch } from 'react-redux'
import { deleteTask, editTask } from '../store/taskSlice'
import { useState } from 'react'
import {Pencil} from "lucide-react"
import { Input } from '@/components/ui/input'
interface TaskProps {
  task : Task
  list : List
}

const TaskCard = ({task , list} : TaskProps) => {
  const [isEditting,setEditting] = useState(false)
  const [editValue, setEditValue] = useState(task.title)
  const dispatch = useDispatch()
  function handleDeleteTask(){
    dispatch(deleteTask({listId : list.id , taskId : task.id}))
  }
  function handleEditTask(){
    if(!editValue) return 
    dispatch(editTask({taskId: task.id , taskTitle: editValue}))
    setEditting(!isEditting)
  } 
  return (
    <div key={task.id} className='w-full my-2 '>
      <Item className='flex justify-between flex-nowrap' variant={'outline'}>
        { isEditting ? <Input defaultValue={editValue} onChange={(e)=> setEditValue(e.target.value)} onSubmit={(e)=>handleEditTask()} />: <ItemTitle>{task.title}</ItemTitle> }
        <ItemActions>
          { isEditting ? <Button className={``} variant="outline" size="sm" onClick={handleEditTask}>Save</Button>
            : <div className='flex gap-x-1'>
              <Button className={``} variant="destructive" size="sm" onClick={handleDeleteTask}>
              Delete
            </Button>
            <Button  variant="outline" size="icon-sm" onClick={()=> setEditting(!isEditting)}> <Pencil/> </Button>
              </div>
            }
        </ItemActions>
      </Item>
      <Separator />
    </div>
  )
}

export default TaskCard
