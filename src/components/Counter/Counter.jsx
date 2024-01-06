import { Component } from "react";
import "./Counter.css";
import { Buttons} from "./Buttons"
import { CounterValue } from "./СounterValue";

export class Counter extends Component {

  static defaultProps = {
    initialValue: 0,
  }

  state = {
    value: this.props.initialValue,
  }

   handleIncrement = () =>{
    //  this.setState({
    //     value: 5,
    //  })

     this.setState((prevState) => {
        return{
            value: prevState.value + 1
        }
     })
   }

   handleDecrement = () =>{
     this.setState((prevState) => {
        return{
            value: prevState.value - 1
        }
     })
   }

   render(){
    return(
      <div className="Counter Counter__controls">
        <CounterValue value={this.state.value}/>
        <Buttons onIncrement={this.handleIncrement}
                 onDecrement={this.handleDecrement}/>
    </div>
    )
   }
}

// коли змінюється або пропс або стейт (в яких випадках перемальовується розмітка)