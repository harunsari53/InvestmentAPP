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
    width: '90%',
  },
  code: {
    color: colors.myGreen,
  },
  shortName: {
    color: colors.grey,
    fontWeight: '400',
    fontSize: 12,
  },
  fullName: {
    color: colors.black,
    fontWeight: '600',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
});

export default styles;
