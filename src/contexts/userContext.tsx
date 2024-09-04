// src/contexts/userContext.tsx

import React, { createContext, useEffect, useState } from "react";
import api from '../api';

// 1. Defina a interface para o contexto
interface UserContextType {
    login: boolean;
    user: any; // Substitua 'any' pelo tipo real do usuário, se disponível
    handleLogin: (email: string, password: string) => void;
    logOut: any;
}

// 2. Crie o contexto usando a interface definida
export const UsersContext = createContext<UserContextType | undefined>(undefined);

export const UserStorage = ({ children }: { children: React.ReactNode }) => {
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem('token') as string);

    const handleLogin = (email: string, password: string) => {
        api.post('/user/sign-in', { email, password }).then(({ data }) => {
            setLogin(true);
            localStorage.setItem('token', data.token);
            setToken(data.token);
            getUser(data.token);
        }).catch((error) => {
            console.log('Não foi possível fazer o login', error);
        });
    };

    const getUser = (token:string) => {
        api.get('/user/get-user',  {
            headers: {
                Authorization: token
            }
        }).then(({ data }) => {
            setUser(data.user);
            setLogin(true);
        }).catch((error) => {
            console.log('Usuário não autenticado', error);
        });
    };

    useEffect(() => {
        getUser(token);
    }, [token]);

    const logOut = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser([]);
    }

    return (
        <UsersContext.Provider value={{ login, user, handleLogin, logOut }}>
            {children}
        </UsersContext.Provider>
    );
};
