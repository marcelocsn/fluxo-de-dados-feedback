import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {


  const onChangeNome = (event) => {
    props.setNome(event.target.value)
  }

  const onChangeFotoPerfil = (event) => {
    props.setFotoPerfil(event.target.value)
  }
  
  const login = () => {
    const users = {
      nome: props.nome,
      fotoDePerfil: props.fotoPerfil
    }
    props.setDados(users)
    props.setPageFlow(2);
  };

  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input
          type={"text"}
          onChange={onChangeNome}
          value={props.nome}
          />
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input
          type={"text"}
          onChange={onChangeFotoPerfil}
          value={props.fotoPerfil}
          />
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
