/* global use, db */

use("guvi");

const companies = [
  {
    companyName: "Pagac and Sons",
    appearedAt: new Date("2020-10-10"),
    studentsAppeared: [
      new ObjectId("66e41f9caf017674c1380e40"),
      new ObjectId("66e41f9caf017674c1380e41"),
      new ObjectId("66e41f9caf017674c1380e42"),
      new ObjectId("66e41f9caf017674c1380e43"),
    ],
  },
  {
    companyName: "Pollich - Hilpert",
    appearedAt: new Date("2020-10-12"),
    studentsAppeared: [
      new ObjectId("66e41f9caf017674c1380e40"),
      new ObjectId("66e41f9caf017674c1380e41"),
      new ObjectId("66e41f9caf017674c1380e42"),
    ],
  },
  {
    companyName: "Graham - Gulgowski",
    appearedAt: new Date("2020-10-13"),
    studentsAppeared: [
      new ObjectId("66e41f9caf017674c1380e40"),
      new ObjectId("66e41f9caf017674c1380e41"),
      new ObjectId("66e41f9caf017674c1380e43"),
    ],
  },
  {
    companyName: "Considine - Torp",
    appearedAt: new Date("2020-10-15"),
    studentsAppeared: [
      new ObjectId("66e41f9caf017674c1380e40"),
      new ObjectId("66e41f9caf017674c1380e41"),
      new ObjectId("66e41f9caf017674c1380e42"),
    ],
  },
  {
    companyName: "Miller, Schowalter and Wisozk",
    appearedAt: new Date("2020-10-17"),
    studentsAppeared: [
      new ObjectId("66e41f9caf017674c1380e40"),
      new ObjectId("66e41f9caf017674c1380e41"),
      new ObjectId("66e41f9caf017674c1380e43"),
    ],
  },
  {
    companyName: "Botsford, Marquardt and Roberts",
    appearedAt: new Date("2020-10-21"),
    studentsAppeared: [
      new ObjectId("66e41f9caf017674c1380e40"),
      new ObjectId("66e41f9caf017674c1380e41"),
      new ObjectId("66e41f9caf017674c1380e42"),
    ],
  },
  {
    companyName: "Zulauf and Sons",
    appearedAt: new Date("2020-10-31"),
    studentsAppeared: [
      new ObjectId("66e41f9caf017674c1380e40"),
      new ObjectId("66e41f9caf017674c1380e41"),
      new ObjectId("66e41f9caf017674c1380e43"),
    ],
  },
];

db.getCollection("companyDrives").insertMany(companies);
