import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DefaultLayout } from "../Components1/templates/DefaultLayout"
import { HeaderOnly } from "../Components1/templates/HeaderOnly"
import { Top } from "../Components1/pages/Top"
import { Users } from "../Components1/pages/Users"


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        } />
        <Route path="/users" element={
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        } />
      </Routes>
    </BrowserRouter>
  );
};