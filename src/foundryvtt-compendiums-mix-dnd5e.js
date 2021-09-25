export const COMPENDIUM_MIX_DND5E_MODULE_NAME = 'foundryvtt-compendiums-mix-dnd5e';

export const i18n = (key) => {
  return game.i18n.localize(key);
};
export const i18nFormat = (key, data = {}) => {
  return game.i18n.format(key, data);
};

/* ------------------------------------ */
/* Initialize module					*/
/* ------------------------------------ */
Hooks.on('init', () => {
  game.settings.register(COMPENDIUM_MIX_DND5E_MODULE_NAME, 'HDhideDD5Compendium', {
    name: 'HDhideDD5Compendium',
    hint: 'HDhideDD5Compendium',
    scope: 'world',
    config: true,
    default: false,
    type: Boolean,
  });

  game.settings.register(COMPENDIUM_MIX_DND5E_MODULE_NAME, 'enableAdditionalSpellSchool', {
    name: 'Enable Spellschool',
    hint: 'Enable additional Spellschool',
    scope: 'world',
    config: true,
    default: false,
    type: Boolean,
  });

  game.settings.register(COMPENDIUM_MIX_DND5E_MODULE_NAME, 'enableAdditionalDamageTypes', {
    name: 'Enable Damage Types',
    hint: 'Enable additional Damage Types',
    scope: 'world',
    config: true,
    default: false,
    type: Boolean,
  });

  game.settings.register(COMPENDIUM_MIX_DND5E_MODULE_NAME, 'enableAdditionalWeaponProperties', {
    name: 'Enable Weapon Properties',
    hint: 'Enable additional Weapon Properties',
    scope: 'world',
    config: true,
    default: false,
    type: Boolean,
  });
});

/* ------------------------------------ */
/* Setup module							*/
/* ------------------------------------ */
Hooks.once('setup', function () {
  // Do anything after initialization but before ready
});

