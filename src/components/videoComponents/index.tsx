import {
    ChannelImage,
    Container,
    ImageBanner,
    TextCard,
    TextContainer,
    Title,
    TitleContainer
} from "./styles";


function VideoComponent(){

    return(
        <Container>
            <ImageBanner src="https://i.ytimg.com/vi/IRNOoOYVn80/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6b7x5pjGOkw8QajDQbErDGSmeFQ"/>
            <TitleContainer>
                <ChannelImage>
                    AS
                </ChannelImage>
                <TextContainer>
                    <Title>
                        Assassin's Creed Mirage
                    </Title>
                    <TextCard>
                        Ubisoft Brasil
                    </TextCard>
                    <TextCard>
                        1 mi de visualizações
                    </TextCard>
                    <TextCard>
                        há 11 meses
                    </TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent;