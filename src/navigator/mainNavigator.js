import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile78027Navigator from '../features/UserProfile78027/navigator';
import Tutorial78026Navigator from '../features/Tutorial78026/navigator';
import NotificationList77998Navigator from '../features/NotificationList77998/navigator';
import Settings77997Navigator from '../features/Settings77997/navigator';
import Settings77989Navigator from '../features/Settings77989/navigator';
import UserProfile77987Navigator from '../features/UserProfile77987/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile78027: { screen: UserProfile78027Navigator },
Tutorial78026: { screen: Tutorial78026Navigator },
NotificationList77998: { screen: NotificationList77998Navigator },
Settings77997: { screen: Settings77997Navigator },
Settings77989: { screen: Settings77989Navigator },
UserProfile77987: { screen: UserProfile77987Navigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
