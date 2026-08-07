import {createBrowserRouter} from "react-router"
import RootLayout from "./RootLayout"
import BoardPicker from "@/pages/BoardPicker"
import BoardPage from "@/pages/BoardPage"

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children:[
      {index:true , element: <BoardPicker/>},
      {path: "boards/:boardId", element: <BoardPage />}
    ],
  }
])