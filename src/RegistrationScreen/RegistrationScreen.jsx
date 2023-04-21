import {
  View,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity, KeyboardAvoidingView, Platform,
} from "react-native";
import { useState } from "react";
import { image, button, title, input, touch, text } from "./RegistrationStyles";

const RegistrationScreen = () => {
  const [login, setLogin] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isSecure, setIsSecure] = useState(true);

  const handleSecureEntry = () => {
    setIsSecure(!isSecure);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <View>
          <Text style={title}>Registration</Text>
          <TextInput
              onChangeText={(login) => setLogin(login)}
              placeholder="Login"
              value={login}
              style={input}
              textContentType='nickname'
          />
          <TextInput
              onChangeText={(email) => setEmail(email)}
              placeholder="Email"
              value={email}
              style={input}
              textContentType="emailAddress"
          />
          <TextInput
              onChangeText={(password) => setPassword(password)}
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
                {login && email && password &&
                  console.log(`
                    Login: ${login}, 
                    Email: ${email},
                    Password: ${password}`);
                }
              }}
          ><Text style={button}>Registration</Text></TouchableOpacity>
          <View>
            <Text style={text}>Dont have account? Login</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
export default RegistrationScreen;
