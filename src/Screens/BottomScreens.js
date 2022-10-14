/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
} from 'react-native'
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'
import React, {useEffect} from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const Feed = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Feed</Text>
    </View>
  )
}

function HomeScreen(props) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="CreatePostScreen" component={CreatePostScreen} />
    </Tab.Navigator>
  )
}

function CreatePostScreen({navigation, route}) {
  const [postText, setPostText] = React.useState('')

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{height: 200, padding: 10, backgroundColor: 'white'}}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: {post: postText},
            merge: true,
          })
        }}
      />
    </>
  )
}

function DetailsScreen(props) {
  const {navigation, route} = props

  const {itemId, otherParam} = route.params

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.customStyleRegular}>Details Screen</Text>
      <View style={{flexDirection: 'row'}}>
        <View style={{marginRight: 24}}>
          <Text style={{fontFamily: 'StardosStencil-Bold'}}>itemId:</Text>
          <Text style={{fontFamily: 'StardosStencil-Bold'}}>otherParam:</Text>
        </View>
        <View>
          <Text>{JSON.stringify(itemId)}</Text>
          <Text>{JSON.stringify(otherParam)}</Text>
        </View>
      </View>
      <Button
        title="Go to HomeScreen"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.setParams({
            query: 'someText',
          })
        }
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{itemId: 42}}
        />
        <Stack.Screen
          name="CreatePost"
          component={CreatePostScreen}
          options={{
            title: 'Create Post',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'StardosStencil-Bold',
            },
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  customStyleBold: {
    fontSize: 42,
    lineHeight: 48,
    fontFamily: 'StardosStencil-Bold',
  },
  customStyleRegular: {
    fontSize: 42,
    lineHeight: 48,
    fontFamily: 'StardosStencil-Regular',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  textMarginRight: {
    marginRight: 24,
  },
})

export default App
