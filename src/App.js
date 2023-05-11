import Home from "./pages/home";
import "bootstrap'/dist/css/bootstrap.min.css";
import"./App.css"
import {Routes, Route} from "react-router-dom"
import ".App.css";




// find out how use navigate or useNavigate in react-router-dom

  function App() {
    return (
      <Routes>
       <Route path="" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="shop" element={<Shop/>} />
        <Route path="shop/product" element={<Product/>} />
      </Route>

      re
    </Routes>
  );

 }

 export default App;

 