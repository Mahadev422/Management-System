import { Outlet } from "react-router-dom";

// local
import Header from "../components/home/Header";


function App() {

  return (
    <>
    <div className="w-screen">
      <Header />
    </div>
    <main>
      <Outlet />
    </main>
    </>
  );
}

export default App;
