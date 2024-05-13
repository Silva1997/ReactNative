


// import { useState } from 'react';
// import { Button , View, StyleSheet } from 'react-native';
// import {Image} from 'native-base'
// import axios from 'axios';
// import { supabase } from '../../../BancoServer/Cliente';
// import { storage } from '@supabase/supabase-js';
// export default function ImagePickerExample() {
//   const [image, setImage] = useState(null);


//   const isValidBase64 = (str) => {
//     try {
//       return btoa(atob(str)) === str;
//     } catch (error) {
//       return false;
//     }
//   };

//   const handleFileChange = async (event) => {
//     const selectedFile = event.target.files[0];


//     const { data, error } = await supabase.storage.from('Teste').upload('file', selectedFile);
//   if (error) {
//     console.error('Erro ao fazer upload do arquivo:', error.message);
//   } else {
//     console.log('Arquivo enviado com sucesso:', data);
//   }


//     // Verifique se um arquivo foi selecionado
//     if (selectedFile) {
//       const reader = new FileReader();
//       reader.onloadend = async () => {
//         const base64Img = reader.result;
//         const match = base64Img.match(/^data:(.+);base64,(.+)$/); // Extrai o cabeçalho e o corpo base64
//         if (!match || match.length !== 3) {
//           throw new Error('Erro ao analisar a imagem.');
//         }

//         const [, mimeType, base64String] = match;

//         // Verificar se a string base64 está corretamente codificada
//         if (!isValidBase64(base64String)) {
//           throw new Error('A string base64 não está corretamente codificada.');
//         }

//         const byteCharacters = atob(base64String); // Decodifica a string base64

//         // Converte a string decodificada para um array de bytes
//         const byteNumbers = new Array(byteCharacters.length);
//         for (let i = 0; i < byteCharacters.length; i++) {
//           byteNumbers[i] = byteCharacters.charCodeAt(i);
//         }
//         const byteArray = new Uint8Array(byteNumbers);

//         // Cria um Blob com os dados binários
//         const imageData = new Blob([byteArray], { type: mimeType });

//         //uploadFile({imageData})
//         const formData = new FormData();
//         formData.append("file", imageData, `image.${mimeType.split("/")[1]}`);

//         try {
//           const response = await axios.post('http://localhost:3001/Carregamento', formData);
//           console.log('Resposta do servidor:', response.data);
//           // Defina a imagem após enviar a requisição
//           setImage(URL.createObjectURL(selectedFile));
//         } catch (error) {
//           console.error('Erro ao enviar imagem para o backend:', error);
//         }
//       };
//       reader.readAsDataURL(selectedFile);
//     }
//   };

//   return (
   
//        <View style={styles.container}>
//       <input type="file" onChange={handleFileChange} style={{backgroundColor:"#fff",border:"12" , borderWidth:'3' , padding:2,height:25 }} />
//       {image && <Image  size={"sm"} borderLeftRadius={100} source={{ uri: image }} 
          
//       alt='Angola'
//       />}
 
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   image: {
//     width: 200,
//     height: 200,
//     borderRadius:100
//   },
// });





// import { useState } from 'react';
// import { Button , View, StyleSheet } from 'react-native';
// import {Image} from 'native-base'
// import axios from 'axios';
// import { supabase } from '../../../BancoServer/Cliente';
// import { storage } from '@supabase/supabase-js';
// export default function ImagePickerExample() {
//   const [image, setImage] = useState(null);


//   const isValidBase64 = (str) => {
//     try {
//       return btoa(atob(str)) === str;
//     } catch (error) {
//       return false;
//     }
//   };

//   const handleFileChange = async (event) => {
//     const selectedFile = event.target.files[0];


//     const { data, error } = await supabase.storage.from('Teste').upload('file', selectedFile);
//   if (error) {
//     console.error('Erro ao fazer upload do arquivo:', error.message);
//   } else {
//     console.log('Arquivo enviado com sucesso:', data);
//   }


//     // Verifique se um arquivo foi selecionado
//     if (selectedFile) {
//       const reader = new FileReader();
//       reader.onloadend = async () => {
//         const base64Img = reader.result;
//         const match = base64Img.match(/^data:(.+);base64,(.+)$/); // Extrai o cabeçalho e o corpo base64
//         if (!match || match.length !== 3) {
//           throw new Error('Erro ao analisar a imagem.');
//         }

//         const [, mimeType, base64String] = match;

//         // Verificar se a string base64 está corretamente codificada
//         if (!isValidBase64(base64String)) {
//           throw new Error('A string base64 não está corretamente codificada.');
//         }

//         const byteCharacters = atob(base64String); // Decodifica a string base64

//         // Converte a string decodificada para um array de bytes
//         const byteNumbers = new Array(byteCharacters.length);
//         for (let i = 0; i < byteCharacters.length; i++) {
//           byteNumbers[i] = byteCharacters.charCodeAt(i);
//         }
//         const byteArray = new Uint8Array(byteNumbers);

//         // Cria um Blob com os dados binários
//         const imageData = new Blob([byteArray], { type: mimeType });

//         //uploadFile({imageData})
//         const formData = new FormData();
//         formData.append("file", imageData, `image.${mimeType.split("/")[1]}`);

//         try {
//           const response = await axios.post('http://localhost:3001/Carregamento', formData);
//           console.log('Resposta do servidor:', response.data);
//           // Defina a imagem após enviar a requisição
//           setImage(URL.createObjectURL(selectedFile));
//         } catch (error) {
//           console.error('Erro ao enviar imagem para o backend:', error);
//         }
//       };
//       reader.readAsDataURL(selectedFile);
//     }
//   };

//   return (

//        <View style={styles.container}>
//       <input type="file" onChange={handleFileChange} style={{backgroundColor:"#fff",border:"12" , borderWidth:'3' , padding:2,height:25 }} />
//       {image && <Image  size={"sm"} borderLeftRadius={100} source={{ uri: image }} 

//       alt='Angola'
//       />}

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   image: {
//     width: 200,
//     height: 200,
//     borderRadius:100
//   },
// });
