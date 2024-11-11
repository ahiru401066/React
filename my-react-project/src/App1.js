import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./Components1/atoms/button/PrimaryButton";
import { SecondaryButton } from "./Components1/atoms/button/SecondaryButton";
import { SearchInput } from "./Components1/molecules/SearchInput";
import { UserCard } from "./Components1/organisms/user/UserCard";
import { HeaderOnly } from "./Components1/templates/HeaderOnly";
import "./styles.css";
import { DefaultLayout } from "./Components1/templates/DefaultLayout";

const user = {
  name: "ahiru",
  image: "https://images.unsplash.com/photo-1536589961747-e239b2abbec2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fHwy",
  email: "12345@example.com",
  phone: "090-1111-2222",
  company: {
    name: "test-company"
  },
  website: "https://google.com",
};

export default function App1() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <h1>Hello World!</h1>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>   
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
};