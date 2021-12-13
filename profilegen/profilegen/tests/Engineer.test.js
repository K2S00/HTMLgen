const { it } = require("@jest/globals");
const Engineer = require("../Staff/Engineer"); 

describe("Engineer class", () => {
    //testing methods
    describe("getName method", () => {
    
    it("can instantiate a new Engineer", () => {
        const engineer = new Engineer();
        expect(typeof(engineer)).toBe("object");
    });
      it("stores the Engineer's name", () => {
        const engineer = new Engineer("Robert");
        expect(engineer.getName()).toBe("Robert");
      });
  
      it("getID", () => {
        const engineer = new Engineer("Robert", 5);
        expect(engineer.getId()).toBe(5);
      });

      it("getEmail", () => {
        const engineer = new Engineer("Robert", 5, "joe@gmail.com");
        expect(engineer.getEmail()).toBe("joe@gmail.com");

    });
// testing constructor
    it("getRole", () => {
        const engineer = new Engineer("Robert", 5, "joe@gmail.com");
        expect(engineer.getRole()).toBe("Engineer");
    });
    it("can set name", () => {
        const engineer = new Engineer("Robert");
        expect(engineer.name).toBe("Robert");
    });
    it("can set id", () => {
        const engineer = new Engineer("Robert", 5);
        expect(engineer.id).toBe(5);
    });
    it("can set email", () => {
        const engineer = new Engineer("Robert", 5, "joe@gmail.com");
        expect(engineer.email).toBe("joe@gmail.com");
    });
    });
  
  });