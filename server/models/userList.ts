import * as mongoose from 'mongoose';

const userList = new mongoose.Schema({
    name: String,
    group: String,
    phone: String,
    pincode: String,
    country: String,
    state: String,
    city: String,
    village: String,
    email: String
});

const UserList = mongoose.model('UssrList', userList);

export default UserList;