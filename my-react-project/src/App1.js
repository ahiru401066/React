import { PrimaryButton } from "./Components1/atoms/button/PrimaryButton";
import { SecondaryButton } from "./Components1/atoms/button/SecondaryButton";
import { SearchInput } from "./Components1/molecules/SearchInput";
import { UserCard } from "./Components1/organisms/user/UserCard";
import "./styles.css";

export default function App1() {
  return (
    <div>
      <h1>Hello World!</h1>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>   
      <br />
      <SearchInput />
      <UserCard />
    </div>
  );
};