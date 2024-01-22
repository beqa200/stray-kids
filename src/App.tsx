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
import AddBlogHeader from "./components/AddBlog/AddBlogHeader";

type BlogCategory = {
  [x: string]: any;
  id: number;
  title: string;
  text_color: string;
  background_color: string;
};

type BlogData = {
  [x: string]: any;
  id: number;
  author: string;
  categories: BlogCategory;
  description: string;
  image: string;
  publish_date: string;
  title: string;
};

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
  getApi: () => void;
  info: BlogData[] | [];
  setInfo: (value: BlogData[]) => void;
  loginEmail: boolean;
  setLoginEmail: (loginEmail: boolean) => void;
};

function App() {
  const [darkLight, setDarkLight] = useState<boolean>(() => {
    const savedDarkLight = localStorage.getItem("darkLight");
    return savedDarkLight ? JSON.parse(savedDarkLight) : true;
  });
  const [login, setLogin] = useState<boolean>(false);
  const [singUp, setSingUp] = useState<boolean>(false);
  const [findFont, setFindFont] = useState<string>("ფონტები");
  const [fontMenu, setFontMenu] = useState<boolean>(false);
  const [info, setInfo] = useState<BlogData[]>([]);

  const [loginEmail, setLoginEmail] = useState<boolean>(true);

  useEffect(() => {
    localStorage.setItem("darkLight", JSON.stringify(darkLight));
  }, [darkLight]);

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

  const getApi = async () => {
    try {
      const response = await fetch(
        "https://tsereteli.pythonanywhere.com/blogs/",
        {
          headers: {
            Authorization: "Token 5ff3a2857f04d55a45d896731934ee626f0053ac",
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setInfo(data);
      } else {
        setInfo([]);
      }
    } catch (err) {
      console.log("error");
    }
  };
  useEffect(() => {
    getApi();
  }, []);

  console.log(info);

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
        getApi,
        info,
        setInfo,

        loginEmail,
        setLoginEmail,
      }}
    >
      <>
        <ScrollToTop />
        {/* <Header /> */}
        {login ? <Login /> : ""}
        {singUp ? <SignUp /> : ""}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <HomePage />
                <Footer />
              </>
            }
          />
          <Route
            path="/:id"
            element={
              <>
                <Header />
                <SingleBlog />
                <Footer />
              </>
            }
          />
          <Route
            path="/AddBlog"
            element={
              <>
                <AddBlogHeader />
                <AddBlog />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Header />
                <ErrorPage />
                <Footer />
              </>
            }
          />
        </Routes>
        {/* <Footer /> */}
      </>
    </MyContext.Provider>
  );
}

export default App;
