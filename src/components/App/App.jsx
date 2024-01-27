// import s from './App.module.css';
// import { Header } from './components/Header';
// import painting from "../../painting1.json";
// import { PaintingList } from './components/PaintingList/PaintingList';
// import { ColorPicker } from '../ColorPicker/ColorPicker';
// import { colorPickerOptions } from '../colorOptions';
// import { Alert } from "../Alert/Alert"
// import { Title, Container } from "./App.styled"
import { Component } from 'react';
import { GlobalStyle } from '../../GlobalStyle.styled';
// import { Counter } from "../Counter/Counter"
// import { PaintingList } from '../PaintingList/PaintingList';
// import { Component } from 'react';
// import { DropdownMenu } from "../DropdownMenu/Dropdown";

import { Form } from '../Form/Form';

export class App extends Component{

  state = {
    name: "",
    tel: "",
    level: "junior",
    lisence: false,
    whoIs: ""
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.currentTarget.value
    })
  }

  handleTelChange = (e) => {
    this.setState({
      tel: e.currentTarget.value
    })
  }

  handleRadioChange = (e) => {
    this.setState({
      level:  e.currentTarget.name
    })
  }

  handleCheckboxChange = (e) => {
    this.setState(prevState => ({lisence: !prevState.lisence}))
  }

  getName = (e) => {
    this.setState({
      whoIs: e.currentTarget.value
    })
  }

  render(){
    return(
    <div>
        <form action="">
          <label htmlFor="name">Name
            <input type="text" name='name' id='name' 
            value={this.state.name} 
            onChange={this.handleNameChange}/>
            </label>
            <br />  
             {/* <label htmlFor="">Phone number
              <input type="tel" name='tel' 
              value={this.state.tel} 
              onChange={this.handleTelChange}/>
              </label> */}
        </form>
        {/* <label>
          Student
          <input type="radio" 
          name='student' value={this.state.whoIs} 
          onChange={this.getName}/>
        </label> */}

        {/* <label>
          junior
          <input type="radio" name='junior' 
          value={this.state.level} 
          checked={this.state.level === "junior"}/>
        </label>

        <label>
          middle
          <input type="radio" name='middle' 
          value={this.state.level} 
          checked={this.state.level === "middle"}/>
        </label>

        <label>
          senior
          <input type="radio" name='senior' 
          value={this.state.level} 
          checked={this.state.level === "senior"}/>
        </label> */}

        <Form/>
        <label>
          <input type="checkbox" 
          checked={this.state.lisence} name='lisence'
          onChange={this.handleCheckboxChange}/>
          Погоджуюсь з умовами договору
        </label>
        <br />
        <button>Register</button>
        <GlobalStyle/>
    </div>
   )
  }
  }



// форма з ім'ям учасника конференсії
// 2 радіо з вказанням учасника: студент і викладач
// чекбокс 'погоджуюсь на участь в конферкнсії'



  /* <ColorPicker options={colorPickerOptions}/>  */
    // <Counter/>
    // <Container>
    //  <Title>Title</Title>
    // </Container>
    //<DropdownMenu/> 
    //  <Alert text="Останнє попередження" type="warning"/>
    //  <Alert text="Ура! Все ок!" type="success"/>
    //  <Alert text="О жах - все пропало!" type="error"/ > 