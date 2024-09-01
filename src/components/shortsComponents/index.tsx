import {
    Container,
    ImageBanner,
    TextCard,
    TextContainer,
    Title,
    TitleContainer
} from "./styles";


function ShortsComponent(){

    return(
        <Container>
            <ImageBanner src="https://i.ytimg.com/vi/IRNOoOYVn80/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6b7x5pjGOkw8QajDQbErDGSmeFQ"/>
            <TitleContainer>
                <TextContainer>
                    <Title>
                        AC Mirage
                    </Title>
                    <TextCard>
                        1 mi de visualizações
                    </TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default ShortsComponent;