import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Insert from "./Insert";
import Display from "./Display";
import Delete from "./Delete";
import Search from "./Search";
import Update from "./Update";
import Footer from "./Footer";

import Layout from "./Layout";

const App=()=>
{
  return(

    <>
    <BrowserRouter>
    <Layout/>
      <Routes>
        <Route path="home" element={<Home/>} />
        <Route path="insert" element={<Insert/>}/>
        <Route path="display" element={<Display/>} />
        <Route path="delete" element={<Delete/>} />
        <Route path="search" element={<Search/>} />
        <Route path="update" element={<Update/>} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
} 
export default App;