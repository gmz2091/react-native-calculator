import {useRef, useState} from 'react';

enum Operador {
  suma,
  resta,
  multiplicacion,
  division,
}

const useCalculator = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const lastOperation = useRef<Operador>();

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const agregarNumero = (numeroText: string) => {
    // Numero con punto
    if (numeroText === '.' && numero.includes('.')) {
      return;
    }
    // Incluir cero con decimales
    if (numeroText === '.') {
      setNumero(`${numero + numeroText}`);
    } else {
      setNumero(numero === '0' ? numeroText : numero + numeroText);
    }
  };

  const operatorPositiveNegative = () => {
    setNumero(numero === '0' ? '0' : `${parseFloat(numero) * -1}`);
  };

  const refNumber = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  const borrarUltimoDigito = () => {
    let negative = '';
    let numeroTemp = numero;

    if (numero.includes('-')) {
      negative = '-';
      numeroTemp = numero.substring(1);
    }
    setNumero(
      numeroTemp.length === 1 ? '0' : negative + numeroTemp.slice(0, -1),
    );
  };

  const result = () => {
    const numero1 = Number(numeroAnterior);
    const numero2 = Number(numero);
    let resultado =
      lastOperation.current === Operador.suma
        ? numero1 + numero2
        : lastOperation.current === Operador.resta
        ? numero1 - numero2
        : lastOperation.current === Operador.multiplicacion
        ? numero1 * numero2
        : numero1 / numero2;

    // Change NaN to 0
    setNumero(`${isNaN(resultado) ? 0 : resultado}`);

    setNumeroAnterior('0');
  };

  const btnDiv = () => {
    refNumber();
    lastOperation.current = Operador.division;
  };

  const btnMult = () => {
    refNumber();
    lastOperation.current = Operador.multiplicacion;
  };

  const btnResta = () => {
    refNumber();
    lastOperation.current = Operador.resta;
  };

  const btnSuma = () => {
    refNumber();
    lastOperation.current = Operador.suma;
  };
  return {
    limpiar,
    agregarNumero,
    operatorPositiveNegative,
    borrarUltimoDigito,
    result,
    btnDiv,
    btnMult,
    btnResta,
    btnSuma,
    numero,
    numeroAnterior,
  };
};

export default useCalculator;
