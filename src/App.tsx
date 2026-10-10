import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import SolutionPage from "./pages/SolutionPage";
import NotFoundPage from "./pages/NotFoundPage";
import { solutions } from "./data/solutions";

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />

        {solutions.map((solution) => (
          <Route
            key={solution.id}
            path={solution.path}
            // key: cada solución monta su propia página (y su formulario)
            element={<SolutionPage key={solution.id} solution={solution} />}
          />
        ))}

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
