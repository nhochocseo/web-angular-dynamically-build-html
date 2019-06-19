import { Category } from 'src/app/share/interface/category.interface';

export const dataCategory: Array<Category> = [
    {
        id: 1,
        parentId: 0,
        name: 'Lập trình',
        url: 'lap-trinh',
        describe: ''
    },
    {
        id: 2,
        parentId: 1,
        name: 'Seo',
        url: 'seo',
        describe: ''
    },
    {
        id: 3,
        parentId: 0,
        name: 'Tản mạn',
        url: 'tan-man',
        describe: ''
    },
    {
        id: 4,
        parentId: 1,
        name: 'C#',
        url: 'c#',
        describe: ''
    },
    {
        id: 5,
        parentId: 1,
        name: 'PHP',
        url: 'php',
        describe: ''
    },
    {
        id: 6,
        parentId: 4,
        name: 'API',
        url: 'api',
        describe: ''
    },
];
export const dataCategoryMenu: any = [
    {
        title: 'Link 1',
        link: "/foo",
        children: [
          {
            title: "leve 2",
            link: "/bar",
            children: []
          }
        ]
      },
      {
        title: "Link 2",
        link: "/baz",
        children: [
            {
                title: "leve 2",
                link: "/bar",
                children: []
              }
        ]
      }
];
