import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  TouchableHighlight,
  Image,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import List from "./Listing";
import { Ionicons } from "@expo/vector-icons";

function ListCard(props) {
  const [lists, setList] = useState([
    {
      id: "1",
      story:
        "https://images.hindustantimes.com/img/2022/07/24/1600x900/Bayern-Munich-Man-City-Soccer-18_1658651061916_1658651061916_1658651087026_1658651087026.jpg",
      navigat: "",
      description: "Man City sealed 1-0 against Bayern Munich",
    },
    {
      id: "2",
      story: "https://www.mancity.com/meta/media/cpxjr5a3/team-bay.jpg",
      navigat: "",
      description: "2022 Lineup",
    },
    {
      id: "3",
      story:
        "https://eu-images.contentstack.com/v3/assets/blta90d05ad41a54a71/blt156193b5f90bf6a8/62b43248d8fd3b0ed8f29e88/2HWYJJW.jpg",
      navigat: "",
      description: "Pep Guardiola wants to win the CL this year",
    },
    {
      id: "4",
      story:
        "https://eu-images.contentstack.com/v3/assets/blta90d05ad41a54a71/bltfabfe498fd3aae51/62dd5e47a9a98f34b65ddd29/FYahYkdXgAAzU-B.jpeg",
      navigat: "",
      description: "HAALAND!!!",
    },
    {
      id: "5",
      story:
        "https://cdn.vox-cdn.com/thumbor/5TrTMqN3Lu9aHIfgKPmefDSTWVU=/0x0:2911x2328/1200x800/filters:focal(844x285:1308x749)/cdn.vox-cdn.com/uploads/chorus_image/image/71190347/1240042990.0.jpg",
      navigat: "",
      description: "Liverpool upsets the Blues",
    },
  ]);
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ScrollView>
        <FlatList
          data={lists}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={{ margin: 15 }}>
                <View style={styles.card}>
                  <TouchableHighlight onPress={() => console.log("hi")}>
                    <Image source={{ uri: item.story }} style={styles.images} />
                  </TouchableHighlight>
                  <View>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                      {" "}
                      {item.description}{" "}
                    </Text>
                  </View>
                  <View style={{ top: 30, flexDirection: "row" }}>
                    <Ionicons
                      name="heart-outline"
                      size={20}
                      style={{ marginLeft: 10 }}
                    />
                    <Ionicons
                      name="chatbox-outline"
                      size={20}
                      style={{ marginLeft: 10 }}
                    />
                    <Ionicons name="bookmark-outline" size={20}  style={{ marginLeft: 10 }}/>
                  </View>
                </View>
              </View>
            );
          }}
        ></FlatList>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 290,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 16,
  },
  images: {
    width: 350,
    height: 200,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});

export default ListCard;
