interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: '浪浪山小妖 在跑步',
  siteUrl: 'https://icofans.github.io/running_page',
  logo: 'https://avatars.githubusercontent.com/u/13825591?v=4',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://nobady.cn',
    },
  ],
};

export default data;
