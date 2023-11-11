import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";

function HomePage() {
  const [img, setImg] = React.useState([]);
  console.log(img.length);
  const selectImg = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (!result.canceled) {
      setImg((previmg) => [...previmg, { uri: result.assets[0].uri }]);
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
          <AntDesign name="plus" size={24} />
        </View>
      ) : (
        ""
      )}
      <ScrollView>
        <View style={styles.container}>
          {img.map((item, index) => (
            <View key={index} styles={styles.imgContainer}>
              <Image
                source={{ uri: item.uri }}
                style={styles.image}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.btnAddPhoto}>
        <TouchableOpacity style={styles.btnTouch} onPress={() => selectImg()}>
          <AntDesign
            name="plus"
            size={20}
            color={"white"}
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
    width: 50,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 10,
    bottom: 10,
    zIndex: 999,
  },
  btnTouchIcon: {
    backgroundColor: "#24A6D9",
    borderColor: "grey",
    borderWidth: 1,
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
