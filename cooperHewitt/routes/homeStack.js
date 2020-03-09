import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import ListDetails from '../screens/listDetails';

//screen Routes to Navigate
const screens = {
    Items: {
        screen: Home
    },
    ListDetails:{
        screen: ListDetails
    }
}

const HomeStack = createStackNavigator(screens,{headerLayoutPreset: 'center'});

export default createAppContainer(HomeStack);