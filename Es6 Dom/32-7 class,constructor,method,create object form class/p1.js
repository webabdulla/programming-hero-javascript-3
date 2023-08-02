class Student {
    name ;
    address = 'mithapukur Rangpur'
    class = 10

    constructor(name){
        this.name = name;
    }

    firstClass (time){
        console.log(`first class at ${10.30}`);
    }
}
const miraj = new Student('Miraj');

console.log(miraj);

const khokon = new Student('khokon');
console.log(khokon);