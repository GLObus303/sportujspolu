import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../../constants';
import { Button } from '../Button';
import { OverlayWrapper } from '../OverlayWrapper';

const getTitle = (status: number | undefined) => {
  switch (status) {
    case 401:
      return ERROR_MESSAGE.AUTHENTICATION_REQUIRED;
    case 409:
      return ERROR_MESSAGE.REQUEST_ALREADY_SENT;
    case 200:
      return SUCCESS_MESSAGE.REQUEST_SENT;
    default:
      return ERROR_MESSAGE.GENERIC_ERROR;
  }
};

type PopupProps = {
  status: number | undefined;
  onClose: () => void;
};

export const Popup: React.FC<PopupProps> = ({ status, onClose }) => (
  <OverlayWrapper onClose={onClose}>
    <div className="w-full py-5 md:w-96">
      <h2 className="my-5">{getTitle(status)}</h2>
      <Button className="mx-auto mt-5" onClick={onClose}>
        Zavřít
      </Button>
    </div>
  </OverlayWrapper>
);
