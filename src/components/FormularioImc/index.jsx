import React from 'react';
import styles from './FormularioImc.module.css';

const FormularioImc = ({ onAlturaChange, onPesoChange, onBlur }) => {
    return (
        <form className={styles.formulario} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
                <label htmlFor="altura" className={styles.label}>Altura (m)</label>
                <input
                    type="number"
                    id="altura"
                    className={styles.input}
                    onChange={(e) => onAlturaChange(parseFloat(e.target.value))}
                    onBlur={onBlur}
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="peso" className={styles.label}>Peso (kg)</label>
                <input
                    type="number"
                    id="peso"
                    className={styles.input}
                    onChange={(e) => onPesoChange(parseFloat(e.target.value))}
                    onBlur={onBlur}
                />
            </div>
        </form>
    );
};

export default FormularioImc;
