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
  Dimensions,
  TextInput
} from "react-native";
import Button from "react-native-button";
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

export default class SignupTab extends Component {
  writeUserData(fullname) {
    firebase.database
      .ref("UserList/")
      .push({
        fullname
      })
      .then(data => {
        console.log("data", data);
      })
      .catch(error => {
        console.log("error", error);
      });
  }

  styles = StyleSheet.create({
    containerUp: {
      alignItems: "center",
      marginTop: 40
    },
    title: {
      color: "black",
      fontSize: 20,
      fontWeight: "bold"
    },
    containerMid: {
      marginTop: 20
    },
    input: {
      height: 40,
      width: 200,
      margin: 10,
      padding: 10,
      borderColor: "gray",
      borderWidth: 1,
      color: "black"
    },
    containerDown: {
      alignItems: "center"
    },
    btnUpdate: {
      backgroundColor: "green",
      width: 80,
      height: 30,
      color: "white",
      paddingTop: 5
    }
  });

  render() {
    return (
      <View>
        <View style={this.styles.containerUp}>
          <Text style={this.styles.title}> Sign Up </Text>
        </View>
        <View style={this.styles.containerMid}>
          <Text> Full Name </Text>
          <TextInput
            style={this.styles.input}
            placeholder="Enter your fullname"
          />
          <Text> Email </Text>
          <TextInput style={this.styles.input} placeholder="Enter your email" />
        </View>
        <View style={this.styles.containerDown}>
          <Button style={this.styles.btnUpdate} onPress={this.onUpdate}>
            Update
          </Button>
        </View>
      </View>
    );
  }
}
