const recordings = [
    { id: 1, name: 'Jon Hopkins', location: 'London', length: 47, description: `3 Kaoss pads being used to their full potential by the masterful Jon Hopkins..`, link: 'https://boilerroom.tv/recording/jon-hopkins-live-in-the-boiler-room/' },
    { id: 2, name: 'Nebraska', location: 'London', length: 43, description: `Nebraska delivering a LIVE show in the Boiler Room for Freerange Recordings..`, link: 'https://boilerroom.tv/recording/nebraska-live-in-the-boiler-room/' },
    { id: 3, name: 'Dauwd', location: 'London', length: 40, description: `Dauwd's awesome new live show on display..`, link: 'https://boilerroom.tv/recording/dauwd-live-in-the-boiler-room/' },
];

export const resolvers = {
  Query: {
    recordings: () => recordings,
  }
};