import React from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

const Map = ({ nama }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Halo, {nama}</Text>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapcontainer}
        initialRegion={{
          latitude: -7.413862,
          longitude: 111.110136,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        showUserLocation={true}
      >
        <Marker
          coordinate={{
            latitude: -7.413862,
            longitude: 111.110136,
          }}
        />
      </MapView>
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
  mapcontainer: {
    marginTop: 4,
    marginBottom: 4,
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const mapStateToProps = (state) => ({
  nama: state.nama,
});

export default connect(mapStateToProps)(Map);
