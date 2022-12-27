import React, { useState } from 'react'
import { StyleSheet, useWindowDimensions } from 'react-native'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view'
import Profile from './Profile';
import Order from './Order';
import { COLORS } from '../../Constants/Index.js'
import { Text } from 'native-base';


const renderScene = SceneMap({
    first: Profile,
    second: Order
});



export default function () {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {
            key: 'first',
            title: 'PROFILE'
        },
        {
            key: 'second',
            title: 'ORDER'
        }
    ])
    const renderTabsBar = (props) => {
        <TabBar
            {...props}
            tabStyle={styles.tabStyle}
            indicatorStyle={{ backgroundColor: COLORS.black }}
            activeColor={COLORS.lightPrimary}
            inactiveColor={COLORS.primary}
            
            renderLabel={({ route, color }) => <Text style={{ color, ...styles.text }}>{route.title}</Text>}
        />
    }

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width : layout.width}}
           // renderTabBar={renderTabsBar}
        />
    )
}


const styles = StyleSheet.create({
    tabStyle: {
        backgroundColor:COLORS.black,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        
    }
})