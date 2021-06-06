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
	CONFIG.DND5E.spellSchools['voi'] = 'Void Magic';
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