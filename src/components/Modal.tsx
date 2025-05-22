import { OverlayWrapper } from './OverlayWrapper';
import { ChildrenFC } from '../utils/type';

type PopupProps = {
  onClose: () => void;
};

export const Modal: ChildrenFC<PopupProps> = ({ onClose, children }) => (
  <OverlayWrapper onClose={onClose}>
    <div className="w-full flex flex-col items-center py-5 md:w-96">
      {children}
    </div>
  </OverlayWrapper>
);
