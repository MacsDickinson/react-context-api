import React from 'react';
import {ThemeContext} from './theme-context';

function ThemedTitle(props) {
    return (
        <ThemeContext.Consumer>
            {({theme}) => (<p className="title"
                {...props}
                style={{
                color: theme.accent
            }}/>)}
        </ThemeContext.Consumer>
    );
}

export default ThemedTitle;