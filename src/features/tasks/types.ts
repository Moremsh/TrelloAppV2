export interface Board {
  id: string,
  title: string,
  listIds: string[],
}

export interface Task {
  id: string,
  title: string,
}


export interface List {
  id: string,
  title: string,
  taskIds: string[],
}
