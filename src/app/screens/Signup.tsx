import { View, Text, StyleSheet } from "react-native";
import React, {useState} from 'react';

export default function SignupScreen() {
  return (
    <View testID="signup-container" >
        <Text>
            Sign Up !
        </Text>
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
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#fff',
    marginVertical: 30,
    borderWidth: 1
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
