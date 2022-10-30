import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  VirtualizedList,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";

export default function VideoScreen({ navigation }) {
  const [video, setVideo] = React.useState([
    {
      title: "Haaland The Goddest",
      cover_photo:
        "https://c.tenor.com/rvQguUd3Eu8AAAAC/erling-haaland-haaland.gif",
      video_url:
        "https://media.istockphoto.com/videos/woman-waving-a-rainbow-flag-at-the-gay-parade-video-id1216142845",
    },
    {
      title: "Barca Champions League Soccer",
      cover_photo:
        "https://media2.giphy.com/media/xT1XGx3mIWL2J6PMWc/giphy.gif?cid=ecf05e477btruh9euj9uec2bcijhnv482yaiw9fghbxgc0om&rid=giphy.gif&ct=g",
      video_url:
        "https://media.istockphoto.com/videos/woman-waving-a-rainbow-flag-at-the-gay-parade-video-id1216142845",
    },
    {
      title:
        "Leo Messi's Highlight",
      cover_photo:
        "https://media3.giphy.com/media/3oEjI0yKL89NaKGgvK/giphy.gif?cid=ecf05e47egmu737mxp53qlb207wfdy82setw1811d9dkfju8&rid=giphy.gif&ct=g",
      video_url:
        "https://media.istockphoto.com/videos/happy-black-woman-waving-rainbow-flag-on-camera-lgbtiqq-movement-video-id1345316966",
    },
    {
      title:
        "Banana Chelse",
      cover_photo:
        "https://media1.giphy.com/media/eLY6FbNgiTTF4KueLY/giphy.gif",
      video_url:
        "https://media.istockphoto.com/videos/people-clap-cheer-and-hold-wave-rainbow-flags-as-gay-pride-parade-video-id658669598",
    },
    {
      title:
        "Paris Saint-Germain Deal With It",
      cover_photo:
        "https://media0.giphy.com/media/Urbrsmf0XQcHsIo5SK/giphy.gif?cid=ecf05e477btruh9euj9uec2bcijhnv482yaiw9fghbxgc0om&rid=giphy.gif&ct=g",
      video_url:
        "https://media.istockphoto.com/videos/happy-multiracial-people-celebrating-gay-pride-event-group-of-friends-video-id1290269569",
    },
  ]);
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
        <View style={styles.footer}>
          <View style={styles.videoCard}>
            <FlatList
              data={video}
              keyExtractor={(item) => item.title}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Detail Video")}
                  >
                    <View style={styles.videoView}>
                      <Image
                        style={styles.coverPhoto}
                        source={{ uri: item.cover_photo }}
                      />

                      <View>
                        <Text style={styles.postTitle}>{item.title}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            ></FlatList>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: "700",
  },

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
  videoCard: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  coverPhoto: {
    width: "90%",
    height: 300,
    backgroundColor: "rgba(0,0,0,0.06)",
    marginTop: 20,
    borderRadius: 10,
  },
  videoView: {
    width: "100%",
    alignItems: "center",
  },
  postTitle: {
    fontSize: 16,
    margin: 15,
    width: 360,
    alignSelf: 'center'
  },
});
