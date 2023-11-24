import DOMPurify from 'dompurify';

type SanitizedHTMProps = {
  htmlContent: string;
  className?: string;
};

export const SanitizedHTML: React.FC<SanitizedHTMProps> = ({
  htmlContent,
  className,
}) => {
  let sanitizedContent = htmlContent;
  if (typeof window !== 'undefined') {
    sanitizedContent = DOMPurify.sanitize(htmlContent, {
      USE_PROFILES: { html: true },
    });
  }

  return (
    <p
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
};
