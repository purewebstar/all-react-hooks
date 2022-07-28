import React, {useState, createContext, useContext} from 'react';

// creating theme context
let ThemeContext = createContext();

const Context = () => {
    const [theme, setTheme] = useState('light');

    return(
       <ThemeContext value={theme}>
        <Component />
       </ThemeContext>
    )
}
const Component = () =>{
    let theme = useContext(ThemeContext);

    return(
        <>
        <h1>Theme Mode: {theme}</h1>
        </>
    )
}
export default Context;