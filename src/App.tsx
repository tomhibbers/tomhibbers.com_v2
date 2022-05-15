import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
import ThemeProvider from './context/themeContext';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle></GlobalStyle>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </ThemeProvider>
    </>
  )
}

export default App
