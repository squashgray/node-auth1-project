exports.seed = function(knex) {
  return knex("users").insert([
    { username: "user1", password: "pass" },
    { username: "user2", password: "pass" },
    { username: "user3", password: "pass" }
  ]);
};
