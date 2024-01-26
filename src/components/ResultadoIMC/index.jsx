import React from 'react';
import styles from './ResultadoIMC.module.css';

const ResultadoIMC = ({ imc }) => {
    const classificacao = (imc) => {
        if (imc < 18.5) return 'Abaixo do peso';
        if (imc >= 18.5 && imc <= 24.9) return 'Peso normal';
        if (imc >= 25 && imc <= 29.9) return 'Sobrepeso';
        if (imc >= 30 && imc <= 34.9) return 'Obesidade grau 1';
        if (imc >= 35 && imc <= 39.9) return 'Obesidade grau 2';
        return 'Obesidade grau 3';
    };

    return (
        <div className={styles.resultado}>
            <p>Seu IMC é {imc.toFixed(1)}</p>
            <p>Classificação: {classificacao(imc)}</p>
        </div>
    );
};

export default ResultadoIMC;
