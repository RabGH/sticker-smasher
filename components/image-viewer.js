import { Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: 380,
    height: 440,
    borderRadius: 18,
  },
});

const ImageViewer = ({
  placeholderImageSource,
  selectedImage,
}) => {
  const imageSource = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;
  return <Image source={imageSource} style={styles.image} />;
};

export default ImageViewer;
