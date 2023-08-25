import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./counter";
import SecondComp from "./second";
import StyleComp from "./components/styleComp";
import About from "./components/about";
import Navbar from "./components/navbar";
import ParentComp from "./components/parentComp";
import SinglePost from "./components/singlePost";
import BlogList from "./components/blogList";
import Portfolio from "./components/portfolio";

export default function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/Second" element={<SecondComp />} />
            <Route path="/third" element={<StyleComp />} />
            <Route path="/about" element={<About />} />
            <Route path="/props" element={<ParentComp />} />
            <Route path="/posts/:id" element={<SinglePost />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
