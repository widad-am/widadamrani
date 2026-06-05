export const contactDetails = {
  email: 'Widad.amraniacs@gmail.com',
  phone: '+212 602769701',
  location: 'Morocco',
  linkedin: 'https://www.linkedin.com/in/widad-amrani-23266022b/',
  github: 'https://github.com/widad-am',
};

export const contactMethodsMeta = [
  {
    key: 'email',
    title: 'Email',
    field: 'email',
    hrefKey: 'email',
    hrefPrefix: 'mailto:',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    key: 'phone',
    title: 'Phone',
    field: 'phone',
    hrefKey: 'phone',
    hrefPrefix: 'tel:',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    key: 'location',
    title: 'Location',
    field: 'location',
    gradient: 'from-purple-500 to-pink-500',
  },
];

export const socialLinksMeta = [
  { key: 'linkedin', label: 'LinkedIn', gradient: 'from-blue-600 to-blue-700' },
  { key: 'github', label: 'GitHub', gradient: 'from-gray-700 to-gray-800' },
];
