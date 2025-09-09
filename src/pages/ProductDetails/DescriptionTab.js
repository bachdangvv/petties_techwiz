export default function DetailedDescription( {styles, data} ) {

    if(!data) {
        return <p>Không có mô tả chi tiết cho sản phẩm này</p>
    }

    if (!Array.isArray(data) || data.length === 0) {
        return <p>Không có mô tả chi tiết cho sản phẩm này.</p>;
    }

    return (
        <div className={styles['tab-details']}>
            {data.map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </div>
    );
};