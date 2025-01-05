import { OverlayWrapper } from './OverlayWrapper';
import { ChildrenFC } from '../utils/type';

type PopupProps = {
  onClose: () => void;
};

export const Popup: ChildrenFC<PopupProps> = ({ onClose, children }) => (
  <OverlayWrapper onClose={onClose}>
    <div className="w-full py-5 md:w-96">{children}</div>
  </OverlayWrapper>
);
