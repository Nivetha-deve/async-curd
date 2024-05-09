import {BrowserRouter, Route,Routes,Link} from "react-router-dom";
import"./App.css";
import Layout from "./pages/Layout";
import Products from "./pages/Products";
import ProductForm from "./pages/ProductForm";


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
            <Route index element={<Products />} />
          <Route path="products" element={<h1>product page</h1>} />
          <Route path="products/:prodId" element={<h2>Products Page</h2>} />
          <Route path="add-product" element={<ProductForm />} />
          <Route path="*" element={<DefaultElement />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

