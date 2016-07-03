
import React from 'react';

class App extends React.Component {
   render () {
       return (
            <div>
               <h1>Hellow world</h1>
                <h1>{this.props.result}</h1>
                <button> - </button>
                <button> + </button>
           </div>
       )
    };
}

App.defaultProps = {
    result: 0
};



export default App;
