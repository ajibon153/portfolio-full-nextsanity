export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'profession',
            title: 'Profession',
            type: 'string',
        },
        {
            name: 'imgurl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string',
        },
    ],
};
