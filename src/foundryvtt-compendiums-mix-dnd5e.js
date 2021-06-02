Hooks.on('ready', () => {
	CONFIG.DND5E.spellSchools['voi'] = 'Void Magic';
});

//--------------------------------------
//----setting compendiums
//--------------------------------------
Hooks.on("renderSidebarTab", function () {
    //if (game.settings.get('srd-heros-et-dragons', 'HDcompendiumColor')) {
        compendiumColor();
    //}
    //if (game.settings.get('srd-heros-et-dragons', 'HDhideDD5Compendium')) {
    //    hideDD5Compendium();
    //}
});
//---------------------compendium color---visibité des compendium H&D 
function compendiumColor() {

    var comps = document.getElementsByClassName("pack-title");
    for (let comp of comps) {
        //let indexHD = comp.innerText.indexOf("H&D");
		let indexHD = comp.innerText.indexOf("CM -");
        let indexDND = comp.innerText.indexOf("SRD");
        if (indexHD !== -1) {
            comp.style.color = "LightBlue";
        }
        if (indexDND !== -1) {
            comp.style.color = "IndianRed";
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