
import React from 'react'
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
        inc=()=>{this.setState({count:this.state.count+1})
        }
        Dec=()=>{this.setState({count:this.state.count-1})
        }
        Reset=()=>{this.setState({count:0})
        }


    
    render(){
        return(
            <>
              <div id="one">
            <h1>{this.state.count}</h1>

            <button id="two"onClick={this.inc}>+</button>
            <button  id="three"onClick={this.Dec}>-</button>
            <button  id="four"onClick={this.Reset}>Reset</button>
            </div>
            </>
        )
    }
   
    }
    export default App

