export default {
    posts: [
        {
            id: 13,
            title: 'Fusce massa lorem, pulvinar a posuere ut, accumsan ac nisi',
            teaser:
                'Quam earum itaque corrupti labore quas nihil sed. Dolores sunt culpa voluptates exercitationem eveniet totam rerum. Molestias perspiciatis rem numquam accusamus.',
            body:
                '<p>Curabitur eu odio ullamcorper, pretium sem at, blandit libero. Nulla sodales facilisis libero, eu gravida tellus ultrices nec. In ut gravida mi. Vivamus finibus tortor tempus egestas lacinia. Cras eu arcu nisl. Donec pretium dolor ipsum, eget feugiat urna iaculis ut.</p> <p>Nullam lacinia accumsan diam, ac faucibus velit maximus ac. Donec eros ligula, ullamcorper sit amet varius eget, molestie nec sapien. Donec ac est non tellus convallis condimentum. Aliquam non vehicula mauris, ac rhoncus mi. Integer consequat ipsum a posuere ornare. Quisque mollis finibus libero scelerisque dapibus. </p>',
            views: 222,
            average_note: 4,
            commentable: true,
            published_at: new Date('2012-12-01'),
            tags: [3, 5],
            category: 'lifestyle',
            backlinks: [],
            notifications: [],
            related: [
                {
                    category: 'tech',
                    comments: [1, 2],
                },
                {
                    category: 'lifestyle',
                    comments: [4],
                },
            ],
        },
    ],
    comments: [
        {
            id: 1,
            author: {},
            post_id: 6,
            body:
                "Queen, tossing her head through the wood. 'If it had lost something; and she felt sure it.",
            created_at: new Date('2012-08-02'),
            category: 'tech',
        },
        {
            id: 2,
            author: {
                name: 'Kiley Pouros',
                email: 'kiley@gmail.com',
            },
            post_id: 9,
            body:
                "White Rabbit: it was indeed: she was out of the ground--and I should frighten them out of its right paw round, 'lives a March Hare. 'Sixteenth,'.",
            created_at: new Date('2012-08-08'),
            category: 'tech',
        },
        {
            id: 3,
            author: {
                name: 'Justina Hegmann',
            },
            post_id: 3,
            body:
                "I'm not Ada,' she said, 'and see whether it's marked \"poison\" or.",
            created_at: new Date('2012-08-02'),
            category: 'lifestyle',
        },
        {
            id: 4,
            author: {
                name: 'Ms. Brionna Smitham MD',
            },
            post_id: 6,
            body:
                "Dormouse. 'Fourteenth of March, I think I can say.' This was such a noise inside, no one else seemed inclined.",
            created_at: new Date('2014-09-24'),
            category: 'lifestyle',
        },
        {
            id: 5,
            author: {
                name: 'Edmond Schulist',
            },
            post_id: 1,
            body:
                "I ought to tell me your history, you know,' the Hatter and the happy summer days. THE.",
            created_at: new Date('2012-08-07'),
        },
        {
            id: 6,
            author: {
                name: 'Danny Greenholt',
            },
            post_id: 6,
            body:
                'Duchess asked, with another hedgehog, which seemed to be lost: away went Alice after it, never once considering how in the other. In the very tones of.',
            created_at: new Date('2012-08-09'),
        },
        {
            id: 7,
            author: {
                name: 'Luciano Berge',
            },
            post_id: 5,
            body:
                "While the Panther were sharing a pie--' [later editions continued as follows.",
            created_at: new Date('2012-09-06'),
        },
        {
            id: 8,
            author: {
                name: 'Annamarie Mayer',
            },
            post_id: 5,
            body:
                "I tell you, you coward!' and at once and put it more clearly,' Alice.",
            created_at: new Date('2012-10-03'),
        },
        {
            id: 9,
            author: {
                name: 'Breanna Gibson',
            },
            post_id: 2,
            body:
                "THAT. Then again--\"BEFORE SHE HAD THIS FIT--\" you never tasted an egg!' 'I HAVE tasted eggs, certainly,' said Alice, as she spoke. Alice did not like to have it.",
            created_at: new Date('2012-11-06'),
        },
        {
            id: 10,
            author: {
                name: 'Logan Schowalter',
            },
            post_id: 3,
            body:
                "I'd been the whiting,' said the Hatter, it woke up again with a T!' said the Gryphon. '--you advance twice--' 'Each with a growl, And concluded the banquet--] 'What IS the fun?' said.",
            created_at: new Date('2012-12-07'),
        },
        {
            id: 11,
            author: {
                name: 'Logan Schowalter',
            },
            post_id: 1,
            body:
                "I don't want to be?' it asked. 'Oh, I'm not Ada,' she said, 'and see whether it's marked \"poison\" or not'; for she had asked it aloud; and in despair she put her hand on the end of the.",
            created_at: new Date('2012-08-05'),
        },
    ],
    tags: [
        {
            id: 1,
            name: 'Sport',
            published: 1,
        },
        {
            id: 2,
            name: 'Technology',
            published: false,
        },
        {
            id: 3,
            name: 'Code',
            published: true,
        },
        {
            id: 4,
            name: 'Photo',
            published: false,
        },
        {
            id: 5,
            name: 'Music',
            published: 1,
        },
        {
            id: 6,
            name: 'Parkour',
            published: 1,
            parent_id: 1,
        },
        {
            id: 7,
            name: 'Crossfit',
            published: 1,
            parent_id: 1,
        },
        {
            id: 8,
            name: 'Computing',
            published: 1,
            parent_id: 2,
        },
        {
            id: 9,
            name: 'Nanoscience',
            published: 1,
            parent_id: 2,
        },
        {
            id: 10,
            name: 'Blockchain',
            published: 1,
            parent_id: 2,
        },
        {
            id: 11,
            name: 'Node',
            published: 1,
            parent_id: 3,
        },
        {
            id: 12,
            name: 'React',
            published: 1,
            parent_id: 3,
        },
        {
            id: 13,
            name: 'Nature',
            published: 1,
            parent_id: 4,
        },
        {
            id: 14,
            name: 'People',
            published: 1,
            parent_id: 4,
        },
        {
            id: 15,
            name: 'Animals',
            published: 1,
            parent_id: 13,
        },
        {
            id: 16,
            name: 'Moutains',
            published: 1,
            parent_id: 13,
        },
        {
            id: 17,
            name: 'Rap',
            published: 1,
            parent_id: 5,
        },
        {
            id: 18,
            name: 'Rock',
            published: 1,
            parent_id: 5,
        },
        {
            id: 19,
            name: 'World',
            published: 1,
            parent_id: 5,
        },
    ],
    users: [
        {
            id: 1,
            name: 'Logan Schowalter',
            role: 'admin',
        },
        {
            id: 2,
            name: 'Breanna Gibson',
            role: 'user',
        },
        {
            id: 3,
            name: 'Annamarie Mayer',
            role: 'user',
        },
    ],
    category: [
        {
            id: 'tech',
            name: 'tech',
        },
        {
            id: 'lifestyle',
            name: 'lifestyle',
        },
    ],
};
