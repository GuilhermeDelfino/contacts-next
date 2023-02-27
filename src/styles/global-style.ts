"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 100%;
        font-weight: 150%;
        color: inherit;

        transition: all .2s ease;

        &:hover, &:focus{
            transition: all .2s ease;
        }

        font-family: sans-serif;
    }
    body: {
        height: 100%;
        min-height: 100vh;
        width: 100%;
    }
`;
