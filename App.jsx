
import React from "react";
import { extendTheme, NativeBaseProvider } from "native-base";
import App from "./src/Route/Principal";
import 'react-native-gesture-handler';

// Defina a cor de fundo preta no novo tema
const newColorTheme = {
  brand: {
    900: '#282534'
  },
};
// Estenda o tema padrão com o novo tema
const theme = extendTheme(newColorTheme);

export default function PaginaContexto() {
  return (
    <NativeBaseProvider theme={theme} >
     <App/>
    </NativeBaseProvider>
  );
}


// optional but recommended CSS reset:

// import '@tamagui/core/reset.css'

// import { TamaguiProvider, View,Theme } from '@tamagui/core'
// import { config } from '@gluestack-ui/config'
// export default () => (

//   <TamaguiProvider config={config}>
// <Theme name={'dark'}>


//     <View width={200} height={200} backgroundColor="red" >

//       <Ap/>
//     </View>
//     </Theme>
//   </TamaguiProvider>

// )


// import { View,Text } from 'react-native'

// import React from 'react'

export  function Ap (){
  return(
    <View style={{flex:1,justifyContent:'center'}}>
    <Text> Ola </Text>
    </View>
  )
}
