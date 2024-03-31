export const MODULE_ID = "compendiums-mix-dnd5e";

export const i18n = (key) => {
    return game.i18n.localize(key);
};
export const i18nFormat = (key, data = {}) => {
    return game.i18n.format(key, data);
};

/* ------------------------------------ */
/* Initialize module					*/
/* ------------------------------------ */
Hooks.on("init", () => {
    /*
    game.settings.register(MODULE_ID, "HDhideDD5Compendium", {
        name: i18n("compendiums-mix-dnd5e.setting.HDhideDD5Compendium.name"),
        hint: i18n("compendiums-mix-dnd5e.setting.HDhideDD5Compendium.hint"),
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
    });

    game.settings.register(MODULE_ID, "enableAdditionalArmorTypes", {
        name: i18n("compendiums-mix-dnd5e.setting.enableAdditionalArmorTypes.name"),
        hint: i18n("compendiums-mix-dnd5e.setting.enableAdditionalArmorTypes.hint"),
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
    });

    game.settings.register(MODULE_ID, "enableAdditionalSpellSchool", {
        name: i18n("compendiums-mix-dnd5e.setting.enableAdditionalSpellSchool.name"),
        hint: i18n("compendiums-mix-dnd5e.setting.enableAdditionalSpellSchool.hint"),
        scope: "world",
        config: true,
        default: true,
        type: Boolean,
    });

    game.settings.register(MODULE_ID, "enableAdditionalDamageTypes", {
        name: i18n("compendiums-mix-dnd5e.setting.enableAdditionalDamageTypes.name"),
        hint: i18n("compendiums-mix-dnd5e.setting.enableAdditionalDamageTypes.hint"),
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
    });

    game.settings.register(MODULE_ID, "enableAdditionalWeaponProperties", {
        name: i18n("compendiums-mix-dnd5e.setting.enableAdditionalWeaponProperties.name"),
        hint: i18n("compendiums-mix-dnd5e.setting.enableAdditionalWeaponProperties.hint"),
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
    });

    game.settings.register(MODULE_ID, "enableAdditionalRarityProperties", {
        name: i18n("compendiums-mix-dnd5e.setting.enableAdditionalRarityProperties.name"),
        hint: i18n("compendiums-mix-dnd5e.setting.enableAdditionalRarityProperties.hint"),
        scope: "world",
        config: true,
        default: true,
        type: Boolean,
    });

    game.settings.register(MODULE_ID, "enableEzPrint", {
        name: i18n("compendiums-mix-dnd5e.setting.enableEzPrint.name"),
        hint: i18n("compendiums-mix-dnd5e.setting.enableEzPrint.hint"),
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
    });
    */
});

/* ------------------------------------ */
/* Setup module							*/
/* ------------------------------------ */
Hooks.once("setup", function () {
    // Do anything after initialization but before ready
});

