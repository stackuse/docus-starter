export default defineAppConfig({
  docus: {
    title: 'Docus',
    description: 'The best place to start your documentation.',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      twitter: 'nuxt_themes',
      github: 'nuxt-themes/docus',
    },
    aside: {
      level: 1,
      exclude: [],
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
    },
    footer: {
      credits: {
        text: 'test',
      },
      iconLinks: [
        {
          href: 'https://nuxt.com',
          icon: 'IconNuxtLabs',
        },
      ],
    },
  },
})
