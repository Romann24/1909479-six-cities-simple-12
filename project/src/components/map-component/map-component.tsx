import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap/useMap';
import {DEFAUILT_POINT_URL, CURRENT_POINT_URL} from '../../const';
import {Location, Offers, Offer} from '../../types/offers';

type MapProps = {
  location: Location;
  offers: Offers;
  selectedOffer: Offer | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: DEFAUILT_POINT_URL,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: CURRENT_POINT_URL,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

function Map(props: MapProps): JSX.Element {
  const {location, offers, selectedOffer} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {

        const marker = new Marker({
          lat: offer.city.location.lat,
          lng: offer.city.location.lng
        });
        marker
          .setIcon(
            selectedOffer !== undefined && offer.id === selectedOffer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  return (
    <div
      style={{height: '823px'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
