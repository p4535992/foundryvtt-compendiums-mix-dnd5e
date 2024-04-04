
![](https://img.shields.io/badge/Foundry-v0.8.9-informational)

# FoundryVTT Compendiums Mix DnD5e Private

This is a collection of some private and paided projects compendiums, for me and my friends embedded in one only module, for better use.

| ------- | ------- | ------- | ------- |
|100 Monsters & Villains for D&D 5e | 1.0.0 (2024-04-01) | Paws for Effect | https://www.kickstarter.com/projects/66899765/100-monsters-and-villains-for-dandd-5e |
| Crafting Worlds for Game Masters | 1.0.0 (2024-04-01) | Wildheart Woods | https://www.kickstarter.com/projects/840112518/crafting-worlds-for-game-masters |

| ------- | ------- | ------- | ------- |
| Unearthed Spoils #001 - Spellbound Spelunking | 11.0.0 (2023-11-21) | Grim Press | https://foundryvtt.com/packages/usdm001-spellbound-spelunking |
| Allies and Antagonist | 11.0.0 (2024-04-01) | Grim Press | https://foundryvtt.com/packages/allies-and-antagonists |
| Map Collection - Wilderness | 11.0.1 (2024-04-01) | Grim Press | https://foundryvtt.com/packages/map-collection-wilderness |

| ------- | ------- | ------- | ------- |
| Loot-Tavern-Compendium magic item vol 1-23 | 1.11.1 | LootTavern | https://www.patreon.com/LootTavern |
| ------- | ------- | ------- | ------- |
| DDD - Beginner Baubles | version 1.3.5 | Deep Dark Design | |
| DDD - Bloody Blueprints & Macabre Maps: Season I | version 2.2.5 | Deep Dark Design | |
| DDD - Bloody Blueprints & Macabre Maps: Season II |  | Deep Dark Design | |
| DDD - Handy Hubs | version 1.1.6 | Deep Dark Design| |
| DDD - Handy Hubs 2 | version 1.0.2 | Deep Dark Design | |

TODO

| DDD - Bloody Blueprints & Macabre Maps: Season II | version 2.1.6 | Deep Dark Design | |
| DDD - Slayer Class | version 2.0.0 | Deep Dark Design | |
| DDD - Soulbound Class | version 2.0.0 | Deep Dark Design | |

**If any author of the original projects does not agree to use their projects on this, feel free to contact me or open an issue and I will remove the references and the code as soon as possible**

The only work of this module is to import the compendium and colored the title of the compendium.

## Installation

It's always easiest to install modules from the in game add-on browser.

To install this module manually:
1.  Inside the Foundry "Configuration and Setup" screen, click "Add-on Modules"
2.  Click "Install Module"
3.  In the "Manifest URL" field, paste the following url:
`https://github.com/p4535992/foundryvtt-compendiums-mix-dnd5e-private/releases/latest/download/module.json`
4.  Click 'Install' and wait for installation to complete
5.  Don't forget to enable the module in game using the "Manage Module" button

## Issues

Any issues, bugs, or feature requests are always welcome to be reported directly to the [Issue Tracker](https://github.com/p4535992/foundryvtt-compendiums-mix-dnd5e-private/issues ), or using the [Bug Reporter Module](https://foundryvtt.com/packages/bug-reporter/).

# Build

## Install all packages

```bash
npm install
```

### dev

`dev` will let you develop you own code with hot reloading on the browser

```bash
npm run dev
```

### build

`build` will build and set up a symlink between `dist` and your `dataPath`.

```bash
npm run build
```

### build:watch

`build:watch` will build and watch for changes, rebuilding automatically.

```bash
npm run build:watch
```

### prettier-format

`prettier-format` launch the prettier plugin based on the configuration [here](./.prettierrc)

```bash
npm run-script prettier-format
```

### lint

`lint` launch the eslint process based on the configuration [here](./.eslintrc.json)

```bash
npm run-script lint
```

### lint:fix

`lint:fix` launch the eslint process with the fix argument

```bash
npm run-script lint:fix
```

### build:json

`build:json` unpack LevelDB pack on `src/packs` to the json db sources in `src/packs/_source`very useful for backup your items and manually fix some hard issue with some text editor

```bash
npm run-script build:json
```

### build:clean

`build:clean` clean packs json sources in `src/packs/_source`. NOTE: usually this command is launched after the command `build:json` and after make some modifications on the json source files with some text editor, but before the `build:db`

```bash
npm run-script build:clean
```

### build:db

`build:db` packs the json db sources in `src/packs/_source` to LevelDB pack on `src/packs` with the new jsons. NOTE: usually this command is launched after the command `build:json` and after make some modifications on the json source files with some text editor

```bash
npm run-script build:db
```

## License

THIS IS A PRIVATE REPOSITORY FOR ME AND MY FRIENDS