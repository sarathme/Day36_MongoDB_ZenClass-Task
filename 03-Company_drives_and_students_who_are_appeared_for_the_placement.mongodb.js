use("guvi");

db.companyDrives.aggregate([
  { $unwind: { path: "$studentsAppeared" } },
  {
    $lookup: {
      from: "users",
      localField: "studentsAppeared",
      foreignField: "_id",
      as: "studentDetails",
    },
  },
  { $unwind: "$studentDetails" },
  {
    $group: {
      _id: "$_id",
      companyName: { $first: "$companyName" },
      students: { $push: "$studentDetails" },
    },
  },
]);
