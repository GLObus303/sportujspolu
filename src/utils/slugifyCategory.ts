import slugify from 'slugify';

export const slugifyCategory = (category: string) =>
  slugify(category, {
    replacement: '-',
    remove: undefined,
    lower: true,
    strict: true,
    locale: 'cs',
  });
