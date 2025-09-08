import productData from '../../data/products.json';

export default function DetailedDescription( {styles} ) {
    return (
        <div className={styles['tab-details']}>
            <p>{productData.productDetail.DetailedDescription[0]}</p>

            <p>
                {productData.productDetail.DetailedDescription[1]}
            </p>

            <p>{productData.productDetail.DetailedDescription[2]}</p>

            <p>
                {productData.productDetail.DetailedDescription[3]}
            </p>

            <p>{productData.productDetail.DetailedDescription[4]}</p>
        </div>
    );
};