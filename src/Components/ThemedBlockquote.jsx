import React from 'react';
import {ThemeContext} from './theme-context';

function ThemedBlockquote(props) {
    return (
        <ThemeContext.Consumer>
            {({theme}) => (<blockquote
                {...props}
                style={{
                borderLeft: `5px solid ${theme.accent}`,
                padding: "15px",
                margin: "5px",
                textAlign: "left"
            }}/>)}
        </ThemeContext.Consumer>
    );
}

export default ThemedBlockquote;