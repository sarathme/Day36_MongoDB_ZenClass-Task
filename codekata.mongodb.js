/* global use, db */
use("guvi");

db.getCollection("codekata").insertOne({
  question: "Some problem",
  catogary: "Catogary1",
});
