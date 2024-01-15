import Header from "./components/Header";
import { MyContext } from "./context";
import ScrollToTop from "./utils/ScrollOnTop";
export type MyContextProps = {};
function App() {
  return (
    <MyContext.Provider value={{}}>
      <ScrollToTop />
      <Header />
    </MyContext.Provider>
  );
}

export default App;
