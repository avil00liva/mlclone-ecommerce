import { createContext, useContext, useState } from "react";
import fakeMock from "../assets/data/fakeMock"

const postsContext = createContext()

export function PostsContext({children}) {
    const [darkTheme, setDarkTheme] = useState(false)
    const [mockProducts, setMockProducts]=useState(fakeMock)


    return (
        <postsContext.Provider value={{
            mockProducts,
            setMockProducts,
            darkTheme,
            setDarkTheme,
        }}>
            {children}
        </postsContext.Provider>
    )
}

export function usePosts() {
    return useContext(postsContext)
}