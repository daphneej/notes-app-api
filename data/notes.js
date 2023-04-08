const { format } = require("date-fns");
const { v4: uuidv4 } = require("uuid");
const notes = [
  {
    id: uuidv4(),
    title: "Note 1",
    content: "un api blablabla",
    memorized: true,
    date: format(new Date(), "MM/dd/yyyy"),
  },
  {
    id: uuidv4(),
    title: "Note 2",
    content: "un api blablabla",
    memorized: false,
    date: format(new Date(), "MM/dd/yyyy"),
  },
  {
    id: uuidv4(),
    title: "Note 3",
    content: "un api blablabla",
    memorized: true,
    date: format(new Date(), "MM/dd/yyyy"),
  },
];

module.exports = { notes };
