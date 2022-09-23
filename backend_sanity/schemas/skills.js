export default {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'group',
            title: 'Group',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Framework',
                        value: 'framework',
                    },
                    {
                        title: 'Language',
                        value: 'language',
                    },
                    {
                        title: 'Styling',
                        value: 'style',
                    },
                    {
                        title: 'Database',
                        value: 'database',
                    },
                    {
                        title: 'Tech',
                        value: 'tech',
                    },
                    {
                        title: 'Design',
                        value: 'design',
                    },
                ],
            },
        },
        {
            name: 'level',
            title: 'Skill Level',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Advanced',
                        value: 'Advanced',
                    },
                    {
                        title: 'Intermediate',
                        value: 'intermediate',
                    },
                    {
                        title: 'Basic',
                        value: 'basic',
                    },
                ],
            },
        },
        {
            name: 'bgColor',
            title: 'BgColor',
            type: 'string',
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            title: 'Hidden ?',
            name: 'hidden',
            type: 'boolean',
        },
    ],
};
