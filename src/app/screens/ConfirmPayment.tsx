import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';

export default function ConfirmPayment() {
    const navigation = useNavigation();
    const route = useRoute();
    const { amount }: any = route.params || {}; // Asegurarse de que 'amount' no sea undefined

    // Estado para almacenar la fecha de la transacción
    const [transactionDate] = useState<Date>(new Date()); // Generar la fecha al cargar la pantalla

    // Formatear la fecha y hora sin segundos
    const formatDate = (date: Date): string => {
        return date.toLocaleString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    // Función para guardar el pago
    const savePayment = async () => {
        try {
            // Enviar la solicitud con la fecha actual
            await axios.post('/save-payment', {
                amount,
                date: transactionDate,
            });

            navigation.navigate('Success'); // Navegar a Success después de confirmar
        } catch (error) {
            console.error(error);
            alert('Error al guardar el pago');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title2}>Confirmar datos</Text>
            {amount ? (
                <View>
                    <Text style={styles.title}>Monto</Text>
                    <Text style={styles.amountText}>{` Q${amount}`}</Text>
                    <Text style={styles.title}>Transferir a</Text>
                    <Text style={styles.amountText}>Pollería La Bendición</Text>
                    <Text style={styles.title}>Fecha</Text>
                    <Text style={styles.amountText}>
                        {formatDate(transactionDate)} {/* Fecha sin segundos */}
                    </Text>
                </View>
            ) : (
                <Text style={styles.errorText}>No se proporcionó un monto válido.</Text>
            )}
            <TouchableOpacity
                style={styles.confirmButton}
                onPress={savePayment} // Guardar solo si se confirma
            >
                <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.navigate('Home')} // Solo navegar sin guardar
            >
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
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    title2: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 130,
    },
    amountText: {
        fontSize: 20,
        marginBottom: 30,
        borderColor: '#333',
        borderRadius: 10,
        width: 300,
        padding: 5,
        backgroundColor: '#A2A6AC',
        color: '#000',
    },
    errorText: {
        fontSize: 16,
        marginBottom: 40,
        textAlign: 'center',
        color: 'red',
    },
    confirmButton: {
        width: 200,
        height: 60,
        backgroundColor: '#288FF6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 20,
    },
    backButton: {
        width: 200,
        height: 60,
        backgroundColor: '#555',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
