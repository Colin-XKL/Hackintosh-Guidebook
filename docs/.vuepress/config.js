module.exports = {
  title: 'Hackintosh Guidebook',
  description: 'Awesome Mac OS, easy to get',
  head: [
    ['link', { rel: 'icon', href: '/HackintoshGuidebook_favicon_tiny.png' }]
  ],
  themeConfig: {
    logo:'/HackintoshGuidebook_favicon.png',
    lastUpdated: 'Last Updated', // string | boolean
    sidebar:[
      {
        title:"基础篇",
        path:'/basic/basic',  //此处path为分组的父节点对应的文章目录，并非分组的base dir
        collapsable:true,
        sidebarDepth:2,
        children:[
          '/basic/common-tools',
          '/basic/quick-setup',
          '/basic/shopping-guide',
          '/basic/about-kext'
        ]
      },
      {
        title:"进阶篇",
        path:'/senior/senior',
        collapsable:true,
        sidebarDepth:2,
        children:[
          '/senior/dsdt',
          '/senior/hotpatch',
        ]
      },
      {
        title:"附录",
        collapsable:true,
        sidebarDepth:1,
        children:[
          '/others/references',
          
        ]
      }
    ]
  }
}
