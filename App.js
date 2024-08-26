import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>MEXENDO NO TEXTO PELA PRIMEIRA VEZ</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// import React, { useRef } from 'react';
// import { View, Text, Animated, TouchableWithoutFeedback, StyleSheet } from 'react-native';

// const InteractiveTextComponent = () => {
//   const scaleAnim = useRef(new Animated.Value(1)).current;

//   const handlePressIn = () => {
//     Animated.spring(scaleAnim, {
//       toValue: 1.5,
//       useNativeDriver: true,
//     }).start();
//   };

//   const handlePressOut = () => {
//     Animated.spring(scaleAnim, {
//       toValue: 1,
//       useNativeDriver: true,
//     }).start();
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
//         <Animated.Text style={[styles.text, { transform: [{ scale: scaleAnim }] }]}>
//           Toque em mim!
//         </Animated.Text>
//       </TouchableWithoutFeedback>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//     color: 'purple',
//   },
// });

// export default InteractiveTextComponent;


// import React, { useState, useEffect } from 'react';
// import { View, Button, Text, StyleSheet, AsyncStorage } from 'react-native';

// const PersistentCounterComponent = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const loadCount = async () => {
//       const storedCount = await AsyncStorage.getItem('counter');
//       if (storedCount !== null) {
//         setCount(parseInt(storedCount, 10));
//       }
//     };
//     loadCount();
//   }, []);

//   const handlePress = async () => {
//     const newCount = count + 1;
//     setCount(newCount);
//     await AsyncStorage.setItem('counter', newCount.toString());
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Você pressionou {count} vezes</Text>
//       <Button title="Pressione-me" onPress={handlePress} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 20,
//     marginBottom: 20,
//   },
// });

// export default PersistentCounterComponent;

// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';

// const data = [
//   { id: '1', title: 'Item 1', description: 'Detalhes do Item 1' },
//   { id: '2', title: 'Item 2', description: 'Detalhes do Item 2' },
//   { id: '3', title: 'Item 3', description: 'Detalhes do Item 3' },
// ];

// const ListScreen = ({ navigation }) => {
//   const renderItem = ({ item }) => (
//     <TouchableOpacity onPress={() => navigation.navigate('Detail', { item })}>
//       <View style={styles.item}>
//         <Text style={styles.title}>{item.title}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <FlatList
//       data={data}
//       renderItem={renderItem}
//       keyExtractor={item => item.id}
//     />
//   );
// };

// const DetailScreen = ({ route }) => {
//   const { item } = route.params;
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{item.title}</Text>
//       <Text style={styles.description}>{item.description}</Text>
//     </View>
//   );
// };

// const Stack = createStackNavigator();

// const ListNavigatorComponent = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="List">
//         <Stack.Screen name="List" component={ListScreen} />
//         <Stack.Screen name="Detail" component={DetailScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 24,
//   },
//   description: {
//     fontSize: 18,
//     marginTop: 10,
//   },
// });

// export default ListNavigatorComponent;

// import React, { useState } from 'react';
// import { View, TextInput, Text, StyleSheet } from 'react-native';

// const EmailInputComponent = () => {
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');

//   const validateEmail = (text) => {
//     setEmail(text);
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (emailRegex.test(text)) {
//       setError('');
//     } else {
//       setError('Endereço de e-mail inválido');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Digite seu e-mail"
//         value={email}
//         onChangeText={validateEmail}
//         keyboardType="email-address"
//       />
//       {error ? <Text style={styles.errorText}>{error}</Text> : null}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 12,
//     paddingHorizontal: 8,
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 16,
//   },
// });

// export default EmailInputComponent;

// import React, { useRef, useEffect } from 'react';
// import { View, Text, Animated, StyleSheet } from 'react-native';

// const AnimatedTextComponent = () => {
//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 2000,
//       useNativeDriver: true,
//     }).start();
//   }, [fadeAnim]);

//   return (
//     <View style={styles.container}>
//       <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>
//         Bem-vindo ao React Native!
//       </Animated.Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//     color: 'blue',
//   },
// });

// export default AnimatedTextComponent;

