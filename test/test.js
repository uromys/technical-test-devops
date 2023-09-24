const express = require("express");
const chai = require("chai");
const supertest = require("supertest");

const app = require("../server"); 
const expect = chai.expect;
const request = supertest(app);

describe("Express App Tests", () => {
  it("should return 'Hello from the développeur star ⭐' when GET /", (done) => {
    request.get("/")
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.equal("Hello from the the développeur star ⭐");
        done(err);
      });
  });

  it("should return 200 OK when GET /health", (done) => {
    request.get("/health")
      .expect(200, done);
  });

  it("should return 200 OK when GET /secret", (done) => {
    request.get("/secret")
      .expect(200, done);
  });

  it("should return 200 Created when sending a body to GET /secret", (done) => {
    request.get("/secret")
      .send({ test: true })
      .expect(200, done);
  });



  it("should handle errors and return a 500 Internal Server Error for /error", (done) => {
    request.get("/error")
      .expect(500, done);
  });

});
