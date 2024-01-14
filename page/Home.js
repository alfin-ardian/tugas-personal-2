import React from "react";
import { Button } from "react-native-paper";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const goToAbout = () => {
    navigation.navigate("About");
  };
  const goToMap = () => {
    navigation.navigate("Map");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Selamat datang di aplikasi ini</Text>
      <View style={styles.inlineButtons}>
        <Button
          style={{ marginRight: 10 }}
          mode="contained"
          onPress={goToAbout}
        >
          About
        </Button>
        <Button style={{ marginRight: 10 }} mode="contained" onPress={goToMap}>
          Peta
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 20,
    textAlign: "center",
  },
  inlineButtons: {
    flexDirection: "row",
    marginTop: 15,
  },
});

export default Home;
