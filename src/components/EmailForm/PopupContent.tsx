import { FC } from 'react';

import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../../utils/constants';
import { Button } from '../Button';

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

type PopupContentProps = {
  status: number | undefined;
  onClose: () => void;
};

export const PopupContent: FC<PopupContentProps> = ({ status, onClose }) => (
  <>
    <h2
      className={`mt-5 ${status === 200 ? 'text-primary' : 'text-secondary'}`}
    >
      {getTitle(status)}
    </h2>
    <Button className="mx-auto mt-5" onClick={onClose}>
      Zavřít
    </Button>
  </>
);
