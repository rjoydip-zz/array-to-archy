const arrayToArchy = require('./')
const arr = [
    1,
    2, [
        3,
        4, [
            'city', 'country', [
                'abc',
                'xyz'
            ]
        ]
    ],
    5, ['foo', 'bar'],
    'baz',
    6
]

const _options = {
    label: 'X'
}

test('arrayToArchy', () => {
    expect(typeof arrayToArchy(arr)).toBe('object')
})

test('arrayToArchy with option', () => {
    expect(typeof arrayToArchy(arr, _options)).toBe('object')
})


test('arrayToArchy not array data', () => {
    expect(arrayToArchy('')).toBe('Data is not type array')
})