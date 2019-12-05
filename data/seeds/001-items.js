exports.seed = function (knex, Promise) {
  const items = [
    {
      dream_name: "Make Camping Great Again",
      dream_short_description: "A camping like never before",
      dream_long_description: "Get make the biggest camping ever",
      donations_received: 400,
      donation_goal: 1000,
      user_id: 3
    }
  ]

  return (
    knex
      // Deletes ALL existing entries for items table
      .raw("TRUNCATE TABLE items RESTART IDENTITY CASCADE")
      .then(function () {
        return knex("items").insert(items);
      })
  );
};
