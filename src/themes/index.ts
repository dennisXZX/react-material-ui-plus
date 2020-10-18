import { createMuiTheme, Theme, ThemeOptions } from "@material-ui/core";
import defaultTheme from "./configs/default";
import happyTheme from "./configs/happy";
import sadTheme from "./configs/sad";

export enum ThemeType {
    Default = 'default',
    Happy = 'happy',
    Sad = 'sad'
}

export const themes = {
    default: defaultTheme,
    happy: happyTheme,
    sad: sadTheme
};

export const getTheme = (themeName: ThemeType): Theme => {
    const themeOptions: ThemeOptions = themes[themeName];

    return createMuiTheme(themeOptions);
};
