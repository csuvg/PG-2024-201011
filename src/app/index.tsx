import React, {useState} from 'react';
import { Image, Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Button, Platform, Alert, LogBox } from 'react-native';
import {BlurView} from 'expo-blur';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import History from './screens/History';
import ARCamera from './screens/ARCamera';
import ConfirmPayment from './screens/ConfirmPayment';
import Success from './screens/Success';


const Stack = createNativeStackNavigator(); // Crea el stack a


const uri = 'https://e0.pxfuel.com/wallpapers/889/665/desktop-wallpaper-plain-blue-bright-blue-plain.jpg'
const profilePicture = 'https://personal-blog-next-js-eight.vercel.app/_next/image?url=%2Fimages%2Fposts%2Fmcr%2Flogo.png&w=256&q=75'




function LoginScreen() {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const navigation = useNavigation();

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    type FirebaseErrorCodes = 
    | "auth/email-already-in-use"
    | "auth/invalid-email"
    | "auth/operation-not-allowed"
    | "auth/weak-password"
    | "auth/user-not-found"
    | "auth/wrong-password"
    | "auth/too-many-requests"
    | "auth/network-request-failed"
    | "auth/invalid-credential";

const errorMessages: Record<FirebaseErrorCodes, string> = {
    "auth/email-already-in-use": "El correo electrónico ya está en uso.",
    "auth/invalid-email": "El correo electrónico no es válido.",
    "auth/operation-not-allowed": "Esta operación no está permitida.",
    "auth/weak-password": "La contraseña es demasiado débil. La longitud minima debe de ser 6 caracteres con simbolos.",
    "auth/user-not-found": "No se encontró un usuario con ese correo.",
    "auth/wrong-password": "La contraseña es incorrecta.",
    "auth/too-many-requests": "Demasiados intentos fallidos. Por favor, intenta más tarde.",
    "auth/network-request-failed": "Error de red. Verifica tu conexión.",
    "auth/invalid-credential": "Credenciales incorrectas"
};

const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Cuenta creada');
            const user = userCredential.user;
            console.log('Usuario:', user);
        })
        .catch((error) => {
            console.error(error);
            const errorMessage = errorMessages[error.code as FirebaseErrorCodes] || "Ocurrió un error inesperado.";
            Alert.alert("Error", errorMessage);
        });
};
  
  const handleSignIn = () => {
      signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              console.log('Inicio de sesión exitoso');
              const user = userCredential.user;
              console.log('Usuario:', user);
              navigation.navigate('Home');
              setEmail('');
              setPassword('');
          })
          .catch((error) => {
              console.error(error);
              const errorMessage = errorMessages[error.code as FirebaseErrorCodes] || "Ocurrió un error inesperado.";
              Alert.alert("Error", errorMessage);
              setEmail('');
              setPassword('');
          });
  };
  

    return (
        <View style={styles.container}>
        <Image source={{uri}} style={[styles.image, StyleSheet.absoluteFill]} />
        <ScrollView contentContainerStyle={{
          flex: 1,
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        }}>

          <BlurView intensity={40} style={{borderRadius: 30, overflow:"hidden"}}  >
            <View style={styles.login} >
            <Image source={{ uri: profilePicture }}     style={[styles.profilePicture, { transform: [{ scale: 1.2 }] }]} 
  />
              <View>
                <Text style={{fontSize: 17, fontWeight: 400 ,color: 'white'}}>Email</Text>
                <TextInput style={styles.input} placeholder="user@email.com" onChangeText={(text) => setEmail(text)} value={email}  />
              </View>
              <View>
                <Text style={{fontSize: 17, fontWeight: 400 ,color: 'white'}}>Password</Text>
                <TextInput style={styles.input} placeholder="password" onChangeText={(text) => setPassword(text)} secureTextEntry={true}  value={password}/>
              </View>
              <TouchableOpacity onPress={handleSignIn} style={[styles.button, {backgroundColor: '#00CFEB40'}]} >
                <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCreateAccount} style={[styles.button, {backgroundColor: '#6792F090'}]}  >
                <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Create account</Text>
              </TouchableOpacity>
            </View>
          </BlurView>

        </ScrollView>
</View>
    )
}


export default function App() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="History" component={History} options={{ title: 'Historial de compras' }} />
          <Stack.Screen name="ARCamera" component={ARCamera} options={{ headerShown: false }} />
         <Stack.Screen name="ConfirmPayment" component={ConfirmPayment} options={{ title: 'Confirmar datos',  headerShown: false }} /> 
         <Stack.Screen name="Success" component={Success} options={{ headerShown: false }}/> 



        </Stack.Navigator>
      </NavigationContainer>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  login:{
    width: 350,
    height: 500,
    padding: 10,
    alignItems: 'center',

  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderColor: '#fff',
    marginVertical: 30,
    borderWidth: 1,
    
  },
  input: {
    width: 250,
    height: 40,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ffffff40',
    marginBottom: 20
  },
  button: {
    width: 250,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#00CFEB90',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderColor: '#fff',
    borderWidth: 1
  }
});
