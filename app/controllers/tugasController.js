const Tugas = require("../models/todolist");

// CRUD operations
exports.createTugas = async (req, res) => {
  const tugas = new Tugas(req.body);
  try {
    await tugas.save();
    res.status(201).send(tugas);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getTugas = async (req, res) => {
  try {
    const tugas = await Tugas.find({});
    res.status(200).send(tugas);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getTugas = async (req, res) => {
  try {
    const tugas = await Tugas.findById(req.params.id);
    if (!tugas) {
      return res.status(404).send();
    }
    res.tugas(200).send(tugas);
  } catch (error) {
    res.tugas(500).send(error);
  }
};

exports.updateTugas = async (req, res) => {
  try {
    const tugas = await Tugas.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!tugas) {
      return res.status(404).send();
    }
    res.status(200).send(tugas);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteTugas = async (req, res) => {
  try {
    const tugas = await Tugas.findByIdAndDelete(req.params.id);
    if (!tugas) {
      return res.status(404).send();
    }
    res.status(200).send(tugas);
  } catch (error) {
    res.status(500).send(error);
  }
};
