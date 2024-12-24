import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core';

import './App.css'
import LandingPage from './pages/LandingPage'

function App() {
  
  return (
    <MantineProvider>
      <LandingPage/>
    </MantineProvider>
  )
}

export default App
