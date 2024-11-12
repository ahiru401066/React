import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard"

const users = [...Array(10).keys()].map(((val) => {
  return {
    id: val,
    name: `ahiru${val}`,
    image: "https://images.unsplash.com/photo-1536589961747-e239b2abbec2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fHwy",
    email: "12345@example.com",
    phone: "090-1111-2222",
    company: {
      name: "test-company"
    },
    website: "https://google.com",
  }
}))

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) =>(
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`