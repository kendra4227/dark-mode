import  {useEffect} from 'react';
import useLocalStorage from "./useLocalStorage";

export const useDarkMode = (initialValue)=>{
    const [DarkMode, setDarkMode] = useLocalStorage(initialValue)

    useEffect(()=>{
        DarkMode ?
        document.body.classList.add("dark-mode")
        : document.body.classList.remove("dark-mode")
    }, [DarkMode])
    return [DarkMode, setDarkMode]
}
    
