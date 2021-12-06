import React, { Component } from 'react'

// class Welcome extends Component {
//     render(){
//         return <h1>Adios {this.props.name} a.k.a {this.props.heroName}</h1>
//     }
// }

//  destructuring 1
class Welcome extends Component {
    render(){
    const {name,heroName} = this.props;  
        return <h1>Adios {name} a.k.a {heroName}</h1>
    }
}
export default Welcome