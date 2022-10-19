import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {

  const [nome, setNome] = useState("")
  const [fotoPerfil, setFotoPerfil] = useState("")
  const [pageFlow, setPageFlow] = useState(1);
  const [imagem, setImagem] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dados, setDados] = useState("")
  const [post, setPost] = useState("")

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header
          dados={dados}
          setDados={setDados}
          />
          {pageFlow === 1 ? (
            <FormularioLogin 
            nome={nome}
            setNome={setNome}
            fotoPerfil={fotoPerfil}
            setFotoPerfil={setFotoPerfil}
            setPageFlow={setPageFlow}
            dados={dados}
            setDados={setDados}
            />
          ) : (
            <FormularioPostagem
            imagem={imagem}
            titulo={titulo}
            descricao={descricao}
            setImagem={setImagem}
            setTitulo={setTitulo}
            setDescricao={setDescricao}
            post={post}
            setPost={setPost}
            />
          )}
        </aside>
        <TelaDaPostagem
        imagem={imagem}
        titulo={titulo}
        descricao={descricao}
        post={post}
        setPost={setPost}
        />
      </Container>
    </>
  );
}

export default App;
