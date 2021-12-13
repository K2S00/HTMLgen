const Intern = require("../staff/Intern"); //make sure right file path!
//need getSchool and getRole
test('return intern\'s school', () => {
    const intern = new Intern("Robert", 5, "joe@gmail.com", "DU");
    expect(intern.school).toBe("DU");
  });

test('return intern\'s role', () => {
    const intern = new Intern("Robert", 5, "joe@gmail.com", "DU");
    expect(intern.getRole()).toBe("Intern");
  });