// src/contexts/userContext.tsx

import React, { createContext, useEffect, useState } from "react";
import api from '../api';

// 1. Defina a interface para o contexto
interface UserContextType {
    login: boolean;
    user: any; // Substitua 'any' pelo tipo real do usuário, se disponível
    handleLogin: (email: string, password: string) => void;
}

// 2. Crie o contexto usando a interface definida
export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserStorage = ({ children }: { children: React.ReactNode }) => {
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({});

    const handleLogin = (email: string, password: string) => {
        api.post('/user/sign-in', { email, password }).then(({ data }) => {
            setLogin(true);
            localStorage.setItem('token', data.token);
            getUser();
        }).catch((error) => {
            console.log('Não foi possível fazer o login', error);
        });
    };

    const getUser = () => {
        const token = localStorage.getItem('token');
        api.get('/user/get-user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(({ data }) => {
            setUser(data.user);
            setLogin(true);
        }).catch((error) => {
            console.log('Usuário não autenticado', error);
        });
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <UserContext.Provider value={{ login, user, handleLogin }}>
            {children}
        </UserContext.Provider>
    );
};
