
import React from 'react';

class App extends React.Component {
    //create the this
    constructor(){
        //must start with super()
        super();
        //default values
        this.state = {
            result: 0
        };
        //must have this, don't know why
        this.incrementHandler =  this.incrementHandler.bind(this);
        this.decrementHandler =  this.decrementHandler.bind(this);
    }
   // the functions:
   incrementHandler() {
       this.setState({result: this.state.result +1});
   }
   decrementHandler (){
        this.setState({result: this.state.result -1});
   }

   render () {
       return (
            <div>
               <h1>Hellow world</h1>
                /*on click call function*/
                <h1>{this.state.result}</h1>
                <button onClick={this.incrementHandler}> + </button>
                <button onClick={this.decrementHandler}> - </button>
           </div>
       )
    };
}






export default App;
