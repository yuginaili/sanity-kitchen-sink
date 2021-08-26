export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61280d2f18b2a4154f2281bf',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-mb8qf1n5',
                  apiId: '7fbaa7f7-8bea-4320-914b-be46d025e439'
                },
                {
                  buildHookId: '61280d2fe809621143bbdcbd',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-us2u4e23',
                  apiId: '8a19237d-cab0-451d-a677-41deda9c1b3c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yuginaili/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-us2u4e23.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
