import { useState } from 'react';
import styled from 'styled-components';

const Form = (props) => {
  const [todoData, setTodoData] = useState({});

  const handleTodoInput = (e) => {
    setTodoData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onAddTodo = (e) => {
    e.preventDefault();

    if (todoData.title.length > 0 && todoData.content.length > 0) {
      const inputData = {
        title: todoData.title,
        content: todoData.content,
        done: false,
      };

      props.saveTodoData(inputData);

      setTodoData({
        title: '',
        content: '',
      });
    } else {
      alert('내용을 입력해주세요');
    }
    // console.log(inputData);
  };

  return (
    <Container>
      <TextArea>
        <InputArea>
          <input
            type='text'
            placeholder='Title'
            name='title'
            onChange={handleTodoInput}
            value={todoData.title || ''}
          />
        </InputArea>
        <InputArea>
          <input
            type='text'
            placeholder='Content'
            name='content'
            onChange={handleTodoInput}
            value={todoData.content || ''}
          />
        </InputArea>
      </TextArea>
      <ButtonArea>
        <button onClick={onAddTodo}>+</button>
      </ButtonArea>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 20px;
`;

const TextArea = styled.div``;

const InputArea = styled.div`
  width: 400px;
  margin-right: 20px;

  & + & {
    margin-top: 14px;
  }

  input {
    margin-left: 4px;
    border-radius: 6px;
    width: 100%;
    height: 40px;
    padding: 4px 10px;
    outline: none;
    box-sizing: border-box;
    background-color: transparent;
    color: white;
  }
`;

const ButtonArea = styled.div`
  button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid white;
    cursor: pointer;
    color: white;
    font-size: 30px;
  }
`;

export default Form;
