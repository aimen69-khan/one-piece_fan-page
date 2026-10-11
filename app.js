"use strict";

/* ------------------------------------------------------------------ *
 * 1. DATA
 * ------------------------------------------------------------------ */
const strawHats = [
  {
    id: "luffy", name: "Monkey D. Luffy", nickname: "Straw Hat Luffy", role: "Captain", bounty: 3000000000,
    dream: "Become the Pirate King",
    dreamNote: "He doesn’t want treasure or a throne. He wants to be the freest person on the sea.",
    devilFruit: "Gomu Gomu no Mi / Hito Hito no Mi, Model: Nika",
    haki: ["Observation Haki", "Armament Haki", "Conqueror’s Haki"],
    image: "images/luffy.jpg", color: "#e5383b", initial: "L", icon: "👑",
    birthday: "May 5", age: 19, height: "174 cm",
    fightingStyle: "Rubber-based brawling with Gear techniques (Gear 2, 3, 4 and 5)",
    weapons: "None. His own stretching body is the weapon.",
    personality: "Cheerful, reckless and fiercely loyal. Luffy follows his heart, loves meat and adventure, and will fight anyone who hurts his friends.",
    background: "Raised in Foosha Village, Luffy ate the Gomu Gomu no Mi as a boy and promised Red-Haired Shanks he would return the straw hat as a great pirate. He set sail at seventeen and gathered the crew one friend at a time.",
    achievements: ["Defeated Crocodile, Enel, Rob Lucci, Doflamingo and Katakuri", "Fought at the Summit War of Marineford", "Defeated Kaido and became one of the Four Emperors", "Awakened his fruit and unleashed Gear 5"],
    description: "The rubber-bodied captain whose dream is to become the Pirate King, and whose freedom and loyalty inspire everyone around him."
  },
  {
    id: "zoro", name: "Roronoa Zoro", nickname: "Pirate Hunter Zoro", role: "Swordsman", bounty: 1111000000,
    dream: "Become the World’s Greatest Swordsman",
    dreamNote: "A promise made to a childhood rival, and a blade that must never lose again.",
    devilFruit: "None",
    haki: ["Observation Haki", "Armament Haki", "Conqueror’s Haki"],
    image: "images/zoro.jpg", color: "#3fb06e", initial: "Z", icon: "⚔️",
    birthday: "November 11", age: 21, height: "181 cm",
    fightingStyle: "Santoryu (three-sword style) and Asura",
    weapons: "Wado Ichimonji, Sandai Kitetsu and Enma",
    personality: "Stoic, stubborn and fearless, with a terrible sense of direction. Zoro trains relentlessly and carries every burden his captain should not have to.",
    background: "Once a feared bounty hunter from Shimotsuki Village, Zoro vowed to surpass the best swordsman alive after the death of his friend Kuina. Luffy freed him in Shells Town, and he became the crew’s first member.",
    achievements: ["Took Luffy’s pain at Thriller Bark: “Nothing happened”", "Defeated Kaku, Pica and King", "Awakened Conqueror’s Haki", "Wields three swords, including the demonic Enma"],
    description: "The first to join Luffy. A three-sword swordsman aiming to be the best in the world, no matter how many times he gets lost."
  },
  {
    id: "nami", name: "Nami", nickname: "Cat Burglar Nami", role: "Navigator", bounty: 366000000,
    dream: "Draw a map of the entire world",
    dreamNote: "A girl who once stole maps to buy her village’s freedom now wants to chart every sea.",
    devilFruit: "None", haki: ["None confirmed"],
    image: "images/nami.jpg", color: "#ff9f40", initial: "N", icon: "🧭",
    birthday: "July 3", age: 20, height: "170 cm",
    fightingStyle: "Weather science with the Clima-Tact and lightning from Zeus",
    weapons: "Clima-Tact, Zeus (a thundercloud homie)",
    personality: "Sharp, daring and money-loving, with a soft heart for her crew. Nami hides her tears behind a smile and never gives up on the people she loves.",
    background: "Raised by Bellemere in Cocoyasi Village, Nami spent years as a thief working for Arlong to buy back her village. Luffy broke her chains, and she has navigated the Straw Hats ever since.",
    achievements: ["Guides the ship through the Grand Line’s wild weather", "Defeated Kalifa of CP9", "Mastered the Weather Egg and Thunderbolt Tempo", "Sailed the crew into the New World"],
    description: "A brilliant navigator who can read any storm, and a thief who stole her way into the crew’s heart."
  },
  {
    id: "usopp", name: "Usopp", nickname: "God Usopp", role: "Sniper", bounty: 500000000,
    dream: "Become a brave warrior of the sea",
    dreamNote: "The liar who wants to stop pretending and become the hero he tells stories about.",
    devilFruit: "None", haki: ["Observation Haki (emerging)"],
    image: "images/usopp.jpg", color: "#b9803f", initial: "U", icon: "🎯",
    birthday: "April 1", age: 19, height: "176 cm",
    fightingStyle: "Long-range sniping with Pop Greens and tricks",
    weapons: "Kabuto slingshot, Pop Greens, Usopp Hammer",
    personality: "Funny, imaginative and prone to wild tall tales, but when a friend is in danger, Usopp finds courage he never knew he had.",
    background: "Son of the pirate Yasopp, Usopp grew up in Syrup Village telling lies to cheer up his friend Kaya. Luffy’s crew gave him the chance to turn his stories into truth.",
    achievements: ["Became “Sogeking” and defied the World Government", "Defeated Perona at Thriller Bark", "Took down Sugar, freeing Dressrosa’s toys", "Inventor of the crew’s best gadgets"],
    description: "A sniper and storyteller who started as a liar and became the brave warrior of the sea he always imagined."
  },
  {
    id: "sanji", name: "Sanji", nickname: "Black Leg Sanji", role: "Cook", bounty: 1032000000,
    dream: "Find the All Blue",
    dreamNote: "A cook who heard of a sea where every fish swims together, and swore to find it.",
    devilFruit: "None", haki: ["Observation Haki", "Armament Haki"],
    image: "images/sanji.jpg", color: "#e8d44d", initial: "S", icon: "🍳",
    birthday: "March 2", age: 21, height: "180 cm",
    fightingStyle: "Black Leg Style (Diable Jambe), fighting only with his kicks",
    weapons: "None. Sanji never uses his hands in battle.",
    personality: "Gentle, gallant and a hopeless romantic, yet a fierce fighter. Sanji refuses to let anyone go hungry.",
    background: "Raised in the Germa Kingdom, Sanji escaped his family and found his purpose under Zeff at the floating restaurant Baratie. He joined Luffy to search for the legendary All Blue.",
    achievements: ["Defeated Jabra at Enies Lobby", "Defeated Queen of the Beasts Pirates in Wano", "Mastered Diable Jambe", "Fed the crew across every sea"],
    description: "A chivalrous chef with fiery kicks who will never let anyone starve, and who dreams of finding the All Blue."
  },
  {
    id: "chopper", name: "Tony Tony Chopper", nickname: "Cotton Candy Lover Chopper", role: "Doctor", bounty: 1000,
    dream: "Become a doctor capable of curing any disease",
    dreamNote: "A reindeer who was once shunned dreams of being a doctor who can save anyone.",
    devilFruit: "Hito Hito no Mi (Zoan)", haki: ["None confirmed"],
    image: "images/chopper.jpg", color: "#ff7fb0", initial: "C", icon: "⚕️",
    birthday: "December 24", age: 17, height: "90 cm (Brain Point)",
    fightingStyle: "Rumble Ball transformations (Brain, Heavy, Jumping, Guard, Arm, Horn, Walk and Monster Points)",
    weapons: "Rumble Ball, medical tools",
    personality: "Shy, kind and easily excited, Chopper is both the crew’s cutest member and its most dedicated healer.",
    background: "A reindeer who ate the Hito Hito no Mi, Chopper was shunned by his herd until Dr. Hiriluk and Dr. Kureha taught him medicine on Drum Island. Luffy invited him to sail the sea.",
    achievements: ["Healed Nami’s fever on Drum Island", "Treated the children rescued from Punk Hazard", "Developed the Rumble Ball techniques", "Official ship’s doctor of the Straw Hats"],
    description: "A reindeer doctor who ate the Hito Hito no Mi and dreams of a cure for every disease."
  },
  {
    id: "robin", name: "Nico Robin", nickname: "Devil Child", role: "Archaeologist", bounty: 930000000,
    dream: "Discover the true history",
    dreamNote: "She carries the voices of lost scholars, and will read the history the world tried to erase.",
    devilFruit: "Hana Hana no Mi (Paramecia)", haki: ["None confirmed"],
    image: "images/robin.jpg", color: "#9a6bd8", initial: "R", icon: "📜",
    birthday: "February 6", age: 30, height: "188 cm",
    fightingStyle: "Hana Hana techniques (Fleur, Gigantesco Mano, Demonio Fleur)",
    weapons: "Her sprouting limbs; archaeology as a weapon of knowledge",
    personality: "Calm, intelligent and quietly humorous, with a dark sense of humor. After years on the run, Robin has found a family that wants her to live.",
    background: "The sole survivor of Ohara’s scholars, Robin spent two decades fleeing the World Government. Luffy declared war on the world to bring her back, and she has been a Straw Hat since.",
    achievements: ["Reads Poneglyphs, the world’s hidden history", "Defeated Black Maria in Wano", "Saved at Enies Lobby by the entire crew", "Key to uncovering the Void Century"],
    description: "An archaeologist who can read Poneglyphs, searching for the true history of the world."
  },
  {
    id: "franky", name: "Franky", nickname: "Cyborg Franky", role: "Shipwright", bounty: 394000000,
    dream: "Build a ship that reaches the end of the world",
    dreamNote: "To finish the work his mentor Tom began: a ship that sails to the very end of the sea.",
    devilFruit: "None (cyborg)", haki: ["None confirmed"],
    image: "images/franky.jpg", color: "#19c3e6", initial: "F", icon: "🔧",
    birthday: "March 9", age: 36, height: "240 cm",
    fightingStyle: "Cyborg combat: Radical Beam, Coup de Vent, and the Franky Shogun robot",
    weapons: "Radical Beam, Strong Right, Franky Shogun, Franky Radical Beam",
    personality: "Loud, flamboyant and fiercely proud of his craft. Franky cries easily, strikes poses and treats the Sunny like a living friend.",
    background: "Student of the legendary shipwright Tom, Franky rebuilt his own body after a tragic accident. After Enies Lobby he joined the crew and built the Thousand Sunny from Treasure Tree Adam.",
    achievements: ["Built the Thousand Sunny", "Defeated Fukuro at Enies Lobby", "Constructed the Franky Shogun", "Continues the dream of Tom"],
    description: "A cyborg shipwright with a heart of steel, bound to build the ship that carries the crew to the end of the sea."
  },
  {
    id: "brook", name: "Brook", nickname: "Soul King Brook", role: "Musician", bounty: 383000000,
    dream: "Reunite with Laboon",
    dreamNote: "A promise to a whale, kept across fifty years of waiting.",
    devilFruit: "Yomi Yomi no Mi (Paramecia)", haki: ["None confirmed"],
    image: "images/brook.jpg", color: "#aab4c8", initial: "B", icon: "🎻",
    birthday: "April 3", age: 90, height: "277 cm",
    fightingStyle: "Soul Solid swordsmanship, ice-cold slashes and sound-based attacks",
    weapons: "Soul Solid (cane sword), violin",
    personality: "A cheerful skeleton with a love of music, poor jokes and ladies’ panties (he’ll ask permission). Underneath, Brook carries decades of loneliness.",
    background: "A pirate of the Rumbar Pirates, Brook died after his crew’s doom and returned thanks to the Yomi Yomi no Mi. After fifty years alone, the Straw Hats gave him a crew again.",
    achievements: ["Survived fifty years alone in the Florian Triangle", "Became the world-famous “Soul King”", "Rejoined the crew after the time skip", "Plays the crew’s songs at every turn"],
    description: "A skeleton musician and swordsman who returned from death to keep a promise he made fifty years ago."
  },
  {
    id: "jinbe", name: "Jinbe", nickname: "Knight of the Sea", role: "Helmsman", bounty: 1100000000,
    dream: "Help create a world where humans and fish-men can coexist",
    dreamNote: "A sea where fish-men and humans can finally live without fear or hate.",
    devilFruit: "None", haki: ["Observation Haki", "Armament Haki"],
    image: "images/jinbe.jpg", color: "#3b6fe0", initial: "J", icon: "⚓",
    birthday: "April 2", age: 46, height: "301 cm",
    fightingStyle: "Fish-Man Karate, controlling water around him",
    weapons: "None. His fists and the water around him.",
    personality: "Honorable, calm and thoughtful. Jinbe values loyalty above all, and once rejected the idea that fish-men must forever hate humans.",
    background: "A former Warlord and captain of the Sun Pirates, Jinbe stood beside Luffy at Marineford. After leaving the Big Mom Pirates, he joined the Straw Hats as their helmsman.",
    achievements: ["Fought at Marineford and rescued Luffy", "Left the Big Mom Pirates to protect his promise", "Joined the Straw Hats as the tenth member", "Knight of the Sea who bridges fish-men and humans"],
    description: "The Knight of the Sea, a master of Fish-Man Karate who steers the Straw Hats through the Grand Line."
  }
];

