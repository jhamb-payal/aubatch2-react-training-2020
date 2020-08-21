import React from 'react';

// function Greet (){
//     return <h1>Hello World</h1>
// }

export const Greet = (props) => {
    console.log(props);
    props.name = "geetika"
return <>{props.children}
<h1>Hello {props.name}!</h1></>}

//export default Greet