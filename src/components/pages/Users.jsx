import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/Secondary.Button";
import { SearchInput } from "../atoms/molecules/SearchInput";
import { UserCard } from "../atoms/organisms/user/UserCard";
import { useRecoilState } from "recoil";
import { userState } from "../../store/useState";
const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `takane${val}`,
    image: "https://source.unsplash.com/rW-I87aPY5Y",
    email: "11135332@ggg.com",
    phone: "000-000-0000",
    company: { name: "テスト会社" },
    website: "highjump.com"
  };
});

export const Users = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <SContainer>
      <h2>ユーザー一覧です</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard keys={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
