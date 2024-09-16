use("guvi");

db.attendance.aggregate([
  {
    $match: {
      status: "absent",
      date: {
        $gte: ISODate("2020-10-15T00:00:00.000+00:00"),
        $lte: ISODate("2020-10-31T00:00:00.000+00:00"),
      },
    },
  },
  {
    $lookup: {
      from: "users",
      localField: "studentId",
      foreignField: "_id",
      as: "students",
    },
  },
  {
    $unwind: "$students",
  },
  {
    $unwind: "$students.tasks",
  },
  { $match: { "students.tasks.taskStatus": "not-submitted" } },
  {
    $project: {
      "students.codekata": 0,
    },
  },
]);
