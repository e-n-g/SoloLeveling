/**
 *    @filename   assassin.TrapsinBuild.js
 *	  @author	  isid0re
 *    @desc       assassin build for after respecOne
 */

var build = {
	caster: true,
	skillstab: 48, // traps
	wantedskills: [251, 271, 276], // fireblast, lightning sentry, death sentry
	usefulskills: [261, 263], // charged bolt sentry, weapon block
	mercAuraName: "Holy Freeze",
	mercAuraWanted: 114,
	mercDiff: 1,
	stats: [
		["strength", 47],
		["dexterity", 46],
		["vitality", 166],
		["strength", 61],
		["vitality", 241],
		["strength", 79],
		["dexterity", 79],
		["vitality", "all"]
	],
	skills: [
		[251, 10], // fireblast
		[261, 5], // charged bolt sentry
		[256, 1], // shock web
		[252, 1], // claw mastery
		[253, 1], // psychic hammer
		[258, 1], // burst of speed
		[267, 1], // fade
		[263, 1], // weapon block
		[264, 1], // cloak of shadows
		[271, 7], // lightning sentry
		[276, 1], // death sentry
		[273, 1], // mind blast
		[279, 1], // shadow master
		[271, 20], // lightning sentry
		[276, 20], // death sentry
		[251, 11], // fireblast
		[261, 6], // charged bolt sentry
		[251, 12], // fireblast
		[261, 7], // charged bolt sentry
		[251, 13], // fireblast
		[261, 8], // charged bolt sentry
		[251, 14], // fireblast
		[261, 9], // charged bolt sentry
		[251, 15], // fireblast
		[261, 10], // charged bolt sentry
		[251, 16], // fireblast
		[261, 11], // charged bolt sentry
		[251, 17], // fireblast
		[261, 12], // charged bolt sentry
		[251, 18], // fireblast
		[261, 13], // charged bolt sentry
		[251, 19], // fireblast
		[261, 14], // charged bolt sentry
		[251, 20], // fireblast
		[261, 20], // charged bolt sentry
		[279, 9], // shadow master
	],
	autoEquipTiers: [ // autoequip final gear
		//weapon
		"[Type] == mace && [flag] == runeword # [FCR] == 40 # [tier] == 200000", // HotO
		"[name] == greatertalons && [quality] == unique && [flag] != ethereal # [enhanceddamage] >= 150 && [lifeleech] >= 5 # [tier] == 100000", //bartuc's
		//Helmet
		"[name] == shako && [quality] == unique && [flag] != ethereal # [DamageResist] == 10 # [tier] == 100000", // harlequin's crest
		//belt
		"[name] == spiderwebsash && [quality] == unique && [flag] != ethereal # [enhanceddefense] >= 90 # [tier] == 100000", //arach's
		//boots
		"[Name] == SharkskinBoots && [Quality] == Unique && [Flag] != Ethereal # [MaxHP] >= 65 # [tier] == 100000", //waterwalks
		//armor
		"[type] == armor && [flag] != ethereal && [flag] == runeword # [frw] >= 45 # [tier] == 100000", //Enigma
		//shield
		"[type] == shield && ([Quality] >= Magic || [flag] == runeword) && [flag] != ethereal # [itemchargedskill] >= 0 # [tier] == tierscore(item)",
		//gloves
		"[name] == lightgauntlets && [quality] == unique && [flag] != ethereal # [fcr] >= 20 # [tier] == 100000", //magefist
		//ammy
		"[type] == amulet && [quality] == unique # [strength] == 5 && [coldresist] >= 30 # [tier] == 100000", //maras
		//rings
		"[type] == ring && [quality] == unique # [itemmaxmanapercent] == 25 # [tier] == 100000", //soj
		"[Type] == Ring	&& [Quality] == Unique # [Dexterity] >= 20 # [tier] == 100000", //ravenfrost
	]
};
