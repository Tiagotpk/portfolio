import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home";
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <Error/>
  }
])

export default router
