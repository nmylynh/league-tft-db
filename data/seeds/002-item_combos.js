exports.seed = function(knex, Promise) {
  const combos = [
    // beserker's axe
    {
      item_id: 10,
      base1_id: 7,
      base2_id: 8
    },
    // BORK
    {
      item_id: 11,
      base1_id: 7,
      base2_id: 6
    },
    // BT
    {
      item_id: 12,
      base1_id: 1,
      base2_id: 5
    },
    // Bramble Vest
    {
      item_id: 13,
      base1_id: 2,
      base2_id: 2
    },
    // Deathblade
    {
      item_id: 14,
      base1_id: 1,
      base2_id: 1
    },
    // Dragon's Claw
    {
      item_id: 15,
      base1_id: 5,
      base2_id: 5
    },
    // FON
    {
      item_id: 16,
      base1_id: 7,
      base2_id: 7
    },
    // Frozen Heart
    {
      item_id: 17,
      base1_id: 2,
      base2_id: 9
    },
    // Frozen Malleet
    {
      item_id: 18,
      base1_id: 3,
      base2_id: 7
    },
    // Giant Slayer
    {
      item_id: 19,
      base1_id: 1,
      base2_id: 6
    },
    // GA
    {
      item_id: 20,
      base1_id: 1,
      base2_id: 2
    },
    // Rage Blade
    {
      item_id: 21,
      base1_id: 4,
      base2_id: 6
    },
    // Hand of Justice
    {
      item_id: 22,
      base1_id: 9,
      base2_id: 8
    },
    // Gunblade
    {
      item_id: 23,
      base1_id: 1,
      base2_id: 4
    },
    // Hush
    {
      item_id: 24,
      base1_id: 5,
      base2_id: 9
    },
    // Iceborn Gauntlet
    {
      item_id: 25,
      base1_id: 2,
      base2_id: 8
    },
    // Cinder
    {
      item_id: 26,
      base1_id: 7,
      base2_id: 4
    },
    // IE
    {
      item_id: 27,
      base1_id: 1,
      base2_id: 8
    },
    // Ionic Spark
    {
      item_id: 28,
      base1_id: 4,
      base2_id: 5
    },
    // Jeweled Gauntlet
    {
      item_id: 29,
      base1_id: 4,
      base2_id: 8
    },
    // Last whisper
    {
      item_id: 30,
      base1_id: 6,
      base2_id: 8
    },
    // Locket
    {
      item_id: 31,
      base1_id: 2,
      base2_id: 4
    },
    // Luden's
    {
      item_id: 32,
      base1_id: 9,
      base2_id: 4
    },
    // Mage's cap
    {
      item_id: 33,
      base1_id: 7,
      base2_id: 9
    },
    // Morello's
    {
      item_id: 34,
      base1_id: 3,
      base2_id: 4
    },
    // Quicksilver
    {
      item_id: 35,
      base1_id: 5,
      base2_id: 8
    },
    // Deathcap
    {
      item_id: 36,
      base1_id: 4,
      base2_id: 4
    },
    // Rapidfire
    {
      item_id: 37,
      base1_id: 6,
      base2_id: 6
    },
    // Red buff
    {
      item_id: 38,
      base1_id: 2,
      base2_id: 3
    },
    // Redemption
    {
      item_id: 39,
      base1_id: 3,
      base2_id: 9
    },
    // Runaan's
    {
      item_id: 40,
      base1_id: 5,
      base2_id: 6
    },
    // Seraph's
    {
      item_id: 41,
      base1_id: 9,
      base2_id: 9
    },
    // Spear of Shojin
    {
      item_id: 42,
      base1_id: 1,
      base2_id: 9
    },
    // Statikk shiv
    {
      item_id: 43,
      base1_id: 6,
      base2_id: 9
    },
    // Sword breaker
    {
      item_id: 44,
      base1_id: 5,
      base2_id: 2
    },
    // Talisman of Light
    {
      item_id: 45,
      base1_id: 5,
      base2_id: 7
    },
    // Thief's gloves
    {
      item_id: 46,
      base1_id: 7,
      base2_id: 7
    },
    // Titanic Hydra
    {
      item_id: 47,
      base1_id: 6,
      base2_id: 3
    },
    // Titan's resolve
    {
      item_id: 48,
      base1_id: 2,
      base2_id: 6
    },
    // trap claw
    {
      item_id: 49,
      base1_id: 3,
      base2_id: 7
    },
    // Warden's
    {
      item_id: 50,
      base1_id: 7,
      base2_id: 2
    },
    // Warmog's
    {
      item_id: 51,
      base1_id: 3,
      base2_id: 3
    },
    // Youmuu's
    {
      item_id: 52,
      base1_id: 1,
      base2_id: 7
    },
    // Zeke's
    {
      item_id: 53,
      base1_id: 1,
      base2_id: 3
    },
    // Zephyr
    {
      item_id: 54,
      base1_id: 3,
      base2_id: 5
    }
  ]

  return (
    knex
      // Deletes ALL existing entries for combos table
      .raw("TRUNCATE TABLE item_combos RESTART IDENTITY CASCADE")
      .then(function () {
        return knex("item_combos").insert(combos);
      })
  );
};
