import styled from 'styled-components';

const Layout = (props) => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
  min-width: 800px;
  max-width: 1200px;
  padding: 0 10px;
  box-sizing: content-box;
  margin: 0 auto;
  border: 1px solid black;
`;

export default Layout;