/* ------------------------------------ */
/* When ready							*/
/* ------------------------------------ */
Hooks.once("ready", () => {
    /*
    if (game.settings.get(MODULE_ID, "enableAdditionalArmorTypes")) {
        // danwiki
        CONFIG.DND5E.armorTypes["partial"] = i18n("DND5E.EquipmentPartial");
    }

    if (game.settings.get(MODULE_ID, "enableAdditionalSpellSchool")) {
        // http://kpogl.wdfiles.com/local--files/home:home/module.json
        CONFIG.DND5E.spellSchools["voi"] = i18n("DND5E.SchoolVoid");

        // https://github.com/TheDraggo/DraggosMods
        CONFIG.DND5E.spellSchools["chr"] = i18n("DND5E.SchoolCron");
    }

    if (game.settings.get(MODULE_ID, "enableAdditionalDamageTypes")) {
        // https://github.com/TheDraggo/DraggosMods
        CONFIG.DND5E.damageTypes["vile"] = i18n("DND5E.DamageVile");
    }

    if (game.settings.get(MODULE_ID, "enableAdditionalWeaponProperties")) {
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
        CONFIG.DND5E.weaponProperties["spiked"] = i18n("DND5E.WeaponPropertiesSpiked");

        CONFIG.DND5E.weaponProperties["aquatic"] = i18n("DND5E.WeaponPropertiesAquatic");
        CONFIG.DND5E.weaponProperties["concealed"] = i18n("DND5E.WeaponPropertiesConcealed");
        CONFIG.DND5E.weaponProperties["dexterous"] = i18n("DND5E.WeaponPropertiesDexterous");
        CONFIG.DND5E.weaponProperties["disguised-basic"] = i18n("DND5E.WeaponPropertiesDisguisedBasic");
        CONFIG.DND5E.weaponProperties["disguised-elaborate"] = i18n("DND5E.WeaponPropertiesDisguisedElaborate");
        CONFIG.DND5E.weaponProperties["disguised-intricate"] = i18n("DND5E.WeaponPropertiesDisguisedIntricate");
        CONFIG.DND5E.weaponProperties["lethal"] = i18n("DND5E.WeaponPropertiesLethal");
        CONFIG.DND5E.weaponProperties["monastic"] = i18n("DND5E.WeaponPropertiesMonastic");
        CONFIG.DND5E.weaponProperties["non-lethal"] = i18n("DND5E.WeaponPropertiesNon-lethal");
        CONFIG.DND5E.weaponProperties["parrying"] = i18n("DND5E.WeaponPropertiesParrying");
    }

    if (game.settings.get(MODULE_ID, "enableAdditionalRarityProperties")) {
        // Rarity
        CONFIG.DND5E.itemRarity.veryCommon = "very common";
    }

    // FEATURE EZ-PRINT

    if (game.settings.get(MODULE_ID, "enableEzPrint")) {
        Hooks.on("renderActorSheet", addButton);
        Hooks.on("renderJournalSheet", addButton);
        Hooks.on("renderItemSheet", addButton);
    }
    */
    game.modules.get("compendium-themer").api.addModule(MODULE_ID, [
        {
            dataPack: `${MODULE_ID}.stormsteel-scene`,
            colorText: `#ece9df`,
            iconText: ``,
            bannerImage: ``,
            backgroundColorText: `#005EB8`,
        },
        {
            dataPack: `${MODULE_ID}.stormsteel-scene-merchant`,
            colorText: `#ece9df`,
            iconText: ``,
            bannerImage: ``,
            backgroundColorText: `#005EB8`,
        },
        {
            dataPack: `${MODULE_ID}.stormsteel-actor-npchumanoid`,
            colorText: `#ece9df`,
            iconText: ``,
            bannerImage: ``,
            backgroundColorText: `#005EB8`,
        },
        {
            dataPack: `${MODULE_ID}.stormsteel-actor-npchumanoiddrow`,
            colorText: `#ece9df`,
            iconText: ``,
            bannerImage: ``,
            backgroundColorText: `#005EB8`,
        },
        {
            dataPack: `${MODULE_ID}.stormsteel-actor-npchumanoidmix`,
            colorText: `#ece9df`,
            iconText: ``,
            bannerImage: ``,
            backgroundColorText: `#005EB8`,
        },
        {
            dataPack: `${MODULE_ID}.stormsteel-actor-npchumanoidsamurai`,
            colorText: `#ece9df`,
            iconText: ``,
            bannerImage: ``,
            backgroundColorText: `#005EB8`,
        },
        {
            dataPack: `${MODULE_ID}.stormsteel-actor-npcstory`,
            colorText: `#ece9df`,
            iconText: ``,
            bannerImage: ``,
            backgroundColorText: `#005EB8`,
        },
        {
            dataPack: `${MODULE_ID}.stormsteel-actor-player`,
            colorText: `#ece9df`,
            iconText: ``,
            bannerImage: ``,
            backgroundColorText: `#005EB8`,
        },
        {
            dataPack: `${MODULE_ID}.stormsteel-actor-npcmix`,
            colorText: `#ece9df`,
            iconText: ``,
            bannerImage: ``,
            backgroundColorText: `#005EB8`,
        },
        {
            dataPack: `${MODULE_ID}.stormsteel-actor-merchant`,
            colorText: `#ece9df`,
            iconText: ``,
            bannerImage: ``,
            backgroundColorText: `#005EB8`,
        },
        {
            dataPack: `${MODULE_ID}.stormsteel-actor-journal`,
            colorText: `#ece9df`,
            iconText: ``,
            bannerImage: ``,
            backgroundColorText: `#005EB8`,
        },
        {
            dataPack: `${MODULE_ID}.stormsteel-item-merchant`,
            colorText: `#ece9df`,
            iconText: ``,
            bannerImage: ``,
            backgroundColorText: `#005EB8`,
        },
        {
            dataPack: `${MODULE_ID}.stormsteel-item-mix`,
            colorText: `#ece9df`,
            iconText: ``,
            bannerImage: ``,
            backgroundColorText: `#005EB8`,
        },
        {
            dataPack: `${MODULE_ID}.stormsteel-item-hero-and-dragons`,
            colorText: `#ece9df`,
            iconText: ``,
            bannerImage: ``,
            backgroundColorText: `#005EB8`,
        },
        {
            dataPack: `${MODULE_ID}.stormsteel-item-spells-mix`,
            colorText: `#ece9df`,
            iconText: ``,
            bannerImage: ``,
            backgroundColorText: `#005EB8`,
        },
    ]);
});

/*

function hideDD5Compendium() {
    var comps = document.getElementsByClassName("pack-title");
    for (let comp of comps) {
        let indexDND = comp.innerText.indexOf("SRD");

        if (indexDND !== -1) {
            comp.parentElement.style.display = "none";
        }
    }
}

function addButton(app, html) {
    const link = $(`<a title="Print"><i class="fas fa-print"></i></a>`);
    link.on("click", (evt) => {
        $(".ez-print").removeClass("ez-print");
        html.addClass("ez-print");
        window.print();
    });

    html.find(".window-title").after(link);
}
*/
