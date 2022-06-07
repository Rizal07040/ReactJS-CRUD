const root = document.querySelector('#root'); // // const className = 'box';
// const element = <div className="box"></div>
// button event handling
// function padaSaatAkuDiklik(msg){
//     alert(msg);
// }
// const element = (
//     <button onClick={padaSaatAkuDiklik.bind(this, 'Hello, aku diklik!')}>Click Me</button>
// );

function App() {
  const [count, setCount] = React.useState(0); // const count = state[0];
  // const updateCount = state[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count - 1);
    }
  }, "-"), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    }
  }, "+"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);