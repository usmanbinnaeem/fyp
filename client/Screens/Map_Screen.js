import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import MapView, { Marker } from "react-native-maps";
import { View, StyleSheet, PermissionsAndroid, Platform } from "react-native";
import Geolocation from "react-native-geolocation-service";

BASE_URL = "http://192.168.0.181:3000";

const LiveMap = () => {
  const [location, setLocation] = useState({ lat: null, lng: null });

  useEffect(() => {
    const socket = io(`${BASE_URL}`);

    // Listen for location updates from the server
    socket.on("locationUpdated", (newLocation) => {
      setLocation(newLocation);
    });

    const requestLocationPermission = async () => {
      if (Platform.OS === "android") {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Location Permission",
            message: "This app needs access to your location",
            buttonPositive: "OK",
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      }
      return true;
    };

    const watchLocation = () => {
      if (Platform.OS === "android") {
        Geolocation.watchPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            socket.emit("updateLocation", { lat: latitude, lng: longitude });
          },
          (error) => {
            console.log(error);
          },
          {
            enableHighAccuracy: true,
            distanceFilter: 10, // Update location every 10 meters
            interval: 1000, // Update location every second
            fastestInterval: 1000, // Receive location updates every second
          }
        );
      }
    };

    requestLocationPermission().then((granted) => {
      if (granted) {
        watchLocation();
      } else {
        console.log("Location permission not granted");
      }
    });

    // Clean up the connection when the component is unmounted
    return () => {
      socket.disconnect();
    };
  }, []);

  if (!location.lat || !location.lng) {
    return <View />;
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: location.lat,
            longitude: location.lng,
          }}
          title="Vehicle"
          description="Current location"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default LiveMap;
