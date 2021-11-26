import React from "react";

function Footer({setFilter, setTodos, filter, todos}){

    const getTodosCount = todos.filter(item => item.done == false).length;
    const clearCompleted = () => {
        const newTodos = todos.filter(item => !item.done);
        setTodos(newTodos);
    }

    return (
        <>
            <footer className="footer">
                <span className="todo-count">
                    <strong>{getTodosCount}&nbsp;</strong>
                    items left
                </span>

                <ul className="filters">
                    <li>
                        <a onClick={()=>setFilter(undefined)} className={filter == undefined ? "selected" : ""} >All</a>
                    </li>
                    <li>
                        <a onClick={()=>setFilter(false)} className={filter == false ? "selected" : ""} >Active</a>
                    </li>
                    <li>
                        <a onClick={()=>setFilter(true)} className={filter == true ? "selected" : ""} >Completed</a>
                    </li>
                </ul>

                <button onClick={clearCompleted} className="clear-completed">
                    Clear completed
                </button>
            </footer>
        </>
    )
}

export default Footer;
