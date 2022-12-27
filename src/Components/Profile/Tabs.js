import React,{useState} from 'react'
import {useWindowDimensions} from 'react-native'
import { SceneMap } from 'react-native-tab-view'
import Profile from './Profile';
import Order from './Order';



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
            tittle:'PROFILE'
        },
        {
            key: 'second',
            tittle:'ORDER'
        }
    ])
    return (
        <>
        </>
    )
}