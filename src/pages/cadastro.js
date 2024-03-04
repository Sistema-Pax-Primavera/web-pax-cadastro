import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cadastro.css";
import HeaderVendas from "../componentes/header";
import Selecionar from '../../assets/selecionar.svg'

const Cadastro = () => {

    return (
        <div className="container-cadastro">
            <HeaderVendas/>
            <div className="cadastro-img">
                <div>
                <img src={Selecionar}></img>
                </div>
                
                <label>Selecione uma opção do menu!</label>
            </div>
        </div>
    );
};

export default Cadastro;
