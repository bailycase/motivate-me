import 'styled-components';
declare module 'styled-components' {
    export interface Colors {
        text: string;
        textStrong: string;
        textSoft: string;
        bg: string;
        softHighlight: string;
        highlight: string;
    }
    export interface DefaultTheme {
        palette: Colors;
    }
}
