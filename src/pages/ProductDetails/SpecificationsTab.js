export default function Specifications({ styles }) {
    return (
        <div className={styles['specifications-tab-details']}>
            <div className={`${styles.column} ${styles['column-1']}`}>
                <div>
                    <h3>Xuất xứ</h3>
                    <p>Ethiopia</p>
                </div>

                <div className={styles.separator}></div>

                <div>
                    <h3>Độ rang</h3>
                    <p>Medium</p>
                </div>

                <div className={styles.separator}></div>

                <div>
                    <h3>Dạng</h3>
                    <p>Hạt nguyên</p>
                </div>

                <div className={styles.separator}></div>

                <div>
                    <h3>Bảo quản</h3>
                    <p>Nơi khô ráo, thoáng mát</p>
                </div>

                <div className={styles.separator}></div>
            </div>

            <div className={`${styles.column} ${styles['column-2']}`}>
                <div>
                    <h3>Giống cà phê</h3>
                    <p>Arabica</p>
                </div>

                <div className={styles.separator}></div>

                <div>
                    <h3>Trọng lượng</h3>
                    <p>500g</p>
                </div>

                <div className={styles.separator}></div>

                <div>
                    <h3>Hạn sử dụng</h3>
                    <p>12 tháng</p>
                </div>

                <div className={styles.separator}></div>

                <div>
                    <h3> </h3>
                    <span><p> </p></span>
                </div>
            </div>
        </div>
    );
};