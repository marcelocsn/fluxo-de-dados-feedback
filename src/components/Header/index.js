import {TitleHeader, ProfilePicture} from './styled'

export const Header = (props) => {
 
    return(
        <TitleHeader>
            <h1>Insta4</h1>
                <h4>{props.dados.nome}</h4>
                {props.dados.fotoDePerfil?<ProfilePicture src={props.dados.fotoDePerfil}/> : ''}
        </TitleHeader>
    )
}