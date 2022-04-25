export const COMPENDIUM_MIX_DND5E_MODULE_NAME = 'foundryvtt-compendiums-mix-dnd5e';

export const i18n = (key) => {
  return game.i18n.localize(key);
};
export const i18nFormat = (key, data = {}) => {
  return game.i18n.format(key, data);
};

// let inputDown = false;
// let hasValidToken = false;

/* ------------------------------------ */
/* Initialize module					*/
/* ------------------------------------ */
Hooks.on('init', () => {
  game.settings.register(COMPENDIUM_MIX_DND5E_MODULE_NAME, 'HDhideDD5Compendium', {
    name: i18n('foundryvtt-compendiums-mix-dnd5e.setting.HDhideDD5Compendium.name'),
    hint: i18n('foundryvtt-compendiums-mix-dnd5e.setting.HDhideDD5Compendium.hint'),
    scope: 'world',
    config: true,
    default: false,
    type: Boolean,
  });

  game.settings.register(COMPENDIUM_MIX_DND5E_MODULE_NAME, 'enableAdditionalArmorTypes', {
    name: i18n('foundryvtt-compendiums-mix-dnd5e.setting.enableAdditionalArmorTypes.name'),
    hint: i18n('foundryvtt-compendiums-mix-dnd5e.setting.enableAdditionalArmorTypes.hint'),
    scope: 'world',
    config: true,
    default: false,
    type: Boolean,
  });

  game.settings.register(COMPENDIUM_MIX_DND5E_MODULE_NAME, 'enableAdditionalSpellSchool', {
    name: i18n('foundryvtt-compendiums-mix-dnd5e.setting.enableAdditionalSpellSchool.name'),
    hint: i18n('foundryvtt-compendiums-mix-dnd5e.setting.enableAdditionalSpellSchool.hint'),
    scope: 'world',
    config: true,
    default: true,
    type: Boolean,
  });

  game.settings.register(COMPENDIUM_MIX_DND5E_MODULE_NAME, 'enableAdditionalDamageTypes', {
    name: i18n('foundryvtt-compendiums-mix-dnd5e.setting.enableAdditionalDamageTypes.name'),
    hint: i18n('foundryvtt-compendiums-mix-dnd5e.setting.enableAdditionalDamageTypes.hint'),
    scope: 'world',
    config: true,
    default: false,
    type: Boolean,
  });

  game.settings.register(COMPENDIUM_MIX_DND5E_MODULE_NAME, 'enableAdditionalWeaponProperties', {
    name: i18n('foundryvtt-compendiums-mix-dnd5e.setting.enableAdditionalWeaponProperties.name'),
    hint: i18n('foundryvtt-compendiums-mix-dnd5e.setting.enableAdditionalWeaponProperties.hint'),
    scope: 'world',
    config: true,
    default: false,
    type: Boolean,
  });

  game.settings.register(COMPENDIUM_MIX_DND5E_MODULE_NAME, 'enableAdditionalRarityProperties', {
    name: i18n('foundryvtt-compendiums-mix-dnd5e.setting.enableAdditionalRarityProperties.name'),
    hint: i18n('foundryvtt-compendiums-mix-dnd5e.setting.enableAdditionalRarityProperties.hint'),
    scope: 'world',
    config: true,
    default: true,
    type: Boolean,
  });

  game.settings.register(COMPENDIUM_MIX_DND5E_MODULE_NAME, 'enableEzPrint', {
    name: i18n('foundryvtt-compendiums-mix-dnd5e.setting.enableEzPrint.name'),
    hint: i18n('foundryvtt-compendiums-mix-dnd5e.setting.enableEzPrint.hint'),
    scope: 'world',
    config: true,
    default: false,
    type: Boolean,
  });

  // game.settings.register(COMPENDIUM_MIX_DND5E_MODULE_NAME, 'enableTokenVisionAnimationWorldScope', {
  //   name: i18n('foundryvtt-compendiums-mix-dnd5e.setting.enableTokenVisionAnimationWorldScope.name'),
  //   hint: i18n('foundryvtt-compendiums-mix-dnd5e.setting.enableTokenVisionAnimationWorldScope.hint'),
  //   scope: 'world',
  //   config: true,
  //   default: false,
  //   type: Boolean,
  // });

  // game.settings.register(COMPENDIUM_MIX_DND5E_MODULE_NAME, 'enableGmTokenDragVisibility', {
  //   name: i18n('foundryvtt-compendiums-mix-dnd5e.setting.enableGmTokenDragVisibility.name'),
  //   hint: i18n('foundryvtt-compendiums-mix-dnd5e.setting.enableGmTokenDragVisibility.hint'),
  //   scope: 'world',
  //   config: true,
  //   default: false,
  //   type: Boolean,
  // });

  // FEATURE GM Token Drag Visibility v2

  // if (game.settings.get(COMPENDIUM_MIX_DND5E_MODULE_NAME, 'enableGmTokenDragVisibility')) {
  //   // eslint-disable-next-line no-undef
  //   libWrapper.register(
  //     COMPENDIUM_MIX_DND5E_MODULE_NAME,
  //     'Token.prototype._onDragLeftStart',
  //     (function () {
  //       return async function (wrapped, ...args) {
  //         if (!game.user.isGM || !canvas.scene.data.tokenVision) {
  //           return wrapped.apply(this, args);
  //         }

  //         inputDown = true;

  //         //Check to see if any of the controlled tokens use sight
  //         //Check to see if any token is interactive
  //         for (let t of canvas.tokens.controlled) {
  //           if (t.interactive && t.data.vision) {
  //             hasValidToken = true;
  //             break;
  //           }
  //         }

  //         return wrapped.apply(this, args);
  //       };
  //     })(),
  //     'WRAPPER',
  //   );

  //   // eslint-disable-next-line no-undef
  //   libWrapper.register(
  //     COMPENDIUM_MIX_DND5E_MODULE_NAME,
  //     'Token.prototype._onDragLeftMove',
  //     (function () {
  //       return async function (wrapped, ...args) {
  //         if (!game.user.isGM || !canvas.scene.data.tokenVision || !inputDown || !hasValidToken) {
  //           return wrapped.apply(this, args);
  //         }

  //         canvas.scene.data.tokenVision = false;
  //         canvas.sight.refresh();

  //         return wrapped.apply(this, args);
  //       };
  //     })(),
  //     'WRAPPER',
  //   );

  //   // eslint-disable-next-line no-undef
  //   libWrapper.register(
  //     COMPENDIUM_MIX_DND5E_MODULE_NAME,
  //     'Token.prototype._onDragLeftDrop',
  //     (function () {
  //       return async function (wrapped, ...args) {
  //         EndDrag();
  //         return wrapped.apply(this, args);
  //       };
  //     })(),
  //     'WRAPPER',
  //   );

  //   // eslint-disable-next-line no-undef
  //   libWrapper.register(
  //     COMPENDIUM_MIX_DND5E_MODULE_NAME,
  //     'Token.prototype._onDragLeftCancel',
  //     (function () {
  //       return async function (wrapped, ...args) {
  //         EndDrag();
  //         return wrapped.apply(this, args);
  //       };
  //     })(),
  //     'WRAPPER',
  //   );
  // }
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
  if (game.settings.get(COMPENDIUM_MIX_DND5E_MODULE_NAME, 'enableAdditionalArmorTypes')) {
    // danwiki
    CONFIG.DND5E.armorTypes['partial'] = i18n('DND5E.EquipmentPartial');
  }

  if (game.settings.get(COMPENDIUM_MIX_DND5E_MODULE_NAME, 'enableAdditionalSpellSchool')) {
    // http://kpogl.wdfiles.com/local--files/home:home/module.json
    CONFIG.DND5E.spellSchools['voi'] = i18n('DND5E.SchoolVoid');

    // https://github.com/TheDraggo/DraggosMods
    CONFIG.DND5E.spellSchools['chr'] = i18n('DND5E.SchoolCron');
  }

  if (game.settings.get(COMPENDIUM_MIX_DND5E_MODULE_NAME, 'enableAdditionalDamageTypes')) {
    // https://github.com/TheDraggo/DraggosMods
    CONFIG.DND5E.damageTypes['vile'] = i18n('DND5E.DamageVile');
  }

  if (game.settings.get(COMPENDIUM_MIX_DND5E_MODULE_NAME, 'enableAdditionalWeaponProperties')) {
    // https://github.com/TheDraggo/GrimHollowWeaponProperties

    // CONFIG.DND5E.weaponProperties['armorpiercing'] = i18n('DND5E.WeaponPropertiesArmorpiercing');
    // CONFIG.DND5E.weaponProperties['blackpowder'] = i18n('DND5E.WeaponPropertiesBlackpowder');
    // CONFIG.DND5E.weaponProperties['brutal'] = i18n('DND5E.WeaponPropertiesBrutal');
    // CONFIG.DND5E.weaponProperties['cumbersome'] = i18n('DND5E.WeaponPropertiesCumbersome');
    // CONFIG.DND5E.weaponProperties['defending'] = i18n('DND5E.WeaponPropertiesDefending');
    // CONFIG.DND5E.weaponProperties['disarming'] = i18n('DND5E.WeaponPropertiesDisarming');
    // CONFIG.DND5E.weaponProperties['double'] = i18n('DND5E.WeaponPropertiesDouble');
    // CONFIG.DND5E.weaponProperties['entangling'] = i18n('DND5E.WeaponPropertiesEntangling');
    // CONFIG.DND5E.weaponProperties['guard'] = i18n('DND5E.WeaponPropertiesGuard');
    // CONFIG.DND5E.weaponProperties['hafted'] = i18n('DND5E.WeaponPropertiesHafted');
    // CONFIG.DND5E.weaponProperties['magazine'] = i18n('DND5E.WeaponPropertiesMagazine');
    // CONFIG.DND5E.weaponProperties['momentum'] = i18n('DND5E.WeaponPropertiesMomentum');
    // CONFIG.DND5E.weaponProperties['precise'] = i18n('DND5E.WeaponPropertiesPrecise');
    // CONFIG.DND5E.weaponProperties['repeater'] = i18n('DND5E.WeaponPropertiesRepeater');
    // CONFIG.DND5E.weaponProperties['restraining'] = i18n('DND5E.WeaponPropertiesRestraining');
    // CONFIG.DND5E.weaponProperties['returning'] = i18n('DND5E.WeaponPropertiesReturning');
    // CONFIG.DND5E.weaponProperties['scatter'] = i18n('DND5E.WeaponPropertiesScatter');
    // CONFIG.DND5E.weaponProperties['set'] = i18n('DND5E.WeaponPropertiesSet');
    // CONFIG.DND5E.weaponProperties['strongdraw'] = i18n('DND5E.WeaponPropertiesStrongdraw');
    // CONFIG.DND5E.weaponProperties['swift'] = i18n('DND5E.WeaponPropertiesSwift');
    // CONFIG.DND5E.weaponProperties['tripping'] = i18n('DND5E.WeaponPropertiesTripping');

    // danwiki
    CONFIG.DND5E.weaponProperties['spiked'] = i18n('DND5E.WeaponPropertiesSpiked');

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

  if (game.settings.get(COMPENDIUM_MIX_DND5E_MODULE_NAME, 'enableAdditionalRarityProperties')) {
    // Rarity
    CONFIG.DND5E.itemRarity.veryCommon = 'very common';
  }

  // FEATURE EZ-PRINT

  if (game.settings.get(COMPENDIUM_MIX_DND5E_MODULE_NAME, 'enableEzPrint')) {
    Hooks.on('renderActorSheet', addButton);
    Hooks.on('renderJournalSheet', addButton);
    Hooks.on('renderItemSheet', addButton);
  }

  // FEATURE Token Vision Animation: World Scope

  // if (game.settings.get(COMPENDIUM_MIX_DND5E_MODULE_NAME, 'enableTokenVisionAnimationWorldScope')) {
  //   let visionAnimationSettings = game.settings.settings.get('core.visionAnimation');
  //   visionAnimationSettings.scope = 'world';
  //   visionAnimationSettings.default = false;
  // }
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

function addButton(app, html) {
  const link = $(`<a title="Print"><i class="fas fa-print"></i></a>`);
  link.on('click', (evt) => {
    $('.ez-print').removeClass('ez-print');
    html.addClass('ez-print');
    window.print();
  });

  html.find('.window-title').after(link);
}

// function EndDrag() {
//   if (!game.user.isGM || !inputDown) {
//     return;
//   }
//   inputDown = false;

//   if (hasValidToken) {
//     canvas.scene.data.tokenVision = true;
//     canvas.sight.refresh();
//     hasValidToken = false;
//   }
// }
