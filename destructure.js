const person = {name: 'iftekhar Hasan',age : 23,address:'ctg',phone : 1234,friends:['alam','salam','kalam']};
const {phone,name} = person;
console.log(name,phone);
console.log(name,phone);
console.log(name,phone);
console.log(name,phone);


const friends =["Rifat","Hasan","hanif","risat"];
const [firstFriend,nextFriend,...oldFriends] = friends;
console.log(oldFriends);

const complexObject = {
    name: 'rifat',
    info:{
        address : 'ctg',
        leader : 'no'
    }
}
const {leader} = complexObject.info;
console.log(leader);