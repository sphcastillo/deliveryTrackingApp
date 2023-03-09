import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomersScreen from '../screens/CustomersScreen';
import OrdersScreen from '../screens/OrdersScreen';
import { useNavigation } from '@react-navigation/native';
import { Icon } from "@rneui/themed";

//type definitions
export type TabStackParamList = {
    Customers: undefined;
    Orders: undefined;
}

// pass as a generic template 
const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {

    // pull navigation object
    // tell tab navigator you don't want to show the header
    const navigation = useNavigation();

    // similar to useEffect
    // when the component mounts, hide the header
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            // different colors based on tab
            tabBarActiveTintColor: "#59C1CC",
            tabBarInactiveTintColor: "gray",
            tabBarIcon: ({ focused,color, size }) => {
                if(route.name === "Customers"){
                    return (
                        <Icon 
                            name="users" 
                            type='entypo' 
                            color={focused ? "#59C1CC" : "gray"} 
                        />
                    )
                } else if (route.name === 'Orders'){
                    return (
                        <Icon 
                            name="box"
                            type='entypo'
                            color={focused ? "#EB6A7C" : "gray"}
                        />
                    )
                }
            }
        })}
    >
      <Tab.Screen name="Customers" component={CustomersScreen}/>
      <Tab.Screen name="Orders" component={OrdersScreen}/>
    </Tab.Navigator>
  )
}

export default TabNavigator