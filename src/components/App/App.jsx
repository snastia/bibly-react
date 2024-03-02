// import s from './App.module.css';
import { Component, PureComponent } from 'react';
import { GlobalStyle } from '../../GlobalStyle.styled';
// import { PokemonForm } from '../Pokemon/PokemonForm';
// import { PokemonInfo } from '../Pokemon/PokemonInfo';
import { GifsList } from '../Gifs/GifList';
import { GifSearch } from '../Gifs/GifsSearch';

// http://pokeapi.co/api/v2/pokemon/name

export class App extends PureComponent{
   state = {
    query: "",
    gifs: null
   }

   componentDidMount(){
    fetch("https://api.giphy.com/v1/gifs/trending?api_key=4SbAqHNJAZTZ2C2wCb3cZJh6CYhOREVj&tag=&rating=g")
    .then(res => res.json())
    .then(gifs => this.setState({gifs: gifs.data}))
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
       <GifSearch onNameChange={this.onNameChange}/>
       <GifsList name={this.state.query} gifs={this.state.gifs}/>
      </>
        <GlobalStyle/>
    </div>
   )
  }
} 