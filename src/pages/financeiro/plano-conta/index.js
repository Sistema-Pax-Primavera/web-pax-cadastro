import React, { useState } from "react";
import HeaderUsuarios from "../../../componentes/header-usuarios";
import "./plano-conta.css";
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
import HeaderPax from "../../../componentes/header-pax";
import HeaderFinanceiro from "../../../componentes/header-financeiro";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function createData(name, codigo, tipo, nivel, visivel, status,  ) {
  return { name, codigo, tipo, nivel, visivel, status,  };
}

const funcaoData = [
  createData("Poupança", "65615", "Teste 01", "Tipo 1", "Ativo"),
  createData("Teste 02", "84655", "Teste 02", "Tipo 2", "Ativo"),
  createData("Teste 03", "5434545", "Teste 03", "Tipo 3", "Ativo"),
];

const PlanoConta = () => {
  const [funcaoEstado, setFuncaoEstado] = useState(funcaoData);

  const handleStatusChange = (index) => {
    const updatedFuncao = funcaoEstado.map((funcao, i) => {
      if (i === index) {
        return {
          ...funcao,
          status: funcao.status === "Ativo" ? "Inativo" : "Ativo",
        };
      }
      return funcao;
    });
    setFuncaoEstado(updatedFuncao);
  };

  return (
    <div className="container-cadastro">
      <HeaderFinanceiro />
      <div className="sub-container-cadastro">
      <div className="pesquisa-tabelas-cadastro">
      <div className="input-pesquisa-cadastro3">
            <input placeholder="Informe o nome"></input>
          </div>
          <div className="tamanho-botao-pesquisa">
            <ButtonIconTextoStart
              title={"PESQUISAR"}
              corFundoBotao={"#006b33"}
              corTextoBotao={"#ffff"}
              fontSizeBotao={'10px'}
            />
          </div>
        <ModalCadastro
          buttonText="CADASTRAR"
          icone2={<ArticleIcon fontSize={"small"} />} // Ícone do Material UI
          titulo="Cadastrar"
          children={
            <div>
              <div className="linhas-campos-cadastro">
                <div className="tipo-parentesco-cadas">
                  <label>Nome</label>
                  <input></input>
                </div>
                <div className="tipo-parentesco-cadas">
                  <label>Código</label>
                  <input></input>
                </div>
                <div className="tipo-parentesco-cadas">
                  <label>Plano Raiz</label>
                  <select></select>
                </div>
              </div>
              <div className="linhas-campos-cadastro">
              <div className="tipo-parentesco-cadas">
                  <label>Vísivel</label>
                  <select></select>
                </div>
                <div className="tipo-parentesco-cadas">
                  <label>Tipo</label>
                  <input></input>
                </div>
                
                <ButtonIconTextoStart
                  title={"SALVAR"}
                  corFundoBotao={"#006b33"}
                  corTextoBotao={"#ffff"}
                />
              </div>
              <div className="buttao-salvar-parentesco"></div>
            </div>
          } // Título do Modal
        ></ModalCadastro>
        </div>
        <div className="tabelas-cadastro-usuarios">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell align="center">Código</TableCell>
                  <TableCell align="center">Tipo</TableCell>
                  <TableCell align="center">Nível</TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center">OPÇÕES</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
               {funcaoEstado.map((row, index) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.codigo}</TableCell>
                    <TableCell align="center">{row.tipo}</TableCell>
                    <TableCell align="center">{row.nivel}</TableCell>
                    <TableCell align="center">{row.status}</TableCell>
                    <TableCell align="center">
                    <div className="div-edit-cadastro-parentesco">
                        <div className="edit-cadastro-parentesco">
                          <button>
                            <ModeEditOutlineIcon fontSize={"small"} />
                          </button>
                        </div>
                        <div className="edit-gren-red">
                          <div
                            onClick={() => handleStatusChange(index)}
                            className={
                              row.status === "Ativo"
                                ? "green-background"
                                : "red-background"
                            }
                          >
                            {row.status === "Ativo" ? (
                              <CheckCircleOutlineIcon /> // Cor branca para visibilidade
                            ) : (
                              <HighlightOffIcon />
                            )}
                          </div>
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

export default PlanoConta;