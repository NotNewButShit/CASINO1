import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Casinos from "./components/Casinos";
import Bonuses from "./components/Bonuses";
import Reviews from "./components/Reviews";
import About from "./components/About";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/casinos" element={<Casinos />} />
          <Route path="/bonuses" element={<Bonuses />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/about" element={<About />} />
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
