const func = (iptStr, iptFunc) => {
    if(typeof iptStr !== 'string') {
        return new Error('The first input is not a string');
    }
    if(typeof iptFunc !== 'function') {
        return new Error('The second input is not a function');
    }
    return iptFunc(iptStr);
};

const func1 = func('supercalifragilisticexpialidocious',
        iptStr => iptStr.split(/(?=c)/g)
);

const func2 = func('supercalifragilisticexpialidocious',
        iptStr => {
        let obj = {
            originalString: iptStr,
            modifiedString: iptStr.replace(/a/g, 'A'),
            numberReplaced: iptStr.split('a').length - 1,
            length:         iptStr.length
        };
        return obj;
    });

console.log(func1);
console.log(func2);
