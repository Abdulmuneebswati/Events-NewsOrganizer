import chai from "chai";
import { describe, it } from "mocha";

var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
describe('Aspect Check', () => {
    let userName = "muneeb";
    let myList = [{
        item:[{
            id:1,
            itemName:"dairy delight"
        }],
        title:"Hi I am title"}
    ]
    it("check string",()=>{
        assert.typeOf(userName,"string")
    })
    it("match ==",()=>{
        assert.equal(userName,"muneeb")
    });
    it("length match",()=>{
        assert.lengthOf(myList,1);
    })
})


// should
describe("should check",()=>{
    let userName = "muneeb";
    let myList = [{
        item:[{
            id:1,
            itemName:"dairy delight"
        }],
        title:"Hi I am title",
        address:[
            {
                phone:["1234567","98080980"],
                city:"mansehra"
            }
        ]
    }
    ]


    it("check string",()=>{
        userName.should.be.a("string")
    })

    it("match ==",()=>{
        userName.should.equal("muneeb")
    });
    it("length",()=>{
        myList[0].should.have.property("item").with.lengthOf("1");
    });



    describe("should",()=>{
        it("check length of address",()=>{
            expect(myList[0].address[0]).to.have.property("phone");
        })
        it("check city",()=>{
            expect(myList[0].address[0]).to.have.property("city", "mansehra");
        })
    })
})