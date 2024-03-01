import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastro from "../pages/cadastro";

const RoutesApp = () => (
    <BrowserRouter basename="pax-primavera/configuracoes">
        <Routes>
            <Route exact path="*" element={<Cadastro />} />
        </Routes>
    </BrowserRouter>
);

export default RoutesApp;