import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
  withRepeat,
} from 'react-native-reanimated';
import { responsiveWidth } from 'react-native-responsive-dimensions';

function DragAndDrop(props) {

  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);
  const scale = useSharedValue(0)
  const opacity = useSharedValue(0);

  // input
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigateTo = () => {
    if (email == "" && password =="") {
      props.navigation.navigate("Drawer")
    }
    else {
      console.log("details are not matching..")
    }
  }

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        { scale: scale.value },
        { translateX: translationX.value },
        { translateY: translationY.value },
      ],
    };
  });

  const panGesture = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translationX.value;
      context.startY = translationY.value;
      opacity.value = 1; // Reduce opacity while dragging
    },
    onActive: (event, context) => {
      translationX.value = context.startX + event.translationX;
      translationY.value = context.startY + event.translationY;
    },
    onEnd: () => {
      opacity.value = 1; // Restore opacity when dragging ends
      translationX.value = withRepeat(withSpring(0), 1, true)
      translationY.value = withRepeat(withSpring(0), 1, true)
    },
  });

  useEffect(() => {
    scale.value = withRepeat(withSpring(1), 1, true)
    opacity.value = withRepeat(withSpring(1), 1, true)
  }, []);

  console.log("Login")
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <PanGestureHandler onGestureEvent={panGesture}>
          <Animated.View style={[styles.login, animatedStyles]}>
            <Text style={styles.loginText}>Login</Text>

            <TextInput style={styles.input} onChangeText={(text) => setEmail(text)} placeholder='Enter Your Email' />

            <TextInput style={styles.input} onChangeText={(text) => setPassword(text)} placeholder='Enter Your Password' />

            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  opacity.value = withRepeat(withSpring(0), 1, true)
                  scale.value = withRepeat(withSpring(0), 1, true)
                  navigateTo()
                }}
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center",flexDirection:"row" }}>

              <Text style={{ color: "black", fontSize: 15, marginTop: 10 }}>If not register yet ?</Text>
              <TouchableOpacity onPress={() => {
                props.navigation.navigate("Registration")
              }}>
                <Text style={{ color: "blue", fontSize: 15,marginTop: 10  }}>click to Register</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white"
  },
  login: {
    width: responsiveWidth(80),
    borderWidth: 0.5,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    padding: 25,
    shadowColor: 'black',
    elevation: 50,
    backgroundColor: 'rgba(220,220,220,1)',
    borderColor: 'rgba(0,0,256,1)',
  },
  loginText: {
    textAlign: 'center',
    fontSize: 25,
    color: 'black',
    marginBottom: 10
  },
  button: {
    width: '50%',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: 'white',
    elevation: 25,
    backgroundColor: 'rgba(0,0,256,1)',
    borderColor: 'white',
    padding: 6,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  input: {
    color: 'black',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 15,
    borderColor: 'blue',
    backgroundColor: 'white',
    marginTop: 10,
    padding: 8,
  },
});

export default DragAndDrop;
