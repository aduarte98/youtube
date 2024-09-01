import {
    Container,
    MenuIcon,
    ButtonIcon,
    LinhaMenu
} from "./styles";
import { UserContext } from "../../contexts/useContext";
import { useContext } from "react";
import Icon from "../../icon.json";
import { useNavigate } from "react-router-dom";

interface IconType {
    id: number;
    nome: string;
    logo: string;
    link: string;
}


interface Props {
    openMenu: boolean;
    Icon: IconType[];
}

function Menu() {

    const navigate = useNavigate();

    const contexto = useContext(UserContext)

    if (!contexto) {
        throw new Error("UserContext não foi fornecido.");
    }

    const { openMenu, setOpenMenu } = contexto;

    return (
        <Container openMenu={openMenu}>
            {/* Renderização para openMenu = false */}
            {!openMenu ? (
                <>
                    {Icon.slice(0, 3).map((icon: IconType) => (
                        <MenuIcon openMenu={openMenu} onClick={() => navigate(icon.link)} key={icon.id}>
                            <ButtonIcon dangerouslySetInnerHTML={{ __html: icon.logo }} />
                            <span>{icon.nome}</span>
                        </MenuIcon>
                    ))}
                    <LinhaMenu openMenu={openMenu} />
                    {Icon.slice(3, 5).map((icon: IconType) => (
                        <MenuIcon openMenu={openMenu} key={icon.id}>
                            <ButtonIcon dangerouslySetInnerHTML={{ __html: icon.logo }} />
                            <span>{icon.nome}</span>
                        </MenuIcon>
                    ))}
                </>
            ) : (
                /* Renderização para openMenu = true */
                <>
                    {Icon.slice(0, 3).map((icon: IconType) => (
                        <MenuIcon openMenu={openMenu} onClick={() => navigate(icon.link)} key={icon.id}>
                            <ButtonIcon dangerouslySetInnerHTML={{ __html: icon.logo }} />
                            <span>{icon.nome}</span>
                        </MenuIcon>
                    ))}
                    <LinhaMenu openMenu={openMenu} />
                    {Icon.slice(3, 5).map((icon: IconType) => (
                        <MenuIcon openMenu={openMenu} key={icon.id}>
                            <ButtonIcon dangerouslySetInnerHTML={{ __html: icon.logo }} />
                            <span>{icon.nome}</span>
                        </MenuIcon>
                    ))}
                    <LinhaMenu openMenu={openMenu} />
                    <div style={{ margin: '0 0 18px 0' }}>
                        <p>Faça login para curtir vídeos, comentar e se inscrever.</p>
                        <button>Fazer login</button>
                    </div>
                    <LinhaMenu openMenu={openMenu} />
                    <h3>Explorar</h3>
                    {Icon.slice(5, 15).map((icon: IconType) => (
                        <MenuIcon openMenu={openMenu} key={icon.id}>
                            <ButtonIcon dangerouslySetInnerHTML={{ __html: icon.logo }} />
                            <span>{icon.nome}</span>
                        </MenuIcon>
                    ))}
                    <LinhaMenu openMenu={openMenu} />
                    <h3>Mais do YouTube</h3>
                    {Icon.slice(15, 18).map((icon: IconType) => (
                        <MenuIcon openMenu={openMenu} key={icon.id}>
                            <ButtonIcon dangerouslySetInnerHTML={{ __html: icon.logo }} />
                            <span>{icon.nome}</span>
                        </MenuIcon>
                    ))}
                    <LinhaMenu openMenu={openMenu} />
                    {Icon.slice(18, 23).map((icon: IconType) => (
                        <MenuIcon openMenu={openMenu} key={icon.id}>
                            <ButtonIcon dangerouslySetInnerHTML={{ __html: icon.logo }} />
                            <span>{icon.nome}</span>
                        </MenuIcon>
                    ))}
                    <LinhaMenu openMenu={openMenu} />
                    <p style={{ fontSize: '12px' }}>
                        Sobre Imprensa<br />Direitos autorais <br />Entre em contato <br />Criadores de conteúdo<br />Publicidade Desenvolvedores<br /><br />
                        Termos Privacidade <br />Política e segurança <br />Como funciona o YouTube<br />Testar os novos recursos<br /><br /> © 2024 Google LLC
                    </p>
                </>
            )}
        </Container>
    )
}

export default Menu;
