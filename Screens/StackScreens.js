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
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
// const Section = ({children, title}) => {
//   const isDarkMode = useColorScheme() === 'dark'
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   )
// }

function HomeScreen(props) {
  const {navigation, route} = props

  useEffect(() => {
    if (route.params?.post) {
      console.log(route.params.post)
    }
  }, [route.params?.post])

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.customStyleBold}>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            // itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
    </View>
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
        onPress={
          () =>
            navigation.setParams({
              query: 'someText',
            })
          // navigation.push('Details', {
          //   itemId: Math.floor(Math.random() * 100),
          // })
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
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
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

{
  /* <SafeAreaView style={backgroundStyle}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>
            <Header />
            <View
              style={{
                backgroundColor: isDarkMode ? Colors.black : Colors.white,
              }}>
              <Text style={styles.customStyleDimis}>Forest + Black Cat</Text>
              <Text style={styles.customStyleDimitri}>Forest + Black Cat</Text>
            </View>
          </ScrollView>
        </SafeAreaView> */
}

{
  /* <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View> */
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
