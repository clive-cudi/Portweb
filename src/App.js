import "./App.css";
import Setup from "./Setup";
import { ThemeProvider } from "./components/contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <div className="Content">
          <Setup />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
