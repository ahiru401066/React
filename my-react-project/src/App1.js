import { UserProvider } from "./providers/UserProvider";
import { Router } from "./router1/Router";

import "./styles.css";

export default function App1() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
};