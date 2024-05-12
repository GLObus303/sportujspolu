import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../../utils/constants';
import { Button } from '../Button';

type PopupContentProps = {
  status: number | undefined;
  onClose: () => void;
};

export const PopupContent: React.FC<PopupContentProps> = ({
  status,
  onClose,
}) => {
  let title;

  switch (status) {
    case 401:
      title = ERROR_MESSAGE.AUTHENTICATION_REQUIRED;
      break;
    case 409:
      title = ERROR_MESSAGE.REQUEST_ALREADY_SENT;
      break;
    case undefined:
      title = SUCCESS_MESSAGE.REQUEST_SENT;
      break;
    default:
      title = ERROR_MESSAGE.GENERIC_ERROR;
  }

  return (
    <>
      <h2
        className={`mt-5 ${
          status === undefined ? 'text-primary' : 'text-secondary'
        }`}
      >
        {title}
      </h2>
      <Button className="mx-auto mt-5" onClick={onClose}>
        Zavřít
      </Button>
    </>
  );
};
