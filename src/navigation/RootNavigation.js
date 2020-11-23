import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'
import React from 'react'
import { View, Text } from 'react-native'

import HomeScreen from '../screen/HomeScreen'
import DetailScreen from '../screen/DetailScreen'
import FavScreen from '../screen/FavScreen'


const HomeStack = createStackNavigator()
const TabNav = createBottomTabNavigator()
const FavStack = createStackNavigator()

const Home = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="All News" component={HomeScreen}/>
            <HomeStack.Screen name="Details" component={DetailScreen}/>
        </HomeStack.Navigator>
    )
}

const Favourite = () => {
   return (
   <FavStack.Navigator>
        <FavStack.Screen name="Favourites" component={FavScreen}/>
    </FavStack.Navigator>
    )
}





const RootNavigation = () => {
    return (
        <NavigationContainer>
            <TabNav.Navigator>
                <TabNav.Screen name="Home" component={Home} options={{tabBarIcon:({color, size}) => <Icon name="home" color={color} size={size}/>}}/>
                <TabNav.Screen name="Favourites" component={Favourite} options={{tabBarIcon:({color, size}) => <Icon name="favorite" color={color} size={size}/>}}/>
            </TabNav.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation
