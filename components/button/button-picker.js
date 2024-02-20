import { View, StyleSheet } from "react-native";
import IconButton from "./icon-button";
import CircleButton from "./circle-button";

const styles = StyleSheet.create({
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});

const ButtonPicker = ({ iconOneOnPress, iconTwoOnPress, circleOnPress }) => {
  return (
    <View style={styles.optionsContainer}>
      <View style={styles.optionsRow}>
        <IconButton icon="refresh" label="Reset" onPress={iconOneOnPress} />
        <CircleButton onPress={circleOnPress} />
        <IconButton icon="save-alt" label="Save" onPress={iconTwoOnPress} />
      </View>
    </View>
  );
};

export default ButtonPicker;
