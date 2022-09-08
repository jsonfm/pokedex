import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "@/pages/home";
import Pokedex from '@/pages/pokedex';
import Layout from "@/components/Layout";
import './index.css';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/pokemon/" element={<Home />} />
        <Route path="/pokemon/pokedex" element={<Pokedex />} />
      </Routes>
    </Layout>
  )
}

export default App;