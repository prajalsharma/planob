import Header from "./components/Header";
import Hero from "./components/Hero";
import { Routes, Route } from "react-router-dom";
import Recommendations from "./pages/Recommendations";
import Services from "./pages/Services";

const App = () => {
  return (
    <>
      <Header />
      <main className="pt-30">

        <Routes>
          {/* Home page: Renders Hero */}
        <Route path="/" element={<Hero />} />

         {/* New pages */}
          <Route path="/recommendacoes" element={<Recommendations />} />
          <Route path="/servicos" element={<Services />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
