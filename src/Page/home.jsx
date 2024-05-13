import React from "react";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "native-base";
import { VStack, Center, Box, Input, Icon, HStack, Heading, Avatar, Text, FlatList, Skeleton, Spacer, ScrollView } from "native-base";
import { EvilIcons } from '@expo/vector-icons';
import OnboardingScreen from "../Componet/Carousel/Carousel";

export function HomePage() {
    return (
        <ScrollView>

      
        <View style={Estilo.container}>
            <VStack space={4} alignItems="center" >
                <Box alignItems="center" p={"2.5"} w={'100%'} safeArea>

                    <Input variant="rounded" size={"2xl"} type="text" inputMode="text" placeholder="Pesquisar artigo"

                        borderColor={'violet.50'}
                        lineHeight={"md"}
                        borderWidth={"1"}
                        bgColor={'white'} w={'95%'}
                        InputLeftElement={<Icon as={<EvilIcons name="search" size={24} color="black" />} size={5} ml="2" />}
                    />
                </Box>
             </VStack>
            <View style={{flex:2, height:'400px'}}>
            <OnboardingScreen/>
            </View>
           <View  style={{flex:0.5}}>
            <Text>A</Text>
           </View>

        </View>
        </ScrollView>
    )
}

const Estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#282534'
    }
})

