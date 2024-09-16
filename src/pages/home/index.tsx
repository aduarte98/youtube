import VideoComponent from "../../components/videoComponents";
import { Container,ContainerVideo, ContainerCategory, Category, LinhaMenu, ContainerShorts, TitleShorts } from "./styles";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/useContext";
import ShortsComponent from "../../components/shortsComponents";
import axios from 'axios'

interface Props {
    openMenu: boolean;
}


function Home(){

    interface Videos {
        id:string;
        snippet: {
            title: string;
            thumbnails: {
                high: {
                    url: string;
                }
                maxres: {
                    url: string;
                }
            }
            channelTitle: string;
            publishedAt: string;
        },
        statistics: {
            viewCount : string;
        }
    }

    const [videos, setVideos] = useState <Videos[]>([]);
    const {categoryId} = useCategoryContext();

    useEffect(() => {
        load()
    }, [categoryId])

    const API_KEY = ''

    const url = ''

    async function load() {
        try {
            const resposta = await axios.get(url)
            setVideos(resposta.data.items)
        }catch(erro) {
            console.log(erro)
        }
    }

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
                {videos.map((video) => 
                <VideoComponent 
                title={video.snippet.title}
                thumbnail={video.snippet.thumbnails.maxres?.url}
                channelLImage={video.snippet.channelTitle.charAt(0).toLocaleUpperCase()}
                channelLName={video.snippet.channelTitle}
                details={`${formatViewCount(Number(video.statistics.viewCount))}`} //27:41
                />
                )}
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