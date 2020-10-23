import { DefaultTheme } from "styled-components"

interface Themes {
    [key: string]: DefaultTheme
}
const theme: Themes = {
    light: {
        palette: {
            text: '#334661',
            textStrong: '#657ed4',
            textSoft: '#9E9B9B',
            highlight: '#3A86FF',
            bg: '#DCEDFF',
            softHighlight: '#F0F5FF'
        }
    },
};

export default theme