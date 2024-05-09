'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import cx from 'classnames';

import { PAGINATION } from '../utils/constants';
import { ArrowIcon } from './icons/ArrowIcon';

type PaginationProps = {
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

export const Pagination: React.FC<PaginationProps> = ({
  hasNextPage,
  hasPrevPage,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = Number(searchParams.get('page') || PAGINATION.PAGE);
  const limit = searchParams.get('limit') || PAGINATION.LIMIT;

  const prev = page > 1 ? page - 1 : 1;
  const next = page + 1;

  return (
    <nav className="mt-10 text-center">
      <button
        aria-label="Předchozí stránka"
        type="button"
        className={cx('group rounded-full p-2', {
          'bg-faded': !hasPrevPage,
          'bg-button': hasPrevPage,
        })}
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/?page=${prev}&limit=${limit}`);
        }}
      >
        <ArrowIcon
          className={cx('rotate-90 fill-white', {
            'focus:fill-primary group-hover:fill-primary': hasPrevPage,
          })}
        />
      </button>
      <span className="text-bold mx-4 text-3xl text-primary">{page}</span>
      <button
        aria-label="Následující stránka"
        type="button"
        className={cx('group rounded-full p-2', {
          'bg-faded': !hasNextPage,
          'bg-button': hasNextPage,
        })}
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/?page=${next}&limit=${limit}`);
        }}
      >
        <ArrowIcon
          className={cx('-rotate-90 fill-white', {
            'focus:fill-primary group-hover:fill-primary': hasNextPage,
          })}
        />
      </button>
    </nav>
  );
};
