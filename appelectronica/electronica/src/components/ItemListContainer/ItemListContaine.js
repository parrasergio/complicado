import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncmock'
import ItemLis from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading ] = useState(true)
    const { categoryId} = useParams()


    useEffect(() => {
        setLoading(true)

        const onResize = () => {
            console.log('cambio')
    }

        window.addEventListener('resize', onResize)

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])
    
    useEffect(() => {
        if (!categoryId) {
            getProducts().then(response => {
                setProducts(response)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            getProductsByCategory(categoryId).then(response => {
                setProducts(response)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        }
    }, [categoryId])

    if(loading)
        return <h1>CARGANDO......</h1>


    return (
        <div>

            <h1 className='Titulo'>{props.greeting}</h1>
            {products.length > 0
                ?<ItemLis products={products} />
                : <h1>SIN stock</h1>}
        </div>
    )
}

export default ItemListContainer