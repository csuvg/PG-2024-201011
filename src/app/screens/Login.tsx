// import React, {useState} from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth'
// import { Image, Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Button, Platform } from 'react-native';
// import {BlurView} from 'expo-blur';

// const uri = 'https://e0.pxfuel.com/wallpapers/889/665/desktop-wallpaper-plain-blue-bright-blue-plain.jpg'
// const profilePicture = 'https://i.pinimg.com/474x/31/ec/2c/31ec2ce212492e600b8de27f38846ed7.jpg'


// export default function LoginScreen() {
//   return (
//           <View style={styles.container}>
//                   <Image source={{uri}} style={[styles.image, StyleSheet.absoluteFill]} />
//                   <ScrollView contentContainerStyle={{
//                     flex: 1,
//                     width: '100%',
//                     height: '100%',
//                     alignItems: 'center',
//                     justifyContent: 'center'
//                   }}>
      
//                     <BlurView intensity={40} style={{borderRadius: 30, overflow:"hidden"}}  >
//                       <View style={styles.login} >
//                         <Image source={{uri: profilePicture}} style={styles.profilePicture} />
//                         <View>
//                           <Text style={{fontSize: 17, fontWeight: 400 ,color: 'white'}}>Email</Text>
//                           <TextInput style={styles.input} placeholder="user@email.com" />
//                         </View>
//                         <View>
//                           <Text style={{fontSize: 17, fontWeight: 400 ,color: 'white'}}>Password</Text>
//                           <TextInput style={styles.input} placeholder="password" secureTextEntry={true} />
//                         </View>
//                         <TouchableOpacity style={[styles.button, {backgroundColor: '#00CFEB40'}]} >
//                           <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Login</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={[styles.button, {backgroundColor: '#6792F090'}]}  >
//                           <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Create account</Text>
//                         </TouchableOpacity>
//                       </View>
//                     </BlurView>
      
//                   </ScrollView>
//           </View>
//         );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover'
//   },
//   login:{
//     width: 350,
//     height: 500,
//     padding: 10,
//     alignItems: 'center',
    

//   },
//   profilePicture: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     borderColor: '#fff',
//     marginVertical: 30,
//     borderWidth: 1
//   },
//   input: {
//     width: 250,
//     height: 40,
//     borderColor: '#fff',
//     borderWidth: 2,
//     borderRadius: 10,
//     padding: 10,
//     marginVertical: 10,
//     backgroundColor: '#ffffff40',
//     marginBottom: 20
//   },
//   button: {
//     width: 250,
//     height: 40,
//     borderRadius: 10,
//     backgroundColor: '#00CFEB90',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: 10,
//     borderColor: '#fff',
//     borderWidth: 1
//   }
// });
