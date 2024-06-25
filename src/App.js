import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Home"
import About from "./About"
import Stories from "./Stories"
import Experience from "./Experience"
import Store from "./Store"

const App = () => {
  return (
  <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="stories" element={<Stories/>}/>
        <Route path="experience" element={<Experience/>}/>
        <Route path="store" element={<Store/>}/>
      </Route>
      
    </Routes>
    </BrowserRouter>
  </>
  )
}

export default App