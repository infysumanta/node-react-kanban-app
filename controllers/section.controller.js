const Section = require("./../models/section.schema");
const Task = require("./../models/task.schema");

exports.create = async (req, res) => {
  const { boardId } = req.params;
  console.log(req.body);
  try {
    const section = await Section.create({ board: boardId });
    section._doc.tasks = [];
    res.status(201).json(section);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.update = async (req, res) => {
  const { sectionId } = req.params;
  try {
    const section = await Section.findByIdAndUpdate(sectionId, {
      $set: req.body,
    });
    section._doc.tasks = [];
    res.status(201).json(section);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteSection = async (req, res) => {
  const { sectionId } = req.params;
  try {
    await Task.deleteMany({ section: sectionId });
    await Section.deleteOne({ _id: sectionId });
    res.status(200).json("deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};
