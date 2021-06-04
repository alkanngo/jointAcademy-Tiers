import React, { createContext, useState, useContext } from "react"
import { User } from "../service/user";

export interface IProviderProps {
    children?: React.ReactNode;
}

const appCtxDefaultValue = {
    testUser: {
        login: {
            uuid: "",
            id: "",
            username: "",
        },
        name: {
            first: "",
            last: "",
            title: "",
        },
        location: {
            street:{
                number: 0,
                name: "",
            },
            city: "",
            state: "",
            country: "",
            },
            birth: {
                age: 0
            },
            registered: {
                age: 0
            },
            picture: {
                large: "",
                thumbnail: "",
                medium: ""
            },
            nationality: "",
            phone: ""
    },
    setTestUser: (user: User) => {} 
};

export const AppContext = createContext(appCtxDefaultValue);

export const AppProvider = (props: IProviderProps) => {
    const [testUser, setTestUser] = useState(appCtxDefaultValue.testUser);

    return (
    <AppContext.Provider value={{ testUser, setTestUser }}>
        {props.children}
    </AppContext.Provider>
    );
};

// Custom hook to prevent that a client has to check for undefined
export function useAppContext() {
    const ctxValue = useContext(AppContext)
    if (ctxValue === undefined) throw new Error(
        "Expected an AppProvider somewhere in the react tree to set context value")
    return ctxValue // Now has type AppContextValue
}
