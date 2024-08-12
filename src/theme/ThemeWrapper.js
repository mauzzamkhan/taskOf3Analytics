import React, { useMemo } from "react";
import getTheme from "./getTheme";
import { useColorMode } from "../style/ColorModeContext";
import { ThemeProvider, CssBaseline } from "@mui/material";

const ThemeWrapper = ({ children }) => {
  const { mode } = useColorMode();
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
