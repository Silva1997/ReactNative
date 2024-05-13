// import React, { useState } from 'react';
// import { View, Button, Image } from 'react-native';
// import { launchImageLibrary } from 'react-native-image-picker';
// import { supabase } from '../../../BancoServer/Cliente';
// import axios from 'axios'
// export default function App() {
//   const [image, setImage] = useState(null);

//   const mediaType = 'photo'; // or 'video' or 'mixed'

//   const selectImage = async () => {
//     launchImageLibrary({ mediaType }, async response => {
//       console.log('Response = ', response);
//       setImage(response.assets[0].uri);

//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else {
//         const fileData = response.assets[0];
//         const fileUri = fileData.uri;
//         const fileName = fileData.fileName || 'image.jpg'; // Define um nome padrão se o nome do arquivo não estiver disponível
        
       
       
          
//         try {
//           const from = new FormData();
//           const m =[]
//           m.push(
//             fileUri,
         
//           )
//           from.append('image',
//           {
//             uri: fileUri,
//             name: fileName,
//             type: response.assets[0].type
//           }
//         );
//         console.log(m)
         
//           const res = axios.post('http://localhost:3001/upload',from,{
//             headers:{
//               Accept: 'application/json',
//               'Content-Type': 'multipart/form-data', 
      
//             }
//           }
//           )
//           console.log('Retorna',res.data)
//             // Exibir os parâmetros capturados no console
//         // for (let pair of formData.entries()) {
//         //   console.log(pair[0] + ', ' + pair[1]);
//         // }
        
          // const { data, error } = await supabase.storage.from('Teste').upload(fileName, fileUri);
          // if (error) {
          //   console.error('Erro ao fazer upload do arquivo:', error.message);
          // } else {
          //   console.log('Arquivo enviado com sucesso:', data);
          // }
//         } catch (error) {
//           console.error('Erro ao fazer upload do arquivo:', error.message);
//         }
//       }
//     });
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button title="Select Image" onPress={selectImage} />
//       {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, marginTop: 20 }} />}
//     </View>
//   );
// }


import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import Axios from "axios";

export default function Upload() {
  const [avatar, setAvatar] = useState(null);

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatar(reader.result);
    };
    reader.readAsDataURL(file);
  }

  async function uploadImage() {
    if (!avatar) return;
    
    const data1 = new FormData();
    data.append("avatar", avatar);

    // await Axios.post("http://localhost:3333/files", data);

    const { data, error } = await supabase.storage.from('Teste').upload(data1);
    if (error) {
            console.error('Erro ao fazer upload do arquivo:', error.message);
          } else {
            console.log('Arquivo enviado com sucesso:', dados);
          }

  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: avatar
            ? avatar
            : "https://mltmpgeox6sf.i.optimole.com/w:761/h:720/q:auto/https://redbanksmilesnj.com/wp-content/uploads/2015/11/man-avatar-placeholder.png"
        }}
        style={styles.avatar}
      />

      <input style={{backgroundColor:"#fff",padding:'12',height:24,borderRadius:4}} type="file" onChange={handleFileChange} />

      
      <TouchableOpacity style={styles.button} onPress={uploadImage}>
        <Text style={styles.buttonText}>Enviar imagem</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 150,
    height: 40,
    borderRadius: 3,
    backgroundColor: "#7159c1",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
});
