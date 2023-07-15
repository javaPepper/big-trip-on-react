/* eslint-disable @typescript-eslint/no-shadow */
import { useAppSelector } from '../../hooks';
import { Destination } from '../../types/destination';
import Spinner from '../spinner/spinner';

type DestinationComponentProps = {
  destination: Destination;
};

function DestinationComponent({ destination }: DestinationComponentProps) {
  const { description, pictures } = destination || {};
  const isDataLoading = useAppSelector((state) => state.isDataLoading);

  return (
    <>
      {description && pictures.length > 0 && isDataLoading ?
        <><p className="event__destination-description">{description}</p>
          <div className="event__photos-container">
            <div className="event__photos-tape">
              <div>
                {pictures.map(({ src, description }) => (
                  <img
                    className="event__photo"
                    src={src}
                    alt={description}
                    key={src}
                  />
                ))}
              </div>
            </div>
          </div>
        </> : <Spinner />}
    </>
  );
}

export default DestinationComponent;
