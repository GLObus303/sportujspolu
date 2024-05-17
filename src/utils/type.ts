import { FC, ReactNode } from 'react';

export type ChildrenFC<T = unknown> = FC<T & { children: ReactNode }>;
