import sinon from "sinon";
import chai from "chai";

var expect = chai.expect;
import { Student } from "../src/Controllers/registrationController.js";
var stdObj = new Student();

describe("ftn return check",()=>{
    it("return 12",()=>{
        expect(stdObj.userId()).to.be.equal(12);
    })

    // it("function count", () => {
    //     var spyObj = sinon.spy(stdObj, "getInfo"); // Spy on the method
    //     stdObj.home(5);
    //     expect(spyObj.callCount).to.equal(2); // Check call count
    // })


    it("function arguments check",()=>{
        var spayObj = sinon.spy(stdObj,"getInfo");
        stdObj.home(5);
        expect(spayObj.calledWith(5,1)).to.be.true;
    })
})