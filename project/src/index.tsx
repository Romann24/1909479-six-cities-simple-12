import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { CITY } from './mocks/city';

const Setting = {
  PlacesCount : 312
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      placesCount = {Setting.PlacesCount}
      offers = {offers}
      reviews = {reviews}
      location={CITY.location}
    />
  </React.StrictMode>,
);
