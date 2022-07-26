import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>My Todo List</HeaderLeft>
      <HeaderRight>React D반 전소연</HeaderRight>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #ededed;
`;
const HeaderLeft = styled.div``;
const HeaderRight = styled.div``;

export default Header;
