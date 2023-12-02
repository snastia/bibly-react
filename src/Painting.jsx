import PropTypes from 'prop-types';

export const Painting = ({ id, title, url, quantity, price, author }) => {
    return(
        <li key={id}>
        <img src={url} alt="" width="480" />
        <h2>{title}</h2>
        <p>Автор: <a href={author.tag}></a></p>
        <p>Ціна: {price} грн</p>
        <p>Доступність: {quantity < 5 ? "закінчується" : `є в наявності ${quantity}`}</p>
        <button type="button">Додати в кошик</button>
        </li>
        
    )}

Painting.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
    author: PropTypes.string
}