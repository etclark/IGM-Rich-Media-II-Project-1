const query = require('querystring');
// Store waifus purely in memory
const waifus = {
  Palutena: {
    name: 'Palutena', series: 'Kid Icarus', description: 'Palutena is the beautiful goddess of light, the rightful ruler of Skyworld, the patron deity of Pit and the Centurions, and the guardian of humans. She is kindhearted and benevolent.', rarity: 'Legendary', url: 'https://i.kym-cdn.com/photos/images/original/001/499/324/904',
  },
  Erza: {
    name: 'Erza Scarlet', series: 'Fairy Tail', description: "She's scary.", rarity: 'Epic', url: 'https://vignette.wikia.nocookie.net/five-world-war/images/0/01/The_seventh_guild_master.png/revision/latest?cb=20181128002553',
  },
  Mai: {
    name: 'Mai Sakurajima', series: 'Rascal Does Not Dream of Bunny Girl Senpai', description: 'A 3rd year student at Minegahara High School. She is a well-known, famous actress who is currently on hiatus. Because her life had always revolved around her work in entertainment, she remains isolated at school. She is serious and polite but has a strong will.', rarity: 'Epic', url: 'https://66.media.tumblr.com/30edaf5bb261ea41a524becdddf19818/tumblr_pg370fjvVV1qicnkn_1280.jpg',
  },
  Tatsumaki: {
    name: 'Tatsumaki', series: 'One Punch Man', description: 'Tatsumaki, also known by her hero alias Tornado of Terror, is the S-Class rank 2 professional hero of the Hero Association.', rarity: 'Epic', url: 'https://vignette.wikia.nocookie.net/onepunchman/images/2/25/Tatsumaki_anime.jpg/revision/latest?cb=20160106124816&path-prefix=es',
  },
  Lucina: {
    name: 'Lucina', series: 'Fire Emblem', description: 'The daughter of Chrom and gifted with the mark of Naga, known as the Brand of the Exalt, on her left eye, like in the present timeline, future Lucina was born to Chrom and his wife after the Ylisse-Plegia War.', rarity: 'Rare', url: 'https://vignette.wikia.nocookie.net/fireemblem/images/d/d0/Lucina_official_art.png/revision/latest?cb=20160427125411',
  },
  Samus: {
    name: 'Zero Suit Samus', series: 'Metroid', description: 'Samus Aran is an ex-soldier of the Galactic Federation who became a galactic bounty hunter, usually fitted with a powered exoskeleton that is equipped with weapons such as directed-energy weapons and missiles.', rarity: 'Rare', url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cd985853-fef2-45a9-a185-c8f5bd4db272/d9ngeca-58ee77e7-3a7f-466f-9ab9-c9a5cb6b823d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NkOTg1ODUzLWZlZjItNDVhOS1hMTg1LWM4ZjViZDRkYjI3MlwvZDluZ2VjYS01OGVlNzdlNy0zYTdmLTQ2NmYtOWFiOS1jOWE1Y2I2YjgyM2QucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Ofzsxa5ZLUa3tTh0iH_alG3qPg5xHchhkCOusFHEMZM',
  },
  Edelgard: {
    name: 'Edelgard', series: 'Fire Emblem', description: 'Edelgard von Hresvelg is one of the three main characters, alongside Dimitri and Claude, appearing in Fire Emblem: Three Houses. She is the heiress apparent to the Adrestian Empire and the leader of the Black Eagles house at the Officers Academy.', rarity: 'Rare', url: 'https://fireemblem.gamepress.gg/sites/fireemblem/files/2019-07/Edelgarde_Neutral.png',
  },
  Holo: {
    name: 'Holo the Wise Wolf', series: 'Spice and Wolf', description: 'Holo is a wolf harvest deity that was bound by a promise to the town of Pasloe for several centuries, ensuring a bountiful harvest of wheat for the residents.', rarity: 'Rare', url: 'https://cdn.myanimelist.net/images/characters/15/319492.jpg',
  },
  Aqua: {
    name: 'Aqua', series: 'KonoSuba', description: 'Goddess of being useless', rarity: 'Common', url: 'https://pbs.twimg.com/profile_images/693592796268113921/SJ_z2vwm_400x400.jpg',
  },
  Lucy: {
    name: 'Lucy Heartfilia', series: 'Fairy Tail', description: 'Lucy Heartfilia is a Celestial Spirit Mage, a member of the Fairy Tail Guild and one of the founding members of Team Natsu. She is a member of a once extremely wealthy family who ran away from home to join Fairy Tail.', rarity: 'Common', url: 'https://i.redd.it/7o9q4uqasbv11.jpg',
  },
  Asuna: {
    name: 'Asuna', series: 'Sword Art Online', description: 'Asuna Yuuki is mononymously more commonly known as just Asuna, her player name in the eponymous video game which the novels are set in. Asuna appears as the lover of Kirito; as well as the female lead, she is in the novels a sub-leader of the Knights of the Blood Oath guild, notable for being the strongest guild in Aincrad.', rarity: 'Common', url: 'https://vignette.wikia.nocookie.net/animesao/images/d/da/I0VX37O3WfTm0.jpg/revision/latest?cb=20140909072737',
  },
  Raphtalia: {
    name: 'Raphtalia', series: 'The Rising of Shield Hero', description: "Raphtalia is a Tanuki-type Demi-Human who was the first real member of the Shield Hero's party after he purchased her as a slave. She is now the Katana Hero.", rarity: 'Common', url: 'https://i.imgur.com/r6nLiuw.jpg',
  },
  Jade: {
    name: 'Jade', series: 'Dragon Quest', description: 'Jade is a martial artist, she fights with her bare hands, claws, and spears, while also being highly geared towards charming the enemy with her sex appeal.', rarity: 'Common', url: 'https://i.pinimg.com/originals/aa/c8/d0/aac8d0a7d82b323831135c0ef730386d.jpg',
  },
  Pyra: {
    name: 'Pyra', series: 'Xenoblade', description: 'Pyra is one of the two deuteragonists, alongside Mythra, in Xenoblade Chronicles 2. She is the Aegis, a Legendary Blade who can grant tremendous fire-elemental power to her Driver, Rex.', rarity: 'Common', url: 'https://vignette.wikia.nocookie.net/xenoblade/images/e/ee/Pyra_pic.png/revision/latest?cb=20170712045817',
  },
};
// respond with JSON
const respond = (request, response, status, object, type) => {
  response.writeHead(status, { 'Content-Type': type });
  response.write(JSON.stringify(object));
  response.end();
};

