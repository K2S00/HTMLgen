const Intern = require("../staff/Intern"); 

test('return intern\'s school', () => {
    const intern = new Intern("Robert", 5, "joe@gmail.com", "DU");
    expect(intern.school).toBe("DU");
  });

test('return intern\'s role', () => {
    const intern = new Intern("Robert", 5, "joe@gmail.com", "DU");
    expect(intern.getRole()).toBe("Intern");
  });