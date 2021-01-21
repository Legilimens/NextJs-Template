export enum Paths {
  home = '/',
  events = '/events',
  eventData = '/events/[id]',
  admin = '/admin',
  pageNotFound = '/404',
};

export const privatePages = [
  Paths.admin,
];