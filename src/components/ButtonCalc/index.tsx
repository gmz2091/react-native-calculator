import {View, Text, StyleProp, ViewStyle, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {styles} from '../../assets/Styles';

interface Props {
  text: string;
  backgroundButton?: StyleProp<ViewStyle>;
  ancho?: boolean;
  action: (numeroText: string) => void;
}

const {colorButtonRow} = styles;

const ButtonCalc: FC<{
  text: string;
  backgroundButton?: StyleProp<ViewStyle>;
  ancho?: boolean;
  action: (numeroText: string) => void;
}> = ({
  text,
  backgroundButton = colorButtonRow,
  ancho = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={[
          styles.button,
          backgroundButton,
          ancho ? styles.widthButton : null,
        ]}>
        <Text
          style={{
            ...styles.buttonText,
            color: backgroundButton === colorButtonRow ? '#fff' : '#000000',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCalc;
