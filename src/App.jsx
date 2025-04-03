// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import Services from "./pages/Services";
import Recommendations from "./pages/Recommendations";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="pt-30">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <BlogList />
              </>
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/recommendacoes" element={<Recommendations />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