const roleInfo = {
  Captain: { icon: "👑", desc: "Leads the crew and chases the biggest dream." },
  Swordsman: { icon: "⚔️", desc: "Guards the ship and cuts through any enemy." },
  Navigator: { icon: "🧭", desc: "Reads the weather and sets every course." },
  Sniper: { icon: "🎯", desc: "Strikes from afar and builds the crew’s gadgets." },
  Cook: { icon: "🍳", desc: "Feeds everyone and fights with fiery kicks." },
  Doctor: { icon: "⚕️", desc: "Heals every wound, from fevers to battle scars." },
  Archaeologist: { icon: "📜", desc: "Reads the Poneglyphs and uncovers lost history." },
  Shipwright: { icon: "🔧", desc: "Builds, repairs and upgrades the Sunny." },
  Musician: { icon: "🎻", desc: "Keeps spirits high with music on the open sea." },
  Helmsman: { icon: "⚓", desc: "Steers the ship through the roughest currents." }
};

const shipsData = {
  sunny: {
    id: "sunny", name: "Thousand Sunny", type: "Brig-class sailing ship (flagship of the Straw Hats)",
    designer: "Franky (shipwright)", material: "Treasure Tree Adam, the toughest wood in the world",
    crew: "All ten Straw Hat Pirates", figurehead: "Lion", era: "After Enies Lobby to present",
    overview: "Built for the whole Grand Line, the Sunny is both a ship and a home, complete with a library, an aquarium, a kitchen and a workshop.",
    features: ["Soldier Dock System: stores and launches Mini Merry II and Shark Submerge III", "Coup de Burst: air-blast propulsion for leaps and escapes", "Library, aquarium bar, kitchen and a workshop below deck", "Lion figurehead that also hides the Gaon Cannon"],
    weapons: ["Gaon Cannon", "Coup de Burst", "Cannon batteries"],
    history: "After the loss of the Going Merry, Franky built the Thousand Sunny from Treasure Tree Adam, fulfilling Tom’s dream of a ship that can reach the end of the sea. It has carried the crew from Water 7 all the way to Wano and Egghead."
  },
  merry: {
    id: "merry", name: "Going Merry", type: "Caravel",
    designer: "Kaya’s shipwrights (gift from Kaya)", material: "Ordinary ship wood, repaired many times",
    crew: "Luffy, Zoro, Nami, Usopp, Sanji, Chopper, Robin (and Vivi for a time)", figurehead: "Sheep", era: "Syrup Village to Water 7",
    overview: "The first Straw Hat ship was small but full of heart, and seemed to protect the crew as if it were alive.",
    features: ["Sheep figurehead that gave the ship its personality", "A compact deck with a kitchen, a crow’s nest and a lounge", "Crew-built repairs from the hands of Usopp and the carpenters", "A spirit that some say watched over everyone"],
    weapons: ["Small deck cannons"],
    history: "Given to the crew by Kaya in Syrup Village, the Going Merry survived Arlong, Alabasta and Skypiea. After Water 7, the damage was beyond repair, and the crew gave it a Viking funeral before Franky built the Sunny."
  }
};

