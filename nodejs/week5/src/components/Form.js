import { useState, useEffect } from 'react';

const initialFormValue = {text: "", done: false, edit:false};

function Form({ setTodos, todos }){
    
    const [form, setForm] = useState(initialFormValue);

    useEffect(() => {
        setForm(initialFormValue);
    }, [todos]);

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, form]);
    }

   
    return (
        <>     
            <header className="header">
                <h1>todos</h1>  
                <form onSubmit={onSubmit}>
                    <input onChange={onChangeInput} className="new-todo" name="text" placeholder="What need to be done?" value={form.text} autoFocus/> 
                </form>
            </header>     
        </>
    );
}

export default Form;