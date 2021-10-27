

import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { View, StyleSheet, Text, FlatList, SafeAreaView } from "react-native";

import { RoundedButton } from "../../components/RoundedButton";
import { fontSizes, spacing } from "../../utils/sizes";

export const Focus = ({ addSubject, focusHistory }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>What would you like to focus on?</Text>
      <View style={styles.container}>
        <TextInput
          style={{ flex: 1 }}
          maxLength={50}
          value={subject}
          onSubmitEditing={({ nativeEvent: { text } }) => setSubject(text)}
        />
        <RoundedButton
          style={styles.addSubject}
          size={50}
          title="+"
          onPress={() => addSubject(subject)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  titleContainer: { flex: 0.5, padding: 16, justifyContent: "center" },
  title: {
    color: "#fff",
    fontWeight: "bold",
    padding: 16,
    fontSize: fontSizes.lg,
  },
  addSubject: { marginLeft: 10, alignSelf: "center" },
});

