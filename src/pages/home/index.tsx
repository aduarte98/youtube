import VideoComponent from "../../components/videoComponents";
import { Container,ContainerVideo, ContainerCategory, Category, LinhaMenu, ContainerShorts, TitleShorts } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/useContext";
import ShortsComponent from "../../components/shortsComponents";


interface Props {
    openMenu: boolean;
}


function Home(){

    const contexto = useContext(UserContext)

    if (!contexto) {
        throw new Error("UserContext não foi fornecido.");
    }

    const {openMenu, setOpenMenu} = contexto;

    const category = [{'categoria': 'Tudo'},{'categoria': 'Shorts'},{'categoria': 'Vídeos'},{'categoria': 'Não assistidos'},{'categoria': 'Assistidos'},{'categoria': 'Ao vivo'},{'categoria': 'Enviados recentemente'}]

    return(
        <>
        <Container>
            <ContainerCategory>
                {category.map((item, index) => (
                    <Category key={index}>
                            {item.categoria}
                    </Category>
                ))}
            </ContainerCategory>
            <ContainerVideo openMenu={openMenu}>
                <VideoComponent />
                <VideoComponent/>
                <VideoComponent/>
                <VideoComponent/>
                <VideoComponent/>
                <VideoComponent/>
                <VideoComponent/>
                <VideoComponent/>
            </ContainerVideo>
            <LinhaMenu/>
            <TitleShorts>Shorts</TitleShorts>
            <ContainerShorts openMenu={openMenu}>
                <ShortsComponent/>
                <ShortsComponent/>
                <ShortsComponent/>
                <ShortsComponent/>
            </ContainerShorts>
        </Container>
        </>
    )
}

export default Home;