import { StyleSheet, Text, Alert, View, Image, StatusBar } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import ListFix from "../components/ListFixture";

function Fixture() {
  return (
    <View style={styles.container}>
      <ScrollView style={{ marginTop: StatusBar.currentHeight }}>
        <View style={styles.background}>
          <View style={styles.image}>
            <Image
              style={{ height: 65, width: 65 }}
              source={require("../assets/1200px-Manchester_City_FC_logo.svg.png")}
            ></Image>
          </View>
        </View>
   
      <ListFix/>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6acbdd",
  },

  background: {
    flex: 1,
    
    marginTop: 70,
    paddingBottom: 10,
  },

  footer: {
    flex: 12,
    backgroundColor: "#f5f5f5",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -15,
  },
  button: {
    borderRadius: 16,
    padding: 1,
  },

  heading: {
    fontSize: 30,
    fontWeight: "700",
  },
});

export default Fixture;
