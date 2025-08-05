import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F2F2F7",
    flexDirection: "column",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 3,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333333",
  },
  favoriteIcon: {
    fontSize: 25,
    color: "#f5a623",
  },
  favText: {
    fontSize: 16,
    color: "#f5a623",
  },
  description: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomColor: "#E5E5EA",
    borderBottomWidth: 1,
  },
  label: {
    fontSize: 16,
    color: "#8E8E93",
  },
  value: {
    fontSize: 16,
    color: "#1C1C1E",
    fontWeight: "500",
  },
  url: {
    paddingTop: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: "#1c1c1e",
  },
  fav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderColor: "#f5a623",
    backgroundColor: "#ffffffff",
    marginTop: 20,
  },
});

export default styles;
