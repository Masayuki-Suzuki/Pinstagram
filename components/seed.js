import authors from './seed_authors'
import comments from './seed_comments'

export default [
  {
    _id: 1,
    title: 'Cheeeeeeese cake!!',
    description: "That's awesome cheese cake!!",
    url: null,
    filename: 'cheese-cake-2034424_1920.jpg',
    author: {
      _id: authors[0]._id,
      name: authors[0].userName,
    },
    comments: [
      {
        name: comments[0].author.name,
        text: comments[0].text,
      },
    ],
    like: 2,
    pined: 0,
  },
  {
    _id: 2,
    title: 'A good breakfast is important for starting new day.',
    description: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
    url: null,
    filename: 'dessert-3225670_1280.jpg',
    author: {
      _id: authors[1]._id,
      name: authors[1].userName,
    },
    comments: [
      {
        name: comments[1].author.name,
        text: comments[1].text,
      },
    ],
    like: 12,
    pined: 3,
  },
  {
    _id: 3,
    title: 'Love',
    description: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
    url: null,
    filename: 'strawberry-3230238_1920.jpg',
    author: {
      _id: authors[0]._id,
      name: authors[0].userName,
    },
    comments: [
      {
        name: comments[2].author.name,
        text: comments[2].text,
      },
      {
        name: comments[3].author.name,
        text: comments[3].text,
      },
      {
        name: comments[4].author.name,
        text: comments[4].text,
      },
    ],
    like: 31,
    pined: 27,
  },
]
