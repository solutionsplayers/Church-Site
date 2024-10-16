import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import "./App.css";
import { theme } from "./Theme";
import Test from "./Test";
import Landing from "./layouts/Landing/Landing";
import Router from "./routes";
import { SnackbarProvider } from "notistack";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <SnackbarProvider
            autoHideDuration={3000}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <ErrorBoundary>
              <Router />
            </ErrorBoundary>
          </SnackbarProvider>
        </StyledEngineProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
