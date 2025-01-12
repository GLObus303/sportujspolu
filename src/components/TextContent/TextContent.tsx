import { ChildrenFC } from '../../utils/type';
import './TextContent.scss';

export const TextContent: ChildrenFC = ({ children }) => (
  <div className="text-content">{children}</div>
);
