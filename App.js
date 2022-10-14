import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native'
import {ThemeContext, theme} from './src/config'
import {useEffect, useState} from 'react'

import {AppNavigator} from './src/navigation'
import {EventRegister} from 'react-native-event-listeners'

const App = () => {
  const [mode, setMode] = useState(false)

  useEffect(() => {
    let eventListener = EventRegister.addEventListener('ChangeTheme', data => {
      console.log(data)
      setMode(data)
    })

    return () => EventRegister.removeEventListener(eventListener)
  }, [])
  return (
    <ThemeContext.Provider value={mode === true ? theme.dark : theme.light}>
      <NavigationContainer theme={mode === true ? DarkTheme : DefaultTheme}>
        <AppNavigator />
      </NavigationContainer>
    </ThemeContext.Provider>
  )
}

export default App
