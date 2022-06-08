const root = document.querySelector('#root');

// // const className = 'box';
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
function App() {
    const [login, setLogin] = React.useState(false);
    const judulRef = React.useRef(null);

    React.useEffect(function () {
        setTimeout(function () {
            judulRef.current.textContent = 'Aplikasi';

        },1000);
    },[]);

    return (
        <>
        <h1 ref = {judulRef}>Application</h1>
                </>
    );
}

ReactDOM.render(<App />, root);