import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  codeContainer: {
    backgroundColor: colors.white,
    width: '100%',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    marginVertical: 10,
  },
  codeAbsolute: {
    position: 'absolute',
    right: 10,
    color: colors.myGreen,
  },
  title: {
    color: colors.gold,
    fontSize: 22,
    fontVariant: ['small-caps'],
  },
  priceContainer: {
    width: '100%',
    height: 200,
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  prices: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: colors.border,
    marginVertical: 5,
  },
  buyingPrice: {
    color: colors.myGreen,

    fontWeight: '500',
  },
  sellingPrice: {
    color: colors.red,

    fontWeight: '500',
  },
  latestPrice: {
    color: colors.black,
    fontSize: 18,
  },
  priceTitle: {
    fontSize: 10,
    color: colors.grey,
    marginBottom: 3,
  },
  priceAndTitleContainer: {
    alignItems: 'center',
    width: '33%',
  },
  volumeContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  volumeTitle: {
    color: colors.grey,
  },
  volume: {
    color: colors.black,
    fontSize: 24,
    marginLeft: 10,
    width: '60%',
  },
  button: {
    width: '90%',
    backgroundColor: colors.myGreen,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: colors.white,
  },
});

export default styles;
