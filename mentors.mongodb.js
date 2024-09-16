/* global use, db */

use("guvi");

const mentors = [
  {
    name: "Emma Miller",
    email: "emma.miller@x.dummyjson.com",
    studentIds: [
      new ObjectId("66e41f9caf017674c1380e40"),
      new ObjectId("66e41f9caf017674c1380e41"),
    ],
  },
  {
    name: "Olivia Wilson",
    email: "olivia.wilson@x.dummyjson.com",
    studentIds: [
      new ObjectId("66e41f9caf017674c1380e42"),
      new ObjectId("66e41f9caf017674c1380e43"),
    ],
  },
];

db.getCollection("mentors").insertMany(mentors);
