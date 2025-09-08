import styles from './productpage.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import productData from '../data/products.json'

export default function TestProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [currentImage, setCurrentImage] = useState(''); 

    useEffect(() => {
        const foundProduct = productData.find(p => p.id === id);

        if(foundProduct) {
            setProduct(foundProduct);
            setCurrentImage(foundProduct.productDetail.mainImage);
        } else {
            console.error(`Product ${id} not found`);
        }
    }, [id]);

    if(!product) {
        return <div>Loading ...</div>
    }

    const details = product.productDetail;

    return (
        <>
            <div>
                <img src={currentImage} className={styles['main-image']} alt='Product thumbnail' />

                <div>
                    {details.subImages.map((image, index) => (
                        <div onClick={() => setCurrentImage(image)} key={index}>
                            <img src={image} alt='Thumbnail' />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}