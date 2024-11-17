const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

function getWelcomeMessage() {
  return 'Welcome to our Service!';
}

app.get('/welcome', (req, res) => {
  res.send(getWelcomeMessage());
});

function getGreetingMessage(userName) {
  return 'Hello, ' + userName + '!';
}

app.get('/greet', (req, res) => {
  let userName = req.query.username;
  res.send(getGreetingMessage(userName));
});

function checkPassword(password) {
  if (password.length > 15) {
    return 'Password is strong.';
  } else {
    return 'Password is weak.';
  }
}

app.get('/check-password', (req, res) => {
  let password = req.query.password;
  res.send(checkPassword(password));
});

function calculateSum(num1, num2) {
  return num1 + num2;
}

app.get('/sum', (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(calculateSum(num1, num2).toString());
});

function checkSubscriptionStatus(userName, isSubscribed) {
  if (isSubscribed) {
    return userName + ' is Subscribed';
  } else {
    return userName + ' is not Subscribed';
  }
}

app.get('/subscription-status', (req, res) => {
  let userName = req.query.username;
  let isSubscribed = req.query.isSubscribed === 'true';
  res.send(checkSubscriptionStatus(userName, isSubscribed));
});

function calculateDiscountedPrice(price, discount) {
  let finalPrice = price - (price * discount) / 100;
  return finalPrice.toString();
}

app.get('/discounted-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(calculateDiscountedPrice(price, discount));
});

function getGreeting(age, gender, name) {
  return 'Hello, ' + name + '! You are a ' + age + ' year old ' + gender + '.';
}

app.get('/personalized-greeting', (req, res) => {
  let name = req.query.name;
  let age = req.query.age;
  let gender = req.query.gender;

  res.send(getGreeting(age, gender, name));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
