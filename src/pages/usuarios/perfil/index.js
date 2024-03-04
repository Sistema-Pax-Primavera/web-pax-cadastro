import React, { useState } from "react";
import HeaderUsuarios from "../../../componentes/header-usuarios/index";
import "./perfil.css";
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
import ModalCadastro from "../../../componentes/modal-cadastro";
import ArticleIcon from "@mui/icons-material/Article";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import Checkbox from "@mui/material/Checkbox";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function createData(name, unidade, cpf, rg, status, opcoes) {
  return { name, unidade, cpf, rg, status, opcoes };
}

const rows = [
  createData(
    "Lucas Alencar Souza",
    "Dourados",
    "123.4567.89-10",
    "12230874",
    "Ativo"
  ),
  createData(
    "Rubens Nascimento",
    "Rio Brilhante",
    "987.4567.89-10",
    "16630874",
    "Ativo"
  ),
  createData(
    "Luiza Castanhares",
    "Itaporã",
    "201.8526.89-10",
    "16630874",
    "Ativo"
  ),
];

const Perfil = () => {
  const [perfisDisponiveis, setPerfisDisponiveis] = useState([
    "Gerente",
    "Vendas",
    "Suporte",
  ]);
  const [unidadesDisponiveis, setUnidadesDisponiveis] = useState([
    "Dourados",
    "Itaporã",
    "Rio Brilhante",
  ]);
  const [perfisSelecionados, setPerfisSelecionados] = useState([]);
  const [unidadesSelecionados, setUnidadesSelecionados] = useState([]);
  const [selectedUnidade, setSelectedUnidade] = useState("");
  const [selectedPermissao, setSelectedPermissao] = useState("");
  const [addedItems, setAddedItems] = useState([]);

  const handlePerfilChange = (event) => {
    const perfilSelecionado = event.target.value;
    if (!perfisSelecionados.includes(perfilSelecionado)) {
      setPerfisSelecionados([...perfisSelecionados, perfilSelecionado]);
      setPerfisDisponiveis(
        perfisDisponiveis.filter((p) => p !== perfilSelecionado)
      );
    }
  };

  const handleRemoverPerfil = (perfil) => {
    const novosPerfisSelecionados = perfisSelecionados.filter(
      (p) => p !== perfil
    );
    setPerfisSelecionados(novosPerfisSelecionados);
    setPerfisDisponiveis([...perfisDisponiveis, perfil]);
  };

  const handleAddItem = () => {
    if (selectedUnidade && selectedPermissao) {
      setAddedItems([
        ...addedItems,
        { unidade: selectedUnidade, permissao: selectedPermissao },
      ]);
      // setSelectedUnidade("");
      // setSelectedPermissao("");
    }
  };

  const handleRemoveItem = (index) => {
    const newItems = [...addedItems];
    newItems.splice(index, 1);
    setAddedItems(newItems);
  };

  const handleClearSelection = () => {
    setSelectedUnidade("");
    setSelectedPermissao("");
  };

  return (
    <div className="container-cadastro">
      <HeaderUsuarios />
      <div className="sub-container-cadastro">
        <ModalCadastro
          buttonText="CADASTRAR"
          icone2={<ArticleIcon />} // Ícone do Material UI
          titulo="Cadastrar" // Título do Modal
        >
          <div className="container-cadastro-linha">
            <div className="container-linha">
              <div className="campos-01-cadastro">
                <label>
                  Nome<span className="obrigatorio"> *</span>
                </label>
                <input />
              </div>

              <div className="campos-02-cadastro">
                <label>
                  CPF<span className="obrigatorio"> *</span>
                </label>
                <input></input>
              </div>
              <div className="campos-03-cadastro">
                <label>Email</label>
                <input></input>
              </div>
            </div>
            <div className="container-linha">
              <div className="campos-02-cadastro">
                <label>
                  Senha<span className="obrigatorio"> *</span>
                </label>
                <input />
              </div>
              <div className="campos-04-cadastro">
                <label>
                  Confirmação Senha<span className="obrigatorio"> *</span>
                </label>
                <input />
              </div>
              <div className="campos-03-cadastro">
                <label>Unidade</label>
                <select></select>
              </div>
            </div>
          </div>

          <div className="container-cadastro-linha3">
            <h1>
              <AssignmentTurnedInIcon /> Permissões
            </h1>
            <div className="divide-2-cadastro">
              <div className="colunas2-cadastro">
                <div className="container-linha-cadastro">
                  <div className="campos-05-cadastro">
                    <label>Selecione o Perfil</label>
                    <select onChange={handlePerfilChange}>
                      <option value="">Selecione...</option>
                      {perfisDisponiveis.map((perfil, index) => (
                        <option key={index} value={perfil}>
                          {perfil}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="container-linha-cadastro2">
                  {perfisSelecionados.map((perfil, index) => (
                    <div key={index} className="selecione-cadastro2">
                      <p>{perfil}</p>
                      <div className="checkbox-icon">
                        <Checkbox {...label} />
                        <HighlightOffIcon
                          onClick={() => handleRemoverPerfil(perfil)}
                          fontSize={"small"}
                          color={"error"}
                          sx={{ cursor: "pointer" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="colunas2-cadastro">
                <div className="container-linha-cadastro">
                  <div className="campos-05-cadastro">
                    <label>Selecione a Unidade</label>
                    <select
                      value={selectedUnidade}
                      onChange={(e) => setSelectedUnidade(e.target.value)}
                    >
                      <option value="">Selecione...</option>
                      <option value="Dourados">Dourados</option>
                      <option value="Rio Brilhante">Rio Brilhante</option>
                      <option value="Itaporã">Itaporã</option>
                    </select>
                  </div>
                  <div className="permissoe-selecione-cadastro">
                    <label>Permissões</label>
                    <select
                      value={selectedPermissao}
                      onChange={(e) => setSelectedPermissao(e.target.value)}
                    >
                      <option value="">Selecione...</option>
                      <option value="Controle">Controle</option>
                      <option value="Venda">Venda</option>
                      <option value="Associado">Associado</option>
                    </select>
                  </div>
                  <button onClick={handleAddItem}>
                    <AddCircleOutlineIcon fontSize="small" />
                  </button>
                </div>
                <div className="per-uni">
                  <div className="per-uni3">
                    {addedItems.map((item, index) => (
                      <div key={index} className="per-unidade2">
                        <label>{item.unidade} - <label>{item.permissao}</label></label> 
                        
                        <select>
                          <option>Editar</option>
                          <option>Remover</option>
                        </select>
                        <button onClick={() => handleRemoveItem(index)}>
                          <HighlightOffIcon fontSize="small" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ModalCadastro>

        <div className="tabelas-cadastro-usuarios">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell align="center">Unidade</TableCell>
                  <TableCell align="center">CPF</TableCell>
                  <TableCell align="center">RG</TableCell>
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
                    <TableCell align="center">{row.unidade}</TableCell>
                    <TableCell align="center">{row.cpf}</TableCell>
                    <TableCell align="center">{row.rg}</TableCell>
                    <TableCell align="center">{row.status}</TableCell>
                    <TableCell align="center">
                      <div className="div-edit-cadastro">
                        <div className="edit-cadastro-01">
                          <button>
                            <ModeEditOutlineIcon fontSize={"small"} />
                          </button>
                        </div>
                        <div className="edit-cadastro-02">
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

export default Perfil;
