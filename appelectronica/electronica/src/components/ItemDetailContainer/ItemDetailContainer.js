import { useState, useEffect} from 'react'
import { getProductById } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebase'
import { doc, getDoc } from 'firebase/firestore'
const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const { productId } = useParams()

    useEffect(() => {
        const docRef = doc(db, 'products', productsId)
        
        getDoc(docRef).then(doc => {  
        const productsFormatted = { id: doc.id,...doc.data() }
        setProduct(productsFormatted)
        }).catch(error => {
            console.log(error)
        })
   
        //     getProductById(productId).then(response => {
   //         setProduct(response)
   //     })
    }, [productId])

    return (
        <>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product} />
        </>
    )
}

export default ItemDetailContainer