const journeyArcs = [
  {
    id: "east-blue", name: "East Blue", location: "East Blue (Foosha, Shells Town, Orange Town, Syrup Village, Baratie, Cocoyasi Village)",
    desc: "Where it all begins. Luffy sets out at seventeen and, island by island, gathers the first five members of the crew.",
    events: ["Luffy sets sail from Foosha Village", "Zoro is freed at Shells Town", "Usopp joins and the crew receives the Going Merry from Kaya", "Sanji joins at the Baratie", "Nami joins after Arlong Park falls"],
    enemies: ["Alvida", "Buggy the Clown", "Captain Kuro", "Don Krieg", "Arlong"],
    dev: ["Zoro, Nami, Usopp and Sanji join", "Luffy first sees Dracule Mihawk and learns how far he must go"]
  },
  {
    id: "alabasta", name: "Alabasta", location: "Drum Island and the desert Kingdom of Alabasta",
    desc: "The crew helps Princess Vivi stop a civil war secretly sparked by a criminal organization.",
    events: ["Chopper joins on Drum Island", "The Straw Hats battle Baroque Works agents", "Luffy defeats Sir Crocodile", "Vivi parts ways with the crew"],
    enemies: ["Sir Crocodile", "Baroque Works", "Mr. 1", "Mr. 2 Bon Clay"],
    dev: ["Chopper becomes the doctor", "Robin leaves Baroque Works and joins the crew", "Luffy beats his first Warlord"]
  },
  {
    id: "skypiea", name: "Skypiea", location: "Jaya and the Sky Island of Skypiea",
    desc: "The crew rides a Knock Up Stream into the clouds and fights a self-proclaimed god.",
    events: ["The crew rides the Knock Up Stream", "The Golden Bell’s legend is revealed", "Luffy battles Enel", "The Golden Bell rings across the sky"],
    enemies: ["Enel", "The Four Priests (Gedatsu, Shura, Satori, Ohm)", "The Divine Squad"],
    dev: ["Luffy proves his rubber body can beat lightning", "Usopp learns to use Dials", "Nami earns a new level of navigation skill"]
  },
  {
    id: "water-7", name: "Water 7", location: "Water 7, the City of Water",
    desc: "The Going Merry’s hull breaks and the crew searches for repairs, only to be thrown into a conspiracy.",
    events: ["Merry’s keel is declared unfixable", "Usopp’s duel with Luffy", "Iceburg is attacked", "Robin disappears"],
    enemies: ["CP9", "Rob Lucci", "Kaku", "Blueno", "Kalifa", "Franky Family (at first)"],
    dev: ["Usopp leaves the crew", "Robin is taken", "The crew vows to rescue her"]
  },
  {
    id: "enies-lobby", name: "Enies Lobby", location: "Enies Lobby, the Island of Justice",
    desc: "The Straw Hats declare war on the World Government to bring their friend home.",
    events: ["Luffy burns the flag of the World Government", "The Merry’s spirit rescues them", "Robin finally shouts that she wants to live", "The crew escapes by Marine ship"],
    enemies: ["CP9", "Rob Lucci", "Spandam"],
    dev: ["Robin and Franky join the crew", "Usopp rejoins", "Luffy debuts Gear 2 and Gear 3", "The Going Merry is retired"]
  },
  {
    id: "thriller-bark", name: "Thriller Bark", location: "Thriller Bark, a haunted ship in the Florian Triangle",
    desc: "A ghost ship full of zombies steals the crew’s shadows, and a lonely musician finds a new family.",
    events: ["Shadows are stolen", "Brook joins the crew", "Luffy fights Oars", "Zoro takes Luffy’s pain: “Nothing happened”"],
    enemies: ["Gecko Moria", "Absalom", "Perona", "Oars"],
    dev: ["Brook joins as the musician", "Luffy and Zoro’s bond is tested", "The crew grows closer to the New World"]
  },
  {
    id: "sabaody", name: "Sabaody Archipelago", location: "Sabaody Archipelago, near the Red Line",
    desc: "At the doorstep of the New World, the crew meets Supernovas and is scattered across the world.",
    events: ["Luffy punches a Celestial Dragon", "Admiral Kizaru arrives", "Bartholomew Kuma blasts each crew member away", "The crew is separated"],
    enemies: ["Admiral Kizaru", "Bartholomew Kuma", "Pacifista", "Eleven Supernovas (rivals)"],
    dev: ["The crew separates for two years", "Luffy resolves to grow stronger"]
  },
  {
    id: "amazon-lily", name: "Amazon Lily", location: "Amazon Lily, the island of the Kuja",
    desc: "Luffy washes ashore on an island ruled by women, and meets the Pirate Empress.",
    events: ["Luffy is sent to the island", "Boa Hancock falls for him", "He learns of Ace’s execution", "Hancock helps him sail to Impel Down"],
    enemies: ["Marines (briefly)"],
    dev: ["Luffy’s resolve to save Ace is set", "Hancock becomes a lasting ally"]
  },
  {
    id: "impel-down", name: "Impel Down", location: "Impel Down, the Great Prison beneath the Calm Belt",
    desc: "Luffy breaks into the world’s most terrifying prison to rescue his brother.",
    events: ["Luffy fights through Levels 1 to 4", "He meets Ivankov, Buggy and Jinbe", "The prisoners break out", "Luffy and Jinbe escape together"],
    enemies: ["Magellan", "Hannyabal", "Sadi", "Saldeath"],
    dev: ["Luffy meets Jinbe", "A band of ex-prisoners becomes unlikely allies"]
  },
  {
    id: "marineford", name: "Marineford", location: "Marine Headquarters, Marineford",
    desc: "A war between Whitebeard’s fleet and the Marines changes the age of pirates.",
    events: ["Ace is almost saved", "Ace dies protecting Luffy", "Whitebeard falls", "Shanks ends the war"],
    enemies: ["Admiral Akainu", "Admiral Aokiji", "Admiral Kizaru", "Marshall D. Teach (Blackbeard)"],
    dev: ["Luffy is crushed and begins to rebuild", "He trains with Rayleigh during the time skip"]
  },
  {
    id: "fish-man-island", name: "Fish-Man Island", location: "Fish-Man Island, 10,000 meters under the sea",
    desc: "After two years apart, the crew reunites and sails to the underwater paradise on the way to the New World.",
    events: ["The crew reunites in Sabaody", "They coat the Sunny and dive under the sea", "Luffy fights Hody Jones", "Luffy awakens Conqueror’s Haki in battle"],
    enemies: ["Hody Jones", "New Fish-Man Pirates", "Vander Decken IX"],
    dev: ["Luffy’s new Haki appears", "The crew reaches the New World"]
  },
  {
    id: "punk-hazard", name: "Punk Hazard", location: "Punk Hazard, an island half fire and half ice",
    desc: "The crew finds a burning laboratory and begins an alliance with the surgeon Trafalgar Law.",
    events: ["Luffy, Law and the crew uncover Caesar’s experiments", "The children are rescued", "Luffy and Law form an alliance"],
    enemies: ["Caesar Clown", "Vergo", "Doflamingo (behind the scenes)"],
    dev: ["The Straw Hat–Heart Pirates alliance begins", "Chopper heals the children"]
  },
  {
    id: "dressrosa", name: "Dressrosa", location: "Dressrosa, the Kingdom of Love and Passion",
    desc: "The Straw Hats help topple Doflamingo’s rule over a kingdom hidden by lies.",
    events: ["Luffy enters the Corrida Colosseum", "Sabo appears", "Law and Luffy face Doflamingo", "Luffy defeats Doflamingo with Gear 4"],
    enemies: ["Donquixote Doflamingo", "Trebol", "Diamante", "Pica", "Sugar"],
    dev: ["The Straw Hat Grand Fleet forms", "Zoro defeats Pica", "Usopp defeats Sugar", "Luffy’s bounty skyrockets"]
  },
  {
    id: "zou", name: "Zou", location: "Zou, a walking island on an elephant’s back",
    desc: "The crew meets the Mink Tribe and learns of Sanji’s dangerous situation.",
    events: ["The crew arrives at Zou", "They meet Carrot and the Minks", "Jack attacks the island", "The crew splits into teams"],
    enemies: ["Jack (Beasts Pirates)", "Big Mom Pirates (looming)"],
    dev: ["The crew divides to rescue Sanji", "Nami and Chopper meet the Mink guardians"]
  },
  {
    id: "whole-cake", name: "Whole Cake Island", location: "Totto Land, Big Mom’s domain",
    desc: "The crew infiltrates an Emperor’s territory to bring Sanji home.",
    events: ["Sanji is forced into a marriage", "The crew faces Big Mom’s children", "Luffy defeats Katakuri", "The crew escapes the Emperor"],
    enemies: ["Big Mom", "Katakuri", "Perospero", "Cracker"],
    dev: ["Sanji reconnects with the crew", "Jinbe officially leaves Big Mom’s crew", "Luffy’s power grows"]
  },
  {
    id: "wano", name: "Wano Country", location: "Wano Country, the Land of Samurai",
    desc: "The Straw Hats team up with samurai to overthrow Kaido and Orochi.",
    events: ["Alliance of samurai forms", "The raid on Onigashima", "Luffy fights Kaido", "Luffy awakens Gear 5"],
    enemies: ["Kaido", "Big Mom", "Orochi", "King", "Queen", "Black Maria"],
    dev: ["Luffy becomes an Emperor", "Zoro awakens Conqueror’s Haki", "Sanji discovers his Raid Suit", "Jinbe joins the crew"]
  },
  {
    id: "egghead", name: "Egghead", location: "Egghead Island, the Future Island of Dr. Vegapunk",
    desc: "The crew arrives at the laboratory of the world’s greatest scientist.",
    events: ["The crew explores Vegapunk’s lab", "Pacifistas and CP0 arrive", "Kuma’s past is revealed", "Luffy battles Rob Lucci"],
    enemies: ["CP0", "Saint Saturn", "Admiral Kizaru", "Rob Lucci"],
    dev: ["Luffy and the crew meet Vegapunk’s satellites", "The mysteries of the Void Century deepen"]
  }
];

