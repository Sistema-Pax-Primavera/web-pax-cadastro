import React, { useState } from "react";
import HeaderUnidade from "../../../componentes/header-unidades/index";
import './cidade.css'
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

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function createData(name, estado, status, opcoes) {
  return { name, estado, status, opcoes };
}

const rows = [
  createData(
    "Dourados",
    "MS",
    "Ativo",
  ),
  createData(
    "Itaporã",
    "MS",
    "Ativo",
  ),
  createData(
    "Guairá",
    "PR",
    "Ativo",
  ),
];

const Cidade = () => {
  return (
    <div className="container-cadastro">
      <HeaderUnidade />
      <div className="sub-container-cadastro">
        <ModalCadastro
          buttonText="CADASTRAR"
          icone2={<ArticleIcon />} // Ícone do Material UI
          titulo="Cadastrar" // Título do Modal
        ></ModalCadastro>
        <div className="tabelas-cadastro-usuarios">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell align="center">Estado</TableCell>
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
                    <TableCell align="center">{row.estado}</TableCell>
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

export default Cidade;
