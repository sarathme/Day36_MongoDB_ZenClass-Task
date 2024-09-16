use("guvi");

db.companyDrives.find({
  appearedAt: {
    $gte: ISODate("2020-10-15T00:00:00Z"),
    $lte: ISODate("2020-10-31T23:59:59Z"),
  },
});
