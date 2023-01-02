import { Offer } from "../../types/offer";
import { useState, HTMLAttributes } from "react";

type OfferComponentProps = {
  offer: Offer;
} & HTMLAttributes<HTMLDivElement>

function OfferComponent({ offer, onChange }: OfferComponentProps) {
  const { id, title, price } = offer;
  const [ isChecked, setChecked ] = useState<boolean>(false);

  const handleOnChange = () => {
    setChecked(!isChecked);
  };

  return (
    <div className="event__offer-selector" onChange={handleOnChange}>
      <input
        className="event__offer-checkbox  visually-hidden"
        id={`event-offer-${id}`}
        type="checkbox"
        name="event-offer"
        checked={isChecked}
        onChange={onChange}
      />
      <label
        className="event__offer-label"
        htmlFor={`event-offer-${id}`}
      >
        <span className="event__offer-title">{title}</span> +€&nbsp;
        <span className="event__offer-price">{price}</span>
      </label>
    </div>
  );
}

export default OfferComponent;
