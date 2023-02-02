import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  button: {
    backgroundColor: "rgba(123,104,238,0.8)",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,

    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#FFF",
  },

  buttonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFF",
    letterSpacing: 0.5,
  },

  bottomContainer: {
    justifyContent: "center",
    height: height / 3,
  },

  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    borderRadius: 20,

    marginHorizontal: 20,
    marginVertical: 10,
    paddingLeft: 10,
  },

  formButton: {
    backgroundColor: "rgba(123,104,238,0.8)",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    borderWidth: 1,
    borderColor: "#FFF",

    marginHorizontal: 20,
    marginVertical: 10,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  formInputContainer: {
    marginBottom: 70,
    ...StyleSheet.absoluteFill,
    zIndex: -1,
    justifyContent: "center",
  },

  closeButtonContainer: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#FFF",
    borderRadius: 20,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 1,

    top: -20,
  },
});

export default styles;
