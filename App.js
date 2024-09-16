// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>MEXENDO NO TEXTO PELA PRIMEIRA VEZ</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

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

// import React from 'react';
// import { FlatList, Text, View, StyleSheet } from 'react-native';

// const TaskList = ({ tasks }) => {
//   const renderTask = ({ item }) => (
//     <Text style={item.completed ? styles.completed : null}>
//       {item.title}
//     </Text>
//   );

//   return (
//     <View>
//       <FlatList
//         data={tasks}
//         renderItem={renderTask}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   completed: {
//     textDecorationLine: 'line-through',
//   },
// });

// export default TaskList;

// import React, { useState } from 'react';
// import { Modal, Text, Button, View } from 'react-native';

// const ModalExample = () => {
//   const [modalVisible, setModalVisible] = useState(false);

//   return (
//     <View>
//       <Button title="Show Modal" onPress={() => setModalVisible(true)} />
//       <Modal
//         visible={modalVisible}
//         animationType="slide"
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View>
//           <Text>This is a modal!</Text>
//           <Button title="Close" onPress={() => setModalVisible(false)} />
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default ModalExample;

// import React from 'react';
// import { SectionList, Text, View } from 'react-native';

// const products = [
//   { title: 'Fruits', data: ['Apple', 'Banana', 'Orange'] },
//   { title: 'Vegetables', data: ['Carrot', 'Broccoli', 'Spinach'] },
// ];

// const ProductList = () => {
//   return (
//     <View>
//       <SectionList
//         sections={products}
//         renderItem={({ item }) => <Text>{item}</Text>}
//         renderSectionHeader={({ section }) => (
//           <Text style={{ fontWeight: 'bold' }}>{section.title}</Text>
//         )}
//         keyExtractor={(item, index) => item + index}
//       />
//     </View>
//   );
// };

// export default ProductList;

// import React, { useState } from 'react';
// import { TextInput, Text, View } from 'react-native';

// const DynamicTextInput = () => {
//   const [inputText, setInputText] = useState('');

//   return (
//     <View>
//       <TextInput
//         placeholder="Type here..."
//         value={inputText}
//         onChangeText={setInputText}
//       />
//       <Text>You typed: {inputText}</Text>
//     </View>
//   );
// };

// export default DynamicTextInput;

// import React, { useState } from 'react';
// import { Switch, Text, View } from 'react-native';

// const SwitchExample = () => {
//   const [isEnabled, setIsEnabled] = useState(false);

//   return (
//     <View>
//       <Switch
//         value={isEnabled}
//         onValueChange={() => setIsEnabled(!isEnabled)}
//       />
//       <Text>{isEnabled ? 'On' : 'Off'}</Text>
//     </View>
//   );
// };

// export default SwitchExample;

// import React from 'react';
// import { Button, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const HomeScreen = ({ navigation }) => (
//   <View>
//     <Text>Home Screen</Text>
//     <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
//   </View>
// );

// const DetailsScreen = () => (
//   <View>
//     <Text>Details Screen</Text>
//   </View>
// );

// const Stack = createStackNavigator();

// const App = () => (
//   <NavigationContainer>
//     <Stack.Navigator initialRouteName="Home">
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Details" component={DetailsScreen} />
//     </Stack.Navigator>
//   </NavigationContainer>
// );

// export default App;

// import React, { useEffect, useState } from 'react';
// import { Text, View } from 'react-native';

