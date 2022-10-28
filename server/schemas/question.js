import categories from './categories'

export default {
   name: 'question',
   title: 'Question',
   type: 'document',
   fields: [
    {
        name: 'question',
        title: 'Question',
        type: 'string'
    },
    {
        name: 'a',
        title: 'A',
        type: 'string'
    },
    {
        name: 'b',
        title: 'B',
        type: 'string'
    },
    {
        name: 'c',
        title: 'C',
        type: 'string'
    },
    {
        name: 'd',
        title: 'D',
        type: 'string'
    },
    {
        name: 'right_answers',
        title: 'Right Answer(s)',
        type: 'array',
        of: [{type: 'string'}],
        options: [
            {value: 'a', title: 'A'},
            {value: 'b', title: 'B'},            
        ]
    },
    {
        name: 'explanation',
        title: 'Explanation',
        type: 'string'
    },
    {
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
            list: [
              ...categories
            ],
          }        
    }
   ] 
}