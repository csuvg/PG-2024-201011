import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importar Iconos
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const [amount, setAmount]: any = useState('');

  // Función para manejar el pago
  const handlePayment = async () => {
    // Validación 1: El monto debe estar dentro del rango permitido
    if (amount < 1 || amount > 5000) {
      alert("El monto debe estar entre Q1 y Q5,000.");
      return;
    }

    // Validación 2: El monto debe ser un número válido
    if (isNaN(amount) || amount <= 0) {
      alert("Por favor, ingrese un monto válido.");
      return;
    }

    // Validación 3: Máximo dos decimales permitidos
    const decimalRegex = /^\d+(\.\d{1,2})?$/;
    if (!decimalRegex.test(amount)) {
      alert("El monto debe tener máximo dos decimales.");
      return;
    }

    // Validación 4: No permitir números con ceros no significativos (01, 001, etc.)
    if (/^0\d+/.test(amount)) {
      alert("El monto no puede comenzar con ceros innecesarios.");
      return;
    }

    // Si todo es válido, procede con la acción
    setAmount(''); // Limpia el campo de texto
    navigation.navigate('ARCamera', { amount }); // Envía el monto a ARCamera
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.inputContainer}>
          {/* Textbox para el monto */}
          <TextInput
            style={styles.input}
            placeholder="Ingrese el monto a pagar"
            placeholderTextColor="#888"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />

          {/* Botón de pago */}
          <TouchableOpacity style={styles.button} onPress={handlePayment}>
            <Text style={styles.buttonText}>PAGAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* NavBar */}
      <View style={styles.navBar}>
        <TouchableOpacity testID='success-icon' onPress={() => navigation.navigate('History')} style={styles.navItem}>
          <Icon name="history" size={30} color="#fff" />
          <Text style={styles.navText}>Historial</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.navItem}>
          <Icon name="payment" size={30} color="#fff" />
          <Text style={styles.navText}>Pagar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.navItem}>
          <Icon name="exit-to-app" size={30} color="#fff" />
          <Text style={styles.navText}>Salir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 60,
    alignItems: 'center',
  },
  input: {
    width: 280,
    height: 80,
    borderColor: '#333',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ffffff40',
    color: '#000',
    fontSize: 20,
  },
  button: {
    width: 220,
    height: 90,
    borderRadius: 40,
    backgroundColor: '#288FF6',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#288FF6',
    height: 90,
    width: '112%',
    position: 'absolute',
    bottom: 0,
    borderTopColor: '#fff',
    borderTopWidth: 1,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginRight: 20,
  },
  navText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
});
