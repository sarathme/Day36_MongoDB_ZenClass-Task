/* global use, db */

use("guvi");

const users = [
  {
    firstName: "Emily",
    lastName: "Johnson",
    email: "emily.johnson@x.dummyjson.com",
    courseEnrolled: "Full-Stack-MERN",
    codekata: [
      {
        codekataId: new ObjectId("66e41c5262f29758fb8cf33a"),
        solvedAt: new Date("2020-10-10T00:00:00.000+00:00"),
      },
    ],
    tasks: [
      {
        taskId: new ObjectId("66e427960d8802448e5e9aa2"),
        taskStatus: "not-submitted",
        taskAssignedAt: new Date("2020-10-10T00:00:00.000+00:00"),
        taskSubmittedAt: "",
      },
      {
        taskId: new ObjectId("66e427960d8802448e5e9aa2"),
        taskStatus: "submitted",
        taskAssignedAt: new Date("2020-10-10T00:00:00.000+00:00"),
        taskSubmittedAt: new Date("2020-10-10T00:00:00.000+00:00"),
      },
    ],
  },
  {
    firstName: "Michael",
    lastName: "Williams",
    email: "michael.williams@x.dummyjson.com",
    courseEnrolled: "Full-Stack-MERN",
    codekata: [
      {
        codekataId: new ObjectId("66e41c5262f29758fb8cf33a"),
        solvedAt: new Date("2020-10-10T00:00:00.000+00:00"),
      },
    ],
    tasks: [
      {
        taskId: new ObjectId("66e427960d8802448e5e9aa2"),
        taskStatus: "not-submitted",
        taskAssignedAt: new Date("2020-10-10T00:00:00.000+00:00"),
        taskSubmittedAt: "",
      },
    ],
  },
  {
    firstName: "Sophia",
    lastName: "Brown",
    email: "sophia.brown@x.dummyjson.com",
    courseEnrolled: "Full-Stack-MERN",
    codekata: [
      {
        codekataId: new ObjectId("66e41c5262f29758fb8cf33a"),
        solvedAt: new Date("2020-10-10T00:00:00.000+00:00"),
      },
    ],
    tasks: [
      {
        taskId: new ObjectId("66e427960d8802448e5e9aa2"),
        taskStatus: "submitted",
        taskAssignedAt: new Date("2020-10-10T00:00:00.000+00:00"),
        taskSubmittedAt: new Date("2020-10-10T00:00:00.000+00:00"),
      },
    ],
  },
  {
    firstName: "James",
    lastName: "Davis",
    email: "james.davis@x.dummyjson.com",
    courseEnrolled: "Full-Stack-MERN",
    codekata: [
      {
        codekataId: new ObjectId("66e41c5262f29758fb8cf33a"),
        solvedAt: new Date("2020-10-10T00:00:00.000+00:00"),
      },
    ],
    tasks: [
      {
        taskId: new ObjectId("66e427960d8802448e5e9aa2"),
        taskStatus: "not-submitted",
        taskAssignedAt: new Date("2020-10-10T00:00:00.000+00:00"),
        taskSubmittedAt: "",
      },
    ],
  },
];

db.users.deleteMany({});
db.getCollection("users").insertMany(users);

// db.users.updateOne(
//   { _id: new ObjectId("66e41f9caf017674c1380e40") },
//   { $set: { mentorId: new ObjectId("66e4206cd25e3f960b56a408") } }
// );

// db.users.updateOne(
//   { _id: new ObjectId("66e41f9caf017674c1380e41") },
//   { $set: { mentorId: new ObjectId("66e4206cd25e3f960b56a408") } }
// );
// db.users.updateOne(
//   { _id: new ObjectId("66e41f9caf017674c1380e42") },
//   { $set: { mentorId: new ObjectId("66e4206cd25e3f960b56a409") } }
// );
// db.users.updateOne(
//   { _id: new ObjectId("66e41f9caf017674c1380e43") },
//   { $set: { mentorId: new ObjectId("66e4206cd25e3f960b56a409") } }
// );
