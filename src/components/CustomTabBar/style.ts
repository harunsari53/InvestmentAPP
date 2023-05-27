import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    width,
    height: height * 0.1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  midTabStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    top: (height * -0.04) / 2.5,
    backgroundColor: colors.myGreen,
    borderRadius: (width * width) / 2,
    width: width * 0.15,
    height: width * 0.15,
    marginBottom: '5%',
  },
  tabStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
    width: 25,
    height: 25,
  },
});

export default styles;
