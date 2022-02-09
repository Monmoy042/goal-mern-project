const asyncHandler = require("express-async-handler");

// @desc Get goals
// @router GET /api/goals
// @access Private
const getGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goal" });
});

// @desc Set goals
// @router POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set goal" });
});

// @desc Update goals
// @router PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc Delete goals
// @router DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
};
