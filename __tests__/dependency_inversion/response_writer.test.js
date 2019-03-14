const {write} = require("../../src/dependency_inversion/response_writer");

describe('response writer outputs', () => {
    const customer = { name: "xyz" };
    const serializer = customer => customer.name;

    it('should serialize input', () => {
        expect(write(customer, serializer)).toEqual(customer.name);
    })
})
