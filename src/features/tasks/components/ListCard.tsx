import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {getTasksForList , filterByTitle } from '../utils'
import type { List, Task } from '../types'
import { ScrollArea } from '@/components/ui/scroll-area'
import TaskCard from './TaskCard'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group'
import { useDispatch } from 'react-redux'
import { addTask } from '../store/taskSlice'
import { useState } from 'react'
import { Draggable, Droppable } from '@hello-pangea/dnd'
import { Plus } from 'lucide-react'
import { Button } from '@base-ui/react/button'
interface ListProps {
  list : List,
  tasks : Record<string,Task>,
  query : string
}

const ListCard = ({list, tasks ,query} : ListProps)=> {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [addMode,setAddMode] = useState(false)

  const filteredTasks = filterByTitle(getTasksForList(list,tasks), query) 

  function toggleAddMode(){
    setAddMode(!addMode)
  }

  function handleAddButton(){
    if(!title) return 
    dispatch(addTask({listId : list.id , taskTitle: title}))
    setTitle('')
  } 

  return (
    <Card className='w-75'>
      <CardHeader className='flex justify-between items-center'>
        {list.title}<Button onClick={toggleAddMode} className={`cursor-pointer ${addMode ? 'rotate-45': ''}`}><Plus size={15} /> </Button>
      </CardHeader>
      <CardContent>
        {addMode && <InputGroup className='my-2 py-4 px-2'>
          <InputGroupInput placeholder="example: do homework" onChange={(e)=>setTitle(e.target.value)}/>
          <InputGroupAddon align="inline-end">
            <InputGroupButton onClick={handleAddButton} variant="secondary">Add</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>}
        <Droppable droppableId={list.id} >
          {(provided) => <div ref={provided.innerRef} {...provided.droppableProps}>
                <ScrollArea className={'max-h-87'}>
                { filteredTasks.map(
                    (task, index)=><Draggable  index={index} key={task.id} draggableId={task.id}>
                            {(provided)=>(<TaskCard key={task.id} list={list} task={task} provided={provided}/>)}
                        </Draggable>)
                    }
                    {provided.placeholder}
              </ScrollArea>
            </div>}
        </Droppable>

      </CardContent>
    </Card>
  )
}

export default ListCard