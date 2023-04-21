import { StyleSheet } from "react-native";

const RegistrationStyles = StyleSheet.create({
  title: {
    marginBottom: 15,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    height: 40,
    width: 250,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    fontSize: 18,
    color: "black",
  },
  text: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 40,
  },
  touch: {
    position: "absolute",
    top: 150,
    left: 205,
  },
  button: {
    height: 40,
    width: 200,
    borderRadius: 5,
    backgroundColor: "green",
    color: 'white',
    textAlign: "center",
    paddingTop: 10,
    marginLeft: 25,
    marginBottom: 5,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  }
});

export const { image, button, title, input, text, touch } = RegistrationStyles;
