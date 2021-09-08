const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/book');
        console.log("ket noi database thanh cong");
    } catch (error) {
        console.log("ket noi database khong thanh cong");
    }
}
module.exports = {
    connect
};