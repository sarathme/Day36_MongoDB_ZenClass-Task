/* global use, db */
use("guvi");

db.users.deleteMany({});
db.topics.deleteMany({});
db.mentors.deleteMany({});
db.tasks.deleteMany({});
db.companyDrives.deleteMany({});
db.codekata.deleteMany({});
