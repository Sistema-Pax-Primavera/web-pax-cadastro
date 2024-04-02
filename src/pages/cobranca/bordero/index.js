import React, { useState } from "react";
import HeaderCobranca from "../../../componentes/header-cobranca";
import "./bordero.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import { CSSTransition } from "react-transition-group";
import ArticleIcon from "@mui/icons-material/Article";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import Checkbox from "@mui/material/Checkbox";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ModalCadastro from "../../../componentes/modal-cadastro";
import ButtonIconTextoStart from "../../../componentes/button-icon-texto-start";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function createData(name, regiao, unidade, usuario, status, opcoes) {
  return { name, regiao, unidade, usuario, status, opcoes };
}

const rows = [
  createData( "Teste", "Região 01", "Dourados", "Carlos", "Ativo"),
  createData( "Teste", "Região 02", "Dourados", "Luiz", "Ativo"),
  createData( "Teste", "Região 03", "Itaporã", "Luiz", "Ativo"),
];

const Bordero = () => {
  return (
    <div className="container-cadastro">
      <HeaderCobranca />
      <div className="sub-container-cadastro">
        <ModalCadastro
          buttonText="CADASTRAR"
          icone2={<ArticleIcon />} // Ícone do Material UI
          titulo="Cadastrar" // Título do Modal
          children={
            <div className="linhas-campos-cadastro">
              <div className="tipo-bairro-cadas">
                <label>Nome Borderô</label>
                <input></input>
              </div>
              <div className="tipo-bairro-cadas">
                <label>Unidade</label>
                <select></select>
              </div>
              <div className="tipo-bairro-cadas">
                <label>Cobradores</label>
                <select></select>
              </div>
              
              <div className="buttao-salvar-bairro">
                <ButtonIconTextoStart
                  title={"SALVAR"}
                  corFundoBotao={"#006b33"}
                  corTextoBotao={"#ffff"}
                />
              </div>
            </div>
          }
        ></ModalCadastro>
        <div className="tabelas-cadastro-usuarios">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Borderô</TableCell>
                  <TableCell align="center">Região</TableCell>
                  <TableCell align="center">Unidade</TableCell>
                  <TableCell align="center">Usuário</TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center">OPÇÕES</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.regiao}</TableCell>
                    <TableCell align="center">{row.unidade}</TableCell>
                    <TableCell align="center">{row.usuario}</TableCell>
                    <TableCell align="center">{row.status}</TableCell>
                    <TableCell align="center">
                      <div className="div-edit-cadastro-parentesco">
                        <div className="edit-cadastro-parentesco">
                          <button>
                            <ModeEditOutlineIcon fontSize={"small"} />
                          </button>
                        </div>
                        <div className="edit-cadastro-paren">
                          <button>
                            <CancelIcon fontSize={"small"} />
                          </button>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Bordero;
