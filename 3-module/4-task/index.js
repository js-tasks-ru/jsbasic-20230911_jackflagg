function showSalary(users, age) {
  return users.filter(item => item.age <= age).map(user => `${user.name}, ${user.balance}`).join('\n');
}
