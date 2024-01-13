// import s from './App.module.css';
// import { Header } from './components/Header';
// import painting from "../../painting1.json";
// import { PaintingList } from './components/PaintingList/PaintingList';
import { ColorPicker } from '../ColorPicker/ColorPicker';
import { colorPickerOptions } from '../colorOptions';
// import { Alert } from "../Alert/Alert"
// import { Title, Container } from "./App.styled"
import { GlobalStyle } from '../../GlobalStyle.styled';
// import { Counter } from "../Counter/Counter"
// import { PaintingList } from '../PaintingList/PaintingList';
// import { Component } from 'react';
// import { DropdownMenu } from "../DropdownMenu/Dropdown";

export function App(){
   return(
    <div>
        <ColorPicker options={colorPickerOptions}/> 
        <GlobalStyle/>
    </div>
   )
  }
    // <Counter/>
    // <Container>
    //  <Title>Title</Title>
    // </Container>
    //<DropdownMenu/> 
    //  <Alert text="Останнє попередження" type="warning"/>
    //  <Alert text="Ура! Все ок!" type="success"/>
    //  <Alert text="О жах - все пропало!" type="error"/ > 