import styled from "styled-components";

export const ContainerVideo = styled.div < {openMenu: boolean} >`
    width:100%;
    max-width:1600px;
    display:grid;
    grid-template-columns:${({openMenu}) => openMenu? 'repeat(4, 1fr)' : 'repeat(5, 1fr)'};
    column-gap:20px;
    row-gap:50px
`;

export const VideoComponent = styled.div`
    
`;

export const Container = styled.div`
    width:100%;
`;

export const ContainerCategory = styled.div`
    width:100%;
    margin-bottom: 20px;
    display: inline-flex;
`;

export const Category = styled.div`
    min-width: 12px;
    height:32px;
    background-color: #F2F2F2;
    margin:8px;
    margin-left:0;
    font-weight:600;
    border-radius: 8px;
    padding: 0 10px;
    align-items:center;
    justify-content:center;
    display:flex;
    color:#4B4B4B;
    font-size: 14px;
    font-family: Roboto, Arial, sans-serif;
    cursor:pointer;

    &:hover{
        background-color:#E5E5E5;
    }
`;


export const LinhaMenu = styled.hr`
    width: 100%;
`;

export const ContainerShorts = styled.div < {openMenu: boolean} >`
    width:100%;
    max-width:1600px;
    display:grid;
    grid-template-columns:repeat(4, 1fr);
    column-gap:20px;
    row-gap:50px
`;

export const TitleShorts = styled.div`
    font-size:20px;
    margin:15px 0 15px 0
`;