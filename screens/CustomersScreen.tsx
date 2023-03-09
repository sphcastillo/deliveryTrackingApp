import { View, Text, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { Image, Input } from "@rneui/themed";
import { useTailwind } from 'tailwind-rn/dist';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../navigator/RootNavigator';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type CustomersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Customers">,
  NativeStackNavigationProp<RootStackParamList>
>;

const CustomersScreen = () => {

    const tw = useTailwind();
    const navigation = useNavigation<CustomersScreenNavigationProp>();
    const [input, setInput] = useState<string>('');

    // basically a useEffect but when UI mountns
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false
      })
    }, [])
    return (
      <ScrollView style={{ backgroundColor: '#59C1CC'}}>
        <Image 
          source={{ uri: 'https://links.papareact.com/3jc'}}
          style={tw(`w-full h-64`)}
          PlaceholderContent={<ActivityIndicator />}

        />
        <Input 
          placeholder="Search by Customer" 
          containerStyle={tw("bg-white pt-5 pb-0 px-10")}
          value={input}
          onChangeText={(text) => setInput(text)}
        />
        <Input />
      </ScrollView>
    )
}

export default CustomersScreen