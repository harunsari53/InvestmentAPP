import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wheel: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
});
export default styles;
