import TeamModel from "../models/teamModel";

const getTeams = async (req, res) => {
  try {
    const roles = await TeamModel.find({});
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTeamById = async (req, res) => {
  try {
    const { id } = req.params;
    const role = await TeamModel.findById(id);
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTeam = async (req, res) => {
    try {
      const role = await TeamModel.create(req.body);
      res.status(200).json(role);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

const updateTeam = async (req, res) => {
  try {
    const { id } = req.params;

    const role = await TeamModel.findByIdAndUpdate(id, req.body);

    if (!role) {
      return res.status(404).json({ message: "Team not found" });
    }

    const updatedTeam = await TeamModel.findById(id);
    res.status(200).json(updatedTeam);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTeam = async (req, res) => {
  try {
    const { id } = req.params;

    const role = await TeamModel.findByIdAndDelete(id);

    if (!role) {
      return res.status(404).json({ message: "Team not found" });
    }

    res.status(200).json({ message: "Team deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam,
};
