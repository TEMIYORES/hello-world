import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    increaseCount(){  
        // this.setState({
        //     count: this.state.count + 1
        // },()=>{
        //     console.log('Callback Value: ',this.state.count)
        // })
        this.setState(
          (prevState, props) => ({
            count: prevState.count + 1,
          }),
          () => {
              console.log('Callback Value: ', this.state.count)
          }
        );
    }
    addFive(){
        this.increaseCount()
        this.increaseCount()
        this.increaseCount()
        this.increaseCount()
        this.increaseCount()
    }
    
    render() {
        return (
            <div>
                Count - {this.state.count}
                <button onClick={()=> this.addFive()}>increase Count</button>
            </div>
        )
    }
}

export default Counter
