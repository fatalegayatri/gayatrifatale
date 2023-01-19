import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Nabar from "./component/Nabar";
import Skills from "./component/Skills";
import Work from "./component/Work";
function App() {
  return (
    <div className=" ">
      <Nabar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
