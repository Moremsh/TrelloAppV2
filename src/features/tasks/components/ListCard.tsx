import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { getTasksForList } from '../utils'
import { Item, ItemTitle } from '@/components/ui/item'
import { Separator } from '@base-ui/react/separator'
import type { List, Task } from '../types'
import { ScrollArea } from '@/components/ui/scroll-area'

interface ListProps {
  list : List,
  tasks : Task[]
}

const ListCard = ({list, tasks} : ListProps)=> {
  return (
    <Card className=''>
      <CardHeader>
        {list.title}
      </CardHeader>
      <CardContent>
        <ScrollArea>
          {getTasksForList(list,tasks).map((task)=> <div key={task.id}>
            <Item >
              <ItemTitle>{task.title}</ItemTitle>
            </Item>
            <Separator />
          </div>) 
          }
        </ScrollArea>

      </CardContent>
    </Card>
  )
}

export default ListCard