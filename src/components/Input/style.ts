import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {

  },
  signIn: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'center'
  },
  label:{
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
    marginLeft: 20,
    marginTop: 20,
  },
  inputIcon:{
    marginLeft: 10
  },
  inputText:{
    fontSize: 16,
    color: colors.aqua,
    padding: 10,
    flex: 1,
  },
  errorWarning: { 
    height: 55,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  defaultInputContainer: { 
    height: 55,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pressedInputContainer: {
    height: 55,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon:{
    marginRight: 10,
  },
  errorText:{
    color: colors.red,
    fontSize:12,
    marginTop:7,
    marginLeft:5,

},
});

export default styles;
