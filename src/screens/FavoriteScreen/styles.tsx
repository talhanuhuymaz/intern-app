import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  repoCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  repoName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    paddingBottom: 10,
  },
  repoUser: {
    fontSize: 14,
    color: "#213c6cff",
    marginTop: 4,
    fontStyle: "italic",
    paddingBottom: 5,
  },
  repoLang: {
    fontSize: 14,
    color: "#666",
    marginTop: 6,
    fontStyle: "italic",
  },
  removeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#d9d9d9ff",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  removeButtonText: {
    fontSize: 20,
    color: "#ffffffff",
    fontWeight: "bold",
  },
});

export default styles;