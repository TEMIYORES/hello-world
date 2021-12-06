import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedin: true,
    };
  }

  render() {
      // short circuit operator
      return this.state.isLoggedin && <div>Welcome Temiyores</div>
    //   tenary operator
    //   return(
    //       this.state.isLoggedin ?
    //       <div>Welcome Temiyores</div> :
    //       <div>Welcome Guest</div>
    //   )

      // Element variables
// let message;
//     if (this.state.isLoggedin) {
//         message = <div>Welcome Temiyores</div>
//     }else{
//         message = <div>Welcome Guest</div>
//     }
//     return <div>{message}</div>

        // if else statement
    // if (this.state.isLoggedin) {
    //   return (
    //     <div>
    //       <h3>Welcome Temiyores</h3>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <div>Welcome Guest</div>
    //     </div>
    //   );
    // }
    // return (
    //     <div>
    //         <h3>Welcome Temiyores</h3>
    //         <div>Welcome Guest</div>
    //     </div>
    // )
  }
}

 export default UserGreeting;
