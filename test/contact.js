process.env.NODE_ENV = "test";
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");
let should = chai.should();

chai.use(chaiHttp);

describe("Contacts", () => {
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
        .get("/contacts/2")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    }).timeout(3000);
  });

  describe("/POST contact", () => {
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
  });
  describe("/PUT contacts", () => {
    it("it should PUT a contact ", done => {
      let contact = {
        firstName: "Andres ffd",
        lastName: "Suarez ss",
        emailAddress: "andress@gmail.com"
      };
      chai
        .request(server)
        .put("/contacts/2")
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
  describe("/DELETE contacts", () => {
    it("it should DELETE a contact ", done => {
      chai
        .request(server)
        .del("/contacts/2")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});
