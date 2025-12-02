import { HashRouter, Route, Routes } from "react-router-dom"
import AppStarter from "./pages/AppStarter"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import PageNotFound from "./pages/PageNotFound"
import Certificates from "./pages/Certificates"

function App() {
  return (

    <HashRouter>
      <Routes>
        <Route path="/" element={<AppStarter />}>
          <Route path="" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="Certificates" element={<Certificates />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
export default App;