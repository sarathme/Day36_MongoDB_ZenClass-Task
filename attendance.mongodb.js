use("guvi");

db.attendance.insertOne({
  date: new Date("2020-10-20"),
  studentId: new ObjectId("66e41f9caf017674c1380e40"),
  status: "present",
});
