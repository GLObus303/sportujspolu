import { EmailIcon } from '../../../../components/icons/EmailIcon';
import { EmailWithCopy } from '../../../../components/EmailWithCopy';
import { Button } from '../../../../components/Button';
import { useAuthModal } from '../../../../context/AuthModalContext';
import { useAuth } from '../../../../context/AuthContext';

type EmailCTAProps = {
  ownerEmail: string;
};

export const EmailCTA: React.FC<EmailCTAProps> = ({ ownerEmail }) => {
  const { openAuthModal } = useAuthModal();
  const { isUserLoggedIn } = useAuth();

  if (!isUserLoggedIn) {
    return (
      <Button onClick={openAuthModal} className="mt-6 self-start">
        Přihlásit se a zobrazit kontakt
      </Button>
    );
  }

  return (
    <article className="relative w-full bg-card rounded-md shadow-md flex flex-col mt-6">
      <div className="mx-5 my-5 px-5 py-10 bg-pale-aloe w-auto rounded-md flex flex-col items-center justify-center gap-5">
        <EmailIcon />
        <EmailWithCopy email={ownerEmail} className="text-xl" />
      </div>
    </article>
  );
};
