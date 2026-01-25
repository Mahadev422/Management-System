import { Outlet } from "react-router-dom";

// local
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";


function App() {

  return (
    <>
    <div className="w-full sticky top-0 z-100">
      <Header />
    </div>
    <main className="no-scroll">
      <Outlet />
    </main>
    <div>
      <Footer />
    </div>
    </>
  );
}

export default App;
