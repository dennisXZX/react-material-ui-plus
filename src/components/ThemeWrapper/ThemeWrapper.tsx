import React from 'react';
import { getTheme, ThemeType } from "../../themes";
import { ThemeProvider } from "@material-ui/core";

interface ThemeWrapperProps {
    theme: ThemeType;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = props => {
    const { children, theme } = props;

    const muiTheme = getTheme(theme);

    return (
        <ThemeProvider theme={muiTheme}>
            {children}
        </ThemeProvider>
    );
};

export default ThemeWrapper;
