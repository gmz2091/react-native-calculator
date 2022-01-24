import {View} from 'react-native';
import React, {FC} from 'react';
import {styles} from '../../assets/Styles';
import CalculadoraScreen from '../CalculadoraScreen';

const Home: FC = () => {
  return (
    <View style={styles.containerView}>
      <CalculadoraScreen />
    </View>
  );
};

export default Home;
