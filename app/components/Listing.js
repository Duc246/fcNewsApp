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

function List(props) {
  const [lists, setList] = useState([
    {
      id: "1",
      story:
        "https://i2-prod.manchestereveningnews.co.uk/incoming/article22764924.ece/ALTERNATES/s1200d/0_11.jpg",
      navigat: "",
      description: "",
    },
    {
      id: "2",
      story:
        "https://static.independent.co.uk/2022/05/22/18/newFile-2.jpg?quality=75&width=982&height=726&auto=webp",
      navigat: "",
      description: "",
    },
    {
      id: "3",
      story:
        "https://static.independent.co.uk/2021/10/13/17/newFile-9.jpg?quality=75&width=982&height=726&auto=webp",
      navigat: "",
      description: "",
    },
    {
      id: "4",
      story:
        "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0002/28/thumb_127617_default_news_size_5.jpeg",
      navigat: "",
      description: "",
    },
    {
      id: "5",
      story:
        "https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2022-07/erling-haaland-man-city-07232022-ftr-getty.jpg?itok=OG-2pHyu",
      navigat: "",
      description: "",
    },
  ]);

  return (
    <View>
      <ScrollView style={styles.scroll_view}>
        <FlatList
          horizontal
          data={lists}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View>
                <View style={styles.card}>
                  <TouchableHighlight onPress={() => console.log("hi")}>
                    <Image source={{ uri: item.story }} style={styles.images} />
                  </TouchableHighlight>
                  <Text>
                    
                  </Text>
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
    width: 100,
    height: 170,
    backgroundColor: "#dddddd",
    marginLeft: 5,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 16,
  },
  images: {
    width: 100,
    height: 170,
    borderRadius: 16,

  },
  scroll_view: {
    flexDirection: "row",
  },
});

export default List;
