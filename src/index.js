import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {ThemeProvider} from '@mui/material'
import App from "./App";
import theme from './theme.js'
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme} >
    <App />
    </ThemeProvider>
  </StrictMode>
);
