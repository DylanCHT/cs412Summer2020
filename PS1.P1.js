const ipt = 'supercalifragilisticexpialidocious';
const sortString = text => {
    if (typeof text != 'string')
        return new Error('Input type is not string');
    return text.replace(/\d+/g, '').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').split('').sort().join('');
};
console.log(`Sorted Result: ${sortString(ipt)}`);
