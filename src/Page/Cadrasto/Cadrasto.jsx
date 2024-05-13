import React, { useState,useEffect } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView,StatusBar } from 'react-native';
import { FormControl, Input, Button } from 'native-base';
import { VStack, Icon, Text } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import imagem from '../../../assets/image.png'
import { supabase } from '../../../BancoServer/Cliente';
import Toast from 'react-native-toast-message';
import Camera from '../../Componet/Image/Camera';

const App = () => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [pms, setPms] = useState('');
    const [bi, setBi] = useState('');
    // const [imagem, setImagem] = useState(null);
 function Hello (){
  Toast.show({
    type: 'success',
     text1: 'Cadrasto com sucesso',
     autoHide: false, // Desativa o fechamento automático
     onPress: () => Toast.hide(), // Fecha o toast ao ser pressionado
     onHidden: () => console.log('Toast hidden')
  })
   
    }
    const handleSave =  async () => {
        // Aqui você pode enviar os dados para onde quer que precise
    const { data, error } = await supabase
    .from('Pessoa')
    .insert([
      { Nome: nome, Sobrenome: sobrenome,Pms:pms,Bi:bi },
    ])
    .select()
     if(data !==undefined){
        console.log({ nome, sobrenome, pms, bi },"Inserido com sucesso");
        Hello();
        handleDelete()
     }else{
        console.error('Erro de conexao com BD ',error)
     }

    };

    const handleDelete = () => {
        // Aqui você pode enviar os dados para onde quer que precise
        setNome('')
        setBi('')
        setSobrenome('')
        setPms('')
    };


    return (
        <ScrollView style={{ flex: 2, backgroundColor: '#282534' }} >
            <View style={styles.container}>
                <VStack space={4} alignItems="center">
                    <View safeArea>
                        <Text style={{ fontWeight: '500', textAlign: 'center', color: "#fff" }}>Registar dados</Text>
                    {/* <Camera/> */}
                    </View>
                    <FormControl isRequired isInvalid={false} w="75%" maxW="300px">
                        <FormControl.Label color={'#fff'}>Nome</FormControl.Label>

                        <Input variant="underlined"
                         _light={{
                            color: "#fff"
                        }} inputMode='text' value={nome} onChangeText={setNome} />

                    </FormControl>
                    <FormControl isRequired isInvalid={false} w="75%" maxW="300px">
                        <FormControl.Label color={'#fff'}>Sobrenome</FormControl.Label>

                        <Input variant="underlined"
                            _light={{
                                color: "#fff"
                            }}
                            inputMode='text' value={sobrenome} onChangeText={setSobrenome} />

                    </FormControl>
                    <FormControl isRequired isInvalid={false} w="75%" maxW="300px">
                        <FormControl.Label color={'#fff'}>Pms</FormControl.Label>
                        <Input variant="underlined"
                            _light={{
                                color: "#fff"
                            }}
                            inputMode='numeric' value={pms} maxLength={6} onChangeText={setPms} />
                    </FormControl>
                    <FormControl isRequired isInvalid={false} w="75%" maxW="300px">
                        <FormControl.Label ccolor={'#fff'} fontWeight={'bold'}>BI</FormControl.Label>
                        <Input
                            _light={{
                                color: "#fff"
                            }}
                            variant="underlined" inputMode='text' maxLength={14} value={bi} onChangeText={setBi} />
                    </FormControl>

                    <Button block onPress={handleSave} style={styles.button} background={"#000"} color={'#fff'}
                        endIcon={<Icon as={<AntDesign name='login' size={20} color={"red"} />} />}
                    >

                        Cadrastar
                    </Button>
                    <Button block onPress={handleDelete} style={styles.button} background={"#ff2929"} color={'#fff'}
                        endIcon={<Icon as={<AntDesign name='delete' size={20} color={"red"} />} />}
                    >

                        Excluir
                    </Button>
                    <Toast ref={(ref) => Toast.setRef(ref)} />
                </VStack>
                <ImageBackground src={imagem} />
                <StatusBar backgroundColor="#000000" />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 2,
        backgroundColor: '#282534'
    },
    button: {
        marginTop: 10,
        width: '75%',
        maxWidth: '300px',
    },
});

export default App;

// import React, { useEffect } from 'react';
// import { View, Text, Button } from 'react-native';
// import Toast from 'react-native-toast-message';

// const App = () => {
//   useEffect(() => {
//     Toast.show({
//       type: 'success',
//       text1: 'Hello',
//       text2: 'This is a success toast message'
//     });
//   }, []);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Hello World!</Text>
//       <Button
//         title="Show Toast"
//         onPress={() => {
//           Toast.show({
//             type: 'info',
//             text1: 'Info',
//             text2: 'This is an info toast message'
//           });
//         }}
//       />
//       <Toast ref={(ref) => Toast.setRef(ref)} />
//     </View>
//   );
// };

// export default App;
