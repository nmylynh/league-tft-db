exports.seed = function (knex, Promise) {
  const items = [
    {
      name: 'B.F. Sword',
      bonus: '+15 Attack Damage',
      isBase: true,
      img: 'https://rerollcdn.com/items/BFSword.png'
    },
    {
      name: 'Chain Vest',
      bonus: '+20 Armor',
      isBase: true,
      img: 'https://rerollcdn.com/items/ChainVest.png'
    },
    {
      name: "Giant's Belt",
      bonus: '+200 Health',
      isBase: true,
      img: 'https://rerollcdn.com/items/GiantsBelt.png'
    },
    {
      name: 'Needlessly Large Rod',
      bonus: '+20% Spell Damage',
      isBase: true,
      img: 'https://rerollcdn.com/items/NeedlesslyLargeRod.png'
    },
    {
      name: 'Negatron Cloak',
      bonus: '+25 Magic Resist',
      isBase: true,
      img: 'https://rerollcdn.com/items/NegatronCloak.png'
    },
    {
      name: 'Recurve Bow',
      bonus: '+15% Attack Speed',
      isBase: true,
      img: 'https://rerollcdn.com/items/RecurveBow.png'
    },
    {
      name: 'Spatula',
      bonus: 'Adds a class to a unit depending on the combination. Two spatulas gives an extra unit slot.',
      isBase: true,
      img: 'https://rerollcdn.com/items/Spatula.png'
    },
    {
      name: 'Sparring Gloves',
      bonus: '10% Critical Strike Chance, 10% Dodge Chance.',
      isBase: true,
      img: 'https://rerollcdn.com/items/SparringGloves.png'
    },
    {
      name: 'Tear of the Goddess',
      bonus: '+20 Mana.',
      isBase: true,
      img: 'https://rerollcdn.com/items/TearoftheGoddess.png'
    },
    {
      name: "Berserker's axe",
      bonus: 'Wearer is also a Berserker. 10% Dodge and Crit chance.',
      isBase: false,
      img: 'https://rerollcdn.com/items/BerserkerAxe.png'
    },
    {
      name: 'Blade of the Ruined King',
      bonus: 'Wearer is also a Blademaster. +30% Attack speed.',
      isBase: false,
      img: 'https://rerollcdn.com/items/BladeoftheRuinedKing.png'
    },
    {
      name: 'Bloodthirster',
      bonus: 'Basic Attacks heal the wearer for 50% of the damage dealt. +15 Attack, +25 Magic Resist.',
      isBase: false,
      img: 'https://rerollcdn.com/items/Bloodthirster.png'
    },
    {
      name: 'Bramble Vest',
      bonus: 'Negates bonus damage from incoming critical hits. On being hit by a Basic Attack, deal 100/140/200 ★ magic damage to all nearby enemies (once every 1second max). +50 Armor',
      isBase: false,
      img: 'https://rerollcdn.com/items/BrambleVest.png'
    },
    {
      name: 'Deathblade',
      bonus: 'Whenever the wearer kills or participates in killing an enemy, gain +15 Attack Damage for the remainder of combat. This effect can stack any number of times. +30 Attack.',
      isBase: false,
      img: 'https://rerollcdn.com/items/Deathblade.png'
    },
    {
      name: "Dragon's Claw",
      bonus: 'Wearer gains 50% resistance to magic damage.',
      isBase: false,
      img: 'https://rerollcdn.com/items/DragonsClaw.png'
    },
    {
      name: 'Force of Nature',
      bonus: "Wearer's team gains +1 maximum team size.",
      isBase: false,
      img: 'https://rerollcdn.com/items/ForceofNature.png'
    },
    {
      name: 'Frozen Heart',
      bonus: 'Reduces the Attack Speed of nearby enemies by 40% (stacking increases the radius of this effect). +25 Armor +20 Mana',
      isBase: false,
      img: 'https://rerollcdn.com/items/FrozenHeart.png'
    },
    {
      name: 'Frozen Mallet',
      bonus: 'Wearer is also a Glacial. +400 health.',
      isBase: false,
      img: 'https://rerollcdn.com/items/FrozenMallet.png'
    },
    {
      name: 'Giant Slayer',
      bonus: "The wearer's basic attacks deal an additional 9% of the target's current health as physical damage. +15 Attack, +15% Attack Speed.",
      isBase: false,
      img: 'https://rerollcdn.com/items/GiantSlayer.png'
    },
    {
      name: 'Guardian Angel',
      bonus: 'When the wearer dies, they cleanse negative effects and revive with up to 500 Health after a 2 second delay. This effect can trigger once per combat. +25 Armor, +15 Attack.',
      isBase: false,
      img: 'https://rerollcdn.com/items/GuardianAngel.png'
    },
    {
      name: "Guinsoo's Rageblade",
      bonus: 'Basic Attacks grant the wearer +5% bonus Attack Speed for the rest of combat. This effect can stack any number of times. +20 AP, +15% Attack Speed.',
      isBase: false,
      img: 'https://rerollcdn.com/items/GuinsoosRageblade.png'
    },
    {
      name: 'Hand of Justice',
      bonus: 'At the beginning of each planning phase, the wearer gains one of the following: Basic Attacks and Spells deal +50% Damage or Basic Attacks heal 50 Health on-hit. +20 AP, 10% Dodge and Crit Chance.',
      isBase: false,
      img: 'https://rerollcdn.com/items/HandofJustice.png'
    },
    {
      name: 'Hextech Gunblade',
      bonus: 'Basic Attacks and spells heal the wearer for 33% of the damage dealt. +15 Attack, +20 AP',
      isBase: false,
      img: 'https://rerollcdn.com/items/HextechGunblade.png'
    },
    {
      name: 'Hush',
      bonus: 'Basic Attacks have a 20% chance to silence the target on-hit, prevent the enemy from gaining mana for 4 seconds. +25 MR, +20 AP.',
      isBase: false,
      img: 'https://rerollcdn.com/items/Hush.png'
    },
    {
      name: 'Iceborne Gauntlet',
      bonus: 'After casting a spell, the wearer’s next Basic Attack freezes the target for 2.5 seconds. +25 Armor, +20% Dodge Chance',
      isBase: false,
      img: 'https://rerollcdn.com/items/IceborneGauntlet.png'
    },
    {
      name: 'Inferno Cinder',
      bonus: 'Wearer is also an Inferno. +20 AP.',
      isBase: false,
      img: 'https://rerollcdn.com/items/InfernoCinder.png'
    },
    {
      name: 'Infinity Edge',
      bonus: 'The wearer gains +100% Critical Strike Damage. +15 Attack, +20% Crit.',
      isBase: false,
      img: 'https://rerollcdn.com/items/InfinityEdge.png'
    },
    {
      name: 'Ionic Spark',
      bonus: 'Enemies within 3 hexes that cast a spell are zapped, taking magic damage equal to 225% of their max Mana. +20AP, +25MR',
      isBase: false,
      img: 'https://rerollcdn.com/items/IonicSpark.png'
    },
    {
      name: 'Jeweled Gauntlet',
      bonus: "The wearer's spells can critically strike. +20AP, +20% Crit",
      isBase: false,
      img: 'https://rerollcdn.com/items/JeweledGauntlet.png'
    },
    {
      name: 'Last Whisper',
      bonus: "[UNIQUE] Critical hits reduce the target's Armor by 90% for 3 seconds. This effect does not stack. +15% Attack speed, +20% Crit Chance.",
      isBase: false,
      img: 'https://rerollcdn.com/items/LastWhisper.png'
    },
    {
      name: 'Locket of the Iron Solari',
      bonus: 'When combat begins, the wearer and all allies within 2 hexes in the same row gain a shield that blocks 250/275/350 ★ damage for 8 seconds. +20 AP, +25 Armor.',
      isBase: false,
      img: 'https://rerollcdn.com/items/LocketoftheIronSolari.png'
    },
    {
      name: "Luden's Echo",
      bonus: 'When the wearer deals damage with their spell, the first target hit and up to 3 nearby enemies are dealt an additional 150/175/225 ★ magic damage. +20 AP, +20 Mana.',
      isBase: false,
      img: 'https://rerollcdn.com/items/LudensEcho.png'
    },
    {
      name: "Mage's Cap",
      bonus: 'Wearer is also a Mage. +20 AP.',
      isBase: false,
      img: 'https://rerollcdn.com/items/MagesCap.png'
    },
    {
      name: 'Morellonomicon',
      bonus: "When the wearer deals damage with their spell, they burn the target, dealing 18% of the target's Maximum Health as true damage over 10 seconds and reducing healing by 80% for the duration of the burn. A champion can only have one burn effect at a time, preferring the strongest. +20 AP, +200 Health.",
      isBase: false,
      img: 'https://rerollcdn.com/items/Morellonomicon.png'
    },
    {
      name: 'Quicksilver',
      bonus: '[UNIQUE] The wearer is immune to Crowd Control. +25% Attack speed, +20 MR.',
      isBase: false,
      img: 'https://rerollcdn.com/items/Quicksilver.png'
    },
    {
      name: "Rabadon's Deathcap",
      bonus: 'Wearer gains +50% Spell Power Amplification. (All sources of Spell Power are 50% more effective). +40 AP.',
      isBase: false,
      img: 'https://rerollcdn.com/items/RabadonsDeathcap.png'
    },
    {
      name: 'Rapid Firecannon',
      bonus: 'Wearer gains +100% Attack Range. +30% Attack speed.',
      isBase: false,
      img: 'https://rerollcdn.com/items/RapidFirecannon.png'
    },
    {
      name: 'Red Buff',
      bonus: "Wearer's Basic Attacks burn the target on-hit, dealing 18% of the target's Maximum Health as true damage over 10 seconds and reducing healing by 80% for the duration of the burn. A champion can only have one burn effect at a time, preferring the strongest. +200 Health, +25 Armor",
      isBase: false,
      img: 'https://rerollcdn.com/items/RedBuff.png'
    },
    {
      name: 'Redemption',
      bonus: 'When the wearer falls below 30% Health, nearby allies are healed for 1200 Health after a 2.5 second delay. This effect can trigger once per combat. +200 Health, 20 AP',
      isBase: false,
      img: 'https://rerollcdn.com/items/Redemption.png'
    },
    {
      name: "Runaan's Hurricane",
      bonus: "Basic Attacks fire an additional missile at another nearby enemy, dealing 60% of the wearer's Attack damage and applying on-hit effects. +15% Attack speed, 25 MR.",
      isBase: false,
      img: 'https://rerollcdn.com/items/RunaansHurricane.png'
    },
    {
      name: "Seraph's Embrace",
      bonus: 'After casting their spell, the wearer restores 20 Mana. +40 Mana.',
      isBase: false,
      img: 'https://rerollcdn.com/items/SeraphsEmbrace.png'
    },
    {
      name: 'Spear of Shojin',
      bonus: "After casting their spell, the wearer's Basic Attacks restore 18% of their Maximum Mana. +15% Attack speed, +20 Mana.",
      isBase: false,
      img: 'https://rerollcdn.com/items/SpearofShojin.png'
    },
    {
      name: 'Statikk Shiv',
      bonus: 'Every third Basic Attack from the wearer deals 85 magical damage to 3/4/5 ★ enemies. +15% Attack speed, +20 Mana.',
      isBase: false,
      img: 'https://rerollcdn.com/items/StatikkShiv.png'
    },
    {
      name: 'Sword Breaker',
      bonus: "Wearer's Basic Attacks have a 25% chance to disarm the target for 3 seconds, preventing that enemy from Basic Attacking. +25 MR, +25 Armor.",
      isBase: false,
      img: 'https://rerollcdn.com/items/SwordBreaker.png'
    },
    {
      name: 'Talisman of Light',
      bonus: 'Wearer is also a Light. +25 MR.',
      isBase: false,
      img: 'https://rerollcdn.com/items/TalismanofLight.png'
    },
    {
      name: "Thief's Gloves",
      bonus: "At the beginning of each planning phase, the wearer equips 2 temporary items. Temporary items increase in power based on your player level. +20% Crit and Dodge Chance.",
      isBase: false,
      img: 'https://rerollcdn.com/items/ThiefsGloves.png'
    },
    {
      name: 'Titanic Hydra',
      bonus: 'Wearer is also a Blademaster. +30% Attack speed.',
      isBase: false,
      img: 'https://rerollcdn.com/items/TitanicHydra.png'
    },
    {
      name: "Titan's Resolve",
      bonus: "Basic Attacks deal an additional 3% of the wearer's Maximum Health as magic damage to the target and adjacent enemies behind them. +200 Health, +15% Attack speed.",
      isBase: false,
      img: 'https://rerollcdn.com/items/TitansResolve.png'
    },
    {
      name: 'Trap Claw',
      bonus: 'At the beginning of combat, the wearer gains a shield that blocks the first enemy spell that hits them. The enemy that breaks the shield is stunned for 4 seconds. +200 health,  +20% Dodge Chance.',
      isBase: false,
      img: 'https://rerollcdn.com/items/TrapClaw.png'
    },
    {
      name: "Warden's Mail",
      bonus: 'Wearer is also a Warden. +25 Armor.',
      isBase: false,
      img: 'https://rerollcdn.com/items/WardensMail.png'
    },
    {
      name: "Warmog's Armor",
      bonus: 'Wearer regenerates 6% of their missing Health per second. +400 Health',
      isBase: false,
      img: 'https://rerollcdn.com/items/WarmogsArmor.png'
    },
    {
      name: "Youmuu's Ghostblade",
      bonus: 'Wearer is also an Assassin. +30 Attack.',
      isBase: false,
      img: 'https://rerollcdn.com/items/YoumuusGhostblade.png'
    },
    {
      name: "Zeke's Herald",
      bonus: 'When combat begins, the wearer and all allies within 2 hexes in the same row gain +15% Attack Speed for the rest of combat. +15 Attack, +200 Health.',
      isBase: false,
      img: 'https://rerollcdn.com/items/ZekesHerald.png'
    },
    {
      name: 'Zephyr',
      bonus: 'When combat begins, the wearer summons a whirlwind on the opposite side of the arena that removes the closest enemy from combat for 6 seconds. +25 MR, +200 Health',
      isBase: false,
      img: 'https://rerollcdn.com/items/Zephyr.png'
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
