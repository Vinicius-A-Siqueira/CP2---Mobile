import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ImageCardProps {
  imageSource: any; // Para aceitar imagens locais ou URLs
  caption: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageSource, caption }) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.caption}>{caption}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  caption: {
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
  },
});

export default ImageCard;
