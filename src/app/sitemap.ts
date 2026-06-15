import { MetadataRoute } from 'next';

import { postsData } from './blog/postsData';
import { calculatorsData } from './kalkulacky/calculatorsData';
import { getAllEvents } from '../api/events';
import { Routes, sportsArray } from '../constants';
import { buildEventPath } from '../utils/buildEventPath';

const BASE_URL = 'https://www.sportujspolu.cz';

const staticRoutes = [
  Routes.DASHBOARD,
  Routes.BLOG,
  Routes.DICTIONARY,
  Routes.FAQ,
  Routes.CONTACT,
  Routes.GUIDELINES,
  Routes.SPORT,
  Routes.CALCULATORS,
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route === '/' ? '' : route}`,
    lastModified: now,
    changeFrequency: route === Routes.DASHBOARD ? 'daily' : 'weekly',
    priority: route === Routes.DASHBOARD ? 1 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = postsData.map((post) => ({
    url: `${BASE_URL}${Routes.BLOG}/${post.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const calculatorEntries: MetadataRoute.Sitemap = calculatorsData.map(
    (calculator) => ({
      url: `${BASE_URL}${Routes.CALCULATORS}/${calculator.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    }),
  );

  const sportEntries: MetadataRoute.Sitemap = sportsArray.map((sport) => ({
    url: `${BASE_URL}${Routes.SPORT}/${sport}`,
    lastModified: now,
    changeFrequency: 'daily',
    priority: 0.7,
  }));

  let eventEntries: MetadataRoute.Sitemap = [];

  try {
    const events = await getAllEvents();

    eventEntries = events.map((event) => ({
      url: `${BASE_URL}${buildEventPath(event)}`,
      lastModified: event.createdAt ? new Date(event.createdAt) : now,
      changeFrequency: 'weekly',
      priority: 0.6,
    }));
  } catch {
    eventEntries = [];
  }

  return [
    ...staticEntries,
    ...blogEntries,
    ...calculatorEntries,
    ...sportEntries,
    ...eventEntries,
  ];
}