const respondMeta = (request, response, status) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.end();
};

// Checks the accepted type and then responds accordingly
const checkType = (request, response, responseJSON, status, acceptedTypes) => {
  // Return XML
  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<reponse>';
    responseXML += `<message>${responseJSON.message}</message><br>`;
    if (responseJSON.id) {
      responseXML += `<id>${responseJSON.id}</id>`;
    }
    responseXML += '</response>';

    return respond(request, response, status, responseXML, 'text/xml');
  }
  // Return JSON
  return respond(request, response, status, responseJSON, 'application/json');
};

// Add Waifu
const addWaifu = (request, response, acceptedTypes) => {
  const body = [];

  request.on('error', (err) => {
    console.log(err);
    response.statusCode = 400;
    response.end();
  });

  request.on('data', (chunk) => {
    body.push(chunk);
  });

  request.on('end', () => {
    const bodyString = Buffer.concat(body).toString();
    const bodyParams = query.parse(bodyString);

    const responseJSON = {
      message: 'You are missing parameters',
    };

    if (!bodyParams.name || !bodyParams.series || !bodyParams.description) {
      responseJSON.id = 'Bad Request';
      return respond(request, response, 400, responseJSON, 'application/json');
    }

    let responseCode = 201;

    if (waifus[bodyParams.name]) {
      responseCode = 204;
    } else {
      waifus[bodyParams.name] = {};
    }

    waifus[bodyParams.name].name = bodyParams.name;
    waifus[bodyParams.name].series = bodyParams.series;
    waifus[bodyParams.name].description = bodyParams.description;
    waifus[bodyParams.name].rarity = bodyParams.rarity;
    waifus[bodyParams.name].url = bodyParams.url;

    if (responseCode === 201) {
      responseJSON.message = 'Created Successfully';
      responseJSON.id = 'Waifu Added';
      return checkType(request, response, responseJSON, responseCode, acceptedTypes);
    }
    return respondMeta(request, response, responseCode);
  });
};

// Get Waifu
const getWaifu = (request, response, acceptedTypes) => {
  const responseJSON = {
    waifus,
  };
  checkType(request, response, responseJSON, 200, acceptedTypes);
};

const getWaifuMeta = (request, response) => respondMeta(request, response, 200);

// Not Found
const notFound = (request, response, acceptedTypes) => {
  const responseJSON = {
    message: 'The page you are looking for was not found',
    id: 'not found',
  };
  checkType(request, response, responseJSON, 404, acceptedTypes);
};

const notFoundMeta = (request, response) => respondMeta(request, response, 404);

module.exports = {
  addWaifu,
  getWaifu,
  getWaifuMeta,
  notFound,
  notFoundMeta,
};
