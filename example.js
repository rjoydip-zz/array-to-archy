const arrayToArchy = require('./')
const archy = require('archy')

const _array = [
    1,
    2,
    [
        3,
        4, 
        [
            'city','country',
            [
                'abc',
                'xyz'
            ]
        ]
    ],
    5, 
    ['foo', 'bar'], 
    'baz',
    6
]

console.log(
    JSON.stringify(
        arrayToArchy(_array)
    )
)

console.log(
    archy(
        arrayToArchy(_array)
    )
)