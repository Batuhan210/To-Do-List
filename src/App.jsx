import { useState } from "react";
import './App.scss';

const TodoApp = () => {
    const [ todoInput, setTodoInput ] = useState('');
    const [ todos, setTodos ] = useState([]);

    const addTodo = () => {
        setTodos([...todos, todoInput]);
        setTodoInput('');
    };

    /* we can delete the list element when on the click  */
    const deleteTodo = (index) => {
        setTodos(todos.filter((todo, i) => i !== index));
    };

    return (
        <div className="Todo">
            <h1>to do list</h1>
            <input
                type="text"
                value={todoInput}
                onChange={(event) => setTodoInput(event.target.value)}
               placeholder="Enter a todo"
            />
    <button className="button" onClick={addTodo}>Add Todo</button>
        <ul>
            {todos.map((todo, index) => (
                <li
                    key={index}
                    onClick={() => deleteTodo(index)} >
                    {todo}
                    </li>    
            ))}
        </ul>
        </div>
    );
};
export default TodoApp;
