import { createContext, useState, ReactNode, FC } from "react";

interface IProps {
    openMenu: boolean,
    setOpenMenu: (openMenu: boolean) => void
}


export const UserContext = createContext < IProps | undefined>(undefined);

interface UserStoreProps {
    children: ReactNode;
}

export const UserStore: FC<UserStoreProps> = ({children}) => {

    const [openMenu, setOpenMenu] = useState(true)


    return(
        <UserContext.Provider value={{openMenu,setOpenMenu}}>
            {children}
        </UserContext.Provider>
    )
}