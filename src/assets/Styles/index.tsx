import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141313',
  },
  containerView: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  statusBarColor: {
    backgroundColor: '#111111',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  resultado: {
    color: '#fff',
    fontSize: 60,
    textAlign: 'right',
  },
  resultadoXS: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'right',
    opacity: 0.5,
  },
  titleHome: {
    color: '#fff',
    fontSize: 20,
  },
  button: {
    borderRadius: 100,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  buttonText: {
    color: '#000000',
    fontSize: 30,
    fontWeight: '300',
  },
  colorButton: {
    backgroundColor: '#9B9B9B',
  },
  colorButtonRow: {
    backgroundColor: '#2D2D2D',
  },
  colorButtonCol: {
    backgroundColor: '#FF9427',
  },
  widthButton: {
    width: 180,
  },
});
