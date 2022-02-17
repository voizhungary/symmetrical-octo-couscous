import { expect } from "chai";
import { Request, Response } from "express";

import echo from "../src/echo";

describe("DevOps Test API", function () {
  describe("#echo", function () {
    it("should return the same data in the response as it received in the request", function () {
      const data = { a: "23", b: 42 };
      const request: Request = { body: data } as Request;

      type MockedResponse = Response & { r: unknown };

      const response: MockedResponse = {
        r: null,
        json: function (j: unknown) {
          const t = this as MockedResponse;
          t.r = j;
        },
      } as unknown as MockedResponse;

      echo(request, response);

      expect(response.r).to.be.deep.equal({
        message: "This is the echo endpoint",
        data: data,
      });
    });
  });
});
