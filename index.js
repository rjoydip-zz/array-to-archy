'use strict'

const arrayToArchy = (arr, options) => {
    const _options = options || {
        label: '--'
    }

    if(!Array.isArray(arr)) return 'Data is not type array'

    return {
        label: _options.label,
        nodes: arr.map(
            (item) => Array.isArray(item) ? arrayToArchy(item, _options) : item.toString()
        )
    }
}

module.exports = arrayToArchy