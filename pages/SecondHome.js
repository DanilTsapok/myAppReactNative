import { AntDesign, Entypo } from "@expo/vector-icons";

import React from "react";
import { useState } from "react";
import { TouchableHighlight, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Modal } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";

function SecondHome() {
  const colorback = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  };

  const [modalActive, setModalActive] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  const dataUser = [
    {
      username: "Danil",
      number: "+38023408234",
    },
    {
      username: "Yarik",
      number: "+38023408234",
    },
    {
      username: "Alina",
      number: "+38023408234",
    },
    {
      username: "Andrey",
      number: "+38023408234",
    },
    {
      username: "Max",
      number: "+38023408234",
    },
    {
      username: "Evgeniy",
      number: "+38023408234",
    },
    {
      username: "Sasha",
      number: "+38023408234",
    },
  ];
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={modalActive}
        onRequestClose={() => setModalActive(false)}
      >
        {currentUser != null ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontSize: 30 }}>Виклик..</Text>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: colorback(),
                  borderRadius: 50,
                  width: 100,
                  height: 100,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 50,

                    textAlign: "center",
                  }}
                >
                  {currentUser.username ? currentUser.username.slice(0, 1) : ""}
                </Text>
              </View>
            </View>
            <Text>{currentUser.username}</Text>
            <Text style={{ fontSize: 30 }}>{currentUser.number}</Text>
            <TouchableOpacity onPress={() => setModalActive(false)}>
              <View
                style={{
                  width: 80,
                  height: 80,
                  backgroundColor: "red",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 50,
                  marginTop: "70%",
                }}
              >
                <Entypo name="phone" size={24} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          ""
        )}
      </Modal>
      {dataUser.map((item, index) => (
        <View
          key={index}
          style={{
            width: "100%",
            flexDirection: "row",
            height: 60,
            borderBottomWidth: 1,
            borderBottomColor: "grey",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View
              style={{
                width: 50,
                height: 50,

                justifyContent: "center",
                alignItems: "center",
                backgroundColor: colorback(),
                borderRadius: 50,
              }}
            >
              <Text style={{ color: "white" }}>
                {item.username.slice(0, 1)}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              setModalActive(true), setCurrentUser(item);
            }}
          >
            <View style={{ flex: 2 }}>
              <Text>{item.username}</Text>
              <Text>{item.number}</Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
              marginRight: 25,
            }}
          >
            <Entypo name="phone" size={30} color="blue" />
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default SecondHome;
