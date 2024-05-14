import React from "react";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "native-base";
import { Stack, VStack, Center, Image, Box, Input, Icon, HStack, Circle, Text, ScrollView } from "native-base";
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
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
                <View style={{ flex: 0.7, height: '100px' }}>
                    <OnboardingScreen />
                </View>
                <View style={{ flex: 0.6}}>
                    <Example />
                </View>

            </View>
            < StatusBar backgroundColor={'White'} />
        </ScrollView>
    )
}

const Estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282534'
    }
})


const dados=[{
    id:1,
    Image: require('C:/Users/Eugenio Silva/3D Objects/App3/StickerSmash/assets/images/friends.png'),
    Nome:'Eugenio Silva'
},
{
    id:2,
    Image: require('C:/Users/Eugenio Silva/3D Objects/App3/StickerSmash/assets/images/friends.png'),
    Nome:'Teresa Maura'
},
{
    id:3,
    Image: require('C:/Users/Eugenio Silva/3D Objects/App3/StickerSmash/assets/images/friends.png'),
    Nome:'Luis Filipe'
},
{
    id:4,
    Image: require('C:/Users/Eugenio Silva/3D Objects/App3/StickerSmash/assets/images/friends.png'),
    Nome:'Misael Lopes'
}
]

function Example() {
    return(
        <Stack   style={{display:'flex',flexDirection:'column', justifyContent:'center'}} paddingLeft={'1.5'}>
        <VStack  alignSelf={'center'} flexDirection={'row'} flexWrap={'wrap-reverse'}  >
          {
            dados.map((item,index)=>(
                <Center h="40" w="170" bg="#363149" rounded="md" shadow={3} id={index} marginRight={'1.5'} marginBottom={'1.5'}>
                <Circle size="30px" bg='#b152dd' left={-47}>
                    <Icon as={<Ionicons name="notifications-outline" size={5} color="white" />} color="white" size={5} />
                </Circle>
                <Image source={item?.Image} alt="Noe" width={'100px'} height={'100px'} resizeMode="contain" />
                <Text textAlign={'center'} fontSize={12} _light={{ color: 'white' }}>{item?.Nome}</Text>
            </Center>
            ))
          }
           

        </VStack>
    </Stack>
    )
}