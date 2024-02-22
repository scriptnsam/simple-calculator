function displayVal(val) {
    const outputBox = document.getElementById('output').value
    const newOutput = outputBox + val.toString()
    document.getElementById('output').value = newOutput
}

function solve() {
    const outputBox = document.getElementById('output').value
    if (outputBox.length == 0 || outputBox.length == null) {
        return null
    }

    if (outputBox.includes('√')) {
        // split the expression
        const array = outputBox.split('√')
        const result = eval(`${array[1]}**(1/2)`)
        return document.getElementById('output').value = result

    }

    const result = eval(outputBox)
    return document.getElementById('output').value = result
}

function deleteVal() {
    const outputBox = document.getElementById('output').value

    if (outputBox.length == 0 || outputBox.length == null) {
        return null
    }

    const newOutput = outputBox.slice(0, -1)
    return document.getElementById('output').value = newOutput
}

function clearAll() {
    return document.getElementById('output').value = ""
}