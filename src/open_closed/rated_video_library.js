const base = require("./video_library");

const borrow = (customer, video) => {
  if (customer.age < video.rating.minAge) {
    throw "Customer is not old enough";
  }

  return base(customer, video);
}

module.exports = borrow;
