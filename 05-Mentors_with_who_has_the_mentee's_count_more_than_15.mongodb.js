use("guvi");

db.mentors.find({ $expr: { $gt: [{ $size: "$studentIds" }, 15] } });
