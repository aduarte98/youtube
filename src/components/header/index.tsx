import {
    Container,
    LogoContainer,
    ButtonContainer,
    ButtonIcon,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButton,
} from "./styles";
import HamburguerIcon from "../../assets/hamburger.png";
import Logo from "../../assets/YouTube-Logo.png";
import SearchIcon from "../../assets/search.png";
import MicIcon from "../../assets/microfone-gravador.png";
import VideoIcon from "../../assets/video.png";
import SinoIcon from "../../assets/sino.png";
import { useContext } from "react";
import { UserContext } from "../../contexts/useContext";
import { UsersContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";


function Header(){

    const context = useContext(UsersContext)

    if (!context) {
        throw new Error("UsersContext não foi fornecido.");
    }

    const { login, logOut, user } = context

    const navigate = useNavigate();

    const contexto = useContext(UserContext)

    if (!contexto) {
        throw new Error("UserContext não foi fornecido.");
    }

    const {openMenu, setOpenMenu} = contexto;

    return(
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={ () => setOpenMenu(!openMenu)} margin='0 10px 0 0'>
                    <ButtonIcon alt="" src={HamburguerIcon}/>
                </ButtonContainer>
                    <img 
                    style={{cursor:'pointer', width: '100px'}}
                    alt=""
                    src={Logo}
                    />
            </LogoContainer>
            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Pesquisar"/>
                </SearchInputContainer>
                <SearchButton>
                    <ButtonIcon alt="" src={SearchIcon} />
                </SearchButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={MicIcon}/>
                </ButtonContainer>
            </SearchContainer>

            <HeaderButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={VideoIcon}/>
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={SinoIcon}/>
                </ButtonContainer>

                {login ?
                <>
                <ButtonContainer margin='0 0 0 10px'>
                    {user.nome.charAt(0)}
                </ButtonContainer>
                <span onClick={() => logOut()}>Sair</span>
                </>
                : 
                <button onClick={() => navigate('/login')}>Fazer Login</button>
                }
                
            </HeaderButton>
        </Container>
    )
}

export default Header;