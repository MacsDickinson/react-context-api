import React from 'react';

export const themes = {
    light: {
        foreground: '#000000',
        background: '#ffffff',
        accent: '#d93847'
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
        accent: '#344b81'
    },
    party: {
        foreground: '#0066cc',
        background: '#66ffcc',
        accent: '#ff66cc'
    },
};

export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {}
});