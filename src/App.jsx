import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RecipeDetail from "./pages/RecipeDetail";
import Image3 from './assets/img/image3.png'

const App = () => {
  return (
    <div
      className="w-full h-full text-white bg-black bg-no-repeat bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${Image3})`,
      }}
    >
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/recipeDetail/:recipeId" element={<RecipeDetail />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
