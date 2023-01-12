import { Destination } from "../../types/destination";

type DestinationComponentProps = {
  destination: Destination;
}

function DestinationComponent({ destination}: DestinationComponentProps) {
  const { description, pictures } = destination;

  return (
    <>
      <p className="event__destination-description" >
        {description}
      </p>
      <div className="event__photos-container">
        <div className="event__photos-tape">
          <div>
            {pictures.length > 0 &&
            pictures.map(({src, description}) => <img
              className="event__photo"
              src={src}
              alt={description}
              key={description}
            />)}
          </div>
        </div>
      </div>
    </>
  );
}

export default DestinationComponent;
