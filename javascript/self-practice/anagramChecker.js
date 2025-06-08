

const isAnagram = (str1, str2)=>{
    const format = str => str.toLowerCase().replace(/[^a-z]/g, '')
    return format(str1).split('').sort().join('') === format(str2).split('').sort().join('')
}

console.log(isAnagram('mansoor', 'roomans'))