import { CssModules } from "./Components/CssModules";
import{ InlineStyle } from "./Components/InlineStyle"
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
    </div>
  )
}