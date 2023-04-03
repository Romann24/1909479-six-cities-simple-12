import { Offers, ActiveOffer } from '../../types/offers';
import CardComponent from '../card-component/card-component';

type CardListProps = {
    offers: Offers;
    onActiveCardChange: (activeOffer: ActiveOffer) => void;
}

function CardListComponent ({offers, onActiveCardChange}: CardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        const keyValue = `${offer.id}-${offer.title}`;
        return <CardComponent offer={offer} key={keyValue} onActiveCardChange={onActiveCardChange} />;
      })}
    </div>
  );
}

export default CardListComponent;
