import Todo from './Todo';
import styled from 'styled-components';

const List = (props) => {
  return (
    <div>
      <TodoContent>
        <TodoList>
          <h2>Working🔥</h2>
          <TodoCard>
            {props.todoList.map((todo) =>
              todo.done === false ? (
                <Todo
                  item={todo}
                  key={todo.id}
                  handleDelete={props.handleDelete}
                />
              ) : null
            )}
          </TodoCard>
        </TodoList>

        <TodoList>
          <h2>Done🎉</h2>
          <TodoCard>
            {props.todoList.map((todo) =>
              todo.done === true ? <Todo item={todo} key={todo.id} /> : null
            )}
          </TodoCard>
        </TodoList>
      </TodoContent>
    </div>
  );
};

export default List;

const TodoContent = styled.div`
  border: 1px solid black;
`;

const TodoList = styled.div`
  border: 1px solid red;
`;

const TodoCard = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 260px);
  row-gap: 10px;
  column-gap: 40px;
`;
