import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../screens/Login';

const Stack = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  }
);

export default createAppContainer(Stack);
