import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";

import { Modal } from "react-native";

function HomePage() {
  const [isActive, setActive] = useState(false);
  const [img, setImg] = useState([]);
  const [selectingImg, setSelectImg] = useState(null);
  const [deletingImg, setDeleteImg] = useState([]);

  const selectImg = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (!result.canceled) {
      setImg((previmg) => [
        ...previmg,
        { uri: result.assets[0].uri, name: result.assets[0].name },
      ]);
    }
  };

  const deleteImg = () => {
    if (selectingImg !== null) {
      setImg((previmg) => previmg.filter((item) => item !== selectingImg));
      setDeleteImg([...deletingImg, selectingImg]);

      setActive(false);
    }
  };

  return (
    <View style={styles.body}>
      {img.length === 0 ? (
        <View
          style={{
            width: "100%",
            marginTop: "70%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Виберіть фото</Text>
        </View>
      ) : (
        ""
      )}
      <ScrollView>
        <Modal
          animationType="slide"
          visible={isActive}
          onRequestClose={() => setActive(false)}
        >
          <View>
            <TouchableOpacity
              onPress={() => setActive(false)}
              style={{
                position: "absolute",
                right: 0,
              }}
            >
              <AntDesign
                name="close"
                size={20}
                style={{
                  margin: 20,
                }}
              />
            </TouchableOpacity>
          </View>
          <View>
            {selectingImg != null ? (
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "75%",
                  marginVertical: 100,
                }}
              >
                <Image
                  source={{ uri: selectingImg.uri }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
                <Text>{selectingImg.name.slice(0, 36)}</Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "red",
                    width: "50%",
                    height: 60,
                    marginTop: 20,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 50,
                  }}
                  onPress={() => deleteImg()}
                >
                  <Text style={{ color: "#fff", fontSize: 16 }}>Delete</Text>
                </TouchableOpacity>
              </View>
            ) : (
              ""
            )}
          </View>
        </Modal>
        <View style={styles.container}>
          {img.map((item, index) => (
            <View key={index} styles={styles.imgContainer}>
              <TouchableOpacity
                onPress={() => {
                  setActive(true);
                  setSelectImg(item, index);
                }}
              >
                <Image
                  source={{ uri: item.uri }}
                  style={styles.image}
                  keyExtractor={(item, index) => index.toString()}
                />
              </TouchableOpacity>
              <Text style={{ textAlign: "center" }}>
                {item.name.slice(0, 13)}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.btnAddPhoto}>
        <TouchableOpacity style={styles.btnTouch} onPress={() => selectImg()}>
          <AntDesign
            name="plus"
            size={30}
            color={"#7fafff"}
            style={styles.btnTouchIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    position: "relative",
  },
  btnTouch: {
    width: 60,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 10,
    bottom: 10,
    zIndex: 999,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "lightgrey",
    padding: 10,
    borderRadius: 50,
  },

  imgContainer: {
    width: "30%",
    marginBottom: 10,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 8,
    resizeMode: "cover",
    margin: 10,
  },
});

export default HomePage;
