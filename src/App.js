import { useState } from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Inscricoes from "./pages/inscricoes";
import Shorts from "./pages/shorts";
import { UserStorage } from "./contexts/userContext";
import Login from "./pages/login";

function App() {

  return (
    <UserStorage>
      <BrowserRouter>
        <div className="App">
          <Header/>
          <div style={{width:'100%', display:"flex"}}>
            <Menu/>
            <div style={{width:'100%', padding: '12px 70px', boxSizing: 'border-box', display:'flex', justifyContent:'center'}}>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/inscricoes" element={<Inscricoes/>}/>
                <Route path="/shorts" element={<Shorts/>}/>
                <Route path="/login" element={<Login/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </UserStorage>
  );
}

export default App;
