import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddBlog from "./pages/AddBlog";
import SingleBlog from "./pages/SingleBlog";
import ErrorPage from "./pages/ErrorPage";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { MyContext } from "./context";
import ScrollToTop from "./utils/ScrollOnTop";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";

export type MyContextProps = {
  darkLight: boolean;
  setDarkLight: (value: boolean) => void;
  login: boolean;
  setLogin: (value: boolean) => void;
  findFont: string;
  setFindFont: (value: string) => void;
  fontMenu: boolean;
  setFontMenu: (value: boolean) => void;
  singUp: boolean;
  setSingUp: (value: boolean) => void;
};

function App() {
  const [darkLight, setDarkLight] = useState<boolean>(true);
  const [login, setLogin] = useState<boolean>(false);
  const [singUp, setSingUp] = useState<boolean>(false);
  const [findFont, setFindFont] = useState<string>("გრიგოლია");
  const [fontMenu, setFontMenu] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.fontFamily = findFont;
  }, [findFont]);

  useEffect(() => {
    const body = document.body;
    if (darkLight) {
      body.style.background = "#F3F2FA";
    } else {
      body.style.background = "#0e101cf8";
    }
  }, [darkLight]);

  useEffect(() => {
    document.body.style.overflow = login || singUp ? "hidden" : "auto";
  }, [login, singUp]);
  return (
    <MyContext.Provider
      value={{
        darkLight,
        setDarkLight,
        login,
        setLogin,
        findFont,
        setFindFont,
        fontMenu,
        setFontMenu,
        singUp,
        setSingUp,
      }}
    >
      <ScrollToTop />
      <Header />
      {login ? <Login /> : ""}
      {singUp ? <SignUp /> : ""}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<SingleBlog />} />
        <Route path="/addBlog" element={<AddBlog />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </MyContext.Provider>
  );
}

export default App;
