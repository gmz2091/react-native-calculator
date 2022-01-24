import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../../assets/Styles';
import ButtonCalc from '../../components/ButtonCalc';
import useCalculator from '../../hooks/useCalculator';

const CalculadoraScreen = () => {
  const {
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
  } = useCalculator();

  return (
    <View>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoXS}>{numeroAnterior}</Text>
      )}
      <Text style={styles.resultado} numberOfLines={3} adjustsFontSizeToFit>
        {numero}
      </Text>
      <View style={styles.row}>
        <ButtonCalc
          text="C"
          backgroundButton={styles.colorButton}
          action={limpiar}
        />
        <ButtonCalc
          text="+/-"
          backgroundButton={styles.colorButton}
          action={operatorPositiveNegative}
        />
        <ButtonCalc
          text="CC"
          backgroundButton={styles.colorButton}
          action={borrarUltimoDigito}
        />
        <ButtonCalc
          text="➗"
          backgroundButton={styles.colorButtonCol}
          action={btnDiv}
        />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="7" action={agregarNumero} />
        <ButtonCalc text="8" action={agregarNumero} />
        <ButtonCalc text="9" action={agregarNumero} />
        <ButtonCalc
          text="✖️"
          backgroundButton={styles.colorButtonCol}
          action={btnMult}
        />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="4" action={agregarNumero} />
        <ButtonCalc text="5" action={agregarNumero} />
        <ButtonCalc text="6" action={agregarNumero} />
        <ButtonCalc
          text="➖"
          backgroundButton={styles.colorButtonCol}
          action={btnResta}
        />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="1" action={agregarNumero} />
        <ButtonCalc text="2" action={agregarNumero} />
        <ButtonCalc text="3" action={agregarNumero} />
        <ButtonCalc
          text="➕"
          backgroundButton={styles.colorButtonCol}
          // Sumber
          action={btnSuma}
        />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="0" ancho action={agregarNumero} />
        <ButtonCalc text="." action={agregarNumero} />
        <ButtonCalc
          text="="
          backgroundButton={styles.colorButtonCol}
          action={result}
        />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
