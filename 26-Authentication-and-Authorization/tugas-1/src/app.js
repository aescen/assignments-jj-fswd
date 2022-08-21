require('dotenv').config();

const path = require('path');
const express = require('express');
const exSession = require('express-session');
const cookieParser = require('cookie-parser');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 5000;
const app = express();
const $username = 'user';
const $password = 'user123';
const session = {};

app.use(
  exSession({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {
      maxAge: 60 * 1000,
      sameSite: true,
    },
  }),
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/login', express.static(path.join(__dirname, 'views')));
app.use(cookieParser());
const checkSession = (req, res, next) => {
  if (!req.session) {
    res.send('<p>session not started</p>');
    res.end();
    return;
  }
  next();
};

app.get('/', checkSession, (req, res) => {
  const { id } = req.session;

  if (id !== session.sid) {
    res.redirect('/login');
    return;
  }

  res.send(`
    <h2>Hello ${$username}!</h2>
    <a href="/logout">Logout</a>
  `);
});

app.post('/user', checkSession, (req, res) => {
  const { username, password } = req.body;
  const { id } = req.session;

  if (id === session.sid) {
    res.redirect('/');
    return;
  }

  session.sid = undefined;

  if (!username || !password) {
    res.status(400);
    res.send(`
      <script>
        window.alert('Credentials data not found, cannot continue');
        window.location.href = '/';
      </script>
    `);
    return;
  }

  if (username !== $username || password !== $password) {
    res.status(403);
    res.send(`
      <script>
        window.alert('Invalid credentials');
        window.location.href = '/';
      </script>
    `);
    return;
  }

  req.session.save(() => {
    session.sid = req.session.id;
    res.redirect('/');
  });
});

app.get('/logout', checkSession, (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

const server = app.listen(PORT, HOST, () => {
  const { address: host, port } = server.address();

  console.log(`Server berjalan di ${host}:${port}`);
});
