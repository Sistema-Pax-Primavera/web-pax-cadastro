import React, { useState } from "react";
import HeaderUsuarios from "../../../componentes/header-usuarios";
import "./conta.css";
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
import HeaderFinanceiro from "../../../componentes/header-financeiro";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function createData(name, tipo, status, opcoes) {
  return { name, tipo, status, opcoes };
}

const rows = [
  createData("Banco do Brasil", "Conjunta",  "Ativo"),
  createData("Santander", "Bancária",  "Ativo"),
  createData("Itaú", "Crédito", "Ativo"),
];

const Conta = () => {
  return (
    <div className="container-cadastro">
      <HeaderFinanceiro />
      <div className="sub-container-cadastro">
        <ModalCadastro
          buttonText="CADASTRAR"
          icone2={<ArticleIcon fontSize={"small"} />} // Ícone do Material UI
          titulo="Cadastrar"
          children={
            <div>
              <div className="linhas-campos-cadastro">
                <div className="tipo-parentesco-cadas">
                  <label> Nome Conta</label>
                  <input></input>
                </div>
                <div className="tipo-parentesco-cadas">
                  <label>Unidade</label>
                  <select></select>
                </div>
                <div className="tipo-parentesco-cadas">
                  <label>Banco</label>
                  <select></select>
                </div>
              </div>
              <div className="linhas-campos-cadastro">
                <div className="tipo-parentesco-cadas">
                  <label>Agência</label>
                  <input></input>
                </div>
                <div className="tipo-parentesco-cadas">
                  <label>Dígito Agência</label>
                  <select></select>
                </div>
                <div className="tipo-parentesco-cadas">
                  <label>Conta</label>
                  <select></select>
                </div>
                
              </div>
              <div className="linhas-campos-cadastro">
                <div className="tipo-parentesco-cadas">
                  <label>Dígito Conta</label>
                  <input></input>
                </div>
                <div className="tipo-parentesco-cadas">
                  <label>Tipo Conta Bancária</label>
                  <select></select>
                </div>
                
                <div className="buttao-salvar-parentesco">
                  <ButtonIconTextoStart
                    title={"SALVAR"}
                    corFundoBotao={"#006b33"}
                    corTextoBotao={"#ffff"}
                  />
                </div>
              </div>
            </div>
          } // Título do Modal
        ></ModalCadastro>
        <div className="tabelas-cadastro-usuarios">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Conta</TableCell>
                  <TableCell align="center">Tipo</TableCell>
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
                    <TableCell align="center">{row.tipo}</TableCell>
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

export default Conta;
