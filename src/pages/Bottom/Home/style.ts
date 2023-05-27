import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

const styles = StyleSheet.create({
  deleteContainer: {
    position: 'absolute',
    bottom: 20,
    width: '90%',
    height: 40,
    backgroundColor: colors.myGreen,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  deleteText: {
    color: colors.white,
    fontWeight: '600',
    marginRight: 5,
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
