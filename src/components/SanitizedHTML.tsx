import sanitizeHtml from 'sanitize-html';

type SanitizedHTMLProps = {
  htmlContent: string;
  className?: string;
};

export const SanitizedHTML: React.FC<SanitizedHTMLProps> = ({
  htmlContent,
  className,
}) => {
  const sanitizedContent = sanitizeHtml(htmlContent, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
    allowedAttributes: {
      '*': [
        ...(sanitizeHtml.defaults.allowedAttributes['*'] || []),
        'id',
        'href',
      ],
      img: ['src', 'alt', 'title', 'width', 'height'],
    },
  });

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
};
