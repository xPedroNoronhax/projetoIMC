import React, { useState } from 'react';

import styles from './Main.module.css'

const Main = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultadoIMC, setResultadoIMC] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const handlePeso = (e) => {
    setPeso(e.target.value);
  };

  const handleAltura = (e) => {
    setAltura(e.target.value);
  };

  const calculaIMC = () =>{
    let numeroPeso = parseFloat(peso)
    let numeroAltura = parseFloat(altura)

    let resultadoIMC = numeroPeso / Math.pow(numeroAltura, 2)
    let resultadoIMCArredondado = resultadoIMC.toFixed(2)

    setResultadoIMC(resultadoIMCArredondado)

    if(resultadoIMC < 18.5){
        setClassificacao('Abaixo do peso')
    } else if(resultadoIMC < 24.9){
        setClassificacao('Peso Normal')
    }else if(resultadoIMC < 29.9){
        setClassificacao('Pre obesidade')
    }else if(resultadoIMC < 34.9){
        setClassificacao('Obesidade Grau 1')
    }else if(resultadoIMC < 39.9){
        setClassificacao('Obesidade Grau 2')
    }else {
        setClassificacao('Obesidade Grau 3')
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    calculaIMC();


    setPeso('')
    setAltura('')
  };

  return (
    <div className="container">
      <div className={styles.main}>
          <h1>Descubra seu IMC:</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Peso:</span>
              <input type="number" placeholder="Digite aqui o seu peso" value={peso} onChange={handlePeso} />
            </label>
            <label>
              <span>Altura:</span>
              <input type="number" placeholder="Digite aqui o sua altura" value={altura} onChange={handleAltura} />
            </label>
            <input type="submit" className={styles.btn} value="Calcular IMC" />
          </form>
          {resultadoIMC !== null && (
            <div>
              <h2>Resultado do IMC:</h2>
              <p>Seu IMC é: {resultadoIMC}</p>
              <p>Classificação: {classificacao}</p>
            </div>
          )}
      </div>
    </div>
  );
};

export default Main;
