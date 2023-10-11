import { createBrowserRouter } from "react-router-dom";
import TaskList from "./components/TaskList";
import Form from "./components/Form";
import Task from "./components/Task";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TaskList />,
  },
  {
    path: "/form",
    element: <Form />,
  },
  {
    path: "/task/:id",
    element: <Task />,
  },
]);

export default router;
