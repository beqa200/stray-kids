import Header from "./components/Header";
import { MyContext } from "./context";

export type MyContextProps = {};
function App() {
  return (
    <MyContext.Provider value={{}}>
      <Header />
    </MyContext.Provider>
  );
}

export default App;
