import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FriendListScreen from './FriendListScreen';
import HomeScreen from "./HomeScreen";
import JoinScreen from "./JoinScreen";

const AppStack = createStackNavigator({ Home: FriendListScreen, Chat: HomeScreen });

export default createAppContainer(
    createSwitchNavigator(
        {
            App: AppStack,
            Join: JoinScreen
        },
        {
            initialRouteName: "Join"
        }
        
    )
   
);
