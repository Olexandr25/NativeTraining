import {StyleSheet, Text, View} from 'react-native'

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Profile Screen!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 20,
  },
})

export default ProfileScreen
