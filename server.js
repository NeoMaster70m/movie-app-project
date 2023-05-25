const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1/movieapp_data', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB...', err));

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    profilePicture: String,
    favorites: [Number],
});

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
    const userExists = await User.findOne({ $or: [{ username: req.body.username }, { email: req.body.email }] });
    if (userExists) {
        return res.status(400).send('User with given username or email already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = new User({
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email,
        profilePicture: req.body.profilePicture,
        favorites: req.body.favorites,
    });
    try {
        await user.save();
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post('/login', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
        return res.status(400).send('Invalid username or password');
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.status(400).send('Invalid username or password');
    }
    res.send(user);
});

app.get('/favorites/:userId', async (req, res) => {
    const user = await User.findById(req.params.userId);
    if (!user) {
        return res.status(404).send('User not found');
    }
    res.send(user.favorites);
});

app.post('/favorites/:userId', async (req, res) => {
    const user = await User.findById(req.params.userId);
    if (!user) {
        return res.status(404).send('User not found');
    }
    const movieId = req.body.movieId;
    if (!user.favorites.includes(movieId)) {
        user.favorites.push(movieId);
        await user.save();
    }
    res.send(user.favorites);
});

app.delete('/favorites/:userId', async (req, res) => {
    const user = await User.findById(req.params.userId);
    if (!user) {
        return res.status(404).send('User not found');
    }
    const movieId = req.body.movieId;
    user.favorites = user.favorites.filter(id => id !== movieId);
    await user.save();
    res.send(user.favorites);
});

app.post('/profilePicture/:userId', async (req, res) => {
    const user = await User.findById(req.params.userId);
    if (!user) {
        return res.status(404).send('User not found');
    }
    user.profilePicture = req.body.profilePicture;
    await user.save();
    res.send(user.profilePicture);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
