import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "@/pages/home";
import Pokedex from '@/pages/pokedex';
import Detail from '@/pages/detail';
import NotFound from '@/pages/notfound';
import Layout from "@/components/Layout";
import './index.css';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/pokedex/" element={<Home />} />
        <Route path="/pokedex/dx/" element={<Pokedex />} />
        <Route path="/pokedex/detail/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App;