import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { Routes } from '../../utils/constants';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';
import { SocialButton } from '../../components/ui/SocialButton';
import { GoogleIcon } from '../../components/ui/icons/GoogleIcon';
import { FacebookIcon } from '../../components/ui/icons/FacebookIcon';

export const LoginPage = () => {
  const pathname = usePathname();
  const isSignIn = pathname === Routes.SIGN_IN;

  return (
    <section className="flex flex-col items-center justify-center px-6 pt-20">
      <h1 className="text-xl font-semibold">
        {isSignIn ? 'Přihlášení se do ' : 'Registrace do '}
        <span className="text-primary">SportujSpolu</span>
      </h1>
      <p className="mt-4">
        {isSignIn ? 'Chci se přihlásit přes:' : 'Chci se registrovat přes:'}
      </p>
      <ul className="my-5 flex">
        <li>
          <SocialButton Icon={GoogleIcon} label="Google účet" />
        </li>
        <li>
          <SocialButton Icon={FacebookIcon} label="Facebook účet" />
        </li>
      </ul>
      <hr className="w-full max-w-sm border-t border-light-gray" />
      <p className="pt-5">
        Zadat {isSignIn ? 'přihlašovací' : 'registrační'} údaje:
      </p>
      {isSignIn ? <SignInForm /> : <SignUpForm />}
      <p className="py-5 font-light">
        {isSignIn ? 'Ještě nemáš účet?' : 'Už máš účet?'}{' '}
        <Link
          href={isSignIn ? Routes.SIGN_UP : Routes.SIGN_IN}
          className="font-medium hover:text-primary focus:text-primary"
        >
          {isSignIn ? 'Vytvoř si profil!' : 'Přihlaš se!'}
        </Link>
      </p>
    </section>
  );
};
