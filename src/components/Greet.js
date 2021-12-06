import React from "react"

// function Greet(){
//     return <h1>Hello Temiyores</h1>
// }
// export const Greet = () => <h1>Hello Temiyores</h1>


//  const Greet = (props) => {
//      console.log(props)
//      return(
//          <div>
//  <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//  {props.children}
//  </div>
//      )
//  }

//  destructuring-- 1

//  const Greet = (props,{name, heroName}) => {
//    console.log(props);
//    return (
//      <div>
//        <h1>
//          Hello {name} a.k.a {heroName}
//        </h1>
//        {props.children}
//      </div>
//    );
//  };

//  destructing 2
 const Greet = (props) => {
     const {name,heroName}= props;
   console.log(props);
   return (
     <div>
       <h1>
         Hello {name} a.k.a {heroName}
       </h1>
       {props.children}
     </div>
   );
 };
export default Greet