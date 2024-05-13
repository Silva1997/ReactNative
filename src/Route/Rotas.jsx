

import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { HomePage } from '../Page/home';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Rotas() {
  return (

      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#c346f5dd',
        tabBarBadgeStyle: {
          fontWeight: 'bold',

        },
        headerShown: false

      }}>

        {/* <Tab.Screen name="Login" component={RneTab}
          options={{
            tabBarIcon: ({ size }) => (
              <MaterialCommunityIcons name="account-group-outline" size={size} color="black" />
            ),

            tabBarStyle: { display: 'none' } // Oculta a barra inferior na tela de login
          }}
        />
        <Tab.Screen name="Messagem" component={FAQScreen}

          options={
            {
              tabBarIcon: ({ size }) => (
                <MaterialCommunityIcons name="android-messages" size={24} color="black" />
              )
            }
          }
        /> */}

        <Tab.Screen name="Home" component={HomePage}

          options={
            {
              tabBarIcon: ({ size ,color}) => (
                <AntDesign name="home" size={size} color={color} />
              )
            }
          }
        />
        <Tab.Screen name="Settings" component={Definir} 
        options={
          {
            tabBarIcon: ({ size,color }) => (
              <AntDesign name="setting" size={size} color={color} />
            )
          }
        } 
        
        />

      </Tab.Navigator>
    // </NavigationContainer>
  );
}



function Definir (){
  return(
    <>
    <Text>
      Loading...
    </Text>
    </>
  )
}