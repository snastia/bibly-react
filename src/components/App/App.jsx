// import s from './App.module.css';
// import { Header } from './components/Header';
import painting from "../../painting1.json";
// import { PaintingList } from './components/PaintingList/PaintingList';
// import { ColorPicker } from '../ColorPicker/ColorPicker';
// import { colorPickerOptions } from '../colorOptions';
// import { Alert } from "../Alert/Alert"
// import { Title, Container } from "./App.styled"
// import { GlobalStyle } from '../../GlobalStyle.styled';
// import { Counter } from "../Counter/Counter"
// import { PaintingList } from '../PaintingList/PaintingList';
import { Component } from 'react';

export class App extends Component{
   state = {
     data: painting,
   }

   toggleVisible = () => {
    this.setState((prev) => {
      return{
        isVisible: !prev.isVisible
      }
    })
   }

  render(){
    
    return (
      <div>
        <button type="button" onClick={this.toggleVisible}>{this.state.isVisible ? "Приховати" : "Показати"}</button>
        {this.state.isVisible && <p>Ви мене бачите</p>}
        {/* <PaintingList paintingData={this.state.data}/> */}
      </div>
   )
  }
    // <Counter/>
    // <Container>
    //  <Title>Title</Title>
    // </Container>
    // <ColorPicker options={colorPickerOptions}/> 
    //  <Alert text="Останнє попередження" type="warning"/>
    //  <Alert text="Ура! Все ок!" type="success"/>
    //  <Alert text="О жах - все пропало!" type="error"/ > 
}