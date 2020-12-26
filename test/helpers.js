const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Shekhar Dewan',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Shekhar Dewan',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Shekhar Dewan',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Shekhar Dewan',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Shekhar Dewan',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
