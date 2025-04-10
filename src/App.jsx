// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import BlogDetail from "./pages/BlogDetail";
import Footer from "./components/Footer";
import Blogs from "./pages/Blogs";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