const sagas = [
  { name: "East Blue Saga", note: "The crew begins with five friends.", arcs: ["East Blue"] },
  { name: "Alabasta Saga", note: "The first Grand Line kingdom.", arcs: ["Alabasta"] },
  { name: "Sky Island Saga", note: "A god waits in the clouds.", arcs: ["Skypiea"] },
  { name: "Water 7 Saga", note: "A betrayal and a rescue.", arcs: ["Water 7", "Enies Lobby"] },
  { name: "Thriller Bark Saga", note: "A ghost ship and a new nakama.", arcs: ["Thriller Bark"] },
  { name: "Summit War Saga", note: "A war that ends an era.", arcs: ["Sabaody Archipelago", "Amazon Lily", "Impel Down", "Marineford"] },
  { name: "Fish-Man Island Saga", note: "Two years later, under the sea.", arcs: ["Fish-Man Island"] },
  { name: "Dressrosa Saga", note: "An alliance, a coup and a kingdom.", arcs: ["Punk Hazard", "Dressrosa"] },
  { name: "Whole Cake Island Saga", note: "An Emperor’s tea party.", arcs: ["Zou", "Whole Cake Island"] },
  { name: "Wano Country Saga", note: "A samurai land and an Emperor’s fall.", arcs: ["Wano Country"] },
  { name: "Final Saga", note: "The last leg of the Grand Line.", arcs: ["Egghead"] }
];

const devilFruits = [
  {
    name: "Hito Hito no Mi, Model: Nika", type: "Mythical Zoan", user: "Monkey D. Luffy", straw: true,
    abilities: ["Gear 5 transformation", "Rubber body with cartoon physics", "Turns surroundings into rubber"],
    desc: "Once believed to be the Gomu Gomu no Mi, this is the legendary Sun God fruit that fills its user with boundless joy."
  },
  {
    name: "Hito Hito no Mi", type: "Zoan", user: "Tony Tony Chopper", straw: true,
    abilities: ["Human form and hybrid Heavy Point", "Rumble Ball gives seven extra forms", "Monster Point"],
    desc: "A fruit that gave a reindeer the intelligence of a human. Chopper pairs it with medical genius."
  },
  {
    name: "Hana Hana no Mi", type: "Paramecia", user: "Nico Robin", straw: true,
    abilities: ["Sprout limbs from any surface", "Giant arm attacks (Gigantesco Mano)", "Surveillance with extra eyes and ears"],
    desc: "Lets Robin sprout copies of her body parts anywhere within sight, a power as useful in battle as in research."
  },
  {
    name: "Yomi Yomi no Mi", type: "Paramecia", user: "Brook", straw: true,
    abilities: ["Revived after death", "Leaves his body as a soul", "Freezing attacks via spirit"],
    desc: "A fruit that grants one chance at resurrection. It brought Brook back from the dead as a living skeleton."
  },
  { name: "Mera Mera no Mi", type: "Logia", user: "Portgas D. Ace / Sabo", abilities: ["Becomes fire", "Fire fists and firebirds"], desc: "A fire-based Logia fruit passed from Ace to Sabo." },
  { name: "Gura Gura no Mi", type: "Paramecia", user: "Whitebeard / Blackbeard", abilities: ["Creates quakes", "Shatters air and sea"], desc: "The quake-quake fruit. Said to have the power to destroy the world." },
  { name: "Ope Ope no Mi", type: "Paramecia", user: "Trafalgar D. Water Law", abilities: ["Creates the ROOM", "Swaps and reshapes anything inside it"], desc: "The Operation fruit. The ultimate Devil Fruit, said to grant eternal life." },
  { name: "Hie Hie no Mi", type: "Logia", user: "Aokiji (Kuzan)", abilities: ["Freezes oceans", "Ice shields"], desc: "An ice-based Logia that can freeze entire seas in seconds." },
  { name: "Magu Magu no Mi", type: "Logia", user: "Sakazuki (Akainu)", abilities: ["Becomes magma", "Burns through fire"], desc: "A Logia that lets its user wield molten rock hotter than fire." },
  { name: "Pika Pika no Mi", type: "Logia", user: "Borsalino (Kizaru)", abilities: ["Becomes light", "Light beams"], desc: "The fastest elemental Logia: its user can move and fight at the speed of light." },
  { name: "Goro Goro no Mi", type: "Logia", user: "Enel", abilities: ["Becomes lightning", "Mantra"], desc: "The Rumble fruit that once made a man believe himself a god." },
  { name: "Suna Suna no Mi", type: "Logia", user: "Sir Crocodile", abilities: ["Becomes sand", "Dries living things"], desc: "A desert Logia that turns the user and his surroundings to sand." },
  { name: "Uo Uo no Mi, Model: Seiryu", type: "Mythical Zoan", user: "Kaido", abilities: ["Azure dragon form", "Fire and wind breath"], desc: "A legendary Zoan fruit that turns its user into a mighty dragon." },
  { name: "Tori Tori no Mi, Model: Phoenix", type: "Mythical Zoan", user: "Marco", abilities: ["Regenerative blue flames", "Flight"], desc: "A phoenix Zoan with healing flames that can heal wounds." },
  { name: "Neko Neko no Mi, Model: Leopard", type: "Zoan", user: "Rob Lucci", abilities: ["Leopard-human hybrid", "Rokushiki mastery"], desc: "A powerful Zoan that gave a CP9 agent the strength of a hunter." },
  { name: "Mochi Mochi no Mi", type: "Paramecia", user: "Charlotte Katakuri", abilities: ["Becomes mochi", "Sticky attacks"], desc: "A special Paramecia that behaves like a Logia." }
];

const hakiData = [
  {
    id: "observation", name: "Observation Haki", css: "h-obs", icon: "👁️",
    what: "The ability to sense the presence, emotions and intent of others, even without sight. At higher levels, the user can see a few seconds into the future.",
    users: ["Luffy", "Zoro", "Sanji", "Jinbe", "Usopp (emerging)", "Katakuri", "Shanks"],
    advanced: [{ t: "Future Sight", d: "A rare advance that lets the user glimpse their opponent’s next move before it happens." }],
    meters: [["Luffy", 95], ["Jinbe", 80], ["Sanji", 78], ["Zoro", 75], ["Usopp", 35]]
  },
  {
    id: "armament", name: "Armament Haki", css: "h-arm", icon: "🛡️",
    what: "Wraps the body or a weapon in an invisible suit of armor. It strengthens attacks and defense, and can touch Logia users.",
    users: ["Luffy", "Zoro", "Sanji", "Jinbe", "Marines and pirates of every kind"],
    advanced: [{ t: "Ryuo", d: "Armament Haki hardened to a black, crackling form that delivers brutal blows." }, { t: "Internal Destruction", d: "Haki sent through a target that damages from within." }],
    meters: [["Luffy", 100], ["Zoro", 95], ["Jinbe", 88], ["Sanji", 85]]
  },
  {
    id: "conquerors", name: "Conqueror’s Haki", css: "h-con", icon: "⚡",
    what: "A rare power only one in millions is born with. It lets the user overwhelm the willpower of others, knocking weaker opponents unconscious.",
    users: ["Luffy", "Zoro (awakened)", "Kaido", "Big Mom", "Shanks", "Whitebeard", "Gol D. Roger"],
    advanced: [{ t: "Coating", d: "Conqueror’s Haki can be infused into an attack, creating red lightning and enormous destructive force." }],
    meters: [["Luffy", 100], ["Zoro", 60]]
  }
];

