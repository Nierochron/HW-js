const calculateTotalBalance = users => {
  let sum = 0;
  for (const user of users) {
    sum += user.balance;
  }
  return sum;
};

const getUsersWithFriend = (users, friendName) => {
  const result = [];
  for (const user of users) {
    if (user.friends.includes(friendName)) {
      result.push(user.name);
    }
  }
  return result;
};

const getNamesSortedByFriendsCount = users => {
  return users
    .slice()
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);
};

const getSortedUniqueSkills = users => {
  const allSkills = [];
  for (const user of users) {
    allSkills.push(...user.skills);
  }
  const uniqueSkills = [...new Set(allSkills)];
  return uniqueSkills.sort();
};

console.log(calculateTotalBalance(users));
console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));
console.log(getNamesSortedByFriendsCount(users));
console.log(getSortedUniqueSkills(users));