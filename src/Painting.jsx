import painting from "./painting1.json"

const options = painting[0]

export function Painting (){
    return(
        <>
      {painting.map(option => 
      <div>
        <img src={options.url} alt="" width="480" />
        <h2>{options.title}</h2>
        <p>Автор: <a href={options.author.url}>{options.author.tag}</a></p>
        <p>Ціна: {options.price} грн</p>
        <p>Доступність: {options.quantity < 5 ? "закінчується" : `є в наявності ${options.quantity}`}</p>
        <button type="button">Додати в кошик</button>
    </div>
    )}
    </> )
}