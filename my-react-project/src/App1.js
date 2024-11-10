import { PrimaryButton } from "./Components1/atoms/button/PrimaryButton";
import { SecondaryButton } from "./Components1/atoms/button/SecondaryButton";
import "./styles.css";

export default function App1() {
  return (
    <div>
      <h1>Hello World!</h1>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>   
    </div>
  );
};