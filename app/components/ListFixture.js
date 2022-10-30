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

function ListFix(props) {
  const [lists, setList] = useState([
    {
      id: "1",
      city: "https://upload.wikimedia.org/wikipedia/vi/thumb/1/1d/Manchester_City_FC_logo.svg/615px-Manchester_City_FC_logo.svg.png?20171110155930",
      cityname: "Man City",
      other:
        "https://upload.wikimedia.org/wikipedia/vi/thumb/a/a1/Man_Utd_FC_.svg/330px-Man_Utd_FC_.svg.png",
      othername: "Man Utd",
      score: "2 - 1",
      date: "July 23",
      home: "yes",
    },
    {
      id: "2",
      city: "https://upload.wikimedia.org/wikipedia/vi/thumb/1/1d/Manchester_City_FC_logo.svg/615px-Manchester_City_FC_logo.svg.png?20171110155930",
      other:
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/800px-Liverpool_FC.svg.png",
      othername: "Liverpool",
      cityname: "Man City",

      score: "3 - 0",
      date: "July 30",
      home: "yes",
    },
    {
      id: "3",
      city: "https://upload.wikimedia.org/wikipedia/vi/thumb/1/1d/Manchester_City_FC_logo.svg/615px-Manchester_City_FC_logo.svg.png?20171110155930",
      other:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/270px-Chelsea_FC.svg.png",
      othername: "Chelsea",
      cityname: "Man City",

      score: "0 - 2",
      date: "August 4",
      home: "no",
    },
    {
      id: "4",
      city: "https://upload.wikimedia.org/wikipedia/vi/thumb/1/1d/Manchester_City_FC_logo.svg/615px-Manchester_City_FC_logo.svg.png?20171110155930",
      other:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/285px-FC_Barcelona_%28crest%29.svg.png",
      othername: "Man Utd",
      cityname: "Man City",

      score: "5 - 4",
      date: "August 10",
      home: "no",
    },
    {
      id: "5",
      city: "https://upload.wikimedia.org/wikipedia/vi/thumb/1/1d/Manchester_City_FC_logo.svg/615px-Manchester_City_FC_logo.svg.png?20171110155930",
      other:
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/225px-Real_Madrid_CF.svg.png",
      othername: "Real Mad",
      cityname: "Man City",

      score: "2 - 3",
      date: "August 13",
      home: "yes",
    },
    {
      id: "6",
      city: "https://upload.wikimedia.org/wikipedia/vi/thumb/1/1d/Manchester_City_FC_logo.svg/615px-Manchester_City_FC_logo.svg.png?20171110155930",
      other: "https://upload.wikimedia.org/wikipedia/vi/b/b1/WestHam.png",
      othername: "West Ham",
      cityname: "Man City",

      score: "1 - 2",
      date: "August 20",
      home: "no",
    },
  ]);

  return (
    <View style={styles.mainview}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: StatusBar.currentHeight,
        }}
      >
        <ScrollView>
          <FlatList
            data={lists}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              if (item.home === "yes") {
                return (
                  <View style={{ marginVertical: 15 }}>
                    <View style={styles.card}>
                      <View
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: 20,
                        }}
                      >
                        <View style={styles.small}>
                          <Text
                            style={{
                              color: "white",
                              fontSize: 20,
                              fontWeight: "500",
                            }}
                          >
                            {item.score}
                          </Text>
                        </View>
                      </View>
                      <View style={{ left: 70, bottom: 50 }}>
                        <Image
                          source={{ uri: item.city }}
                          style={{ width: 60, height: 60 }}
                        ></Image>
                        <Text style={{ fontSize: 15, fontWeight: "700" }}>
                          {item.cityname}
                        </Text>
                      </View>
                      <View style={{ left: 258, bottom: 130 }}>
                        <Image
                          source={{ uri: item.other }}
                          style={{ width: 60, height: 60 }}
                        ></Image>
                        <Text style={{ fontSize: 15, fontWeight: "700" }}>
                          {item.othername}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              }
              {
                return (
                  <View style={{ marginVertical: 15 }}>
                    <View style={styles.card}>
                      <View
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: 20,
                        }}
                      >
                        <View style={styles.small}>
                          <Text
                            style={{
                              color: "white",
                              fontSize: 20,
                              fontWeight: "500",
                            }}
                          >
                            {item.score}
                          </Text>
                        </View>
                      </View>
                      <View style={{ left: 70, bottom: 50 }}>
                        <Image
                          source={{ uri: item.other }}
                          style={{ width: 60, height: 60 }}
                        ></Image>
                        <Text style={{ fontSize: 15, fontWeight: "700" }}>
                          {item.othername}
                        </Text>
                      </View>
                      <View style={{ left: 258, bottom: 130 }}>
                        <Image
                          source={{ uri: item.city }}
                          style={{ width: 60, height: 60 }}
                        ></Image>
                        <Text style={{ fontSize: 15, fontWeight: "700" }}>
                          {item.cityname}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              }
            }}
          ></FlatList>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainview: {
    backgroundColor: "#e4e4e4",
  },

  card: {
    width: 388,
    height: 120,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 10,
  },
  images: {
    width: 350,
    height: 200,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  small: {
    width: 80,
    height: 40,
    backgroundColor: "black",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListFix;
