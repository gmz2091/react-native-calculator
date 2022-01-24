import {SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {styles} from './src/assets/Styles';
import Home from './src/screen/Home';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={styles.statusBarColor.backgroundColor}
        barStyle="light-content"
      />
      <Home />
    </SafeAreaView>
  );
};

export default App;
