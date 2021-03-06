const getMapName = (id) => {
    switch (id) {
        case 0: return 'D-Water';
        case 1: return 'Map 1 Light';
        case 2: return 'Map 1 Dark';
        case 3: return 'D1 [1st floor]';
        case 4: return 'D1 [2nd floor]';
        case 5: return 'Cornwells\' Ruins [1st floor]';
        case 6: return 'Cornwells\' Ruins [2nd floor]';
        case 7: return 'Argilla [1st floor]';
        case 8: return 'Argilla [2nd floor]';
        case 9: return 'D2 [1st floor]';
        case 10: return 'D2 [2nd floor]';
        case 11:return 'D2 [3rd floor]';
        case 12: return 'Cloron\'s Lair [1st floor]';
        case 13: return 'Cloron\'s Lair [2nd floor]';
        case 14: return 'Cloron\'s Lair [3rd floor]';
        case 15: return 'Fantasma Lair [1st floor]';
        case 16: return 'Fantasma Lair [2nd floor]';
        case 17: return 'Fantasma Lair [3rd floor]';
        case 18: return 'Proelium Frontier';
        case 19: return 'Willieoseu';
        case 20: return 'Keuraijen';
        case 21: return 'Maitreian [1st floor]';
        case 22: return 'Maitreian [2nd floor]';
        case 23: return 'Aidion Necria [1st floor]';
        case 24: return 'Aidion Necria [2nd floor]';
        case 25: return 'Elemental Cave';
        case 26: return 'Ruber Chaos [1st floor]';
        case 27: return 'Ruber Chaos [2nd floor]';
        case 28: return 'Map 3 Light';
        case 29: return 'Map 3 Dark';
        case 30: return 'Cantabilian';
        case 31: return 'Faros Lair';
        case 32: return 'Rapioru\'s Labirint';
        case 33: return 'Fedion\'s Lair';
        case 34: return 'Kalamus\'s Lair';
        case 35: return 'Apulune';
        case 36: return 'Iris';
        case 37: return 'Stigma';
        case 38: return 'Aurizen Ruins';
        case 39: return 'Small Stadium';
        case 40: return 'Arena';
        case 41: return 'Jail';
        case 42: return 'Auction House';
        case 43: return 'Pandoris';
        case 44: return 'Ranhaar';
        case 45: return 'Deep Desert 1';
        case 46: return 'Deep Desert 2';
        case 47: return 'Jungle';
        case 48: return 'Cryptic Throne Light';
        case 49: return 'Cryptic Throne Dark';
        case 50: return 'GRB Map';
        case 51: return 'Light Guild House';
        case 52: return 'Dark Guild House';
        case 53: return 'Light Managment';
        case 54: return 'Dark Managment';
        case 55: return 'Sky City 1';
        case 56: return 'Sky City 1';
        case 57: return 'Sky City 2';
        case 58: return 'Caelum Greendieta [3rd floor]';
        case 59: return 'Dung?';
        case 60: return 'Stadium';
        case 61: return 'Stigma ?';
        case 62: return 'Aurizen ?';
        case 63: return 'Dung?';
        case 64: return 'Oblivion';
        case 65: return 'Caleum Sacra 1';
        case 66: return 'Caleum Sacra 1';
        case 67: return 'Caelum Sacra [2nd floor]';
        case 68: return 'Valdemar Regnum';
        case 69: return 'Palaion Regnum';
        case 70: return 'Kanos Illum';
        case 71: return 'Servus Colony';
        case 72: return 'Queen Caput';
        case 73: return 'Dung?';
        case 74: return 'Dung?';
        case 75: return 'Dung?';
        case 76: return 'Dung?';
        case 77: return 'Dung?';
        case 78: return 'Dung?';
        case 79: return 'Dung?';
        case 80: return 'Dung?';
        case 81: return 'Canyon of Greed';
        case 97: return 'Castle of Queen';
        case 103: return 'Ice Valley';
        case 105: return 'Dimension Crack';
        default: return id;
    }
}

module.exports = getMapName;