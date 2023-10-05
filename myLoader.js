module.exports = function myLoader(item) {
    console.log('hello myLoader!');
    return item.replace(', alert(')
}