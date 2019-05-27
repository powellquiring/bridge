/**
 * Prepare the guestbook entry to be persisted
 */
function main(params) {
  return {
    doc: {
      north: 'powell',
      south: 'evelyn',
      west: 'sherwood',
      east: 'natalie',
      hands: [
        '3n9d', // 3 - bid, n - trump [s,h,d,c,n], made 3 (9 tricks total), d doubled optional r for redouble
        '6d13' // 6 diamonds made 7
      ]
    }
  };
}
