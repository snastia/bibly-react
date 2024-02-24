import { PureComponent } from "react";

export class PokemonInfo extends PureComponent{

state = {
    pokemon: "",
    isLoading: false
}

componentDidUpdate(prevProps, prevState) {
    if(prevProps.pokemonName !== this.props.pokemonName){
    this.setState({isLoading: true, pokemon: null})
    fetch(`http://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
    .then(res => res.json())
    .then(pokemon => {
        this.setState({pokemon, isLoading: false})})
    }
    }

render (){
    const {pokemon, isLoading} = this.state
    return(
        <>
        {isLoading && <div>Loading...</div>}
         {pokemon && <div>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.other['official-artwork'].front_default} alt="" />
       </div>}
        </>
    )
}
}