import { Image, StyleSheet, Platform, View, Text } from 'react-native';


export default function HomeScreen() {
  return (
    <View>
      <View style={styles.margin}></View>
        <Text style={styles.text}>Hi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  margin: {
    marginTop: 100,
  },
  text: {
    color: "black", 
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
