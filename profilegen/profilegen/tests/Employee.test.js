const { it } = require("@jest/globals");
const Employee = require("../staff/employee"); 

describe("Employee class", () => {
  //testing methods
  describe("getName method", () => {
   
    it("can instantiate a new Employee", () => {
      const employee = new Employee();
      expect(typeof employee).toBe("object");
    });
    it("stores the employee's name", () => {
      const employee = new Employee("Robert");
      expect(employee.getName()).toBe("Robert");
    });

    it("getID", () => {
      const employee = new Employee("Robert", 5);
      expect(employee.getId()).toBe(5);
    });

    it("getEmail", () => {
      const employee = new Employee("Robert", 5, "joe@gmail.com");
      expect(employee.getEmail()).toBe("joe@gmail.com");
    });
    // testing constructor
    it("getRole", () => {
      const employee = new Employee("Robert", 5, "joe@gmail.com");
      expect(employee.getRole()).toBe("Employee");
    });
    it("can set name", () => {
      const employee = new Employee("Robert");
      expect(employee.name).toBe("Robert");
    });
    it("can set id", () => {
      const employee = new Employee("Robert", 5);
      expect(employee.id).toBe(5);
    });
    it("can set email", () => {
      const employee = new Employee("Robert", 5, "joe@gmail.com");
      expect(employee.email).toBe("joe@gmail.com");
    });
  });
});