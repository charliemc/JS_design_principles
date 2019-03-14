const write = (customer, serializer) => {
    return serializer(customer);
}

module.exports = {write};
