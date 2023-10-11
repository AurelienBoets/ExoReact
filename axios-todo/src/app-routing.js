import { createBrowserRouter } from "react-router-dom";
import TaskList from "./components/TaskList";
import Form from "./components/Form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TaskList />,
  },
  {
    path: "/form",
    element: <Form />,
  },
]);

export default router;
