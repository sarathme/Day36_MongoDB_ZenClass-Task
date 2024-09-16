/* global use, db */

use("guvi");

const tasks = [
  {
    description: "Conditional logging",
    courseName: "FullStack-MERN",
    topicId: new ObjectId("66e4263ea4dd354d1eb98cf9"),
  },
  {
    description: "Array Methods",
    courseName: "FullStack-MERN",
    topicId: new ObjectId("66e4263ea4dd354d1eb98cfa"),
  },
  {
    description: "Display countdown with callbacks",
    courseName: "FullStack-MERN",
    topicId: new ObjectId("66e4263ea4dd354d1eb98cfb"),
  },
];

db.getCollection("tasks").insertMany(tasks);
