// Task 1
const delay = (ms) =>
  new Promise((resolve) => setTimeout(() => resolve(ms), ms));

const logger = (time) => console.log(`Resolved after ${time}ms`);

delay(2000).then(logger);
delay(1000).then(logger);
delay(1500).then(logger);

// Task 2
const toggleUserState = (allUsers, userName) => {
  return new Promise((resolve) => {
    const updatedUsers = allUsers.map((user) =>
      user.name === userName ? { ...user, active: !user.active } : user
    );
    resolve(updatedUsers);
  });
};

toggleUserState(users, "Mango").then(logger);
toggleUserState(users, "Lux").then(logger);

// Task 3
const makeTransaction = (transaction) => {
  const delay = randomIntegerFromInterval(200, 500);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;
      if (canProcess) {
        resolve({ id: transaction.id, time: delay });
      } else {
        reject(transaction.id);
      }
    }, delay);
  });
};

makeTransaction({ id: 70, amount: 150 })
  .then(({ id, time }) => logSuccess(id, time))
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(({ id, time }) => logSuccess(id, time))
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(({ id, time }) => logSuccess(id, time))
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(({ id, time }) => logSuccess(id, time))
  .catch(logError);
