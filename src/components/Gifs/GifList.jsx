import { PureComponent } from "react";
import { GifSearch } from "./GifsSearch";

export class GifsList extends PureComponent {
    state = {
      gif: "",
      error: null,
      status: "resolve"
    }

    componentDidUpdate(){

    }

    render(){
        const {gif, status, error} = this.state
        const {gifs} = this.props
   return <ul>
        {gifs && gifs.map((gif) => {
          return <li key={gif.id}>
            <img src={gif.images.original.url} alt={gif.id} />
           </li>
        })}
    </ul>
    }

}