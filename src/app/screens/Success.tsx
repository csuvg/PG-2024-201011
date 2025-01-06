import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Asegúrate de instalar esta librería: expo install @expo/vector-icons
import { NavigationContainer, useNavigation } from '@react-navigation/native';


export default function Success() {
//   const handleBack = () => {
//     navigation.goBack(); // Volver a la pantalla anterior
//   };
const navigation = useNavigation();


  return (
    <View style={styles.container}>

 {/* Texto de éxito */}
        <Text style={styles.title}>Pago realizado con éxito</Text>

      {/* Ícono de check */}
      <MaterialIcons name="check-circle" size={250} color="green" style={styles.icon} />

     

      {/* Botón para volver */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')} testID='success-icon' >
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#288FF6', // Verde
    paddingVertical: 12,
    paddingHorizontal: 25,
    width: 270,
    borderRadius: 19,
    elevation: 3, // Sombra en Android
  },
  buttonText: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
