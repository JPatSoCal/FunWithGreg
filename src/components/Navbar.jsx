const Navbar = (props) => {
//   let a = props.a;
//   let b = props.b;
let {a, b, c}=props;
  return <div><h1>Hello World {a} {b} ({c ? "Yes" : "No"}) {JSON.stringify(props)} </h1></div>

};
export default Navbar;
