import styles from './productpage.module.css';
import productData from '../data/products.json';
import { Link } from 'react-router-dom';

export default function TestProductPage() {
    return (
        <>
            <h1>Product List</h1>

            <div className={styles['products-container']}>
                {productData.map(product => (
                    <div className={styles['product-container']} key={product.id}>
                        <Link to={`/testpage/${product.id}`}>
                            <h2>{product.name}</h2>
                        </Link>

                        <p>{product.description}</p>

                        <img src={product.image} className={styles['product-image']} alt='Product' />
                    </div>
                ))}
            </div>
        </>
    )
}