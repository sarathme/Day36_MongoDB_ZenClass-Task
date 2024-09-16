use("guvi");

db.users.aggregate([
  { $match: { _id: new ObjectId("66e80197805b2ea65a0583fc") } },
  {
    $project: {
      firstName: 1,
      lastName: 1,
      codekataSolved: { $size: "$codekata" },
    },
  },
]);
