import './Item.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../App'

const Item = ({id, name, img, price, category, description}) => {

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                <Link to={`/detail/${description}`} className='Option'>Ver detalle</Link>
            </footer>
        </article>
    )
}
export default Item
 