// screens/HomeScreen.js
import React from "react";
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from "react-native";
import useFeedingLogs from "../hooks/useFeedingLogs";

const HomeScreen = () => {
  const { data, loading, error } = useFeedingLogs();

  if (loading) {
    return <ActivityIndicator size="large" style={styles.center} />;
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Hata: {error}</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.text}>Tarih: {item.date}</Text>
      <Text style={styles.text}>Miktar: {item.amount} ml</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
  },
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: "#f0f0f0",
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
  },
});

export default HomeScreen;
