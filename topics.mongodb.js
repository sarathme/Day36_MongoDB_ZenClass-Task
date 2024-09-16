/* global use, db */

use("guvi");

const topics = [
  {
    topicName: "Basic Javascript",
    taughtAt: new Date("2024-09-10"),
    courseName: "FullStack-MERN",
    mentorIds: [new ObjectId("66e4206cd25e3f960b56a408")],
  },
  {
    topicName: "Javascript Arrays and Objects",
    taughtAt: new Date("2024-09-11"),
    courseName: "FullStack-MERN",
    mentorIds: [new ObjectId("66e4206cd25e3f960b56a408")],
  },
  {
    topicName: "Asynchronous JavaScript",
    taughtAt: new Date("2024-09-12"),
    courseName: "FullStack-MERN",
    mentorIds: [new ObjectId("66e4206cd25e3f960b56a408")],
  },
];

db.topics.insertMany(topics);
