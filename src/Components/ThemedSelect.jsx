import React from 'react';
import {ThemeContext} from './theme-context';

function ThemedSelect(props) {
    return (
        <ThemeContext.Consumer>
            {({theme}) => (<select
                {...props}
                style={{
                backgroundColor: theme.background,
                color: theme.foreground
            }}/>)}
        </ThemeContext.Consumer>
    );
}

export default ThemedSelect;