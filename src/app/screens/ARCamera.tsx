import { CameraView, CameraType } from 'expo-camera';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withRepeat, withTiming } from 'react-native-reanimated';
import ConfirmPayment from './ConfirmPayment';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {
//   ViroARScene,
//   ViroText,
//   ViroTrackingStateConstants,
//   ViroARSceneNavigator,
//   ViroTrackingReason,
// } from "@viro-community/react-viro";

const Stack = createNativeStackNavigator(); // Crea el stack a


export default function ARCamera() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [isTextVisible, setIsTextVisible] = useState(true);

  const navigation = useNavigation(); 
  const route = useRoute();
  const { amount } : any= route.params || {};

  // Shared value for opacity (for the cube)
  const opacityValue = useSharedValue(3);

  // Function to handle stronger blinking animation
  const startBlinking = () => {
    opacityValue.value = withRepeat(
      withTiming(0.2, { duration: 500, easing: Easing.ease }), // Fade to 20% opacity (more noticeable)
      -1, // Infinite repetitions
      true // Reverses the animation for a stronger blinking effect
    );
  };

  useEffect(() => {
    startBlinking();

    const timer = setTimeout(() => {
      navigation.navigate('ConfirmPayment', { amount }) 
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigation]); 

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  const textStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityValue.value, 
      transform: [
        { translateY: withRepeat(withTiming(isTextVisible ? 0 : -10, { duration: 800 }), -1, false) }
      ],
    };
  });

  const cubeStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityValue.value, 
    };
  });

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        {/* Display the "Escaneando" text with stronger blinking effect */}
        <Animated.View style={[styles.loaderContainer, textStyle]}>
          <Text style={styles.loaderText}>Escaneando...</Text>
        </Animated.View>

        {/* Animated cube with stronger blinking effect */}
        <Animated.View testID='cube-container' style={[styles.cubeContainer, cubeStyle]}>
          <View style={styles.cube}></View>
        </Animated.View>
        
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 50,
    width: '100%',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  loaderContainer: {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: [{ translateX: -75 }],
    alignItems: 'center',
  },
  loaderText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    right: '45%',
  },
  cubeContainer: {
    position: 'absolute',
    top: '35%',
    left: '30%',
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cube: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 150, 255, 1)', // Soft blue
    borderWidth: 0,
    borderRadius: 10, // Smoother corners
    
    // 3D effect with shadows and perspective
    shadowColor: 'rgba(0, 0, 0, 0.7)', // Darker shadow for more depth
    shadowOpacity: 0.9, // Increase opacity to make shadows stronger
    shadowOffset: { width: 10, height: 10 }, // Move the shadow to give a sense of depth
    shadowRadius: 20, // Larger shadow radius to soften the edges
    
    // Simulate the 3D effect using transforms
    transform: [
      { perspective: 1000 }, // Add perspective for 3D effect
      { rotateX: '15deg' }, // Rotate along X axis for depth
      { rotateY: '15deg' }, // Rotate along Y axis for more dynamic 3D look
    ],
  },
});
