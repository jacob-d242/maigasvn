import React from 'react'
import { Box, Center, Pressable, Text } from 'native-base'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import  FontAwesome  from 'react-native-vector-icons/FontAwesome'
import { COLORS } from '../Constants/Index'
import ProfileScreen from '../Screens/ProfileScreen'
import CartScreen from '../Screens/CartScreen'
import StackNav from './StackNav'

const Tab = createBottomTabNavigator()
const CustomTab = ({ children, onPress }) => (
    <Pressable
        onPress={onPress}
        h={70}
        w={70}
        top={-20}
        rounded='full'
        bg={COLORS.primary}
        shadow={2}
    >
        {children}
    </Pressable>
)
export default function BottomNav() {
    return (
        <Tab.Navigator
            backBehavior='Main'
            initialRouteName='Main'
            screenOptions={{
                tabBarShowLabel:false,
                tabBarStyle: { ...styles.tab },
                headerShown: false,
                tabBarHideOnKeyboard: true
            }}>
            {/* Home Screen tab */}
            <Tab.Screen
                name='Main'
                component={StackNav}
                options={{
                tabBarIcon: ({ focused }) => (
                    <Center>
                        {
                            focused ? (
                                <Icon name='home' size={28} color={COLORS.primary} />
                            ) : (
                                <Icon name='home' size={28} color={COLORS.black}/>
                            )
                        }
                    </Center>
                )
            }} />
            {/* cart Screen Tab */}
            <Tab.Screen
                name='Cart'
                component={CartScreen}
                options={{
                    tabBarButton:(props) => <CustomTab {...props} />,
                    tabBarIcon: ({ focused }) => (
                    <Center>
                        {
                            focused ? (
                                <FontAwesome name='shopping-basket'  size={28} color={COLORS.white} />
                            ) : (
                                <FontAwesome name='shopping-basket'  size={28} color={COLORS.white}/>
                            )
                        }
                    </Center>
                )
            }} />
            {/* Profile Tab */}
            <Tab.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                tabBarIcon: ({ focused }) => (
                    <Center>
                        {
                            focused ? (
                                <Icon name='user' size={28} color={COLORS.primary} />
                            ) : (
                                <Icon name='user' size={28} color={COLORS.black}/>
                            )
                        }
                    </Center>
                )
            }} />
        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    tab: {
        elevation: 0,
        backgroundColor: COLORS.white,
        height:60
    }
})