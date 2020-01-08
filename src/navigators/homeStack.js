import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from 'containers/Home';
import LanguageScreen from 'containers/Setting/languages';

const AuthStack = createStackNavigator(
  {
    HomeScreen,
    LanguageScreen,
  },
  {
    initialRouteKey: 'HomeScreen',
    headerMode: 'none',
    mode: 'modal',
  },
);

export default AuthStack;
