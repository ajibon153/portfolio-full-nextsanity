export default {
    name: 'workExperience',
    title: 'Experience',
    type: 'document',
    fields: [
        { name: 'name', title: 'Name', type: 'string' },
        {
            name: 'company',
            title: 'Company',
            type: 'string',
        },
        {
            name: 'type',
            title: 'Employment type',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Fulltime',
                        value: 'fulltime',
                    },
                    {
                        title: 'Contract',
                        value: 'contract',
                    },
                    {
                        title: 'Internship',
                        value: 'internship',
                    },
                    {
                        title: 'Freelance',
                        value: 'freelance',
                    },
                    {
                        title: 'Self Employee',
                        value: 'self employee',
                    },
                ],
            },
        },
        {
            name: 'start',
            title: 'Start Date',
            type: 'date',
            options: {
                dateFormat: 'DD-MM-YYYY',
                calendarTodayLabel: 'Today',
            },
        },
        {
            title: 'I Still work Here',
            name: 'present',
            type: 'boolean',
        },
        {
            name: 'end',
            title: 'End Date',
            type: 'date',
            hidden: ({ document }) => document.present === true,
            options: {
                dateFormat: 'DD-MM-YYYY',
                calendarTodayLabel: 'Today',
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'skills' }],
                },
            ],
        },
        {
            name: 'portfolio',
            title: 'Portfolio',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'works' }],
                },
            ],
        },
    ],
};