// const Timer = () => {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds(prevSeconds => prevSeconds + 1);
//     }, 1000);

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   return (
//     <View>
//       <Text>Timer: {seconds} seconds</Text>
//     </View>
//   );
// };

// export default Timer;

// import React, { useState } from 'react';
// import { FlatList, Text, TouchableOpacity, View } from 'react-native';

// const CheckboxList = () => {
//   const [items, setItems] = useState([
//     { id: '1', text: 'Item 1', checked: false },
//     { id: '2', text: 'Item 2', checked: false },
//     { id: '3', text: 'Item 3', checked: false },
//   ]);

//   const toggleChecked = (id) => {
//     setItems(items.map(item =>
//       item.id === id ? { ...item, checked: !item.checked } : item
//     ));
//   };

//   const selectedItems = items.filter(item => item.checked).map(item => item.text);

//   return (
//     <View>
//       <FlatList
//         data={items}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => toggleChecked(item.id)}>
//             <Text style={{ textDecorationLine: item.checked ? 'line-through' : 'none' }}>
//               {item.text}
//             </Text>
//           </TouchableOpacity>
//         )}
//         keyExtractor={item => item.id}
//       />
//       <Text>Selected Items: {selectedItems.join(', ')}</Text>
//     </View>
//   );
// };

// export default CheckboxList;

// import React, { useState } from 'react';
// import { ActivityIndicator, Image, View } from 'react-native';

// const ImageLoader = ({ imageUrl }) => {
//   const [loading, setLoading] = useState(true);

//   return (
//     <View>
//       {loading && <ActivityIndicator size="large" color="#0000ff" />}
//       <Image
//         source={{ uri: imageUrl }}
//         style={{ width: 200, height: 200 }}
//         onLoad={() => setLoading(false)}
//       />
//     </View>
//   );
// };

// export default ImageLoader;

// import React, { useState } from 'react';
// import { Slider, Text, View } from 'react-native';

// const OpacitySlider = () => {
//   const [opacity, setOpacity] = useState(1);

//   return (
//     <View>
//       <Text>Opacity: {opacity.toFixed(2)}</Text>
//       <Slider
//         minimumValue={0}
//         maximumValue={1}
//         value={opacity}
//         onValueChange={(value) => setOpacity(value)}
//         step={0.01}
//       />
//       <View style={{ width: 100, height: 100, backgroundColor: 'blue', opacity }} />
//     </View>
//   );
// };

// export default OpacitySlider;

// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet } from 'react-native';

// const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];

// const App = () => {
//   const handlePress = (fruit) => {
//     Alert.alert(`You clicked on: ${fruit}`);
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity style={styles.item} onPress={() => handlePress(item)}>
//       <Text style={styles.text}>{item}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={fruits}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={renderItem}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 50,
//   },
//   item: {
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   text: {
//     fontSize: 18,
//   },
// });

// export default App;

// import React, { useState } from 'react';
// import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

// const App = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = () => {
//     Alert.alert(`Name: ${name}`, `Email: ${email}`);
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//       />
//       <Button title="Submit" onPress={handleSubmit} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 15,
//     paddingLeft: 10,
//   },
// });

// export default App;

// import React, { useState } from 'react';
// import { View, Button, StyleSheet } from 'react-native';

// const App = () => {
//   const [bgColor, setBgColor] = useState('yellow');

//   const toggleColor = () => {
//     setBgColor((prevColor) => (prevColor === 'yellow' ? 'green' : 'yellow'));
//   };

//   return (
//     <View style={[styles.container, { backgroundColor: bgColor }]}>
//       <Button title="Change Color" onPress={toggleColor} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;

// import React from 'react';
// import { View, Image, StyleSheet } from 'react-native';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Image
//         style={styles.image}
//         source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
//       />
//       <Image
//         style={styles.image}
//         source={require('./assets/local_image.png')} // Imagem local
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: 100,
//     height: 100,
//     margin: 10,
//   },
// });

// export default App;

// App.js
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { View, Text, Button } from 'react-native';

// const Stack = createStackNavigator();

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// };

// const DetailsScreen = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// App.js
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { View, Text, Button } from 'react-native';

// const Stack = createStackNavigator();

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
//       <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
//     </View>
//   );
// };

// const ProfileScreen = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Profile Screen</Text>
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//     </View>
//   );
// };

// const SettingsScreen = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings Screen</Text>
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//     </View>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//         <Stack.Screen name="Settings" component={SettingsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// App.js
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { View, Text } from 'react-native';

// const Tab = createBottomTabNavigator();

// const HomeScreen = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// };

// const SearchScreen = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Search Screen</Text>
//     </View>
//   );
// };

// const ProfileScreen = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Profile Screen</Text>
//     </View>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Search" component={SearchScreen} />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// App.js
// import React from 'react';
// import { Button, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Tela Principal</Text>
//       <Button
//         title="Ir para Segunda Tela"
//         onPress={() => navigation.navigate('SecondScreen')}
//       />
//     </View>
//   );
// }

// function SecondScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Bem-vindo à segunda tela!</Text>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="SecondScreen" component={SecondScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// App.js
// import React, { useState } from 'react';
// import { Button, Text, TextInput, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

// function HomeScreen({ navigation }) {
//   const [name, setName] = useState('');

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Digite seu nome:</Text>
//       <TextInput
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginVertical: 20, paddingLeft: 10 }}
//         value={name}
//         onChangeText={setName}
//       />
//       <Button
//         title="Ir para Segunda Tela"
//         onPress={() => navigation.navigate('SecondScreen', { userName: name })}
//       />
//     </View>
//   );
// }

// function SecondScreen({ route }) {
//   const { userName } = route.params;

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Bem-vindo, {userName}!</Text>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="SecondScreen" component={SecondScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// App.js
// import React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Tela Home</Text>
//     </View>
//   );
// }

// function ProfileScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Tela Profile</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Tela Settings</Text>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// App.js
// import React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Tela Home</Text>
//     </View>
//   );
// }

// function ContactScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Tela Contact</Text>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator>
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Contact" component={ContactScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// App.js
// import React from 'react';
// import { Button, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Tela Home</Text>
//       <Button
//         title="Ir para Tela Detalhes"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Tela Detalhes</Text>
//     </View>
//   );
// }

// function AboutScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Tela About</Text>
//     </View>
//   );
// }

// function HomeStackNavigator() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Details" component={DetailsScreen} />
//     </Stack.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeStackNavigator} />
//         <Tab.Screen name="About" component={AboutScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// App.js
import 'react-native-gesture-handler'; // Certifique-se de que este é o primeiro import
import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela Home</Text>
      <Button
        title="Ir para Tela Detalhes"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela Detalhes</Text>
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela About</Text>
    </View>
  );
}

function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Tabs" component={TabNavigator} />
        <Drawer.Screen name="About Drawer" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

