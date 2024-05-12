import cx from 'classnames';

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
        className={cx('mt-5', {
          'text-primary': status === undefined,
          'text-secondary': status !== undefined,
        })}
      >
        {title}
      </h2>
      <Button className="mx-auto mt-5" onClick={onClose}>
        Zavřít
      </Button>
    </>
  );
};
