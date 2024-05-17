declare module 'react-aria-live' {
  import { ReactNode } from 'react';

  export class LiveAnnouncer extends Component<{ children: ReactNode }> {
    announcePolite(message: string, id?: string): void;
    announceAssertive(message: string, id?: string): void;
  }

  export const LiveMessage: FunctionComponent<{
    'aria-live': 'assertive' | 'polite';
    clearOnUnmount?: boolean | 'true' | 'false' | undefined;
    message: string;
  }>;
}
