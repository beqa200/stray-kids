import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddBlog from "./pages/AddBlog";
import SingleBlog from "./pages/SingleBlog";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<SingleBlog />} />
        <Route path="/addBlog" element={<AddBlog />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
