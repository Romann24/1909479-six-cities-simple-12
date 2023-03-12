import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import CardDescriptionScreen from '../../pages/card-description-screen/card-description-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

type AppScreenProps = {
  placesCount : number;
}

function App({placesCount} : AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = {AppRoute.Main}
          element = {<MainScreen placesCount={placesCount}/>}
        />
        <Route
          path = {AppRoute.Login}
          element = {<LoginScreen/>}
        />
        <Route
          path = {AppRoute.Room}
          element = {<CardDescriptionScreen/>}
        />
        <Route
          path = "*"
          element = {<NotFoundScreen/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
