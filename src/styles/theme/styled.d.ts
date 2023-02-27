// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        name: 'light'|"dark",
        border: {
            radius: {
                sm: number,
                md: number,
                lg: number,
            },
        },
        colors: {
            background?: string,
            text?: string,
            primary: string[],
            secondary: string[],
            black: string,
            white: string,
            dark_gray: string[],
            light_gray: string[],
            success: string[],
            warning: string[],
            danger: string[],
            shadow: string[],
        },
        font: {
            size: {
                xsm: number,
                sm: number,
                md: number,
                lg: number,
                xlg: number,
                xxlg: number,
                xxxlg: number,
            },
            height: {
                xsm: number,
                sm: number,
                md: number,
                lg: number,
                xlg: number,
                xxlg: number,
                xxxlg: number,
            },
            family: {
                sans: string,
                title: string,
            },
            spacing: {
                sm: string,
                md: string,
                lg: string,
            },
        },
        breakpoint: {
            xsm: number, // Old smartphones
            sm: number, // Actual smartphones
            md: number, // Tablets
            lg: number, // Large-tablets
            xlg: number, // Notebook
            xxlg: number, // Wide, TVs >
        },
        container: {
            xsm: number, // Old smartphones
            sm: number, // Actual smartphones
            md: number, // Tablets
            lg: number, // Large-tablets
            xlg: number, // Notebook
            xxlg: number, // Wide, TVs >
        },
        z_index: {
            under: number,
            normal: number,
            above: number,
            dropdown: number,
            sticky: number,
            fixed: number,
            modal_backdrop: number,
            offcanvas: number,
            modal: number,
            popover: number,
            tooltip: number,
        },
        transition: {
            duration: {
                fast: string,
                normal: string,
                slow: string,
            },
            type: {
                elastic: string,
                normal: string,
            },
        },
    }
}