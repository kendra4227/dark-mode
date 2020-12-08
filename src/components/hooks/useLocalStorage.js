import React, {useState} from 'react';

function useLocalStorage (key, initialValue){
    // Initialize state to store value
    //Pass initial state function to useState so logic is only executed once 
    const[storedValue, setStoredValue] = useState(()=>{
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });
    return [storedValue];
};