/* ------------------------------------------------------------------ *
 * 2. HELPERS
 * ------------------------------------------------------------------ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const formatBerries = (n) => n.toLocaleString("en-US");
const byId = Object.fromEntries(strawHats.map((c) => [c.id, c]));

/** Generated stand-in portrait (data URI) used when images/<name>.jpg is missing. */
const portraitCache = {};
function portraitURI(c) {
  if (portraitCache[c.id]) return portraitCache[c.id];
  let rays = "";
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    rays += `<line x1="200" y1="200" x2="${(200 + Math.cos(a) * 520).toFixed(0)}" y2="${(200 + Math.sin(a) * 520).toFixed(0)}"/>`;
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 480">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c.color}"/><stop offset="1" stop-color="#050b17"/></linearGradient>
      <radialGradient id="r" cx=".5" cy=".4" r=".6"><stop offset="0" stop-color="#fff" stop-opacity=".5"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="400" height="480" fill="url(#g)"/>
    <g stroke="#fff" stroke-opacity=".09" stroke-width="16">${rays}</g>
    <rect width="400" height="480" fill="url(#r)"/>
    <path d="M20 480C34 365 120 312 200 312s166 53 180 168z" fill="#050b17" fill-opacity=".88" stroke="${c.color}" stroke-width="4"/>
    <circle cx="200" cy="205" r="82" fill="#050b17" fill-opacity=".92" stroke="${c.color}" stroke-width="4"/>
    <text x="200" y="240" text-anchor="middle" font-family="Georgia, serif" font-size="104" font-weight="700" fill="${c.color}">${c.initial}</text>
    <text x="200" y="440" text-anchor="middle" font-size="44">${c.icon}</text>
  </svg>`;
  portraitCache[c.id] = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  return portraitCache[c.id];
}

/** Image markup. If images/<file> is missing, the capture-phase error handler swaps in the generated portrait. */
function charImg(c, extraClass = "", lazy = true) {
  return `<img class="img-fade ${extraClass}" src="${c.image}" alt="${c.name}, ${c.role} of the Straw Hat Pirates" width="400" height="480" data-char="${c.id}" ${lazy ? 'loading="lazy"' : ""} decoding="async">`;
}
document.addEventListener("error", (e) => {
  const img = e.target;
  if (img && img.tagName === "IMG" && img.dataset.ship) {
    img.parentElement.innerHTML = shipSVG(img.dataset.ship);
    return;
  }
  if (img && img.tagName === "IMG" && img.dataset.char && !img.dataset.fallback) {
    img.dataset.fallback = "1";
    img.src = portraitURI(byId[img.dataset.char]);
  }
}, true);
document.addEventListener("load", (e) => {
  if (e.target && e.target.tagName === "IMG") e.target.classList.add("loaded");
}, true);

/** Illustrated ship artwork (inline SVG). */
function shipSVG(kind) {
  const sunny = kind === "sunny";
  const id = "s-" + kind;
  const sail = (x, w) => `
    <path d="M${x - w} 100 Q${x} 126 ${x + w} 100 L${x + w} 182 Q${x} 208 ${x - w} 182Z" fill="#f6efe0" stroke="#c9b98f" stroke-width="2"/>
    <path d="M${x - w - 6} 192 Q${x} 218 ${x + w + 6} 192 L${x + w + 8} 264 Q${x} 290 ${x - w - 8} 264Z" fill="#f1e7d0" stroke="#c9b98f" stroke-width="2"/>
    <rect x="${x - 4}" y="72" width="8" height="222" fill="#4b2c14"/>
    <path d="M${x} 72 L${x + 46} 82 L${x} 94Z" fill="#c8312f"/>`;
  const waves = `
    <path d="M0 340 Q50 322 100 340 T200 340 T300 340 T400 340 T500 340 T600 340 T700 340 T800 340 V450 H0Z" fill="#12508f" opacity=".85"/>
    <path d="M0 372 Q60 354 120 372 T240 372 T360 372 T480 372 T600 372 T720 372 T840 372 V450 H0Z" fill="#0a2f60"/>`;
  const body = sunny
    ? `<path d="M170 290 L640 290 Q620 362 540 374 L250 374 Q190 352 170 290Z" fill="#7a4a24"/>
       <rect x="180" y="300" width="450" height="10" fill="#e8b84a" opacity=".85"/>
       <rect x="560" y="248" width="82" height="44" fill="#8d5a2c"/>
       ${sail(300, 48)}${sail(410, 48)}${sail(520, 48)}
       <ellipse cx="410" cy="128" rx="24" ry="5" fill="#e8b84a"/><circle cx="410" cy="144" r="13" fill="#222"/>
       <circle cx="148" cy="282" r="40" fill="#f0a830" stroke="#c97d10" stroke-width="6"/>
       <circle cx="148" cy="282" r="25" fill="#f8cb70"/><circle cx="140" cy="277" r="3.5" fill="#222"/><circle cx="157" cy="277" r="3.5" fill="#222"/>
       <path d="M140 292q8 7 16 0" fill="none" stroke="#222" stroke-width="3" stroke-linecap="round"/>`
    : `<path d="M230 300 L600 300 Q585 356 520 366 L290 366 Q245 346 230 300Z" fill="#b57a3c"/>
       <rect x="238" y="308" width="352" height="8" fill="#c8312f" opacity=".85"/>
       <path d="M410 96 L250 288 L400 288Z" fill="#f1e8d2" stroke="#c9b98f" stroke-width="2"/>
       <path d="M338 104 Q410 134 482 104 L482 190 Q410 220 338 190Z" fill="#f6efe0" stroke="#c9b98f" stroke-width="2"/>
       <path d="M332 198 Q410 230 488 198 L494 272 Q410 300 326 272Z" fill="#f1e7d0" stroke="#c9b98f" stroke-width="2"/>
       <rect x="406" y="76" width="8" height="226" fill="#4b2c14"/><path d="M410 76 L456 86 L410 98Z" fill="#c8312f"/>
       <circle cx="410" cy="150" r="12" fill="#222"/><ellipse cx="410" cy="136" rx="22" ry="5" fill="#e8b84a"/>
       <g fill="#fff"><circle cx="210" cy="278" r="16"/><circle cx="226" cy="268" r="15"/><circle cx="196" cy="268" r="13"/><circle cx="222" cy="288" r="13"/></g>
       <circle cx="204" cy="282" r="12" fill="#3a2a22"/><circle cx="200" cy="279" r="2.4" fill="#fff"/>`;
  return `<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustration of the ${sunny ? "Thousand Sunny" : "Going Merry"}">
    <defs><linearGradient id="sky-${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${sunny ? "#17356d" : "#2b4f8c"}"/><stop offset="1" stop-color="${sunny ? "#f6a85a" : "#f3c47a"}"/></linearGradient></defs>
    <rect width="800" height="450" fill="url(#sky-${id})"/>
    <circle cx="660" cy="290" r="62" fill="#ffe7a0" opacity=".9"/>
    <rect y="330" width="800" height="120" fill="#0e3a6e"/>${waves}
    <g>${body}</g>
    <path d="M0 400 Q80 384 160 400 T320 400 T480 400 T640 400 T800 400 V450 H0Z" fill="#071d3d"/>
  </svg>`;
}

/** Ship picture: tries images/<key>.jpg first, falls back to the drawn SVG. */
function shipArt(key) {
  const name = shipsData[key].name;
  return `<div class="ship-art"><img class="img-fade ship-img" src="images/${key}.jpg" alt="${name}" data-ship="${key}" loading="lazy" decoding="async"></div>`;
}

/** Scroll-reveal helper. */
let revealObserver = null;
function setupReveal() {
  if ("IntersectionObserver" in window && !reduceMotion) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); revealObserver.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  }
  observeReveals(document);
}
function observeReveals(root, immediate = false) {
  $$(".reveal:not(.in)", root).forEach((el) => {
    if (immediate || !revealObserver) {
      requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add("in")));
    } else {
      revealObserver.observe(el);
    }
  });
}

/* ------------------------------------------------------------------ *
 * 3. ROLES & CHARACTERS
 * ------------------------------------------------------------------ */
const state = { filter: "All", query: "", sort: "high" };

function renderRoles() {
  $("#rolesGrid").innerHTML = strawHats.map((c, i) => `
    <article class="role-card reveal" style="--c:${c.color}; --i:${i % 5}">
      <div class="role-icon" aria-hidden="true">${roleInfo[c.role].icon}</div>
      <h3 class="role-title">${c.role}</h3>
      <p class="role-name">${c.name.replace("Tony Tony ", "")}</p>
      <p class="role-desc">${roleInfo[c.role].desc}</p>
    </article>`).join("");
}

function renderFilterButtons() {
  const roles = ["All", ...strawHats.map((c) => c.role)];
  $("#roleFilters").innerHTML = roles.map((r) =>
    `<button type="button" class="chip${r === "All" ? " is-active" : ""}" data-filter="${r}" aria-pressed="${r === "All"}">${r}</button>`).join("");
}

function characterCardHTML(c, i) {
  return `
    <article class="char-card reveal" style="--c:${c.color}; --i:${i % 6}" data-id="${c.id}">
      <button type="button" class="card-media" data-open="${c.id}" aria-label="View details for ${c.name}">
        ${charImg(c)}
        <span class="role-badge">${c.role}</span>
      </button>
      <div class="card-body">
        <div>
          <h3 class="card-name">${c.name}</h3>
          <p class="card-nick">${c.nickname}</p>
        </div>
        <dl class="facts">
          <dt>Position</dt><dd>${c.role}</dd>
          <dt>Bounty</dt><dd class="bounty-val">฿ ${formatBerries(c.bounty)}</dd>
          <dt>Dream</dt><dd>${c.dream}</dd>
          <dt>Devil Fruit</dt><dd>${c.devilFruit}</dd>
          <dt>Haki</dt><dd>${c.haki.join(", ")}</dd>
          <dt>Style</dt><dd>${c.fightingStyle}</dd>
        </dl>
        <p class="card-bio">${c.description}</p>
        <button type="button" class="btn btn-outline btn-small" data-open="${c.id}">View Details</button>
      </div>
    </article>`;
}

/** Draws a list of characters into the grid (defaults to the filtered list). */
function renderCharacters(list = getVisibleCharacters(), immediate = false) {
  const grid = $("#characterGrid");
  grid.innerHTML = list.map(characterCardHTML).join("");
  $("#noResults").hidden = list.length > 0;
  $("#resultCount").textContent = list.length
    ? `Showing ${list.length} of ${strawHats.length} pirates`
    : "";
  observeReveals(grid, immediate);
}

function getVisibleCharacters() {
  const q = state.query.trim().toLowerCase();
  return strawHats.filter((c) => {
    const roleOk = state.filter === "All" || c.role === state.filter;
    const text = [c.name, c.nickname, c.role, c.devilFruit, c.dream, c.fightingStyle].join(" ").toLowerCase();
    return roleOk && (!q || text.includes(q));
  });
}

function filterCharacters(role) {
  state.filter = role;
  $$("#roleFilters .chip").forEach((b) => {
    const on = b.dataset.filter === role;
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-pressed", on);
  });
  renderCharacters(getVisibleCharacters(), true);
}

function searchCharacters(query) {
  state.query = query;
  renderCharacters(getVisibleCharacters(), true);
}

/* ---- Modal ---- */
let lastFocused = null;
function openCharacterModal(id) {
  const c = byId[id];
  if (!c) return;
  lastFocused = document.activeElement;
  const modal = $("#characterModal");
  const dialog = $(".modal-dialog", modal);
  dialog.style.setProperty("--c", c.color);
  $("#modalBody").innerHTML = `
    <div class="modal-media">${charImg(c, "", false)}</div>
    <div class="modal-info" style="--c:${c.color}">
      <header>
        <h3 class="modal-name" id="modalName">${c.name}</h3>
        <p class="modal-nick">${c.nickname}</p>
        <span class="modal-role">${c.role}</span>
      </header>
      <div class="stat-tiles">
        <div class="tile"><span>Birthday</span><strong>${c.birthday}</strong></div>
        <div class="tile"><span>Age</span><strong>${c.age}</strong></div>
        <div class="tile"><span>Height</span><strong>${c.height}</strong></div>
        <div class="tile tile--wide"><span>Bounty</span><strong>฿ ${formatBerries(c.bounty)}</strong></div>
      </div>
      <div class="info-block"><h4>Devil Fruit</h4><p>${c.devilFruit}</p></div>
      <div class="info-block"><h4>Haki</h4><div class="tag-list">${c.haki.map((h) => `<span class="tag${h.startsWith("None") ? " tag--muted" : ""}">${h}</span>`).join("")}</div></div>
      <div class="info-block"><h4>Fighting Style</h4><p>${c.fightingStyle}</p></div>
      <div class="info-block"><h4>Weapons</h4><p>${c.weapons}</p></div>
      <div class="info-block"><h4>Personality</h4><p>${c.personality}</p></div>
      <div class="info-block"><h4>Background</h4><p>${c.background}</p></div>
      <div class="dream-callout"><small style="display:block;font-family:var(--font-body);font-size:.8rem;opacity:.75;font-weight:600">Dream</small>${c.dream}</div>
      <div class="info-block"><h4>Major Achievements</h4><ul>${c.achievements.map((a) => `<li>${a}</li>`).join("")}</ul></div>
    </div>`;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  dialog.scrollTop = 0;
  requestAnimationFrame(() => requestAnimationFrame(() => {
    modal.classList.add("open");
    $("#modalClose").focus({ preventScroll: true });
  }));
}

function closeCharacterModal() {
  const modal = $("#characterModal");
  if (modal.hidden) return;
  modal.classList.remove("open");
  document.body.classList.remove("modal-open");
  const done = () => { modal.hidden = true; if (lastFocused) lastFocused.focus({ preventScroll: true }); };
  if (reduceMotion) done(); else setTimeout(done, 320);
}

function trapFocus(e) {
  const modal = $("#characterModal");
  if (modal.hidden || e.key !== "Tab") return;
  const focusables = $$("button, [href], input, [tabindex]:not([tabindex='-1'])", modal).filter((el) => !el.disabled);
  if (!focusables.length) return;
  const first = focusables[0], last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

/* ------------------------------------------------------------------ *
 * 4. BOUNTIES
 * ------------------------------------------------------------------ */
function sortedForMode(mode) {
  const list = [...strawHats];
  if (mode === "high") list.sort((a, b) => b.bounty - a.bounty);
  if (mode === "low") list.sort((a, b) => a.bounty - b.bounty);
  return list;
}

function posterHTML(c, rank, i) {
  return `
    <article class="poster reveal" data-id="${c.id}" style="--i:${i % 5}">
      <span class="poster-rank">#${rank}</span>
      <div class="poster-wanted">WANTED</div>
      <div class="poster-frame">${charImg(c)}</div>
      <h3 class="poster-name">${c.name}</h3>
      <p class="poster-doa">DEAD OR ALIVE</p>
      <p class="poster-amount"><small>฿</small>${formatBerries(c.bounty)}</p>
    </article>`;
}

function renderBounties(mode = state.sort) {
  const grid = $("#bountyGrid");
  grid.innerHTML = sortedForMode(mode).map((c, i) => posterHTML(c, i + 1, i)).join("");
  observeReveals(grid);
}

/** Re-orders existing posters and animates them with a FLIP transition. */
function sortBounties(mode) {
  state.sort = mode;
  $$("#bountySort .chip").forEach((b) => {
    const on = b.dataset.sort === mode;
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-pressed", on);
  });
  const grid = $("#bountyGrid");
  const cards = $$(".poster", grid);
  const first = new Map(cards.map((el) => [el.dataset.id, el.getBoundingClientRect()]));
  const map = new Map(cards.map((el) => [el.dataset.id, el]));
  sortedForMode(mode).forEach((c, i) => {
    const el = map.get(c.id);
    $(".poster-rank", el).textContent = "#" + (i + 1);
    grid.appendChild(el);
  });
  if (reduceMotion || !("animate" in Element.prototype)) return;
  cards.forEach((el) => {
    const f = first.get(el.dataset.id), l = el.getBoundingClientRect();
    const dx = f.left - l.left, dy = f.top - l.top;
    if (dx || dy) {
      el.animate(
        [{ transform: `translate(${dx}px, ${dy}px) scale(.94)` }, { transform: "none" }],
        { duration: 650, easing: "cubic-bezier(.2,.8,.2,1)" }
      );
    }
  });
}

/* ------------------------------------------------------------------ *
 * 5. SHIPS
 * ------------------------------------------------------------------ */
function renderShips() {
  const s = shipsData.sunny;
  $("#sunnyFeature").innerHTML = `
    ${shipArt("sunny")}
    <div class="ship-info">
      <h3>${s.name}</h3>
      <p>${s.overview}</p>
      <dl class="spec-list">
        <dt>Ship name</dt><dd>${s.name}</dd>
        <dt>Type</dt><dd>${s.type}</dd>
        <dt>Designer</dt><dd>${s.designer}</dd>
        <dt>Built from</dt><dd>${s.material}</dd>
        <dt>Crew</dt><dd>${s.crew}</dd>
        <dt>Figurehead</dt><dd>${s.figurehead}</dd>
      </dl>
      <div class="ship-cols">
        <div class="info-block"><h4>Special Features</h4><ul>${s.features.map((f) => `<li>${f}</li>`).join("")}</ul></div>
        <div class="info-block"><h4>Weapons</h4><ul>${s.weapons.map((f) => `<li>${f}</li>`).join("")}</ul></div>
      </div>
      <div class="info-block"><h4>History</h4><p>${s.history}</p></div>
    </div>`;

  $("#shipCompare").innerHTML = ["merry", "sunny"].map((key) => {
    const x = shipsData[key];
    return `
    <article class="ship-card reveal" data-ship="${key}">
      ${shipArt(key)}
      <div class="ship-card-body">
        <h4>${x.name}</h4>
        <div class="tabs" role="tablist" aria-label="${x.name} details">
          <button type="button" class="chip is-active" role="tab" aria-selected="true" data-tab="overview">Overview</button>
          <button type="button" class="chip" role="tab" aria-selected="false" data-tab="features">Features</button>
          <button type="button" class="chip" role="tab" aria-selected="false" data-tab="history">History</button>
        </div>
        <div class="tab-panel" data-panel="overview" role="tabpanel">
          <p>${x.overview}</p>
          <dl class="spec-list" style="margin-top:1rem">
            <dt>Type</dt><dd>${x.type}</dd>
            <dt>Builder</dt><dd>${x.designer}</dd>
            <dt>Material</dt><dd>${x.material}</dd>
            <dt>Figurehead</dt><dd>${x.figurehead}</dd>
            <dt>Era</dt><dd>${x.era}</dd>
          </dl>
        </div>
        <div class="tab-panel" data-panel="features" role="tabpanel" hidden>
          <div class="info-block"><h4>Special Features</h4><ul>${x.features.map((f) => `<li>${f}</li>`).join("")}</ul></div>
          <div class="info-block" style="margin-top:1rem"><h4>Weapons</h4><ul>${x.weapons.map((f) => `<li>${f}</li>`).join("")}</ul></div>
        </div>
        <div class="tab-panel" data-panel="history" role="tabpanel" hidden><p>${x.history}</p><p style="margin-top:.8rem"><strong>Crew aboard:</strong> ${x.crew}</p></div>
      </div>
    </article>`;
  }).join("");
}

function switchShipTab(btn) {
  const card = btn.closest(".ship-card");
  $$(".tabs .chip", card).forEach((b) => {
    const on = b === btn;
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-selected", on);
  });
  $$(".tab-panel", card).forEach((p) => { p.hidden = p.dataset.panel !== btn.dataset.tab; });
}

/* ------------------------------------------------------------------ *
 * 6. JOURNEY & SAGAS
 * ------------------------------------------------------------------ */
const listHTML = (arr) => `<ul>${arr.map((x) => `<li>${x}</li>`).join("")}</ul>`;

function renderJourney() {
  $("#timeline").innerHTML = journeyArcs.map((a, i) => `
    <li class="arc-item reveal" data-arc="${a.id}" style="--i:${i % 3}">
      <span class="arc-dot" aria-hidden="true"></span>
      <div class="arc-card">
        <button type="button" class="arc-toggle" id="btn-${a.id}" aria-expanded="false" aria-controls="panel-${a.id}">
          <span><span class="arc-title">${a.name}</span><span class="arc-loc">${a.location}</span></span>
          <svg class="arc-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="arc-panel" id="panel-${a.id}" role="region" aria-labelledby="btn-${a.id}">
          <div class="arc-panel-inner">
            <div class="arc-content">
              <p>${a.desc}</p>
              <div class="arc-two">
                <div class="info-block"><h4>Important Events</h4>${listHTML(a.events)}</div>
                <div class="info-block"><h4>Crew Developments</h4>${listHTML(a.dev)}</div>
              </div>
              <div class="info-block"><h4>Major Enemies</h4><div class="tag-list">${a.enemies.map((e) => `<span class="tag" style="--c:#d2352f">${e}</span>`).join("")}</div></div>
            </div>
          </div>
        </div>
      </div>
    </li>`).join("");
  observeReveals($("#timeline"));
  setActiveArc(0);
}

function setActiveArc(index, toggle = false) {
  const items = $$(".arc-item", $("#timeline"));
  const already = items[index].classList.contains("active");
  const next = toggle && already ? -1 : index;
  items.forEach((el, i) => {
    el.classList.toggle("active", i === next);
    el.classList.toggle("passed", next > -1 && i < next);
    $(".arc-toggle", el).setAttribute("aria-expanded", i === next);
  });
  return next;
}

/** Opens an arc by name (used by the Sagas section). */
function openArc(name) {
  const idx = journeyArcs.findIndex((a) => a.name.toLowerCase() === name.toLowerCase());
  if (idx < 0) return;
  setActiveArc(idx);
  const el = $$(".arc-item", $("#timeline"))[idx];
  $("#journey").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  setTimeout(() => el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" }), reduceMotion ? 0 : 650);
}

function renderSagas() {
  $("#sagaGrid").innerHTML = sagas.map((s, i) => `
    <article class="saga-card reveal" style="--i:${i % 3}">
      <h3>${s.name}</h3>
      <p>${s.note}</p>
      <div class="chips">${s.arcs.map((a) => `<button type="button" class="chip" data-arc="${a}">${a}</button>`).join("")}</div>
    </article>`).join("");
  observeReveals($("#sagaGrid"));
}

/* ------------------------------------------------------------------ *
 * 7. DEVIL FRUITS
 * ------------------------------------------------------------------ */
function renderDevilFruitFilters() {
  const cats = ["All", "Straw Hats", "Paramecia", "Zoan", "Mythical Zoan", "Logia"];
  $("#fruitFilters").innerHTML = cats.map((c) =>
    `<button type="button" class="chip${c === "All" ? " is-active" : ""}" data-fruit="${c}" aria-pressed="${c === "All"}">${c}</button>`).join("");
}

function renderDevilFruits(category = "All") {
  const list = devilFruits
    .filter((f) => category === "All" || (category === "Straw Hats" ? f.straw : f.type === category))
    .sort((a, b) => Number(!!b.straw) - Number(!!a.straw));
  const grid = $("#fruitGrid");
  grid.innerHTML = list.map((f, i) => `
    <article class="fruit-card reveal type-${f.type.split(" ")[0]}${f.straw ? " is-straw" : ""}" style="--i:${i % 4}">
      ${f.straw ? '<span class="straw-flag">Straw Hat</span>' : ""}
      <div class="fruit-top"><h3 class="fruit-name">${f.name}</h3></div>
      <div><span class="fruit-type">${f.type}</span></div>
      <p class="fruit-user">User: ${f.user}</p>
      ${listHTML(f.abilities)}
      <p>${f.desc}</p>
    </article>`).join("");
  observeReveals(grid, true);
}

function filterDevilFruits(category) {
  $$("#fruitFilters .chip").forEach((b) => {
    const on = b.dataset.fruit === category;
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-pressed", on);
  });
  renderDevilFruits(category);
}

/* ------------------------------------------------------------------ *
 * 8. HAKI
 * ------------------------------------------------------------------ */
let activeHaki = 0;
function renderHakiTabs() {
  $("#hakiTabs").innerHTML = hakiData.map((h, i) =>
    `<button type="button" class="haki-tab ${h.css}" role="tab" id="haki-tab-${i}" aria-selected="${i === 0}" aria-controls="hakiPanel" tabindex="${i === 0 ? 0 : -1}" data-haki="${i}">${h.icon} ${h.name}</button>`).join("");
}

function showHaki(index) {
  activeHaki = index;
  const h = hakiData[index];
  $$("#hakiTabs .haki-tab").forEach((b, i) => {
    b.setAttribute("aria-selected", i === index);
    b.tabIndex = i === index ? 0 : -1;
  });
  const panel = $("#hakiPanel");
  panel.className = "haki-panel " + h.css;
  panel.setAttribute("aria-labelledby", "haki-tab-" + index);
  panel.innerHTML = `
    <div class="haki-orb" aria-hidden="true"><span class="ring"></span><span class="ring"></span><span class="ring"></span><span class="core">${h.icon}</span></div>
    <div class="haki-text">
      <h3>${h.name}</h3>
      <div class="info-block"><h4>What it is</h4><p>${h.what}</p></div>
      <div class="info-block"><h4>Users</h4><div class="tag-list">${h.users.map((u) => `<span class="tag">${u}</span>`).join("")}</div></div>
      <div class="info-block"><h4>Advanced ${h.name.replace(" Haki", "")}</h4><ul>${h.advanced.map((a) => `<li><strong>${a.t}:</strong> ${a.d}</li>`).join("")}</ul></div>
      <div class="info-block"><h4>Power Indicators</h4>
        <div class="haki-meters">${h.meters.map(([n, v]) => `
          <div class="meter-row"><span>${n}</span><div class="meter" role="meter" aria-valuenow="${v}" aria-valuemin="0" aria-valuemax="100" aria-label="${n} ${h.name} mastery"><div class="meter-fill" data-w="${v}"></div></div><span class="meter-val">${v}%</span></div>`).join("")}
        </div>
        <p class="haki-note">Fan-estimated mastery, for fun only.</p>
      </div>
    </div>`;
  requestAnimationFrame(() => requestAnimationFrame(() => {
    $$(".meter-fill", panel).forEach((f) => { f.style.width = f.dataset.w + "%"; });
  }));
}

/* ------------------------------------------------------------------ *
 * 9. DREAMS
 * ------------------------------------------------------------------ */
let dreamIndex = 0, dreamTimer = null;
function renderDreamPicker() {
  $("#dreamPicker").innerHTML = strawHats.map((c, i) =>
    `<button type="button" class="dream-dot" style="--c:${c.color}" data-dream="${i}" aria-label="Show ${c.name}'s dream" aria-pressed="${i === 0}">${charImg(c, "", false)}</button>`).join("");
}

function showDream(index) {
  dreamIndex = index;
  const c = strawHats[index];
  $("#dreams").style.setProperty("--dc", c.color);
  $$("#dreamPicker .dream-dot").forEach((b, i) => b.setAttribute("aria-pressed", i === index));
  const stage = $("#dreamStage");
  stage.innerHTML = `
    <div class="dream-portrait">${charImg(c, "", false)}</div>
    <div class="dream-copy">
      <p class="dream-who">${c.name}</p>
      <p class="dream-text">${c.dream}</p>
      <p class="dream-why">${c.dreamNote}</p>
    </div>`;
  stage.classList.remove("swap");
  void stage.offsetWidth;
  stage.classList.add("swap");
}

function startDreamRotation() {
  stopDreamRotation();
  if (reduceMotion) return;
  dreamTimer = setInterval(() => { if (!document.hidden) showDream((dreamIndex + 1) % strawHats.length); }, 7000);
}
function stopDreamRotation() { clearInterval(dreamTimer); dreamTimer = null; }

/* ------------------------------------------------------------------ *
 * 10. STATS COUNTERS
 * ------------------------------------------------------------------ */
function animateCounters() {
  const nums = $$(".stat-num");
  const section = $("#stats");
  if (!section) return; // stats section was removed from the page
  let started = false;

  // Timer-based (not requestAnimationFrame) so it also runs in throttled previews
  const run = (el) => {
    const target = Number(el.dataset.count), suffix = el.dataset.suffix || "";
    if (reduceMotion) { el.textContent = formatBerries(target) + suffix; return; }
    const duration = 1900, start = Date.now();
    const timer = setInterval(() => {
      const p = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = formatBerries(Math.round(target * eased)) + (p === 1 ? suffix : "");
      if (p === 1) clearInterval(timer);
    }, 30);
  };

  const startAll = () => {
    if (started) return;
    started = true;
    nums.forEach(run);
    window.removeEventListener("scroll", check);
  };
  const inView = () => {
    const r = section.getBoundingClientRect();
    return r.top < window.innerHeight * 0.9 && r.bottom > 0;
  };
  function check() { if (inView()) startAll(); }

  // Three independent triggers: observer, scroll check, and a check after load
  if ("IntersectionObserver" in window) {
    new IntersectionObserver((entries) => {
      if (entries.some((en) => en.isIntersecting)) startAll();
    }, { threshold: 0.05 }).observe(section);
  }
  window.addEventListener("scroll", check, { passive: true });
  window.addEventListener("load", () => setTimeout(check, 300));
  check();
}

/* ------------------------------------------------------------------ *
 * 11. NAV, THEME, SCROLL EFFECTS, HERO ATMOSPHERE
 * ------------------------------------------------------------------ */
function setupNav() {
  const toggle = $("#navToggle"), links = $("#navLinks");
  $$("#navLinks li").forEach((li, i) => li.style.setProperty("--n", i));
  const setOpen = (open) => {
    links.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  toggle.addEventListener("click", () => setOpen(!links.classList.contains("open")));
  links.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
  document.addEventListener("click", (e) => {
    if (links.classList.contains("open") && !e.target.closest("#navLinks, #navToggle")) setOpen(false);
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && links.classList.contains("open")) { setOpen(false); toggle.focus(); } });
  window.matchMedia("(min-width: 1181px)").addEventListener("change", (e) => { if (e.matches) setOpen(false); });

  // Scroll spy
  const sections = $$("main section[id]");
  const map = new Map($$("#navLinks a").map((a) => [a.getAttribute("href").slice(1), a]));
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          map.forEach((a) => a.classList.remove("active"));
          const a = map.get(en.target.id);
          if (a) a.classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => spy.observe(s));
  }
}

function setupTheme() {
  const btn = $("#themeToggle"), icon = $(".theme-icon", btn), root = document.documentElement;
  const apply = (theme) => {
    root.setAttribute("data-theme", theme);
    icon.textContent = theme === "dark" ? "☾" : "☀";
    btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.content = theme === "dark" ? "#050b17" : "#f6edd8";
  };
  let saved = null;
  try { saved = localStorage.getItem("op-theme"); } catch (_) { /* storage may be unavailable */ }
  apply(saved === "light" ? "light" : "dark");
  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    apply(next);
    try { localStorage.setItem("op-theme", next); } catch (_) { /* ignore */ }
  });
}

function setupScrollEffects() {
  const header = $("#siteHeader"), bar = $("#scrollProgress"), top = $("#backToTop");
  let ticking = false;
  const update = () => {
    const y = window.scrollY, max = document.documentElement.scrollHeight - window.innerHeight;
    header.classList.toggle("scrolled", y > 10);
    bar.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
    top.classList.toggle("show", y > 700);
    ticking = false;
  };
  window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  window.addEventListener("resize", update);
  top.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
  update();
}

function createHeroAtmosphere() {
  if (reduceMotion) return;
  const rand = (a, b) => a + Math.random() * (b - a);
  const clouds = $("#heroClouds");
  for (let i = 0; i < 5; i++) {
    const c = document.createElement("span");
    c.className = "cloud";
    c.style.cssText = `top:${rand(8, 46)}%;width:${rand(160, 340)}px;height:${rand(24, 46)}px;--d:${rand(60, 110)}s;--delay:${-rand(0, 90)}s;opacity:${rand(.35, .7)}`;
    clouds.appendChild(c);
  }
  const wrap = $("#heroParticles");
  const kinds = ["p-spark", "p-spark", "p-bubble", "p-bubble", "p-map"];
  const count = window.innerWidth < 600 ? 16 : 30;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    const kind = kinds[i % kinds.length];
    p.className = `particle ${kind}`;
    p.style.cssText = `left:${rand(0, 100)}%;--s:${kind === "p-map" ? rand(10, 16) : rand(3, 9)}px;--d:${rand(11, 24)}s;--delay:${-rand(0, 20)}s;--x:${rand(-80, 80)}px;--r:${rand(-240, 240)}deg;--o:${rand(.35, .9)}`;
    frag.appendChild(p);
  }
  wrap.appendChild(frag);
}

/* ------------------------------------------------------------------ *
 * 12. INIT & EVENT WIRING
 * ------------------------------------------------------------------ */
function init() {
  setupReveal(); // create the observer first so dynamic cards are revealed on scroll
  // Render dynamic content
  renderRoles();
  renderFilterButtons();
  renderCharacters(strawHats);
  renderBounties("high");
  renderShips();
  renderJourney();
  renderSagas();
  renderDevilFruitFilters();
  renderDevilFruits("All");
  renderHakiTabs();
  showHaki(0);
  renderDreamPicker();
  showDream(0);

  $("#imageFileList").innerHTML = strawHats.map((c) => `<code>${c.image.split("/")[1]}</code>`).join("");

  // Character grid: open modal (event delegation)
  $("#characterGrid").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-open]");
    if (btn) openCharacterModal(btn.dataset.open);
  });
  $("#roleFilters").addEventListener("click", (e) => {
    const b = e.target.closest("[data-filter]");
    if (b) filterCharacters(b.dataset.filter);
  });
  $("#characterSearch").addEventListener("input", (e) => searchCharacters(e.target.value));

  // Modal
  $("#modalClose").addEventListener("click", closeCharacterModal);
  $("#characterModal").addEventListener("click", (e) => { if (e.target.id === "characterModal") closeCharacterModal(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCharacterModal();
    trapFocus(e);
  });

  // Bounty sorting
  $("#bountySort").addEventListener("click", (e) => {
    const b = e.target.closest("[data-sort]");
    if (b && b.dataset.sort !== state.sort) sortBounties(b.dataset.sort);
  });

  // Ships
  $("#shipCompare").addEventListener("click", (e) => {
    const b = e.target.closest("[data-tab]");
    if (b) switchShipTab(b);
  });

  // Timeline & sagas
  $("#timeline").addEventListener("click", (e) => {
    const btn = e.target.closest(".arc-toggle");
    if (!btn) return;
    const items = $$(".arc-item", $("#timeline"));
    const item = btn.closest(".arc-item");
    const next = setActiveArc(items.indexOf(item), true);
    if (next > -1 && !reduceMotion) {
      setTimeout(() => {
        if (item.getBoundingClientRect().top < 80) item.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 520);
    }
  });
  $("#sagaGrid").addEventListener("click", (e) => {
    const b = e.target.closest("[data-arc]");
    if (b) openArc(b.dataset.arc);
  });

  // Devil fruits
  $("#fruitFilters").addEventListener("click", (e) => {
    const b = e.target.closest("[data-fruit]");
    if (b) filterDevilFruits(b.dataset.fruit);
  });

  // Haki tabs (click + arrow keys)
  $("#hakiTabs").addEventListener("click", (e) => {
    const b = e.target.closest("[data-haki]");
    if (b) showHaki(Number(b.dataset.haki));
  });
  $("#hakiTabs").addEventListener("keydown", (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const n = hakiData.length;
    const next = (activeHaki + (e.key === "ArrowRight" ? 1 : n - 1)) % n;
    showHaki(next);
    $("#haki-tab-" + next).focus();
  });

  // Dreams
  $("#dreamPicker").addEventListener("click", (e) => {
    const b = e.target.closest("[data-dream]");
    if (!b) return;
    showDream(Number(b.dataset.dream));
    startDreamRotation();
  });
  const dreamSection = $("#dreams");
  ["mouseenter", "focusin"].forEach((ev) => dreamSection.addEventListener(ev, stopDreamRotation));
  ["mouseleave", "focusout"].forEach((ev) => dreamSection.addEventListener(ev, startDreamRotation));
  if ("IntersectionObserver" in window) {
    new IntersectionObserver((entries) => {
      entries.forEach((en) => (en.isIntersecting ? startDreamRotation() : stopDreamRotation()));
    }, { threshold: 0.3 }).observe(dreamSection);
  }

  // Site-wide behaviors
  observeReveals(document);
  setupNav();
  setupTheme();
  setupScrollEffects();
  animateCounters();
  createHeroAtmosphere();

  // Safety net: mark cached/instant images as loaded
  $$("img.img-fade").forEach((img) => { if (img.complete && img.naturalWidth) img.classList.add("loaded"); });
}

document.addEventListener("DOMContentLoaded", init);
