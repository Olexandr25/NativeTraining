/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
  Button,
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
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'

import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
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
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

const Profile = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
      <View style={{alignItems: 'center'}}>
        <Text>Oleksandr Voichyshyn</Text>
        <Button
          title="Go to Feed"
          onPress={() => navigation.navigate('Feed')}
        />
      </View>
      <Text>This is center text.</Text>
      <Text>This is bottom text.</Text>
    </SafeAreaView>
  )
}

const Settings = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Edit account</Text>
      <Text>Change language</Text>
    </View>
  )
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: true,
          }}>
          {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Feed" component={Feed} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
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
