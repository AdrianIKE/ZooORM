var DataTypes = require("sequelize").DataTypes;
var _animals = require("./animals");
var _cities = require("./cities");
var _continents = require("./continents");
var _countries = require("./countries");
var _refuges = require("./refuges");
var _species = require("./species");
var _zoos = require("./zoos");


  zoos.belongsTo(cities, { as: "city", foreignKey: "city_id"});
  cities.hasMany(zoos, { as: "zoos", foreignKey: "city_id"});
  animals.belongsTo(continents, { as: "continent", foreignKey: "continent_id"});
  continents.hasMany(animals, { as: "animals", foreignKey: "continent_id"});
  countries.belongsTo(continents, { as: "continent", foreignKey: "continent_id"});
  continents.hasMany(countries, { as: "countries", foreignKey: "continent_id"});
  cities.belongsTo(countries, { as: "country", foreignKey: "country_id"});
  countries.hasMany(cities, { as: "cities", foreignKey: "country_id"});
  animals.belongsTo(species, { as: "specie", foreignKey: "specie_id"});
  species.hasMany(animals, { as: "animals", foreignKey: "specie_id"});
  refuges.belongsTo(species, { as: "specie", foreignKey: "specie_id"});
  species.hasMany(refuges, { as: "refuges", foreignKey: "specie_id"});
  refuges.belongsTo(zoos, { as: "zoo", foreignKey: "zoo_id"});
  zoos.hasMany(refuges, { as: "refuges", foreignKey: "zoo_id"});
