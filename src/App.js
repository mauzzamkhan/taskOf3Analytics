import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/SideBar";
import { ColorModeProvider } from "./style/ColorModeContext";
import ThemeWrapper from "./theme/ThemeWrapper";
import Layout from "./style/Layout";
import Dashboard from "./pages/dashboard/Index";

function App() {
  return (
    <ColorModeProvider>
      <ThemeWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
            </Route>
          </Routes>
          {/* <div className="App">
            app
            <Sidebar />
          </div> */}
        </BrowserRouter>
      </ThemeWrapper>
    </ColorModeProvider>
  );
}

export default App;
