import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
// import Rotas from './Rotas';
// import Example from '../Componet/Usuario';
import { AntDesign } from '@expo/vector-icons';
import Rotas from './Rotas';
import Cadrasto from '../Page/Cadrasto/Cadrasto';
// import { Button } from '@gluestack-ui/themed';
// import Documentos from '../Page/Cadrastar/Documento';
// import { Entypo } from '@expo/vector-icons';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text>Ola</Text>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    );
}

const Drawer = createDrawerNavigator();

export default function App() {


    return (

        <NavigationContainer>

            <Drawer.Navigator

                initialRouteName="Home"
                screenOptions={{
title:'',
                    headerStyle: {
                        backgroundColor: '#5e5e5e',
                        borderColor: '#b286ebdd',
                    },
                    drawerStyle: {
                        backgroundColor: '#5e5e5e',
                        borderColor: '#b286ebdd',
                    },
                    drawerLabelStyle: {
                        color: '#fff',
                    },


                }}

            >
                <Drawer.Screen name="_Home" component={Rotas}
                    options={{
                        drawerIcon: ({ size }) => (
                            <AntDesign name='home' size={size} color={'white'} />
                        ),
                        drawerLabel:'Inicio'
                    }}

                />
                <Drawer.Screen name="Usuario" component={Cadrasto}

                    options={{
                        drawerIcon: ({ size }) => (
                            <AntDesign name='user' size={size} color={'white'} />
                        )
                        ,
                        drawerLabel:'Usuario'
                    }}
                />
                <Drawer.Screen name="Lista" component={Cadrasto}

                    options={{
                        drawerIcon: ({ size }) => (
                            <Feather name="list" size={size} color="white" />
                        )
                        ,
                        drawerLabel:'Consultar'
                    }}
                     />

                {/* <Drawer.Screen name="Usuario" component={Example} 
                
                options={{
                    drawerIcon: ({size}) => (
                       <AntDesign name='user' size={size} color={'white'}/>
                    )
                }}
                />
                  <Drawer.Screen name="Cadrastar documento" component={Documentos} 
                
                options={{
                    drawerIcon: ({size}) => (
                        <Entypo name="text-document" size={24} color="white" />
                    )
                }}
                /> */}
            </Drawer.Navigator>

        </NavigationContainer>

    );
}