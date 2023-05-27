import {StyleSheet} from 'react-native';
import {colors} from '../../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    margin: 5,
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  code: {
    color: colors.myGreen,
  },
  fullName: {
    color: colors.black
  },
  description: {
    color: colors.grey,
    fontWeight: '400',
    fontSize: 12,
  },
});

export default styles;