// import s from './App.module.css';
// import { Header } from './components/Header';
// import painting from "../../painting1.json";
// import { PaintingList } from './components/PaintingList/PaintingList';
// import { ColorPicker } from '../ColorPicker/ColorPicker';
// import { colorPickerOptions } from '../colorOptions';
// import { Alert } from "../Alert/Alert"
// import { Title, Container } from "./App.styled"
import { Component, PureComponent } from 'react';
import { GlobalStyle } from '../../GlobalStyle.styled';
import { PokemonForm } from '../Pokemon/PokemonForm';
import { PokemonInfo } from '../Pokemon/PokemonInfo';
// import { Counter } from "../Counter/Counter"
// import { PaintingList } from '../PaintingList/PaintingList';
// import { Component } from 'react';
// import { DropdownMenu } from "../DropdownMenu/Dropdown";

// import { Form } from '../Form/Form';

// http://pokeapi.co/api/v2/pokemon/name

export class App extends PureComponent{

   state = {
    pokemon: ""
   }

   onNameChange = (name) => {
    console.log(name)
     this.setState({
      pokemon: name
     })
   }

  render(){
    return(
    <div>
      <>
       <PokemonForm onSubmit={this.onNameChange}/>
       <PokemonInfo pokemonName={this.state.pokemon}/>
      </>
        <GlobalStyle/>
    </div>
   )
  }
}



  /* <ColorPicker options={colorPickerOptions}/>  */
    // <Counter/>
    // <Container>
    //  <Title>Title</Title>
    // </Container>
    //<DropdownMenu/> 
    //  <Alert text="Останнє попередження" type="warning"/>
    //  <Alert text="Ура! Все ок!" type="success"/>
    //  <Alert text="О жах - все пропало!" type="error"/ > 