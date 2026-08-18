import type { RootState } from '@/app/store'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { FolderKanban } from 'lucide-react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router'

const Content = () => {
  const boards = useSelector((state : RootState) => state.tasks.boards)
  const params = useParams()
  return (
    <SidebarMenu>
      {Object.values(boards).map((board)=>
        (<SidebarMenuItem key={board.id}>
          <SidebarMenuButton isActive={board.id === params.boardId} render={<Link to={`/boards/${board.id}`} />}>
            <FolderKanban />
            {board.title}
          </SidebarMenuButton>
        </SidebarMenuItem>))}
    </SidebarMenu>
  )
}

export default Content
