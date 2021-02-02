class Student {
  constructor(sId, sName) {
    this.Id = sId;
    this.Name = sName;
    this.School = "Purulia ML High School";
  }
}

const student1 = new Student(40, "Hasan");
console.log(student1);

class samsoungPhone {
  constructor(phoneModel, ram) {
    this.Model = phoneModel;
    this.ram = ram;
  }
}

const j7 = new samsoungPhone("J7", "4GB");

console.log(j7);
