const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

//Get secret from environment
const uri = process.env.MONGODB_URI;

// MongoDB connection
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Task Schema
const taskSchema = new mongoose.Schema({
  name: String,
  description: String,
  status: { type: String, enum: ['not started', 'ongoing', 'finished'], default: 'not started' }
});

const Task = mongoose.model('Task', taskSchema);

// Routes
app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post('/tasks', async (req, res) => {
  const { name, description, status } = req.body;
  const newTask = new Task({ name, description, status });
  await newTask.save();
  res.json(newTask);
});

app.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const updatedTask = await Task.findByIdAndUpdate(id, { status }, { new: true });
  res.json(updatedTask);
});

app.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.json({ message: 'Task deleted' });
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
