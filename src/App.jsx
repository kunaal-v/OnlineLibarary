
import './App.css'
import Header from './Components/Header'
// import Body from './Components/Body'
import appStore from './utils/AppStore'
import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'
function App() {
 
  if(!navigator.onLine)
  {
    return (<>
      <h1>Check your network conection</h1>
    </>)
  }

  return (
    <>
   
    <Provider store={appStore}>
      <Header/>
      <Outlet/>
    </Provider>
    </>
  )
}

export default App
