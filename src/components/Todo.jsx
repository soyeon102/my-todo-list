import { getValue } from '@testing-library/user-event/dist/utils';
import styled from 'styled-components';

const Todo = (props) => {
  const item = {
    title: props.item.title,
    content: props.item.content,
    done: props.item.done,
  };

  const handleDoneClick = (e) => {
    console.log(e);
  };

  return (
    <Container>
      <TodoCard done={item.done}>
        <CardTitle>
          <h3>{item.title}</h3>
        </CardTitle>
        <CardComment>
          <h3>{item.content}</h3>
        </CardComment>

        <ButtonGroup>
          <Btn btnColor='red'>삭제하기</Btn>
          <Btn btnColor='green' onClick={handleDoneClick}>
            {item.done === false ? '완료' : '취소'}
          </Btn>
        </ButtonGroup>
      </TodoCard>
    </Container>
  );
};

export default Todo;

const Container = styled.div`
  padding: 20px 0;
`;

const TodoCard = styled.div`
  width: 230px;
  padding: 10px 20px;
  border: 2px solid ${(props) => (props.done ? 'green' : 'red')};
  border-radius: 10px;
  overflow-wrap: ;
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

const Btn = styled.div`
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
  font-size: 14px;
  padding: 5px 0;
  border: 2px solid ${(props) => props.btnColor};
  border-radius: 5px;
`;
