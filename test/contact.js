//During the test the env variable is set to test
process.env.NODE_ENV = "test";

//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe("Contacts", () => {
  /*
   * Test the /GET route
   */
  describe("/GET contacts", () => {
    it("it should GET all the contacts", done => {
      chai
        .request(server)
        .get("/contacts")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    }).timeout(3000);
  });

  describe("/GET contact", () => {
    it("it should GET a single contact", done => {
      chai
        .request(server)
        .get("/contacts/1")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    }).timeout(3000);
  });

  describe("/POST contact", () => {
    // it('it should not POST a contact without pages field', (done) => {
    //   let contact = {
    //     title: "The Lord of the Rings",
    //     author: "J.R.R. Tolkien",
    //     year: 1954
    //   }
    //   chai.request(server)
    //     .post('/contact')
    //     .send(contact)
    //     .end((err, res) => {
    //       res.should.have.status(200);
    //       res.body.should.be.a('object');
    //       res.body.should.have.property('errors');
    //       res.body.errors.should.have.property('pages');
    //       res.body.errors.pages.should.have.property('kind').eql('required');
    //       done();
    //     });
    // });
    it("it should POST a contact ", done => {
      let contact = {
        firstName: "Andres ffd",
        lastName: "Suarez ss",
        emailAddress: "andress@gmail.com"
      };
      chai
        .request(server)
        .post("/contacts")
        .send(contact)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("firstName");
          res.body.should.have.property("lastName");
          res.body.should.have.property("emailAddress");
          done();
        });
    });
    it("it should PUT a contact ", done => {
      let contact = {
        id: 1,
        firstName: "Andres ffd",
        lastName: "Suarez ss",
        emailAddress: "andress@gmail.com"
      };
      chai
        .request(server)
        .put("/contacts")
        .send(contact)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("firstName");
          res.body.should.have.property("lastName");
          res.body.should.have.property("emailAddress");
          done();
        });
    });
  });
});
