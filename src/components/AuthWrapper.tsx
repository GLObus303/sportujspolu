import Link from 'next/link';

import { SocialButton } from './SocialButton';
import { GoogleIcon } from './icons/GoogleIcon';
import { FacebookIcon } from './icons/FacebookIcon';
import { ChildrenFC } from '../utils/type';

type AuthWrapperProps = {
  headingText: string;
  subtitleText: string;
  formText: string;
  redirectText: string;
  redirectRoute: string;
  redirectLinkText: string;
};

export const AuthWrapper: ChildrenFC<AuthWrapperProps> = ({
  children,
  headingText,
  subtitleText,
  formText,
  redirectText,
  redirectRoute,
  redirectLinkText,
}) => (
  <section className="flex flex-col items-center justify-center px-6 pt-20">
    <h1 className="text-xl font-semibold">
      {headingText} <span className="text-primary">SportujSpolu</span>
    </h1>
    <p className="mt-4">{subtitleText}</p>
    <ul className="my-5 flex">
      <li>
        <SocialButton Icon={GoogleIcon} label="Google účet" />
      </li>
      <li>
        <SocialButton Icon={FacebookIcon} label="Facebook účet" />
      </li>
    </ul>
    <hr className="w-full max-w-sm border-t border-low-contrast" />
    <p className="pt-5">Zadat {formText} údaje:</p>

    {children}

    <p className="mt-2 py-5 font-light">
      {redirectText}{' '}
      <Link
        href={redirectRoute}
        className="font-medium hover:text-primary focus:text-primary"
      >
        {redirectLinkText}
      </Link>
    </p>
  </section>
);
