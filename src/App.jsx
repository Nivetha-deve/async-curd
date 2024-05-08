import {BrowserRouter, Route,Routes,Link} from "react-router-dom";
import"./App.css";
import Layout from "./pages/Layout";


  const DefaultElement = () => {
  return (
    <>
      <h4>No page found,please check the URL</h4>
      <Link to="/">Home</Link>
    </>
  );
};

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<h1>Home Page</h1>} />
          <Route path="products" element={<h1>product page</h1>} />
          <Route path="products/:prodId" element={<h2>Products Page</h2>} />
          <Route path="about-us" element={<h1>About Us Page</h1>} />
          <Route path="*" element={<DefaultElement />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

