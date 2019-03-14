const borrow = require('../../src/open_closed/rated_video_library.js')

describe('borrow a video', () => {

  const customer = {
    id: 'jgorman',
    age: 16,
    borrowedVideos: []
  }

  const video = {
    onLoan: false,
    borrower: undefined,
    rating: {
      minAge: 0
    }
  }

  const loan = borrow(customer, video);

  it('should add video to customer borrowed collection', () => {
    expect(loan.customer.borrowedVideos).toContainEqual(video);
  })

  it('should flag video as on loan', () => {
    expect(loan.video.onLoan).toBe(true);
  })

  it('should record who has borrowed the video', () => {
    expect(loan.video.borrower).toBe(customer.id);
  })

  it('should throw exception if customer is not old enough', () => {
    video.rating.minAge = 18;
    expect(() => borrow(customer, video)).toThrow();
  })
})
