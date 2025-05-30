import { useState } from 'react'
import './App.css'
import ToggleMessage from './toggle'
import TextInputDisplay from './Display'
import ClickTracker from './Click'
import SimpleForm from './Submit'
import CharacterCounter from './CharCounter'
import UserProfile from './fetchUser'
import PersistentInput from './inputLocal'
import PostsFetcher from './PostFetch'
import ThemeToggler from './theme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ToggleMessage/> */}
      {/* <TextInputDisplay/> */}

      {/* <ClickTracker/> */}

      {/* <SimpleForm/> */}

      {/* <CharacterCounter/> */}

      {/* <UserProfile/> */}

      {/* <PersistentInput/> */}

      {/* <PostsFetcher/> */}

      <ThemeToggler/>
    </>
  )
}

export default App
