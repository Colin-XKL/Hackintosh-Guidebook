module.exports = {
  title: 'Hackintosh Guidebook',
  description: 'Easy way to hackintosh',
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
    sidebar:[
      {
        title:"基础篇",
        path:'/basic/',
        collapsable:true,
        sidebarDepth:2,
        children:[
          'basic',
          'common-tools',
          'quick-setup',
          'shopping-guide',
          'about-kext'
        ]
      },
      {
        title:"进阶篇",
        path:'/senior/',
        collapsable:true,
        sidebarDepth:2,
        children:[
          'senior',

        ]
      }
    ]
  }
}
