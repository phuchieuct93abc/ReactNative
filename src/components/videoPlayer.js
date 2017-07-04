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
  Dimensions,Text,StyleSheet,TouchableOpacity
} from "react-native";
import VideoPlayer from "react-native-video-controls";
import Icon from 'react-native-vector-icons/FontAwesome';


export default class CustomVideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loadVideo: false,loading:true };
  }
  _onPressButton(){
     this.setState({loadVideo:true})
    console.log(123)
  }

  render() {
    const screenWidth = Dimensions.get("window").width - 20;
    let posterUrl = this.props.poster;
    let videoUrl = this.props.video;
    const height = 200;

    const styles = StyleSheet.create({
      playButtonWrapper: {
        position:"absolute",
        top:40,
        flex:1,
        width:screenWidth,
        height:height+10,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"rgba(128, 128, 128, 0.47)",

      }
     
    });

    if (this.state.loadVideo) {
    
      return (
        <VideoPlayer
          source={{ uri: videoUrl }} // Can be a URL or a local file.
          style={{ flex: 1, width: screenWidth, height: 150 }}
        />
      );
    } else {
      return (
        <View style={{flex:1,alignItems:"center",width: screenWidth, height: 250}}>
            <Text>Video : {posterUrl}</Text>
          
           <Image
            source={{ uri: posterUrl }}
            style={{ width: screenWidth ,height:200}}
          />
            <TouchableOpacity onPress={this._onPressButton.bind(this)} style={styles.playButtonWrapper}>
            <Icon name="rocket" size={30} color="#900"  style={{ alignItems:"center"}} />


          </TouchableOpacity>
        </View>
       
        )
      
    }
  }
}
