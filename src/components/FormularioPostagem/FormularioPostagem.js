import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = (props) => {

  const onChangeTitulo = (event) => {
    props.setTitulo(event.target.value)
  }

  const onChangeImagem = (event) => {
    props.setImagem(event.target.value)
  }

  const onChangeDescricao = (event) => {
    props.setDescricao(event.target.value)
  }

  const publicar = () => {
    const publicacao = {
      titulo: props.titulo,
      imagem: props.imagem,
      descricao: props.descricao
    }
    props.setPost(publicacao)
  }

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input
          id="titulo"
          onChange={onChangeTitulo}
          value={props.publicacao}
          />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input
          id="foto"
          onChange={onChangeImagem}
          value={props.imagem}
          />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input
          id="descricao"
          onChange={onChangeDescricao}
          value={props.descricao}
          />
        </StyledLabel>
      </Form>
    <SendButton onClick={publicar}>Publicar</SendButton>
    </FormContainer>
  );
};

export default FormularioCadastro;
