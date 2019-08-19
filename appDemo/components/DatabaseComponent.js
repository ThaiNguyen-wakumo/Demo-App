import React, { Component } from "react";
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Platform,
  TouchableHighLight,
  RefreshControl,
  TextInput
} from "react-native";

import firebase from "react-native-firebase";

const iosConfig = {
  clientId:
    "56901142324-kkliklbnmp850dqtj2oaanmo7ull40eh.apps.googleusercontent.com",
  appId: "1:56901142324:ios:1cbc3485c3868103",
  apiKey: "AIzaSyCOLi1lKOaeimUlimjAA6dtgJ6WeSAMtGw",
  databaseURL: "https://appdemo-b6ce0.firebaseio.com",
  storageBucket: "appdemo-b6ce0.appspot.com",
  messagingSenderId: "56901142324",
  projectId: "appdemo-b6ce0",
  persistance: true
};

const androidConfig = {
  persistance: true
};

const animalApp = firebase.initializeApp(
  Platform.OS === "ios" ? iosConfig : androidConfig,
  "animalApp"
);

const rootRef = firebase.database().ref();
const animalRef = rootRef.child("animal");

export default class DatabaseComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: [],
      newAnimalName: "",
      loading: false
    };
  }
  componentDidMount() {}
  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: Platform.OS === "ios" ? iosConfig : androidConfig
        }}
      >
        <View
          style={{
            backgroundColor: "green",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            height: 64
          }}
        >
          <TextInput
            style={{
              height: 40,
              width: 200,
              margin: 10,
              padding: 10,
              borderColor: "white",
              borderWidth: 1,
              color: "white"
            }}
            keyboardType="default"
            placeholderTextColor="white"
            placeholder="Enter animal name"
            autoCapitalize="none"
            onChangeText={text => {
              this.setState({
                newAnimalName: text
              });
            }}
            value={this.state.newAnimalName}
          />

          <TouchableHighLight
            style={{
              marginRight: 10
            }}
            underlayColor="tomato"
            onPress={this.onPressAdd}
          />
        </View>

        <FlatList>
          data={this.state.animals}
          renderItem=
          {({ item, index }) => {
            return (
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  margin: 10
                }}
              >
                {item.animalName}
              </Text>
            );
          }}
        </FlatList>
      </View>
    );
  }
}
