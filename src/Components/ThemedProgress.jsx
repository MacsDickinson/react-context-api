import React from 'react';
import {ThemeContext} from './theme-context';

function ThemedProgress(props) {
    return (
        <ThemeContext.Consumer>
            {({theme}) => (<progress className="progress"
                {...props}
                color={theme.foreground}
                style={{
                backgroundColor: theme.accent
            }}/>)}
        </ThemeContext.Consumer>
    );
}

export default ThemedProgress;