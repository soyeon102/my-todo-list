import styled from 'styled-components';

const Todo = ({ item, handleDelete, handleToggle }) => {
  const { id, title, content, done } = item;

  return (
    <Container>
      <TodoCard done={done}>
        <CardTitle>
          <h3>{title}</h3>
        </CardTitle>
        <CardComment>
          <h3>{content}</h3>
        </CardComment>

        <ButtonGroup>
          <Btn btnColor='red' onClick={() => handleDelete(id)}>
            삭제하기
          </Btn>
          <Btn btnColor='green' onClick={() => handleToggle(id)}>
            {done === false ? '완료' : '취소'}
          </Btn>
        </ButtonGroup>
      </TodoCard>
    </Container>
  );
};

export default Todo;

const Container = styled.li`
  padding: 10px 0;
`;

const TodoCard = styled.div`
  width: 230px;
  padding: 10px 20px;
  border: 2px solid ${(props) => (props.done ? 'green' : 'red')};
  border-radius: 10px;
  /* overflow-wrap:  */
`;

const CardTitle = styled.div`
  h3 {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const CardComment = styled.div`
  h3 {
    font-size: 14px;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 54px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const Btn = styled.button`
  & + & {
    margin-left: 10px;
  }

  &:hover {
    cursor: pointer;
    color: white;
    background-color: ${(props) => props.btnColor};
  }

  width: 50%;
  text-align: center;
  background-color: transparent;
  font-size: 14px;
  padding: 5px 0;
  border: 2px solid ${(props) => props.btnColor};
  border-radius: 5px;
`;
