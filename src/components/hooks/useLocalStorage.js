import {useState} from 'react';

const useLocalStorage = (key, initialValue) =>{
    // Initialize state to store value
    //Pass initial state function to useState so logic is only executed once 
    const[storedValue, setStoredValue] = useState(()=>{
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });
    return [storedValue];

    const setValue = value =>{
        //Save state
        setStoredValue(value);
        //Save to local storage
        window.localStorage.setItem(key,JSON.stringify(value));
    };

    return [storedValue,setValue];
};

export default useLocalStorage;