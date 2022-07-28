import Todo from './Todo';
import styled from 'styled-components';

const List = ({ todoList, handleDelete, handleToggle }) => {
  return (
    <div>
      <TodoContent>
        <TodoList>
          <h2>Working🔥</h2>
          <TodoCard>
            {todoList.map(
              (todo) =>
                todo.done === false && (
                  <Todo
                    item={todo}
                    key={todo.id}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                  />
                )
            )}
          </TodoCard>
        </TodoList>

        <TodoList>
          <h2>Done🎉</h2>
          <TodoCard>
            {todoList.map(
              (todo) =>
                todo.done === true && (
                  <Todo
                    item={todo}
                    key={todo.id}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                  />
                )
            )}
          </TodoCard>
        </TodoList>
      </TodoContent>
    </div>
  );
};

export default List;

const TodoContent = styled.div``;

const TodoList = styled.div`
  margin-top: 20px;
  border-radius: 10px;
  background-color: #f6f6f6;
  padding: 20px;
`;

const TodoCard = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 260px);
  row-gap: 10px;
  column-gap: 40px;
`;
