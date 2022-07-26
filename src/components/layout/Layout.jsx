import styled from 'styled-components';
import Header from '../Header';

const Layout = (props) => {
  return (
    <Container>
      <Header />
      <Contents>{props.children}</Contents>
    </Container>
  );
};

const Container = styled.div`
  min-width: 800px;
  max-width: 1200px;
  box-sizing: content-box;
  margin: 0 auto;
  background-color: #243e57;
`;

const Contents = styled.div`
  padding: 0 20px 20px;
`;

export default Layout;
