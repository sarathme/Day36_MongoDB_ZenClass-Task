use("guvi");

db.tasks.aggregate([
  {
    $lookup: {
      from: "topics",
      localField: "topicId",
      foreignField: "_id",
      as: "topic",
    },
  },
  { $unwind: "$topic" },
  {
    $match: {
      "topic.taughtAt": {
        $gte: ISODate("2020-10-01T00:00:00Z"),
        $lte: ISODate("2020-10-31T23:59:59Z"),
      },
    },
  },
]);
