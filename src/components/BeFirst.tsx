import { CustomLink } from './CustomLink';

type BeFirstProps = {
  imageIcon: React.ReactNode;
  buttonText: string;
  link: string;
  caption: string;
};

export const BeFirst = ({
  imageIcon,
  buttonText,
  link,
  caption,
}: BeFirstProps) => (
  <div className="flex flex-col items-center justify-center mt-10 h-full">
    {imageIcon}
    <CustomLink href={link} className="mt-5">
      {buttonText}
    </CustomLink>
    <p className="text-center font-light text-lg mt-10 max-w-md">{caption}</p>
  </div>
);
