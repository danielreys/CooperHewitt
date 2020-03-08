import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import ListDetails from '../screens/listDetails';
const screens = {
    Home: {
        screen: Home
    },
    ListDetails:{
        screen: ListDetails
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);