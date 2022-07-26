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
  color: white;
  background-color: #839acc;
`;
const HeaderLeft = styled.div`
  font-size: 24px;
`;
const HeaderRight = styled.div``;

export default Header;
