import { Offers } from '../../types/offers';
import CardComponent from '../card-component/card-component';

type CardListProps = {
    offers: Offers;
    onListItemHover: (onListItemName: string) => void;
}

function CardListComponent ({offers, onListItemHover}: CardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        const keyValue = `${offer.id}-${offer.title}`;
        return <CardComponent offer={offer} key={keyValue} onMouseOverHandler={(id) => onListItemHover(id)} />;
      })}
    </div>
  );
}

export default CardListComponent;
