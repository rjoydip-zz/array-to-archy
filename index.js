'use strict'

const arrayToArchy = (arr, label) => {
    const _label = label || '--'

    if(!Array.isArray(arr)) return 'Data is not type array'

    return {
        label: _label,
        nodes: arr.map(
            (item) => Array.isArray(item) ? arrayToArchy(item, _label) : item.toString()
        )
    }
}

module.exports = arrayToArchy