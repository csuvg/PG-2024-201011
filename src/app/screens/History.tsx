import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importar Iconos
import { useNavigation } from '@react-navigation/native';
import axios from "axios";

export default function History() {
  const navigation = useNavigation();
  const [payments, setPayments]: any = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get("/payments");
        setPayments(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPayments();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Tarjeta de compra */}
        {payments.map((payment: any) => (
          <View key={payment.id} style={styles.card}>
            <View style={styles.cardContent} >
              <View style={styles.details} >

            <Icon name="restaurant" size={50} color="#288FF6" style={styles.icon} />
            <Text style={styles.textTitle}>Compra de Comida</Text>
            <Text style={styles.textDetail}>Lugar: Polleria La Bendicion</Text>
            <Text style={styles.textDetail}>Monto: Q{payment.amount}</Text>
            <Text style={styles.textDetail}>
              Fecha: {new Date(payment.date).toLocaleString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Text>
            </View>

            </View>
          </View>
        ))}
      </ScrollView>

      {/* NavBar */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.navigate('History')} style={styles.navItem}>
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
    paddingBottom: 80, // Añadido padding para asegurar que no se solape con el NavBar
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  textTitle: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  textDetail: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
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
