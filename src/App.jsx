import React, { useState } from 'react';
import FormularioImc from './components/FormularioImc';
import ResultadoIMC from './components/ResultadoIMC';
import RecomendacaoPeso from './components/RecomendacaoPeso';
import styles from './App.module.css';

const App = () => {
  const [altura, setAltura] = useState(null);
  const [peso, setPeso] = useState(null);
  const [imc, setImc] = useState(null);
  const [pesoIdeal, setPesoIdeal] = useState(null);

  const calcularIMC = (altura, peso) => {
    if (altura > 0 && peso > 0) {
      const imcCalculado = peso / (altura * altura);
      setImc(imcCalculado);

      const minPesoIdeal = 18.5 * (altura * altura);
      const maxPesoIdeal = 24.9 * (altura * altura);
      setPesoIdeal({ min: minPesoIdeal, max: maxPesoIdeal });
    }
  };

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Calculadora de Indice de Massa Corporal (IMC)</h1>
      </header>
      <FormularioImc onAlturaChange={setAltura} onPesoChange={setPeso} onBlur={() => calcularIMC(altura, peso)} />
      {imc && <ResultadoIMC imc={imc} />}
      {pesoIdeal && <RecomendacaoPeso pesoIdeal={pesoIdeal} />}
    </div>
  );
};

export default App;
