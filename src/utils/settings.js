let settings = require(ROOT_PATH + '/settings.json');
const fs = require('fs');
const lGet = require('lodash/get');
const lSet = require('lodash/set');

let set = (key, value) => {
    let toReturn = lSet(settings, key, value);
    fs.writeFileSync(ROOT_PATH + '/settings.json', JSON.stringify(toReturn, null, 2))
};

let get = (key) => lGet(settings, key);

let getSettings = () => {
    return settings;
}

module.exports = {
    getSettings, get,
    set
}
