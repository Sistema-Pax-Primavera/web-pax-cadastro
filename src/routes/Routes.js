import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastro from "../pages/cadastro";
import Usuarios from '../pages/usuarios/index'
import Setores from '../pages/setores/index'
import Unidades from '../pages/unidades/index'
import Pet from '../pages/pet/index'
import FormaDePagamento from '../pages/forma-pagamento/index'
import Atendimento from '../pages/atendimento/index'
import Perfil from "../pages/usuarios/perfil";
import Parentesco from "../pages/usuarios/parentesco";
import EstadoCivil from "../pages/usuarios/estado-civil";
import Religiao from "../pages/usuarios/religiao";
import Cidade from "../pages/unidades/cidade/index";
import Estado from '../pages/unidades/estado/index'
import Bairro from '../pages/unidades/bairro/index'

const RoutesApp = () => (
    <BrowserRouter basename="pax-primavera/configuracoes">
        <Routes>
            <Route exact path="*" element={<Cadastro />} />
            <Route exact path="/usuarios" element={<Usuarios />} />
            <Route exact path="/unidades" element={<Unidades/>} />
            <Route exact path="/pet" element={<Pet />} />
            <Route exact path="/setores" element={<Setores />} />
            <Route exact path="/forma-de-pagamento" element={<FormaDePagamento/>} />
            <Route exact path="/atendimento" element={<Atendimento />} />

            <Route exact path="/usuarios/perfil" element={<Perfil />} />
            <Route exact path="/usuarios/parentesco" element={<Parentesco />} />
            <Route exact path="/usuarios/estado-civil" element={<EstadoCivil/>} />
            <Route exact path="/usuarios/religiao" element={<Religiao />} />

            <Route exact path="/unidades/estado" element={<Estado />} />
            <Route exact path="/unidades/cidade" element={<Cidade />} />
            <Route exact path="/unidades/bairro" element={<Bairro/>} />

        </Routes>
    </BrowserRouter>
);

export default RoutesApp;