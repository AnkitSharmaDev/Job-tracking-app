const express = require('express');
const Job = require('../models/Job');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', auth, async (req, res) => {
  const jobs = await Job.find({ user: req.user.id });
  res.json(jobs);
});

router.post('/', auth, async (req, res) => {
  const { company, role, status } = req.body;
  const job = new Job({
    company,
    role,
    status,
    statusHistory: [{ status }],
    user: req.user.id
  });
  await job.save();
  res.json(job);
});

router.put('/:id', auth, async (req, res) => {
  const { company, role, status } = req.body;
  const job = await Job.findOne({ _id: req.params.id, user: req.user.id });
  if (!job) return res.status(404).json({ msg: 'Job not found' });
  if (status && status !== job.status) {
    job.status = status;
    job.statusHistory.push({ status });
  }
  if (company) job.company = company;
  if (role) job.role = role;
  await job.save();
  res.json(job);
});

router.delete('/:id', auth, async (req, res) => {
  await Job.deleteOne({ _id: req.params.id, user: req.user.id });
  res.json({ msg: 'Job deleted' });
});

module.exports = router; 