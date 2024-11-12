import React from "react"
import styled from "styled-components"
import { SecondaryButton } from "../atoms/button/SecondaryButton"
import { useNavigate } from "react-router-dom"


export const Top = () => {
  const navigation1 = useNavigate();
  const navigation2 = useNavigate();
  const onClickAdmin = () => navigation1(`users`, { state: { isAdmin: true} });
  const onCLickGeneral = () => navigation2(`users`, { state: { isAdmin: false}});
  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onCLickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align: center;
`