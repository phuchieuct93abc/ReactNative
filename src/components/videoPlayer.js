import React from "react";
import {
  TouchableNativeFeedback,
  Platform,
  ActivityIndicator,
  Alert,
  Image,
  View,
  Button,
  FlatList,
  Dimensions,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking
} from "react-native";
import Video from "react-native-video";
import Icon from "react-native-vector-icons/FontAwesome";

export default class CustomVideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loadVideo: false, paused: false };
  }
  _onPaused() {
    this.setState({ paused: !this.state.paused });
  }

  render() {
    const screenWidth = Dimensions.get("window").width - 20;
    let posterUrl = this.props.poster;
    let videoUrl = this.props.video;
    const height = 200;

    const styles = StyleSheet.create({
      wrapper: {
        paddingTop: 10,
        paddingBottom: 10,
        flex: 1
      },
      playButtonWrapper: {
        position: "absolute",
        top: 0,
        flex: 1,
        width: screenWidth,
        height: height,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(128, 128, 128, 0.47)"
      }
    });

    if (this.state.loadVideo) {
      return (
        <View style={styles.wrapper}>
          <TouchableOpacity
            onPress={this._onPaused.bind(this)}
            style={{ flex: 1 }}
          >
            <Video
              ref={ref => {
                this.player = ref;
              }}
              source={{ uri: videoUrl }}
              paused={this.state.paused} // Can be a URL or a local file.
              style={{ flex: 1, height: 150 }}
            />
          </TouchableOpacity>

          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL(videoUrl)}
          >
            Open Video
          </Text>
        </View>
      );
    }

    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          width: screenWidth,
          height: 250
        }}
      >
        <Image
          source={{ uri: posterUrl }}
          style={{ width: screenWidth, height: 200 }}
        />
        <TouchableOpacity
          onPress={() => {
            this.setState({ loadVideo: true });
          }}
          style={styles.playButtonWrapper}
        >
          <Icon
            name="rocket"
            size={30}
            color="#900"
            style={{ alignItems: "center" }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
