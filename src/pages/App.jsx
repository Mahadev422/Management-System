import { Outlet } from "react-router-dom";

// local
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import { useEffect } from "react";
import { useAuth } from "../store/useAuth";
import WebLoader from "../components/loaders/WebLoader";
import CirclesLoader from "../components/loaders/CirclesLoader";

function App() {
  const { loading, checkLogin, user, error} = useAuth();

  useEffect(() => {
    if (!user) checkLogin();
  }, [user]);
  if (loading) return <WebLoader />;
  // if(error) return <p>{error}</p>
  return (
    <>
      <div className="w-full sticky top-0 z-100">
        <Header />
      </div>
      <main className="no-scroll">
        <Outlet />
      </main>
      {/* <div>
        <Footer />
      </div> */}
    </>
  );
}

export default App;
