import {useState} from "react";

function Todo() {
    const [activity, setActivity] = useState('');
    const [edit, setEdit] = useState({});
    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState('');
  
    function generateId() {
      return Date.now();
    }
  
    function saveTodoHandler(event) {
      // simpan todo
      event.preventDefault();
  
      if(!activity){
        return setMessage('Data Masih Kosong broo!!!!')
      }
      setMessage('')
  
      if (edit.id) {
        //edit Todo
        const updatedTodo = {
          id: edit.id,
          activity, //jika nama sama bisa di tulis satu
        };
        const editTodoIndex = todos.findIndex(function (todo) {
          return todo.id === edit.id;
        });
        const updatedTodos = [...todos];
        updatedTodos[editTodoIndex] = updatedTodo;
  
        setTodos(updatedTodos);
        return cancelEditHandler();
      }
      if (activity) {
        setTodos([
          //tambah todo
          ...todos,
          {
            id: generateId(),
            activity: activity,
            done: false,
          },
        ]);
      }
      
      setActivity('');
      setMessage('')
  
    }
  
    function removeTodoHandler(todoId) {
      // hapus todo
      const filteredTodos = todos.filter(function (todo) {
        return todo.id !== todoId;
      });
      setTodos(filteredTodos);
      if (edit.id) cancelEditHandler();
    }
  
    function editTodoHandler(todo) {
      // edit todo
      setActivity(todo.activity);
      setEdit(todo);
    }
  
    function cancelEditHandler() {
      console.log('cancel edt');
      setEdit({});
      setActivity('');
    }
  
    function doneTodoHandler(todo) {
      const updatedTodo = {
        ...todo,
        done: todo.done ? false : true,
      }
      const editTodoIndex = todos.findIndex(function (currentTodo) {
        return currentTodo.id === todo.id;
      });
      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = updatedTodo;
  
      setTodos(updatedTodos);
      }
  
    return (
      <>
        <h1>Simple Todo List!!!!</h1>
        
        {message && <div style={{ color: 'red'}} >{message}</div>}
        <form onSubmit={saveTodoHandler}>
          <input
            type="text"
            placeholder="Nama aktifitas"
            value={activity}
            onChange={function (event) {
              setActivity(event.target.value);
            }}
          />
  
          <button type="submit">{edit.id ? 'Simpan Perubahan' : 'Tambah'}</button>
          {edit.id && <button onClick={cancelEditHandler}>Batal Edit</button>}
        </form>
        <ul>
          {todos.map(function (todo) {
            return (
              <li key={todo.id}>
                <input type="checkbox" 
                checked={todo.done}
                onChange={doneTodoHandler.bind(this, todo)} ></input>
                {todo.activity}({todo.done ? 'Selesai' : 'Belum Selesai'})
                <button onClick={editTodoHandler.bind(this, todo)}>Edit</button>
                <button onClick={removeTodoHandler.bind(this, todo.id)}>Hapus</button>
              </li>
            );
          })}
        </ul>
      </>  
    );
  }

  export default Todo;