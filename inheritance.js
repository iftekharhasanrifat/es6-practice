class Parent{
    constructor(){
        this.fatherName = "schwerznegger";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name+" "+this.fatherName;
    }
}

const baby = new Child("rifat");
const baby2 = new Child("Hasan");
console.log(baby.getFullName());
console.log(baby2.getFullName());