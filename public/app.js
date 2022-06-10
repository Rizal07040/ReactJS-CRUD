const root = document.querySelector('#root'); // // const className = 'box';
// const element = <div className="box"></div>
// button event handling
// function padaSaatAkuDiklik(msg){
//     alert(msg);
// }
// const element = (
//     <button onClick={padaSaatAkuDiklik.bind(this, 'Hello, aku diklik!')}>Click Me</button>
// );
// function App(){
//     const [count, setCount] = React.useState(0);
//     // const count = state[0];
//     // const updateCount = state[1];
//     return (
//         <>
//         <button
//         onClick={function (){
//             setCount(count - 1);
//         }}>
//             -
//         </button>
//         <span>{count}</span>
//         <button
//         onClick={function (){
//             setCount(count + 1);
//         }}>
//             +
//         </button>
//         </>
//     )
// }
// function App() {
//     const [diklik, setDiklik] = React.useState(false);
//     React.useEffect(function (){
//         console.log(document.getElementById('judul'));
//     }, );
//     return (
//         <>
//         <h1 id="judul">Hallo ini judul !!</h1>
//         <button
//         onClick={
//             function(){
//                 setDiklik(true);
//             }
//         }>
//             Klik aku dong
//         </button>
//         </>
//         );
// }
// setTimeout(function(){
//     ReactDOM.render(<App />, root);
// },1000);
//  useEffec
// function App() {
//     const [login, setLogin] = React.useState(false);
//     if (login) {
//         return (
//             <>
//             <h1>Udah Login, Bro!</h1>
//             <button onClick={function(){
//                 setLogin(false);
//             }}>LogOut</button>
//             </>
//         );
//     }
//     return (
//         <>
//         <h1>Login dulu, Bang!</h1>
//         <button
//         onClick={function (){
//             setLogin(true);
//         }}>Login</button>
//         </>
//     )
// }
// Conditional Rendering
// function App() {
//     const [login, setLogin] = React.useState(false);
//     return (
//         <>
//         <h1>Application</h1>
//         <p>{login ? <b>Kamu sudah login</b> : <i>Kamu belum login!!!</i>}</p>
//         <button
//             onClick={function (){
//                 setLogin(true);
//             }}>
//                 Login
//         </button>
//         </>
//     );
// }
// function App() {
//     const [login, setLogin] = React.useState(false);
//     return (
//         <>
//         <h1>Application</h1>
//         {/* <p>{login && <b>Kamu sudah login !!</b> }</p> */}
//         <p>{login ==true && <b>Kamu sudah login !!</b> }</p>
//         <button
//             onClick={function (){
//                 setLogin(true);
//             }}>
//                 Login
//         </button>
//         </>
//     );
// }
// DOM Manipulation
// function App() {
//     const [login, setLogin] = React.useState(false);
//     const judulRef = React.useRef(null);
//     React.useEffect(function () {
//         setTimeout(function () {
//             judulRef.current.textContent = 'Aplikasi';
//         },1000);
//     },[]);
//     return (
//         <>
//         <h1 ref = {judulRef}>Application</h1>
//                 </>
//     );
// }
// React list
// function App() {
//     const fruits = ['Apple','Orange','Grape','Lengkeng']
//     return (
//         <ul>
//             {fruits.map(function (fruit){
//                 return <li key={fruit}>{fruit}</li>
//             })}
//         </ul>
//     )
// }
// Reactv form UnControlElement
// function App() {
//     const [nama, setNama] = React.useState('Andika');
//     function ketikaSubmit(event){
//         event.preventDefault();
//         console.log('Nama :',nama)
//     }
//     return (
//         <form onSubmit={ketikaSubmit}>
//             <div>
//                 <label>Nama :</label>
//                 <input
//                 type="text"
//                 name="nama"
//                 value={nama}
//                 onChange={function (event){
//                     setNama(event.target.value);
//                 }}
//                 />
//             </div>
//             <button type="submit">Kirim</button>
//         </form>
//     )
// }
// data fetch
// function App() {
//     const [news, setNews] = React.useState([]);
//     const [loading, setLoading] = React.useState(true);
//     React.useEffect(function (){
//         async function getData() {
//             const request = await fetch( //untuk mengambil http request
//                 'https://api.spaceflightnewsapi.net/v3/blogs'
//             );
//             const response = await request.json();
//             setNews(response);
//             setLoading(false);
//         }
//         getData();
//     },[]);
//     return (
//         <>
//         <h1>Data Fetch</h1>
//         {loading ? (
//             <i>Loading data...</i>
//         ) : (
//             <ul>
//                 {news.map(function(item){
//                     return <li key={item.id}>{item.title}</li>
//                 })}
//             </ul>
//         )}
//         </>
//     )
// }
// todo list

function App() {
  const [activity, setActivity] = React.useState('');
  const [edit, setEdit] = React.useState({});
  const [todos, setTodos] = React.useState([]);
  const [message, setMessage] = React.useState('');

  function generateId() {
    return Date.now();
  }

  function saveTodoHandler(event) {
    // simpan todo
    event.preventDefault();

    if (!activity) {
      return setMessage('Data Masih Kosong broo!!!!');
    }

    setMessage('');

    if (edit.id) {
      //edit Todo
      const updatedTodo = {
        id: edit.id,
        activity //jika nama sama bisa di tulis satu

      };
      const editTodoIndex = todos.findIndex(function (todo) {
        return todo.id == edit.id;
      });
      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = updatedTodo;
      setTodos(updatedTodos);
      return cancelEditHandler();
    }

    if (activity) {
      setTodos([//tambah todo
      ...todos, {
        id: generateId(),
        activity: activity,
        done: false
      }]);
    }

    setActivity('');
    setMessage('');
  }

  function removeTodoHandler(todoId) {
    // hapus todo
    const filteredTodos = todos.filter(function (todo) {
      return todo.id != todoId;
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
    const updatedTodo = { ...todo,
      done: todo.done ? false : true
    };
    const editTodoIndex = todos.findIndex(function (currentTodo) {
      return currentTodo.id == todo.id;
    });
    const updatedTodos = [...todos];
    updatedTodos[editTodoIndex] = updatedTodo;
    setTodos(updatedTodos);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple Todo List!!!!"), message && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'red'
    }
  }, message), /*#__PURE__*/React.createElement("form", {
    onSubmit: saveTodoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Nama aktifitas",
    value: activity,
    onChange: function (event) {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, edit.id ? 'Simpan Perubahan' : 'Tambah'), edit.id && /*#__PURE__*/React.createElement("button", {
    onClick: cancelEditHandler
  }, "Batal Edit")), /*#__PURE__*/React.createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: todo.done,
      onChange: doneTodoHandler.bind(this, todo)
    }), todo.activity, "(", todo.done ? 'Selesai' : 'Belum Selesai', ")", /*#__PURE__*/React.createElement("button", {
      onClick: editTodoHandler.bind(this, todo)
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      onClick: removeTodoHandler.bind(this, todo.id)
    }, "Hapus"));
  })));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);