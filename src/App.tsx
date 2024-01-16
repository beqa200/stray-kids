import { useState } from "react";
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
};
function App() {
  const [darkLight, setDarkLight] = useState<boolean>(true);
  const [login, setLogin] = useState<boolean>(false);
  return (
    <MyContext.Provider
      value={{
        darkLight,
        setDarkLight,
        login,
        setLogin,
      }}
    >
      {/* <ScrollToTop /> */}
      <Header />
      {login ? <Login /> : ""}
      {/* <SignUp /> */}

      <Footer />
    </MyContext.Provider>
  );
}

export default App;
