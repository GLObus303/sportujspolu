import { ChildrenFC } from '../utils/type';

type AuthWrapperProps = {
  headingText: string;
  subtitleText: string;
  formText: string;
  redirectText: string;
  onToggleForm: () => void;
  redirectButtonText: string;
};

export const AuthWrapper: ChildrenFC<AuthWrapperProps> = ({
  children,
  headingText,
  formText,
  redirectText,
  onToggleForm,
  redirectButtonText,
}) => (
  <section className="flex flex-col items-center justify-center px-6 pt-20">
    <h1 className="text-xl font-semibold">
      {headingText} <span className="text-primary">SportujSpolu</span>
    </h1>
    <p className="pt-5">Zadat {formText} údaje:</p>

    {children}

    <p className="mt-2 py-5 font-light">
      {redirectText}{' '}
      <button
        onClick={onToggleForm}
        className="font-medium hover:text-primary focus:text-primary"
      >
        {redirectButtonText}
      </button>
    </p>
  </section>
);
