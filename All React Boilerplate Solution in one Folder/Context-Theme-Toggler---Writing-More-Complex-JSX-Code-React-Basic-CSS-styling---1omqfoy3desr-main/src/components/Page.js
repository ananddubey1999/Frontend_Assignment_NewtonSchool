import React, { useContext, useState } from 'react';
import { LocalThemedBox } from './LocalThemedBox';
import { ThemeContext, ThemeProvider } from './ThemeProvider';

const Page = () => {

    const {theme,setTheme} = useContext(ThemeContext);

    return(
        <div className={'bg-'+theme} id="themed-page">
            <p id="themed-text-container" className={'txt-'+theme}>
                lorem ipsum dolor iterit n stuff
            </p>
            {/* 'btn btn-'+theme 'txt-'+theme */}
            <button className={`btn btn-${theme} txt-${theme}`} id="themed-button">Themed Button</button>
           
        <LocalThemedBox/>
           
        </div>
    )
}

export { Page }
