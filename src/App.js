import { ContextProvider } from "./component/context";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Shop from "./Layout/Shop";

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
