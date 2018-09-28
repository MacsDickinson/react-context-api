import React from 'react';
import {ThemeContext} from './theme-context';

function ThemedButton(props) {
    return (
        <ThemeContext.Consumer>
            {({theme}) => (<button className="button"
                {...props}
                style={{
                backgroundColor: theme.accent,
                color: theme.foreground
            }}/>)}
        </ThemeContext.Consumer>
    );
}

export default ThemedButton;