/* ------------------------------------ */
/* When ready							*/
/* ------------------------------------ */
Hooks.once('ready', () => {
  if (game.settings.get(COMPENDIUM_MIX_DND5E_MODULE_NAME, 'enableAdditionalSpellSchool')) {
    // http://kpogl.wdfiles.com/local--files/home:home/module.json
    CONFIG.DND5E.spellSchools['voi'] = 'Void Magic';

    // https://github.com/TheDraggo/DraggosMods
    CONFIG.DND5E.spellSchools['chr'] = 'Chronomancy';
  }

  if (game.settings.get(COMPENDIUM_MIX_DND5E_MODULE_NAME, 'enableAdditionalDamageTypes')) {
    // https://github.com/TheDraggo/DraggosMods
    CONFIG.DND5E.damageTypes['vile'] = 'Vile';
  }

  if (game.settings.get(COMPENDIUM_MIX_DND5E_MODULE_NAME, 'enableAdditionalWeaponProperties')) {
    // https://github.com/TheDraggo/GrimHollowWeaponProperties

    CONFIG.DND5E.weaponProperties['armorpiercing'] = i18n('DND5E.WeaponPropertiesArmorpiercing');
    CONFIG.DND5E.weaponProperties['blackpowder'] = i18n('DND5E.WeaponPropertiesBlackpowder');
    CONFIG.DND5E.weaponProperties['brutal'] = i18n('DND5E.WeaponPropertiesBrutal');
    CONFIG.DND5E.weaponProperties['cumbersome'] = i18n('DND5E.WeaponPropertiesCumbersome');
    CONFIG.DND5E.weaponProperties['defending'] = i18n('DND5E.WeaponPropertiesDefending');
    CONFIG.DND5E.weaponProperties['disarming'] = i18n('DND5E.WeaponPropertiesDisarming');
    CONFIG.DND5E.weaponProperties['double'] = i18n('DND5E.WeaponPropertiesDouble');
    CONFIG.DND5E.weaponProperties['entangling'] = i18n('DND5E.WeaponPropertiesEntangling');
    CONFIG.DND5E.weaponProperties['guard'] = i18n('DND5E.WeaponPropertiesGuard');
    CONFIG.DND5E.weaponProperties['hafted'] = i18n('DND5E.WeaponPropertiesHafted');
    CONFIG.DND5E.weaponProperties['magazine'] = i18n('DND5E.WeaponPropertiesMagazine');
    CONFIG.DND5E.weaponProperties['momentum'] = i18n('DND5E.WeaponPropertiesMomentum');
    CONFIG.DND5E.weaponProperties['precise'] = i18n('DND5E.WeaponPropertiesPrecise');
    CONFIG.DND5E.weaponProperties['repeater'] = i18n('DND5E.WeaponPropertiesRepeater');
    CONFIG.DND5E.weaponProperties['restraining'] = i18n('DND5E.WeaponPropertiesRestraining');
    CONFIG.DND5E.weaponProperties['returning'] = i18n('DND5E.WeaponPropertiesReturning');
    CONFIG.DND5E.weaponProperties['scatter'] = i18n('DND5E.WeaponPropertiesScatter');
    CONFIG.DND5E.weaponProperties['set'] = 'DND5E.WeaponPropertiesSet';
    CONFIG.DND5E.weaponProperties['strongdraw'] = i18n('DND5E.WeaponPropertiesStrongdraw');
    CONFIG.DND5E.weaponProperties['swift'] = i18n('DND5E.WeaponPropertiesSwift');
    CONFIG.DND5E.weaponProperties['tripping'] = i18n('DND5E.WeaponPropertiesTripping');

    CONFIG.DND5E.weaponProperties['aquatic'] = i18n('DND5E.WeaponPropertiesAquatic');
    CONFIG.DND5E.weaponProperties['concealed'] = i18n('DND5E.WeaponPropertiesConcealed');
    CONFIG.DND5E.weaponProperties['dexterous'] = i18n('DND5E.WeaponPropertiesDexterous');
    CONFIG.DND5E.weaponProperties['disguised-basic'] = i18n('DND5E.WeaponPropertiesDisguisedBasic');
    CONFIG.DND5E.weaponProperties['disguised-elaborate'] = i18n('DND5E.WeaponPropertiesDisguisedElaborate');
    CONFIG.DND5E.weaponProperties['disguised-intricate'] = i18n('DND5E.WeaponPropertiesDisguisedIntricate');
    CONFIG.DND5E.weaponProperties['lethal'] = i18n('DND5E.WeaponPropertiesLethal');
    CONFIG.DND5E.weaponProperties['monastic'] = i18n('DND5E.WeaponPropertiesMonastic');
    CONFIG.DND5E.weaponProperties['non-lethal'] = i18n('DND5E.WeaponPropertiesNon-lethal');
    CONFIG.DND5E.weaponProperties['parrying'] = i18n('DND5E.WeaponPropertiesParrying');
  }
});
//--------------------------------------
//----setting compendiums
//--------------------------------------
Hooks.on('renderSidebarTab', function () {
  //if (game.settings.get('srd-heros-et-dragons', 'HDcompendiumColor')) {
  compendiumColor();
  //}
  if (game.settings.get(COMPENDIUM_MIX_DND5E_MODULE_NAME, 'HDhideDD5Compendium')) {
    hideDD5Compendium();
  }
});
//---------------------compendium color---visibité des compendium H&D
function compendiumColor() {
  var comps = document.getElementsByClassName('pack-title');
  for (let comp of comps) {
    let indexHD = comp.innerText.indexOf('H&D');
    let indexCM = comp.innerText.indexOf('CM -');
    let indexDND = comp.innerText.indexOf('SRD');
    let indexUM5 = comp.innerText.indexOf('UM5');
    let indexME5e = comp.innerText.indexOf('ME5e');
    let indexFantasyPlant = comp.innerText.indexOf('Fantasy Plant');
    let indexMap = comp.innerText.indexOf('Map');
    let indexWeather = comp.innerText.indexOf('Weather');

    if (indexHD !== -1) {
      comp.style.color = 'LightGreen';
    } else if (indexDND !== -1) {
      comp.style.color = 'IndianRed';
    } else if (indexUM5 !== -1) {
      comp.style.color = 'DarkOrange';
    } else if (indexME5e !== -1) {
      comp.style.color = 'DarkTurquoise';
    } else if (indexFantasyPlant !== -1) {
      comp.style.color = 'DarkGreen';
    } else if (indexMap !== -1) {
      comp.style.color = 'DarkPurple';
    } else if (indexWeather !== -1) {
      comp.style.color = 'DarkBlue';
    } else if (indexCM !== -1) {
      comp.style.color = 'LightBlue';
    }
  }
}

function hideDD5Compendium() {
  var comps = document.getElementsByClassName('pack-title');
  for (let comp of comps) {
    let indexDND = comp.innerText.indexOf('SRD');

    if (indexDND !== -1) {
      comp.parentElement.style.display = 'none';
    }
  }
}
