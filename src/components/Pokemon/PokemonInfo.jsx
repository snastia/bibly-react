import { PureComponent } from "react";

// 'idle'
// * 'pending'
// * 'resolved'
// * 'rejected'

export class PokemonInfo extends PureComponent{



    

// state = {
//     pokemon: "",
//     isLoading: false,
//     error: null,
//     status: "idle"
// }

// componentDidUpdate(prevProps) {
//     if(prevProps.pokemonName !== this.props.pokemonName){
//     this.setState({status: "pending", pokemon: null})

//     fetch(`http://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
//     .then(res => {
//         if(!res.ok){
//              return Promise.reject(new Error(`Покемона з іменем ${this.props.pokemonName}
//          не знайдено.`))
//         }
//       return res.json()
//        })
//     .then(pokemon => {
//         this.setState({pokemon, status: "resolved"})
//     }).catch(error => this.setState({error, status: "rejected"}))
//     }
//     }

// render (){
//     const {pokemon, isLoading, error, status} = this.state
//     if(status === "idle"){
//         return <p>Введіть ім'я покемона.</p>
//     }
//     if(status === "pending"){
//         return <div>Loading...</div>
//     }
//     if(status === "resolved"){
//         return <div>
//         <h2>{pokemon.name}</h2>
//         <img src={pokemon.sprites.other['official-artwork'].front_default} alt="" />
//        </div>
//     }
//     if(status === "rejected"){
//         return <div>{error.message}</div>}
//     }
}