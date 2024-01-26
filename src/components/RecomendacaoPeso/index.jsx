import React from 'react';
import styles from './RecomendacaoPeso.module.css';

const RecomendacaoPeso = ({ pesoIdeal }) => {
    return (
        <div className={styles.recomendacao}>
            <p>Seu peso ideal está entre: {pesoIdeal.min.toFixed(1)}kg e {pesoIdeal.max.toFixed(1)}kg</p>
        </div>
    );
};

export default RecomendacaoPeso;
