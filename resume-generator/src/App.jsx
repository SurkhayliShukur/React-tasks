import Home from "./layout/Home"
import BuildResume from "./layout/BuildResume"
import { Routes, Route } from "react-router-dom"
import { ROUTER } from "./constant/router"
import "react-datepicker/dist/react-datepicker.css";



function App() {

  return (
    <>
      <Routes>
        <Route path={ROUTER.Home} element={<Home />} />
        <Route path={ROUTER.Build} element={<BuildResume />} />
      </Routes>
    </>
  )
}

export default App
