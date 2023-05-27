import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    borderWidth :1,
    borderColor: colors.myGreen,
    backgroundColor: colors.white,
    width: 20,
    height: 20,
  },
  checked: {
    backgroundColor: colors.myGreen,
  },
});

export default styles;
