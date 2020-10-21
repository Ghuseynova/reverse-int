module.exports = function reverse(n) {
    const stringNum = n.toString().includes("-")
        ? n.toString().slice(1)
        : n.toString();
    let reversedNum = "";

    for (let i = stringNum.length; i >= 0; i--) {
        reversedNum += stringNum.charAt(i);
    }

    return Number(reversedNum);
};
