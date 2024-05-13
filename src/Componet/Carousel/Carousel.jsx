// // import React, { useRef, useState } from "react";
// // import { View, FlatList, StyleSheet, Animated, useWindowDimensions, Image } from "react-native";
// // import { Text, Button, Avatar } from "native-base";
// // import data from "./Dados";
// // import images from '../../../assets/images/background-image.png'

// // const Carousel = () => {
// //     const flatListRef = useRef(new Animated.Value(0)).current;

// //     const screenWidth = useWindowDimensions().width;
// //     const renderItem = ({ item, index }) => {
// //         return (
// //             <View style={[styles.container, { width: screenWidth }]}>
// //                 <Image
// //                     source={{ uri: images }}
// //                     style={styles.image}
// //                     alt="ppp"
// //                 />
// //                 <Text style={styles.header}>{item.title}</Text>
// //             </View>
// //         );
// //     };

// //     const scrollToIndex = (index) => {
// //         flatListRef.current.scrollToIndex({ animated: true, index });
// //     };

// //     return (
// //         <View style={{ flex: 1 }}>
// //             <FlatList
// //                 ref={flatListRef}
// //                 data={data}
// //                 horizontal
// //                 pagingEnabled
// //                 showsHorizontalScrollIndicator={false}
// //                 keyExtractor={(item) => item.id}
// //                 renderItem={renderItem}
// //                 decelerationRate="fast"
// //                 bounces={false}
// //                 onScroll={Animated.event([{
// //                     nativeEvent: {
// //                         contentOffset: {
// //                             x: flatListRef
// //                         }
// //                     }
// //                 }], {
// //                     useNativeDriver: false
// //                 })}
// //             />
// //             <View style={styles.buttonsContainer}>
// //                 {data.map((_, index) => (
// //                     <Button
// //                         key={index}
// //                         onPress={() => scrollToIndex(index)}
// //                         size="sm"
// //                         colorScheme="secondary"
// //                         variant="ghost"
// //                         mx={1}
// //                     >
// //                         {index + 1}
// //                     </Button>
// //                 ))}
// //             </View>
// //         </View>
// //     );
// // };

// // const App = () => {
// //     return (
// //         <View style={{ flex: 1 }}>
// //             <Carousel />
// //         </View>
// //     );
// // };

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         justifyContent: "center",
// //         alignItems: "center",
// //     },
// //     buttonsContainer: {
// //         flexDirection: "row",
// //         justifyContent: "center",
// //         marginTop: 10,
// //     },
// //     image: {
// //         width:  0.1, // 10% da largura da tela
// //         height: 300,
// //         resizeMode: "cover",
// //     },
// //     header: {
// //         color: "#222",
// //         fontSize: 18,
// //         fontWeight: "bold",
// //         marginVertical: 10,
// //     },
// // });

// // export default App;








// import React, { useRef } from 'react';
// import { View, FlatList, StyleSheet, useWindowDimensions, Animated } from 'react-native';


// const data = [
//   { id: '1', color: 'red' },
//   { id: '2', color: 'blue' },
//   { id: '3', color: 'green' },
//   { id: '4', color: 'yellow' },
// ];

// const Carousel = () => {

//   const  screenWidth = useWindowDimensions();

//   const scrollX = useRef(new Animated.Value(0)).current;

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={data}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item, index }) => {
//           const inputRange = [(index - 1) * screenWidth, index * screenWidth, (index + 1) * screenWidth];
//           const scale = scrollX.interpolate({
//             inputRange,
//             outputRange: [0.8, 1, 0.8],
//           });
//           const opacity = scrollX.interpolate({
//             inputRange,
//             outputRange: [0.6, 1, 0.6],
//           });

//           return (
//             <Animated.View style={[styles.item, { width: screenWidth, transform: [{ scale }], opacity }]}>
//               <View style={[styles.box, { backgroundColor: item.color }]} />
//             </Animated.View>
//           );
//         }}
//         onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })}
//         scrollEventThrottle={16}
//       />
//     </View>
//   );
// };

// const App = () => {
//   return (
//     <View style={{ flex: 1 }}>
//       <Carousel />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   item: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box: {
//     width: 300,
//     height: 300,
//     borderRadius: 10,
//   },
// });

// export default App;




import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const COLORS = { primary: '#282534', white: '#b152dd' };

const slides = [
  {
    id: '1',
    image: require('C:/Users/Eugenio Silva/3D Objects/App3/StickerSmash/assets/images/imagens.png'),
    title: 'Encontre seus itens perdidos com facilidade',
    subtitle: 'P1',
  },
  {
    id: '2',
    image: require('C:/Users/Eugenio Silva/3D Objects/App3/StickerSmash/assets/images/image1.png'),
    title: 'Alcance seus objetivos de encontrar itens',
    subtitle: 'P2',
  },
  {
    id: '3',
    image: require('C:/Users/Eugenio Silva/3D Objects/App3/StickerSmash/assets/images/image3.png'),
    title: 'Valorize suas posses encontrando-as facilmente',
    subtitle: `P3`
  },
];

const Slide = ({ item }) => {
  return (
    <View style={{ flex: 2, alignContent:'center',flexDirection:'column'}} >
      <Image
        source={item?.image}
        style={{ marginTop: 20, height: '280px', width,resizeMode: 'contain' }}
      />
      {/* <View style={{flexWrap:'wrap', margin:2}} > */}
        <Text style={[styles.title,{textAlign: 'justify',margin:'auto '}]}>{item?.title}</Text>
        <Text style={[styles.subtitle ,{textAlign: 'justify',margin:'auto '}]}>{item?.subtitle}</Text>
      {/* </View> */}
    </View>
  );
};

const OnboardingScreen = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 2,
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.white,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        {/* <View style={{marginBottom: 20}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() =>  navigation.navigate('Usuario')}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: COLORS.white,
                    borderWidth: 1,
                    backgroundColor: 'transparent',
                  },
                ]}
                onPress={skip}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: COLORS.white,
                  }}>
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{width: 15}} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}>
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View> */}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subtitle: {

    color: '#fff',
    fontSize: 13,
    marginTop: 10,
    maxWidth: '70%',
    // textAlign: 'center',
    lineHeight: 23,

  },
  title: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 20,
    // textAlign: 'center',

  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default OnboardingScreen;
