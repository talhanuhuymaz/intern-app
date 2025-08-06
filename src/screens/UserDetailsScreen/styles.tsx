import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 30,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
    margin: 15,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 4,
    borderColor: "#afafafff",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#222",
  },
  info: {
    fontSize: 14,
    color: "#444",
    marginBottom: 3,
    padding: 5,
  },
  texts: {
    flex: 1,
    paddingLeft: 20,
  },
  repoButton: {
    width: 150,
    height: 40,
    borderRadius: 25,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});

export default styles;
