import React from 'react';
import {ThemeContext} from './theme-context';

function ThemedText(props) {
    return (
        <ThemeContext.Consumer>
            {({theme}) => (<p
                {...props}
                style={{
                color: theme.accent
            }}/>)}
        </ThemeContext.Consumer>
    );
}

export default ThemedText;