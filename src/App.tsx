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

type BlogCategory = {
  [x: string]: any;
  id: number;
  title: string;
  text_color: string;
  background_color: string;
};

type BlogData = {
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
};

function App() {
  const [darkLight, setDarkLight] = useState<boolean>(true);
  const [login, setLogin] = useState<boolean>(false);
  const [singUp, setSingUp] = useState<boolean>(false);
  const [findFont, setFindFont] = useState<string>("გრიგოლია");
  const [fontMenu, setFontMenu] = useState<boolean>(false);
  const [info, setInfo] = useState<BlogData[]>([]);

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
        "https://api.blog.redberryinternship.ge/api/blogs",
        {
          headers: {
            Authorization:
              "Bearer 55c33fd3f2a7d8debd873352bb2ff1470b56cc0ce898d878243645c8d8e6e0ac",
          },
        }
      );

      const data = await response.json();
      if (response.ok) {
        setInfo(data.data);
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
