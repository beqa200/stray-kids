import { useState } from "react";
import Header from "./components/Header";
import { MyContext } from "./context";
import ScrollToTop from "./utils/ScrollOnTop";
import Login from "./components/Login";
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
    </MyContext.Provider>
  );
}

export default App;
