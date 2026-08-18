import {BrowserRouter,  Routes, Route} from 'react-router-dom'
import {UsersListData} from './components/ScreenMain'
import {UserListData} from './components/ScreenUser'
function App() {
  return (
    <BrowserRouter >

      <Routes>
        <Route path= '/' element={<UsersListData />}/>
         <Route path= '/user/:id' element={<UserListData />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
