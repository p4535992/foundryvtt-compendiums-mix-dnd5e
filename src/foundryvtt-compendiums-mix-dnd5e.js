const COMPENDIUM_MIX_DND5E_MODULE_NAME = "foundryvtt-compendiums-mix-dnd5e";

/* ------------------------------------ */
/* Initialize module					*/
/* ------------------------------------ */
Hooks.on("init", () => {
    game.settings.register(COMPENDIUM_MIX_DND5E_MODULE_NAME, "HDhideDD5Compendium", {
      name: "HDhideDD5Compendium",
      hint: "HDhideDD5Compendium",
      scope: "client",
      config: true,
      default: false,
      type: Boolean,
    });
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
  Hooks.once('ready', () => {

    // http://kpogl.wdfiles.com/local--files/home:home/module.json

	CONFIG.DND5E.spellSchools['voi'] = 'Void Magic';

    // https://github.com/TheDraggo/DraggosMods

    CONFIG.DND5E.spellSchools['chr'] = 'Chronomancy';
	CONFIG.DND5E.damageTypes['vile'] = 'Vile';

    // https://github.com/TheDraggo/GrimHollowWeaponProperties

	CONFIG.DND5E.weaponProperties['armorpiercing'] = 'Armor Piercing';
  	CONFIG.DND5E.weaponProperties['blackpowder'] = 'Blackpowder';
	CONFIG.DND5E.weaponProperties['brutal'] = 'Brutal';
	CONFIG.DND5E.weaponProperties['cumbersome'] = 'Cumbersome';
	CONFIG.DND5E.weaponProperties['defending'] = 'Defending';
	CONFIG.DND5E.weaponProperties['disarming'] = 'Disarming';
	CONFIG.DND5E.weaponProperties['double'] = 'Double';
	CONFIG.DND5E.weaponProperties['entangling'] = 'Entangling';
	CONFIG.DND5E.weaponProperties['guard'] = 'Guard';
	CONFIG.DND5E.weaponProperties['hafted'] = 'Hafted';
	CONFIG.DND5E.weaponProperties['magazine'] = 'Magazine';
	CONFIG.DND5E.weaponProperties['momentum'] = 'Momentum';
	CONFIG.DND5E.weaponProperties['precise'] = 'Precise';
	CONFIG.DND5E.weaponProperties['repeater'] = 'Repeater';
	CONFIG.DND5E.weaponProperties['restraining'] = 'Restraining';
	CONFIG.DND5E.weaponProperties['returning'] = 'Returning';
	CONFIG.DND5E.weaponProperties['scatter'] = 'Scatter';
	CONFIG.DND5E.weaponProperties['set'] = 'Set';
	CONFIG.DND5E.weaponProperties['strongdraw'] = 'Strong-Draw';
	CONFIG.DND5E.weaponProperties['swift'] = 'Swift';
	CONFIG.DND5E.weaponProperties['tripping'] = 'Tripping';
	
});
//--------------------------------------
//----setting compendiums
//--------------------------------------
Hooks.on("renderSidebarTab", function () {
    //if (game.settings.get('srd-heros-et-dragons', 'HDcompendiumColor')) {
        compendiumColor();
    //}
    if (game.settings.get(COMPENDIUM_MIX_DND5E_MODULE_NAME, 'HDhideDD5Compendium')) {
        hideDD5Compendium();
    }
});
//---------------------compendium color---visibité des compendium H&D 
function compendiumColor() {

    var comps = document.getElementsByClassName("pack-title");
    for (let comp of comps) {
        let indexHD = comp.innerText.indexOf("H&D");
		let indexCM = comp.innerText.indexOf("CM -");
        let indexDND = comp.innerText.indexOf("SRD");
        let indexUM5 = comp.innerText.indexOf("UM5");
        let indexME5e = comp.innerText.indexOf("ME5e");
        let indexFantasyPlant = comp.innerText.indexOf("Fantasy Plant");
        let indexMap = comp.innerText.indexOf("Map");

        if (indexHD !== -1) {
            comp.style.color = "LightGreen";
        }
        else if (indexDND !== -1) {
            comp.style.color = "IndianRed";
        }
        else if (indexUM5 !== -1) {
            comp.style.color = "DarkOrange";
        }
        else if (indexME5e !== -1) {
            comp.style.color = "DarkTurquoise";
        }    
        else if(indexFantasyPlant !== -1){
            comp.style.color = "DarkGreen";
        }
        else if(indexMap !== -1){
            comp.style.color = "DarkPurple";
        }    
        else if (indexCM !== -1) {
            comp.style.color = "LightBlue";
        }
    }
};

function hideDD5Compendium() {

    var comps = document.getElementsByClassName("pack-title");
    for (let comp of comps) {
        let indexDND = comp.innerText.indexOf("SRD");

        if (indexDND !== -1) {
            comp.parentElement.style.display = "none";
        }
    }
}