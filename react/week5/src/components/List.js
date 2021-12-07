import { useState } from 'react';

function List({setTodos, filter, todos}){

    let [doneStatus, setDoneStatus] = useState(false);

    const selectItem = (item)=>{
        const indexItem = todos.indexOf(item);
        const newTodos = [...todos];
        newTodos[indexItem].done = !newTodos[indexItem].done;
        setTodos(newTodos);
    }

    const selectAllItem = ()=>{
        const arr = todos.map((todo) => {return {...todo, done: doneStatus}});
        setDoneStatus(!doneStatus);
        setTodos(arr);
    }

    const removeItem = (item)=>{
        const newTodos = todos.filter((todo) => todo != item);
        setTodos(newTodos);
    }

    const onSubmit = (e, item) => {
        e.preventDefault();
        const indexItem = todos.indexOf(item);
        const newTodos = [...todos];
        newTodos[indexItem].edit = !newTodos[indexItem].edit;
        setTodos(newTodos);
    }

    const editItem = (e, item) => {
        const indexItem = todos.indexOf(item);
        const newTodos = [...todos];
        newTodos[indexItem].text = e.target.value;
        setTodos(newTodos);
    }

    return (
        <>
            <section className="main">
                <input onClick={selectAllItem} className="toggle-all" id="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">
                    Mark all as complete
                </label>

                <ul className="todo-list">
                    {
                        todos.filter((item) => filter == undefined ? item.done != filter : item.done == filter)
                        .map((item,index)=>{
                            if(item.edit && !item.done){
                                return (
                                    <li key={index} className="edit" >
                                        <div className="view">
                                            <form onSubmit={(e) => onSubmit(e,item)}>
                                                <input onChange={(e) => editItem(e,item)} type="text" value={item.text} placeholder="(Text)" autoFocus/>
                                            </form>
                                        </div>
                                    </li>
                                    )
                            }
                            else{
                                return (
                                    <li key={index} className={ item.done ? "completed" : ""} >
                                        <div className="view">
                                            <input onClick={() => selectItem(item)} className="toggle" type="checkbox" />
                                            <label onClick={(e) => onSubmit(e,item)} htmlFor="toggle">{item.text}</label>
                                            <button onClick={() => removeItem(item)} className="destroy"></button>
                                        </div>
                                    </li>
                                    )
                            }
                        })  
                    }

                </ul>
            </section>
        </>
    );
    
}

export default List;