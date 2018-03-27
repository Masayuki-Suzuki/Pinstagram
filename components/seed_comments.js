import authors from './seed_authors'

export default [
  {
    _id: 1,
    text: 'awesome!!',
    author: {
      name: authors[1].userName,
    },
  },
  {
    _id: 2,
    text: 'I agree with you.',
    author: {
      name: authors[0].userName,
    },
  },
  {
    _id: 3,
    text: 'awesome!!',
    author: {
      name: authors[1].userName,
    },
  },
  {
    _id: 4,
    text: 'cool!!',
    author: {
      name: authors[2].userName,
    },
  },
  {
    _id: 5,
    text: 'That looks like a good breakfast.',
    author: {
      name: authors[3].userName,
    },
  },
]
