import { connect } from "react-redux";
import React, { useState } from "react";
import { setData } from "../redux/actions";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button, Snackbar } from "react-native-paper";

const About = ({ nama, hobi, setFieldData }) => {
  const [isSnackbarVisible, setSnackbarVisible] = useState(false);

  const handleSimpan = () => {
    console.log("Data disimpan:", { nama, hobi });

    setSnackbarVisible(true);
  };

  const onSnackbarDismiss = () => {
    setSnackbarVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Halo, {nama}</Text>
      <TextInput
        label="Nama"
        value={nama}
        style={styles.textInput}
        onChangeText={(text) => setFieldData("nama", text)}
      />
      <TextInput
        label="Hobi"
        value={hobi}
        style={styles.textInput}
        onChangeText={(text) => setFieldData("hobi", text)}
      />
      <Button
        style={{ marginTop: 15 }}
        icon="send"
        mode="contained"
        onPress={handleSimpan}
      >
        Simpan
      </Button>

      <Snackbar
        visible={isSnackbarVisible}
        onDismiss={onSnackbarDismiss}
        action={{
          label: "OK",
          onPress: onSnackbarDismiss,
        }}
      >
        Data berhasil disimpan!
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
    margin: 4,
  },
  welcomeText: {
    fontSize: 20,
    textAlign: "center",
  },
  textInput: {
    marginTop: 4,
    marginBottom: 4,
  },
});

const mapStateToProps = (state) => ({
  nama: state.nama,
  hobi: state.hobi,
});

const mapDispatchToProps = (dispatch) => ({
  setFieldData: (field, value) => dispatch(setData(field, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
