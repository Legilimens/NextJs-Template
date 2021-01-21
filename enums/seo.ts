import { DefaultSeoProps } from 'next-seo';
import { Paths } from 'enums/routes';

export const seoConfig: { [key: string]: DefaultSeoProps } = {
  // default
  default: {
    title: 'Next.Js boilerplate',
    titleTemplate: '%s | domain.com',
    openGraph: {
      type: 'website',
      site_name: 'domain.com',
      title: 'This is a title',
      description: 'This is a description',
      images: [
        {
          url: '/favicon.icon',
        },
      ],
    },
    additionalMetaTags: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
    ],
  },

  // home
  [Paths.home]: {
    title: 'Главная',
    openGraph: {
      images: [
        {
          url: '/logo512.png',
          width: 512,
          height: 512,
          alt: 'logo 1',
        },
      ],
    },
  },

  // events
  [Paths.events]: {
    title: 'Events page',
    openGraph: {
      description: 'Events page description',
    },
  },
  [Paths.eventData]: {
    title: 'Event data page',
    openGraph: {
      description: 'Event data page description',
    },
  },

  // 404
  [Paths.pageNotFound]: {
    title: 'Page not found',
  },
};
