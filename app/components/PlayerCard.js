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

function Player(props) {
  const [lists, setList] = useState([
    {
      id: "1",
      story:
        "https://www.mancity.com/meta/media/xg0cuprp/ederson.png?width=376&quality=100",
      navigat: "",
      description: "",
    },
    {
      id: "2",
      story:
        "https://www.mancity.com/meta/media/qhmhkd01/kyle-walker.png?width=376&quality=100",
      navigat: "",
      description: "",
    },
    {
      id: "3",
      story:
        "https://www.mancity.com/meta/media/qdlbnbg2/jack-grealish.png?width=376&quality=100",
      navigat: "",
      description: "",
    },
    {
      id: "4",
      story:
        "https://www.mancity.com/meta/media/4jeo4c53/kevin-de-bruyne.png?width=376&quality=100",
      navigat: "",
      description: "",
    },
    {
      id: "5",
      story:
        "https://www.mancity.com/meta/media/233jlh2j/microsoftteams-image-127.png?width=376&quality=100",
      navigat: "",
      description: "",
    },
  ]);
  return (
    <View
   
    >   
      <ScrollView>
        <FlatList
          data={lists}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={{ margin: 5 }}>
                <View style={styles.card}>
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="##00138"
                    onPress={() => console.log("hi")}
                  >
                    <Image source={{ uri: item.story }} style={styles.images} />
                  </TouchableHighlight>
                  <View>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                      {" "}
                      {item.description}{" "}
                    </Text>
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
    width: 90,
    height: 90,
    backgroundColor: "#001838",
    marginLeft: 5,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 35,
  },
  images: {
    width: 90,
    height: 90,
    borderRadius: 35,
  },
});

export default Player;
