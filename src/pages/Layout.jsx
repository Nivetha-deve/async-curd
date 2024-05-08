import { Link, Outlet, useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";
import { createContext, useContext, useState } from "react";

const ModeContext = createContext(null);

const SubLayout = () => {
  const { mode: contextMode, changeMode } = useContext(ModeContext);

 const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: contextMode === "light" ? "#f3f4f6" : "black",
        color: contextMode === "light" ? "black" : "white",
      }}
    >
      <header className={styles.header}>
        Simple Header For the Layout
        {/* {console.log(contextMode)} */}
        <button style={{ float: "right" }} onClick={changeMode}>
        <i
          className={`fa-regular fa-${
            contextMode === "light" ? "moon" : "sun"
          } fa-2x`}
        ></i>
        </button>
      </header>
      <aside className={styles.aside}>
        {/* <Link to="/">Home</Link> */}
         <button
          onClick={() =>
            navigate("/", { state: { mentor: "sanjay", isAdult: true } })
          }
        >
          Home
        </button> 
        <br />
        <Link to="/products">Products</Link>
        {/* <button onClick={() => navigate("/products")}>Products</button> */}
      </aside>
      <div className={styles.content}>
        <Outlet />
      </div>
      <footer className={styles.footer}>Sample Footer for the Layout</footer>
    </div>
  );
};

const Layout = () => {

  const [mode, setMode] = useState("light");

  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <ModeContext.Provider value={{ mode, changeMode }}>
      <SubLayout />
    </ModeContext.Provider>
  );
};

export default Layout;