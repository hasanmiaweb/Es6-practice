class BigN {
  constructor() {
    this.fathars = "ABDUL KUDDUS";
  }
}

class Small extends BigN {
  constructor(names, age) {
    super();
    this.Names = names;
    this.age = age;
  }
}

const smallLog = new Small("Hasan", 20);

console.log(smallLog);
