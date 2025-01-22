import React from "react";
import LandingComponent from './components/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AtasanComponent from "./components/komponen/organism/Atasan";
import Content from "./components/komponen/organism/Content";
import CardComponent from "./components/komponen/atoms/Card";
import FooterComponent from "./components/komponen/organism/Footer";
import LandingPages from "./components/komponen/molekul/LandingPage";
import FontComponents from "./components/komponen/organism/Font";
import ButtonLk from "./components/komponen/organism/Button";
import Form from "./components/komponen/organism/FormKesehatan"
import Formtabel from "./components/komponen/molekul/tabel1";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/atasan" element={<AtasanComponent />} />
        <Route path="/konten" element={<Content />} />
        <Route path="/card" element={<CardComponent />} />
        <Route path="/footer" element={<FooterComponent />} />
        <Route path="/font" element={<FontComponents />} />
        <Route path="/button" element={<ButtonLk/>} />
        <Route path="/kesehatan" element={<Form/>} />
        <Route path="/Tabel" element={<Formtabel/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
