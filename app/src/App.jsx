import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Footer from "./components/footer"
import About from "./components/about"
import Root from "./components/root"
import Curriculum from "./components/curriculum"
import Projects from "./components/projects"
import Resume from "./components/resume"


function App() {
const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<About />} />
      <Route path="curriculum" element={<Curriculum/>} />
      <Route path="projects" element={<Projects />} />
      <Route path="resume" element={<Resume />} />
      
    </Route>
))

  return (
    <>
      <RouterProvider router={router}>
        <Footer />
      </RouterProvider>
    </>
  )
}

export default App
