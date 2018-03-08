module.exports = {

    getGuid: function() {
    let str = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+=-`';
    let id = '';

    for(let i = 0; i < 10; i++) {
        id += str[parseInt(Math.random() * (str.length))];
    }

    return id;
    }

}