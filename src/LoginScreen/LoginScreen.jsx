import {
  View,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState } from "react";
import { container, button, title, input, touch, text } from "./LoginStyles";

const LoginScreen = () => {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [isSecure, setIsSecure] = useState(true);

  const handleSecureEntry = () => {
    setIsSecure(!isSecure);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <View style={container}>
          <Text style={title}>Login</Text>
          <TextInput
              onChangeText={(text) => setLogin(text)}
              placeholder="Email"
              value={login}
              style={input}
              textContentType="emailAddress"
          />
          <TextInput
              onChangeText={(text) => setPassword(text)}
              textContentType="password"
              secureTextEntry={isSecure}
              placeholder="Password"
              style={input}
              value={password}
              TextField="this"
          />
          {password && (
              <TouchableOpacity onPress={handleSecureEntry} style={touch}>
                <Text>{isSecure ? "Show" : "Hide"}</Text>
              </TouchableOpacity>
          )}
          <TouchableOpacity
              onPress={() => {
                {
                  login &&
                  password &&
                  console.log(`
                    Login: ${login},
                    Password: ${password}`);
                }
              }}
          ><Text style={button}>Login</Text></TouchableOpacity>
      <View>
        <Text style={text}>Dont have account? Registration</Text>
      </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
export default LoginScreen;
