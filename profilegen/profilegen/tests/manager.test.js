const Manager = require("../staff/Manager"); 


test('return manager\'s office number', () => {
    const manager = new Manager("Roger", 1, "joe@gmail.com", 7);
    expect(manager.officeNumber).toBe(7);
  });

test('return manager\'s role', () => {
    const manager = new Manager("Roger", 1, "joe@gmail.com", 7);
    expect(manager.getRole()).toBe("Manager");
  });  