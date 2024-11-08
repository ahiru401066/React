import { CssModules } from "./Components/CssModules";
import{ InlineStyle } from "./Components/InlineStyle"
import { StyledJsx } from "./Components/Styled";
import { StyledComponents } from "./Components/StyledComponents";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
    </div>
  )
}