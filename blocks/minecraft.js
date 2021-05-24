/**
 * @fileoverview Logic blocks for Blockly.
 * @author Lauro Canonica
 */
'use strict';

goog.provide('Blockly.Blocks.minecraft');

goog.require('Blockly.Blocks');

function compareMCobjects(a,b){
	if(a[0]==b[0]) {
		return 0;
	} else if(a[0]>b[0]) {
		return 1;
	} else {
		return -1;
	}
}


function getEntities() {
	var entList= [ 
		    [ Blockly.Msg.e_armor_stand, 'e.armor_stand' ],
		    [ Blockly.Msg.e_bat, 'e.bat' ],
		    [ Blockly.Msg.e_bee, 'e.bee' ],
		    [ Blockly.Msg.e_blaze, 'e.blaze' ],
		    [ Blockly.Msg.e_boat, 'e.boat' ],
		    [ Blockly.Msg.e_cat, 'e.cat' ],
		    [ Blockly.Msg.e_cave_spider, 'e.cave_spider' ],
		    [ Blockly.Msg.e_chest_minecart, 'e.chest_minecart' ],
		    [ Blockly.Msg.e_chicken, 'e.chicken' ],
		    [ Blockly.Msg.e_cod, 'e.cod' ],
		    [ Blockly.Msg.e_command_block_minecart, 'e.command_block_minecart' ],
		    [ Blockly.Msg.e_cow, 'e.cow' ],
		    [ Blockly.Msg.e_creeper, 'e.creeper' ],
		    [ Blockly.Msg.e_dolphin, 'e.dolphin' ],
		    [ Blockly.Msg.e_donkey, 'e.donkey' ],
		    [ Blockly.Msg.e_dragon_fireball, 'e.dragon_fireball' ],
		    [ Blockly.Msg.e_drowned, 'e.drowned' ],
		    [ Blockly.Msg.e_egg, 'e.egg' ],
		    [ Blockly.Msg.e_elder_guardian, 'e.elder_guardian' ],
		    [ Blockly.Msg.e_end_crystal, 'e.end_crystal' ],
		    [ Blockly.Msg.e_ender_pearl, 'e.ender_pearl' ],
		    [ Blockly.Msg.e_enderman, 'e.enderman' ],
		    [ Blockly.Msg.e_endermite, 'e.endermite' ],
		    [ Blockly.Msg.e_evoker, 'e.evoker' ],
		    [ Blockly.Msg.e_evoker_fangs, 'e.evoker_fangs' ],
		    [ Blockly.Msg.e_experience_bottle, 'e.experience_bottle' ],
		    [ Blockly.Msg.e_experience_orb, 'e.experience_orb' ],
		    [ Blockly.Msg.e_eye_of_ender, 'e.eye_of_ender' ],
		    [ Blockly.Msg.e_fireball, 'e.fireball' ],
		    [ Blockly.Msg.e_firework_rocket, 'e.firework_rocket' ],
		    [ Blockly.Msg.e_fishing_bobber, 'e.fishing_bobber' ],
		    [ Blockly.Msg.e_fox, 'e.fox' ],
		    [ Blockly.Msg.e_furnace_minecart, 'e.furnace_minecart' ],
		    [ Blockly.Msg.e_ghast, 'e.ghast' ],
		    [ Blockly.Msg.e_guardian, 'e.guardian' ],
		    [ Blockly.Msg.e_hoglin, 'e.hoglin' ],
		    [ Blockly.Msg.e_hopper_minecart, 'e.hopper_minecart' ],
		    [ Blockly.Msg.e_horse, 'e.horse' ],
		    [ Blockly.Msg.e_husk, 'e.husk' ],
		    [ Blockly.Msg.e_illusioner, 'e.illusioner' ],
		    [ Blockly.Msg.e_iron_golem, 'e.iron_golem' ],
		    [ Blockly.Msg.e_item, 'e.item' ],
		    [ Blockly.Msg.e_item_frame, 'e.item_frame' ],
		    [ Blockly.Msg.e_killer_bunny, 'e.killer_bunny' ],
		    [ Blockly.Msg.e_lightning_bolt, 'e.lightning_bolt' ],
		    [ Blockly.Msg.e_llama, 'e.llama' ],
		    [ Blockly.Msg.e_llama_spit, 'e.llama_spit' ],
		    [ Blockly.Msg.e_magma_cube, 'e.magma_cube' ],
		    [ Blockly.Msg.e_minecart, 'e.minecart' ],
		    [ Blockly.Msg.e_mooshroom, 'e.mooshroom' ],
		    [ Blockly.Msg.e_mule, 'e.mule' ],
		    [ Blockly.Msg.e_ocelot, 'e.ocelot' ],
		    [ Blockly.Msg.e_painting, 'e.painting' ],
		    [ Blockly.Msg.e_panda, 'e.panda' ],
		    [ Blockly.Msg.e_parrot, 'e.parrot' ],
		    [ Blockly.Msg.e_phantom, 'e.phantom' ],
		    [ Blockly.Msg.e_pig, 'e.pig' ],
		    [ Blockly.Msg.e_piglin, 'e.piglin' ],
		    [ Blockly.Msg.e_pillager, 'e.pillager' ],
		    [ Blockly.Msg.e_player, 'e.player' ],
		    [ Blockly.Msg.e_polar_bear, 'e.polar_bear' ],
		    [ Blockly.Msg.e_potion, 'e.potion' ],
		    [ Blockly.Msg.e_pufferfish, 'e.pufferfish' ],
		    [ Blockly.Msg.e_rabbit, 'e.rabbit' ],
		    [ Blockly.Msg.e_ravager, 'e.ravager' ],
		    [ Blockly.Msg.e_salmon, 'e.salmon' ],
		    [ Blockly.Msg.e_sheep, 'e.sheep' ],
		    [ Blockly.Msg.e_shulker, 'e.shulker' ],
		    [ Blockly.Msg.e_shulker_bullet, 'e.shulker_bullet' ],
		    [ Blockly.Msg.e_silverfish, 'e.silverfish' ],
		    [ Blockly.Msg.e_skeleton, 'e.skeleton' ],
		    [ Blockly.Msg.e_skeleton_horse, 'e.skeleton_horse' ],
		    [ Blockly.Msg.e_slime, 'e.slime' ],
		    [ Blockly.Msg.e_small_fireball, 'e.small_fireball' ],
		    [ Blockly.Msg.e_snow_golem, 'e.snow_golem' ],
		    [ Blockly.Msg.e_snowball, 'e.snowball' ],
		    [ Blockly.Msg.e_spawner_minecart, 'e.spawner_minecart' ],
		    [ Blockly.Msg.e_spectral_arrow, 'e.spectral_arrow' ],
		    [ Blockly.Msg.e_spider, 'e.spider' ],
		    [ Blockly.Msg.e_squid, 'e.squid' ],
		    [ Blockly.Msg.e_stray, 'e.stray' ],
		    [ Blockly.Msg.e_strider, 'e.strider' ],
		    [ Blockly.Msg.e_trader_llama, 'e.trader_llama' ],
		    [ Blockly.Msg.e_trident, 'e.trident' ],
		    [ Blockly.Msg.e_tropical_fish, 'e.tropical_fish' ],
		    [ Blockly.Msg.e_turtle, 'e.turtle' ],
		    [ Blockly.Msg.e_vex, 'e.vex' ],
		    [ Blockly.Msg.e_villager, 'e.villager' ],
		    [ Blockly.Msg.e_vindicator, 'e.vindicator' ],
		    [ Blockly.Msg.e_wandering_trader, 'e.wandering_trader' ],
		    [ Blockly.Msg.e_witch, 'e.witch' ],
		    [ Blockly.Msg.e_wither, 'e.wither' ],
		    [ Blockly.Msg.e_wither_skeleton, 'e.wither_skeleton' ],
		    [ Blockly.Msg.e_wither_skull, 'e.wither_skull' ],
		    [ Blockly.Msg.e_wolf, 'e.wolf' ],
		    [ Blockly.Msg.e_zoglin, 'e.zoglin' ],
		    [ Blockly.Msg.e_zombie, 'e.zombie' ],
		    [ Blockly.Msg.e_zombie_horse, 'e.zombie_horse' ],
		    [ Blockly.Msg.e_zombie_villager, 'e.zombie_villager' ],
		    [ Blockly.Msg.e_zombified_piglin, 'e.zombified_piglin' ],	].sort(compareMCobjects);
	return entList;
}
function getEntities_opOnly() {
	return [ 
	    [ Blockly.Msg.e_tnt, 'e.tnt' ],
	    [ Blockly.Msg.e_tnt_minecart, 'e.tnt_minecart' ],
	    [ Blockly.Msg.e_giant, 'e.giant' ],
	    [ Blockly.Msg.e_ender_dragon, 'e.ender_dragon' ],

		].sort(compareMCobjects)
}
function getEntities_hide() {
	return [ 
		   [ Blockly.Msg.e_area_effect_cloud, 'e.area_effect_cloud' ],
		    [ Blockly.Msg.e_arrow, 'e.arrow' ],
		    [ Blockly.Msg.e_falling_block, 'e.falling_block' ]

		].sort(compareMCobjects)
}


function getMaterials() {
	var obList= [  
		   [ Blockly.Msg.b_acacia_button, 'b.acacia_button' ],
		    [ Blockly.Msg.b_acacia_door, 'b.acacia_door' ],
		    [ Blockly.Msg.b_acacia_fence, 'b.acacia_fence' ],
		    [ Blockly.Msg.b_acacia_fence_gate, 'b.acacia_fence_gate' ],
		    [ Blockly.Msg.b_acacia_leaves, 'b.acacia_leaves' ],
		    [ Blockly.Msg.b_acacia_log, 'b.acacia_log' ],
		    [ Blockly.Msg.b_acacia_planks, 'b.acacia_planks' ],
		    [ Blockly.Msg.b_acacia_pressure_plate, 'b.acacia_pressure_plate' ],
		    [ Blockly.Msg.b_acacia_sapling, 'b.acacia_sapling' ],
		    [ Blockly.Msg.b_acacia_sign, 'b.acacia_sign' ],
		    [ Blockly.Msg.b_acacia_slab, 'b.acacia_slab' ],
		    [ Blockly.Msg.b_acacia_stairs, 'b.acacia_stairs' ],
		    [ Blockly.Msg.b_acacia_trapdoor, 'b.acacia_trapdoor' ],
		    [ Blockly.Msg.b_acacia_wall_sign, 'b.acacia_wall_sign' ],
		    [ Blockly.Msg.b_acacia_wood, 'b.acacia_wood' ],
		    [ Blockly.Msg.b_activator_rail, 'b.activator_rail' ],
		    [ Blockly.Msg.b_air, 'b.air' ],
		    [ Blockly.Msg.b_allium, 'b.allium' ],
		    [ Blockly.Msg.b_ancient_debris, 'b.ancient_debris' ],
		    [ Blockly.Msg.b_andesite, 'b.andesite' ],
		    [ Blockly.Msg.b_andesite_slab, 'b.andesite_slab' ],
		    [ Blockly.Msg.b_andesite_stairs, 'b.andesite_stairs' ],
		    [ Blockly.Msg.b_andesite_wall, 'b.andesite_wall' ],
		    [ Blockly.Msg.b_anvil, 'b.anvil' ],
		    [ Blockly.Msg.b_attached_melon_stem, 'b.attached_melon_stem' ],
		    [ Blockly.Msg.b_attached_pumpkin_stem, 'b.attached_pumpkin_stem' ],
		    [ Blockly.Msg.b_azure_bluet, 'b.azure_bluet' ],
		    [ Blockly.Msg.b_bamboo, 'b.bamboo' ],
		    [ Blockly.Msg.b_bamboo_sapling, 'b.bamboo_sapling' ],
		    [ Blockly.Msg.b_barrel, 'b.barrel' ],
		    [ Blockly.Msg.b_barrier, 'b.barrier' ],
		    [ Blockly.Msg.b_basalt, 'b.basalt' ],
		    [ Blockly.Msg.b_beacon, 'b.beacon' ],
		    [ Blockly.Msg.b_bedrock, 'b.bedrock' ],
		    [ Blockly.Msg.b_bee_nest, 'b.bee_nest' ],
		    [ Blockly.Msg.b_beehive, 'b.beehive' ],
		    [ Blockly.Msg.b_beetroots, 'b.beetroots' ],
		    [ Blockly.Msg.b_bell, 'b.bell' ],
		    [ Blockly.Msg.b_birch_button, 'b.birch_button' ],
		    [ Blockly.Msg.b_birch_door, 'b.birch_door' ],
		    [ Blockly.Msg.b_birch_fence, 'b.birch_fence' ],
		    [ Blockly.Msg.b_birch_fence_gate, 'b.birch_fence_gate' ],
		    [ Blockly.Msg.b_birch_leaves, 'b.birch_leaves' ],
		    [ Blockly.Msg.b_birch_log, 'b.birch_log' ],
		    [ Blockly.Msg.b_birch_planks, 'b.birch_planks' ],
		    [ Blockly.Msg.b_birch_pressure_plate, 'b.birch_pressure_plate' ],
		    [ Blockly.Msg.b_birch_sapling, 'b.birch_sapling' ],
		    [ Blockly.Msg.b_birch_sign, 'b.birch_sign' ],
		    [ Blockly.Msg.b_birch_slab, 'b.birch_slab' ],
		    [ Blockly.Msg.b_birch_stairs, 'b.birch_stairs' ],
		    [ Blockly.Msg.b_birch_trapdoor, 'b.birch_trapdoor' ],
		    [ Blockly.Msg.b_birch_wall_sign, 'b.birch_wall_sign' ],
		    [ Blockly.Msg.b_birch_wood, 'b.birch_wood' ],
		    [ Blockly.Msg.b_black_banner, 'b.black_banner' ],
		    [ Blockly.Msg.b_black_bed, 'b.black_bed' ],
		    [ Blockly.Msg.b_black_carpet, 'b.black_carpet' ],
		    [ Blockly.Msg.b_black_concrete, 'b.black_concrete' ],
		    [ Blockly.Msg.b_black_concrete_powder, 'b.black_concrete_powder' ],
		    [ Blockly.Msg.b_black_glazed_terracotta, 'b.black_glazed_terracotta' ],
		    [ Blockly.Msg.b_black_shulker_box, 'b.black_shulker_box' ],
		    [ Blockly.Msg.b_black_stained_glass, 'b.black_stained_glass' ],
		    [ Blockly.Msg.b_black_stained_glass_pane, 'b.black_stained_glass_pane' ],
		    [ Blockly.Msg.b_black_terracotta, 'b.black_terracotta' ],
		    [ Blockly.Msg.b_black_wool, 'b.black_wool' ],
		    [ Blockly.Msg.b_blackstone, 'b.blackstone' ],
		    [ Blockly.Msg.b_blackstone_slab, 'b.blackstone_slab' ],
		    [ Blockly.Msg.b_blackstone_stairs, 'b.blackstone_stairs' ],
		    [ Blockly.Msg.b_blackstone_wall, 'b.blackstone_wall' ],
		    [ Blockly.Msg.b_blast_furnace, 'b.blast_furnace' ],
		    [ Blockly.Msg.b_blue_banner, 'b.blue_banner' ],
		    [ Blockly.Msg.b_blue_bed, 'b.blue_bed' ],
		    [ Blockly.Msg.b_blue_carpet, 'b.blue_carpet' ],
		    [ Blockly.Msg.b_blue_concrete, 'b.blue_concrete' ],
		    [ Blockly.Msg.b_blue_concrete_powder, 'b.blue_concrete_powder' ],
		    [ Blockly.Msg.b_blue_glazed_terracotta, 'b.blue_glazed_terracotta' ],
		    [ Blockly.Msg.b_blue_ice, 'b.blue_ice' ],
		    [ Blockly.Msg.b_blue_orchid, 'b.blue_orchid' ],
		    [ Blockly.Msg.b_blue_shulker_box, 'b.blue_shulker_box' ],
		    [ Blockly.Msg.b_blue_stained_glass, 'b.blue_stained_glass' ],
		    [ Blockly.Msg.b_blue_stained_glass_pane, 'b.blue_stained_glass_pane' ],
		    [ Blockly.Msg.b_blue_terracotta, 'b.blue_terracotta' ],
		    [ Blockly.Msg.b_blue_wool, 'b.blue_wool' ],
		    [ Blockly.Msg.b_bone_block, 'b.bone_block' ],
		    [ Blockly.Msg.b_bookshelf, 'b.bookshelf' ],
		    [ Blockly.Msg.b_brain_coral, 'b.brain_coral' ],
		    [ Blockly.Msg.b_brain_coral_block, 'b.brain_coral_block' ],
		    [ Blockly.Msg.b_brain_coral_fan, 'b.brain_coral_fan' ],
		    [ Blockly.Msg.b_brain_coral_wall_fan, 'b.brain_coral_wall_fan' ],
		    [ Blockly.Msg.b_brewing_stand, 'b.brewing_stand' ],
		    [ Blockly.Msg.b_brick_slab, 'b.brick_slab' ],
		    [ Blockly.Msg.b_brick_stairs, 'b.brick_stairs' ],
		    [ Blockly.Msg.b_brick_wall, 'b.brick_wall' ],
		    [ Blockly.Msg.b_bricks, 'b.bricks' ],
		    [ Blockly.Msg.b_brown_banner, 'b.brown_banner' ],
		    [ Blockly.Msg.b_brown_bed, 'b.brown_bed' ],
		    [ Blockly.Msg.b_brown_carpet, 'b.brown_carpet' ],
		    [ Blockly.Msg.b_brown_concrete, 'b.brown_concrete' ],
		    [ Blockly.Msg.b_brown_concrete_powder, 'b.brown_concrete_powder' ],
		    [ Blockly.Msg.b_brown_glazed_terracotta, 'b.brown_glazed_terracotta' ],
		    [ Blockly.Msg.b_brown_mushroom, 'b.brown_mushroom' ],
		    [ Blockly.Msg.b_brown_mushroom_block, 'b.brown_mushroom_block' ],
		    [ Blockly.Msg.b_brown_shulker_box, 'b.brown_shulker_box' ],
		    [ Blockly.Msg.b_brown_stained_glass, 'b.brown_stained_glass' ],
		    [ Blockly.Msg.b_brown_stained_glass_pane, 'b.brown_stained_glass_pane' ],
		    [ Blockly.Msg.b_brown_terracotta, 'b.brown_terracotta' ],
		    [ Blockly.Msg.b_brown_wool, 'b.brown_wool' ],
		    [ Blockly.Msg.b_bubble_column, 'b.bubble_column' ],
		    [ Blockly.Msg.b_bubble_coral, 'b.bubble_coral' ],
		    [ Blockly.Msg.b_bubble_coral_block, 'b.bubble_coral_block' ],
		    [ Blockly.Msg.b_bubble_coral_fan, 'b.bubble_coral_fan' ],
		    [ Blockly.Msg.b_bubble_coral_wall_fan, 'b.bubble_coral_wall_fan' ],
		    [ Blockly.Msg.b_cactus, 'b.cactus' ],
		    [ Blockly.Msg.b_cake, 'b.cake' ],
		    [ Blockly.Msg.b_campfire, 'b.campfire' ],
		    [ Blockly.Msg.b_carrots, 'b.carrots' ],
		    [ Blockly.Msg.b_cartography_table, 'b.cartography_table' ],
		    [ Blockly.Msg.b_carved_pumpkin, 'b.carved_pumpkin' ],
		    [ Blockly.Msg.b_cauldron, 'b.cauldron' ],
		    [ Blockly.Msg.b_cave_air, 'b.cave_air' ],
		    [ Blockly.Msg.b_chain, 'b.chain' ],
		    [ Blockly.Msg.b_chain_command_block, 'b.chain_command_block' ],
		    [ Blockly.Msg.b_chest, 'b.chest' ],
		    [ Blockly.Msg.b_chipped_anvil, 'b.chipped_anvil' ],
		    [ Blockly.Msg.b_chiseled_nether_bricks, 'b.chiseled_nether_bricks' ],
		    [ Blockly.Msg.b_chiseled_polished_blackstone, 'b.chiseled_polished_blackstone' ],
		    [ Blockly.Msg.b_chiseled_quartz_block, 'b.chiseled_quartz_block' ],
		    [ Blockly.Msg.b_chiseled_red_sandstone, 'b.chiseled_red_sandstone' ],
		    [ Blockly.Msg.b_chiseled_sandstone, 'b.chiseled_sandstone' ],
		    [ Blockly.Msg.b_chiseled_stone_bricks, 'b.chiseled_stone_bricks' ],
		    [ Blockly.Msg.b_chorus_flower, 'b.chorus_flower' ],
		    [ Blockly.Msg.b_chorus_plant, 'b.chorus_plant' ],
		    [ Blockly.Msg.b_clay, 'b.clay' ],
		    [ Blockly.Msg.b_coal_block, 'b.coal_block' ],
		    [ Blockly.Msg.b_coal_ore, 'b.coal_ore' ],
		    [ Blockly.Msg.b_coarse_dirt, 'b.coarse_dirt' ],
		    [ Blockly.Msg.b_cobblestone, 'b.cobblestone' ],
		    [ Blockly.Msg.b_cobblestone_slab, 'b.cobblestone_slab' ],
		    [ Blockly.Msg.b_cobblestone_stairs, 'b.cobblestone_stairs' ],
		    [ Blockly.Msg.b_cobblestone_wall, 'b.cobblestone_wall' ],
		    [ Blockly.Msg.b_cobweb, 'b.cobweb' ],
		    [ Blockly.Msg.b_cocoa, 'b.cocoa' ],
		    [ Blockly.Msg.b_command_block, 'b.command_block' ],
		    [ Blockly.Msg.b_comparator, 'b.comparator' ],
		    [ Blockly.Msg.b_composter, 'b.composter' ],
		    [ Blockly.Msg.b_conduit, 'b.conduit' ],
		    [ Blockly.Msg.b_cornflower, 'b.cornflower' ],
		    [ Blockly.Msg.b_cracked_nether_bricks, 'b.cracked_nether_bricks' ],
		    [ Blockly.Msg.b_cracked_polished_blackstone_bricks, 'b.cracked_polished_blackstone_bricks' ],
		    [ Blockly.Msg.b_cracked_stone_bricks, 'b.cracked_stone_bricks' ],
		    [ Blockly.Msg.b_crafting_table, 'b.crafting_table' ],
		    [ Blockly.Msg.b_creeper_head, 'b.creeper_head' ],
		    [ Blockly.Msg.b_creeper_wall_head, 'b.creeper_wall_head' ],
		    [ Blockly.Msg.b_crimson_button, 'b.crimson_button' ],
		    [ Blockly.Msg.b_crimson_door, 'b.crimson_door' ],
		    [ Blockly.Msg.b_crimson_fence, 'b.crimson_fence' ],
		    [ Blockly.Msg.b_crimson_fence_gate, 'b.crimson_fence_gate' ],
		    [ Blockly.Msg.b_crimson_fungus, 'b.crimson_fungus' ],
		    [ Blockly.Msg.b_crimson_hyphae, 'b.crimson_hyphae' ],
		    [ Blockly.Msg.b_crimson_nylium, 'b.crimson_nylium' ],
		    [ Blockly.Msg.b_crimson_planks, 'b.crimson_planks' ],
		    [ Blockly.Msg.b_crimson_pressure_plate, 'b.crimson_pressure_plate' ],
		    [ Blockly.Msg.b_crimson_roots, 'b.crimson_roots' ],
		    [ Blockly.Msg.b_crimson_sign, 'b.crimson_sign' ],
		    [ Blockly.Msg.b_crimson_slab, 'b.crimson_slab' ],
		    [ Blockly.Msg.b_crimson_stairs, 'b.crimson_stairs' ],
		    [ Blockly.Msg.b_crimson_stem, 'b.crimson_stem' ],
		    [ Blockly.Msg.b_crimson_trapdoor, 'b.crimson_trapdoor' ],
		    [ Blockly.Msg.b_crimson_wall_sign, 'b.crimson_wall_sign' ],
		    [ Blockly.Msg.b_crying_obsidian, 'b.crying_obsidian' ],
		    [ Blockly.Msg.b_cut_red_sandstone, 'b.cut_red_sandstone' ],
		    [ Blockly.Msg.b_cut_red_sandstone_slab, 'b.cut_red_sandstone_slab' ],
		    [ Blockly.Msg.b_cut_sandstone, 'b.cut_sandstone' ],
		    [ Blockly.Msg.b_cut_sandstone_slab, 'b.cut_sandstone_slab' ],
		    [ Blockly.Msg.b_cyan_banner, 'b.cyan_banner' ],
		    [ Blockly.Msg.b_cyan_bed, 'b.cyan_bed' ],
		    [ Blockly.Msg.b_cyan_carpet, 'b.cyan_carpet' ],
		    [ Blockly.Msg.b_cyan_concrete, 'b.cyan_concrete' ],
		    [ Blockly.Msg.b_cyan_concrete_powder, 'b.cyan_concrete_powder' ],
		    [ Blockly.Msg.b_cyan_glazed_terracotta, 'b.cyan_glazed_terracotta' ],
		    [ Blockly.Msg.b_cyan_shulker_box, 'b.cyan_shulker_box' ],
		    [ Blockly.Msg.b_cyan_stained_glass, 'b.cyan_stained_glass' ],
		    [ Blockly.Msg.b_cyan_stained_glass_pane, 'b.cyan_stained_glass_pane' ],
		    [ Blockly.Msg.b_cyan_terracotta, 'b.cyan_terracotta' ],
		    [ Blockly.Msg.b_cyan_wool, 'b.cyan_wool' ],
		    [ Blockly.Msg.b_damaged_anvil, 'b.damaged_anvil' ],
		    [ Blockly.Msg.b_dandelion, 'b.dandelion' ],
		    [ Blockly.Msg.b_dark_oak_button, 'b.dark_oak_button' ],
		    [ Blockly.Msg.b_dark_oak_door, 'b.dark_oak_door' ],
		    [ Blockly.Msg.b_dark_oak_fence, 'b.dark_oak_fence' ],
		    [ Blockly.Msg.b_dark_oak_fence_gate, 'b.dark_oak_fence_gate' ],
		    [ Blockly.Msg.b_dark_oak_leaves, 'b.dark_oak_leaves' ],
		    [ Blockly.Msg.b_dark_oak_log, 'b.dark_oak_log' ],
		    [ Blockly.Msg.b_dark_oak_planks, 'b.dark_oak_planks' ],
		    [ Blockly.Msg.b_dark_oak_pressure_plate, 'b.dark_oak_pressure_plate' ],
		    [ Blockly.Msg.b_dark_oak_sapling, 'b.dark_oak_sapling' ],
		    [ Blockly.Msg.b_dark_oak_sign, 'b.dark_oak_sign' ],
		    [ Blockly.Msg.b_dark_oak_slab, 'b.dark_oak_slab' ],
		    [ Blockly.Msg.b_dark_oak_stairs, 'b.dark_oak_stairs' ],
		    [ Blockly.Msg.b_dark_oak_trapdoor, 'b.dark_oak_trapdoor' ],
		    [ Blockly.Msg.b_dark_oak_wall_sign, 'b.dark_oak_wall_sign' ],
		    [ Blockly.Msg.b_dark_oak_wood, 'b.dark_oak_wood' ],
		    [ Blockly.Msg.b_dark_prismarine, 'b.dark_prismarine' ],
		    [ Blockly.Msg.b_dark_prismarine_slab, 'b.dark_prismarine_slab' ],
		    [ Blockly.Msg.b_dark_prismarine_stairs, 'b.dark_prismarine_stairs' ],
		    [ Blockly.Msg.b_daylight_detector, 'b.daylight_detector' ],
		    [ Blockly.Msg.b_dead_brain_coral, 'b.dead_brain_coral' ],
		    [ Blockly.Msg.b_dead_brain_coral_block, 'b.dead_brain_coral_block' ],
		    [ Blockly.Msg.b_dead_brain_coral_fan, 'b.dead_brain_coral_fan' ],
		    [ Blockly.Msg.b_dead_brain_coral_wall_fan, 'b.dead_brain_coral_wall_fan' ],
		    [ Blockly.Msg.b_dead_bubble_coral, 'b.dead_bubble_coral' ],
		    [ Blockly.Msg.b_dead_bubble_coral_block, 'b.dead_bubble_coral_block' ],
		    [ Blockly.Msg.b_dead_bubble_coral_fan, 'b.dead_bubble_coral_fan' ],
		    [ Blockly.Msg.b_dead_bubble_coral_wall_fan, 'b.dead_bubble_coral_wall_fan' ],
		    [ Blockly.Msg.b_dead_bush, 'b.dead_bush' ],
		    [ Blockly.Msg.b_dead_fire_coral, 'b.dead_fire_coral' ],
		    [ Blockly.Msg.b_dead_fire_coral_block, 'b.dead_fire_coral_block' ],
		    [ Blockly.Msg.b_dead_fire_coral_fan, 'b.dead_fire_coral_fan' ],
		    [ Blockly.Msg.b_dead_fire_coral_wall_fan, 'b.dead_fire_coral_wall_fan' ],
		    [ Blockly.Msg.b_dead_horn_coral, 'b.dead_horn_coral' ],
		    [ Blockly.Msg.b_dead_horn_coral_block, 'b.dead_horn_coral_block' ],
		    [ Blockly.Msg.b_dead_horn_coral_fan, 'b.dead_horn_coral_fan' ],
		    [ Blockly.Msg.b_dead_horn_coral_wall_fan, 'b.dead_horn_coral_wall_fan' ],
		    [ Blockly.Msg.b_dead_tube_coral, 'b.dead_tube_coral' ],
		    [ Blockly.Msg.b_dead_tube_coral_block, 'b.dead_tube_coral_block' ],
		    [ Blockly.Msg.b_dead_tube_coral_fan, 'b.dead_tube_coral_fan' ],
		    [ Blockly.Msg.b_dead_tube_coral_wall_fan, 'b.dead_tube_coral_wall_fan' ],
		    [ Blockly.Msg.b_detector_rail, 'b.detector_rail' ],
		    [ Blockly.Msg.b_diamond_block, 'b.diamond_block' ],
		    [ Blockly.Msg.b_diamond_ore, 'b.diamond_ore' ],
		    [ Blockly.Msg.b_diorite, 'b.diorite' ],
		    [ Blockly.Msg.b_diorite_slab, 'b.diorite_slab' ],
		    [ Blockly.Msg.b_diorite_stairs, 'b.diorite_stairs' ],
		    [ Blockly.Msg.b_diorite_wall, 'b.diorite_wall' ],
		    [ Blockly.Msg.b_dirt, 'b.dirt' ],
		    [ Blockly.Msg.b_dispenser, 'b.dispenser' ],
		    [ Blockly.Msg.b_dragon_egg, 'b.dragon_egg' ],
		    [ Blockly.Msg.b_dragon_head, 'b.dragon_head' ],
		    [ Blockly.Msg.b_dragon_wall_head, 'b.dragon_wall_head' ],
		    [ Blockly.Msg.b_dried_kelp_block, 'b.dried_kelp_block' ],
		    [ Blockly.Msg.b_dropper, 'b.dropper' ],
		    [ Blockly.Msg.b_emerald_block, 'b.emerald_block' ],
		    [ Blockly.Msg.b_emerald_ore, 'b.emerald_ore' ],
		    [ Blockly.Msg.b_enchanting_table, 'b.enchanting_table' ],
		    [ Blockly.Msg.b_end_gateway, 'b.end_gateway' ],
		    [ Blockly.Msg.b_end_portal, 'b.end_portal' ],
		    [ Blockly.Msg.b_end_portal_frame, 'b.end_portal_frame' ],
		    [ Blockly.Msg.b_end_rod, 'b.end_rod' ],
		    [ Blockly.Msg.b_end_stone, 'b.end_stone' ],
		    [ Blockly.Msg.b_end_stone_brick_slab, 'b.end_stone_brick_slab' ],
		    [ Blockly.Msg.b_end_stone_brick_stairs, 'b.end_stone_brick_stairs' ],
		    [ Blockly.Msg.b_end_stone_brick_wall, 'b.end_stone_brick_wall' ],
		    [ Blockly.Msg.b_end_stone_bricks, 'b.end_stone_bricks' ],
		    [ Blockly.Msg.b_ender_chest, 'b.ender_chest' ],
		    [ Blockly.Msg.b_farmland, 'b.farmland' ],
		    [ Blockly.Msg.b_fern, 'b.fern' ],
		    [ Blockly.Msg.b_fire, 'b.fire' ],
		    [ Blockly.Msg.b_fire_coral, 'b.fire_coral' ],
		    [ Blockly.Msg.b_fire_coral_block, 'b.fire_coral_block' ],
		    [ Blockly.Msg.b_fire_coral_fan, 'b.fire_coral_fan' ],
		    [ Blockly.Msg.b_fire_coral_wall_fan, 'b.fire_coral_wall_fan' ],
		    [ Blockly.Msg.b_fletching_table, 'b.fletching_table' ],
		    [ Blockly.Msg.b_flower_pot, 'b.flower_pot' ],
		    [ Blockly.Msg.b_frosted_ice, 'b.frosted_ice' ],
		    [ Blockly.Msg.b_furnace, 'b.furnace' ],
		    [ Blockly.Msg.b_gilded_blackstone, 'b.gilded_blackstone' ],
		    [ Blockly.Msg.b_glass, 'b.glass' ],
		    [ Blockly.Msg.b_glass_pane, 'b.glass_pane' ],
		    [ Blockly.Msg.b_glowstone, 'b.glowstone' ],
		    [ Blockly.Msg.b_gold_block, 'b.gold_block' ],
		    [ Blockly.Msg.b_gold_ore, 'b.gold_ore' ],
		    [ Blockly.Msg.b_granite, 'b.granite' ],
		    [ Blockly.Msg.b_granite_slab, 'b.granite_slab' ],
		    [ Blockly.Msg.b_granite_stairs, 'b.granite_stairs' ],
		    [ Blockly.Msg.b_granite_wall, 'b.granite_wall' ],
		    [ Blockly.Msg.b_grass, 'b.grass' ],
		    [ Blockly.Msg.b_grass_block, 'b.grass_block' ],
		    [ Blockly.Msg.b_grass_path, 'b.grass_path' ],
		    [ Blockly.Msg.b_gravel, 'b.gravel' ],
		    [ Blockly.Msg.b_gray_banner, 'b.gray_banner' ],
		    [ Blockly.Msg.b_gray_bed, 'b.gray_bed' ],
		    [ Blockly.Msg.b_gray_carpet, 'b.gray_carpet' ],
		    [ Blockly.Msg.b_gray_concrete, 'b.gray_concrete' ],
		    [ Blockly.Msg.b_gray_concrete_powder, 'b.gray_concrete_powder' ],
		    [ Blockly.Msg.b_gray_glazed_terracotta, 'b.gray_glazed_terracotta' ],
		    [ Blockly.Msg.b_gray_shulker_box, 'b.gray_shulker_box' ],
		    [ Blockly.Msg.b_gray_stained_glass, 'b.gray_stained_glass' ],
		    [ Blockly.Msg.b_gray_stained_glass_pane, 'b.gray_stained_glass_pane' ],
		    [ Blockly.Msg.b_gray_terracotta, 'b.gray_terracotta' ],
		    [ Blockly.Msg.b_gray_wool, 'b.gray_wool' ],
		    [ Blockly.Msg.b_green_banner, 'b.green_banner' ],
		    [ Blockly.Msg.b_green_bed, 'b.green_bed' ],
		    [ Blockly.Msg.b_green_carpet, 'b.green_carpet' ],
		    [ Blockly.Msg.b_green_concrete, 'b.green_concrete' ],
		    [ Blockly.Msg.b_green_concrete_powder, 'b.green_concrete_powder' ],
		    [ Blockly.Msg.b_green_glazed_terracotta, 'b.green_glazed_terracotta' ],
		    [ Blockly.Msg.b_green_shulker_box, 'b.green_shulker_box' ],
		    [ Blockly.Msg.b_green_stained_glass, 'b.green_stained_glass' ],
		    [ Blockly.Msg.b_green_stained_glass_pane, 'b.green_stained_glass_pane' ],
		    [ Blockly.Msg.b_green_terracotta, 'b.green_terracotta' ],
		    [ Blockly.Msg.b_green_wool, 'b.green_wool' ],
		    [ Blockly.Msg.b_grindstone, 'b.grindstone' ],
		    [ Blockly.Msg.b_hay_block, 'b.hay_block' ],
		    [ Blockly.Msg.b_heavy_weighted_pressure_plate, 'b.heavy_weighted_pressure_plate' ],
		    [ Blockly.Msg.b_honey_block, 'b.honey_block' ],
		    [ Blockly.Msg.b_honeycomb_block, 'b.honeycomb_block' ],
		    [ Blockly.Msg.b_hopper, 'b.hopper' ],
		    [ Blockly.Msg.b_horn_coral, 'b.horn_coral' ],
		    [ Blockly.Msg.b_horn_coral_block, 'b.horn_coral_block' ],
		    [ Blockly.Msg.b_horn_coral_fan, 'b.horn_coral_fan' ],
		    [ Blockly.Msg.b_horn_coral_wall_fan, 'b.horn_coral_wall_fan' ],
		    [ Blockly.Msg.b_ice, 'b.ice' ],
		    [ Blockly.Msg.b_infested_chiseled_stone_bricks, 'b.infested_chiseled_stone_bricks' ],
		    [ Blockly.Msg.b_infested_cobblestone, 'b.infested_cobblestone' ],
		    [ Blockly.Msg.b_infested_cracked_stone_bricks, 'b.infested_cracked_stone_bricks' ],
		    [ Blockly.Msg.b_infested_mossy_stone_bricks, 'b.infested_mossy_stone_bricks' ],
		    [ Blockly.Msg.b_infested_stone, 'b.infested_stone' ],
		    [ Blockly.Msg.b_infested_stone_bricks, 'b.infested_stone_bricks' ],
		    [ Blockly.Msg.b_iron_bars, 'b.iron_bars' ],
		    [ Blockly.Msg.b_iron_block, 'b.iron_block' ],
		    [ Blockly.Msg.b_iron_door, 'b.iron_door' ],
		    [ Blockly.Msg.b_iron_ore, 'b.iron_ore' ],
		    [ Blockly.Msg.b_iron_trapdoor, 'b.iron_trapdoor' ],
		    [ Blockly.Msg.b_jack_o_lantern, 'b.jack_o_lantern' ],
		    [ Blockly.Msg.b_jigsaw, 'b.jigsaw' ],
		    [ Blockly.Msg.b_jukebox, 'b.jukebox' ],
		    [ Blockly.Msg.b_jungle_button, 'b.jungle_button' ],
		    [ Blockly.Msg.b_jungle_door, 'b.jungle_door' ],
		    [ Blockly.Msg.b_jungle_fence, 'b.jungle_fence' ],
		    [ Blockly.Msg.b_jungle_fence_gate, 'b.jungle_fence_gate' ],
		    [ Blockly.Msg.b_jungle_leaves, 'b.jungle_leaves' ],
		    [ Blockly.Msg.b_jungle_log, 'b.jungle_log' ],
		    [ Blockly.Msg.b_jungle_planks, 'b.jungle_planks' ],
		    [ Blockly.Msg.b_jungle_pressure_plate, 'b.jungle_pressure_plate' ],
		    [ Blockly.Msg.b_jungle_sapling, 'b.jungle_sapling' ],
		    [ Blockly.Msg.b_jungle_sign, 'b.jungle_sign' ],
		    [ Blockly.Msg.b_jungle_slab, 'b.jungle_slab' ],
		    [ Blockly.Msg.b_jungle_stairs, 'b.jungle_stairs' ],
		    [ Blockly.Msg.b_jungle_trapdoor, 'b.jungle_trapdoor' ],
		    [ Blockly.Msg.b_jungle_wall_sign, 'b.jungle_wall_sign' ],
		    [ Blockly.Msg.b_jungle_wood, 'b.jungle_wood' ],
		    [ Blockly.Msg.b_kelp, 'b.kelp' ],
		    [ Blockly.Msg.b_kelp_plant, 'b.kelp_plant' ],
		    [ Blockly.Msg.b_ladder, 'b.ladder' ],
		    [ Blockly.Msg.b_lantern, 'b.lantern' ],
		    [ Blockly.Msg.b_lapis_block, 'b.lapis_block' ],
		    [ Blockly.Msg.b_lapis_ore, 'b.lapis_ore' ],
		    [ Blockly.Msg.b_large_fern, 'b.large_fern' ],
		    [ Blockly.Msg.b_lectern, 'b.lectern' ],
		    [ Blockly.Msg.b_lever, 'b.lever' ],
		    [ Blockly.Msg.b_light_blue_banner, 'b.light_blue_banner' ],
		    [ Blockly.Msg.b_light_blue_bed, 'b.light_blue_bed' ],
		    [ Blockly.Msg.b_light_blue_carpet, 'b.light_blue_carpet' ],
		    [ Blockly.Msg.b_light_blue_concrete, 'b.light_blue_concrete' ],
		    [ Blockly.Msg.b_light_blue_concrete_powder, 'b.light_blue_concrete_powder' ],
		    [ Blockly.Msg.b_light_blue_glazed_terracotta, 'b.light_blue_glazed_terracotta' ],
		    [ Blockly.Msg.b_light_blue_shulker_box, 'b.light_blue_shulker_box' ],
		    [ Blockly.Msg.b_light_blue_stained_glass, 'b.light_blue_stained_glass' ],
		    [ Blockly.Msg.b_light_blue_stained_glass_pane, 'b.light_blue_stained_glass_pane' ],
		    [ Blockly.Msg.b_light_blue_terracotta, 'b.light_blue_terracotta' ],
		    [ Blockly.Msg.b_light_blue_wool, 'b.light_blue_wool' ],
		    [ Blockly.Msg.b_light_gray_banner, 'b.light_gray_banner' ],
		    [ Blockly.Msg.b_light_gray_bed, 'b.light_gray_bed' ],
		    [ Blockly.Msg.b_light_gray_carpet, 'b.light_gray_carpet' ],
		    [ Blockly.Msg.b_light_gray_concrete, 'b.light_gray_concrete' ],
		    [ Blockly.Msg.b_light_gray_concrete_powder, 'b.light_gray_concrete_powder' ],
		    [ Blockly.Msg.b_light_gray_glazed_terracotta, 'b.light_gray_glazed_terracotta' ],
		    [ Blockly.Msg.b_light_gray_shulker_box, 'b.light_gray_shulker_box' ],
		    [ Blockly.Msg.b_light_gray_stained_glass, 'b.light_gray_stained_glass' ],
		    [ Blockly.Msg.b_light_gray_stained_glass_pane, 'b.light_gray_stained_glass_pane' ],
		    [ Blockly.Msg.b_light_gray_terracotta, 'b.light_gray_terracotta' ],
		    [ Blockly.Msg.b_light_gray_wool, 'b.light_gray_wool' ],
		    [ Blockly.Msg.b_light_weighted_pressure_plate, 'b.light_weighted_pressure_plate' ],
		    [ Blockly.Msg.b_lilac, 'b.lilac' ],
		    [ Blockly.Msg.b_lily_of_the_valley, 'b.lily_of_the_valley' ],
		    [ Blockly.Msg.b_lily_pad, 'b.lily_pad' ],
		    [ Blockly.Msg.b_lime_banner, 'b.lime_banner' ],
		    [ Blockly.Msg.b_lime_bed, 'b.lime_bed' ],
		    [ Blockly.Msg.b_lime_carpet, 'b.lime_carpet' ],
		    [ Blockly.Msg.b_lime_concrete, 'b.lime_concrete' ],
		    [ Blockly.Msg.b_lime_concrete_powder, 'b.lime_concrete_powder' ],
		    [ Blockly.Msg.b_lime_glazed_terracotta, 'b.lime_glazed_terracotta' ],
		    [ Blockly.Msg.b_lime_shulker_box, 'b.lime_shulker_box' ],
		    [ Blockly.Msg.b_lime_stained_glass, 'b.lime_stained_glass' ],
		    [ Blockly.Msg.b_lime_stained_glass_pane, 'b.lime_stained_glass_pane' ],
		    [ Blockly.Msg.b_lime_terracotta, 'b.lime_terracotta' ],
		    [ Blockly.Msg.b_lime_wool, 'b.lime_wool' ],
		    [ Blockly.Msg.b_lodestone, 'b.lodestone' ],
		    [ Blockly.Msg.b_loom, 'b.loom' ],
		    [ Blockly.Msg.b_magenta_banner, 'b.magenta_banner' ],
		    [ Blockly.Msg.b_magenta_bed, 'b.magenta_bed' ],
		    [ Blockly.Msg.b_magenta_carpet, 'b.magenta_carpet' ],
		    [ Blockly.Msg.b_magenta_concrete, 'b.magenta_concrete' ],
		    [ Blockly.Msg.b_magenta_concrete_powder, 'b.magenta_concrete_powder' ],
		    [ Blockly.Msg.b_magenta_glazed_terracotta, 'b.magenta_glazed_terracotta' ],
		    [ Blockly.Msg.b_magenta_shulker_box, 'b.magenta_shulker_box' ],
		    [ Blockly.Msg.b_magenta_stained_glass, 'b.magenta_stained_glass' ],
		    [ Blockly.Msg.b_magenta_stained_glass_pane, 'b.magenta_stained_glass_pane' ],
		    [ Blockly.Msg.b_magenta_terracotta, 'b.magenta_terracotta' ],
		    [ Blockly.Msg.b_magenta_wool, 'b.magenta_wool' ],
		    [ Blockly.Msg.b_magma_block, 'b.magma_block' ],
		    [ Blockly.Msg.b_melon, 'b.melon' ],
		    [ Blockly.Msg.b_melon_stem, 'b.melon_stem' ],
		    [ Blockly.Msg.b_mossy_cobblestone, 'b.mossy_cobblestone' ],
		    [ Blockly.Msg.b_mossy_cobblestone_slab, 'b.mossy_cobblestone_slab' ],
		    [ Blockly.Msg.b_mossy_cobblestone_stairs, 'b.mossy_cobblestone_stairs' ],
		    [ Blockly.Msg.b_mossy_cobblestone_wall, 'b.mossy_cobblestone_wall' ],
		    [ Blockly.Msg.b_mossy_stone_brick_slab, 'b.mossy_stone_brick_slab' ],
		    [ Blockly.Msg.b_mossy_stone_brick_stairs, 'b.mossy_stone_brick_stairs' ],
		    [ Blockly.Msg.b_mossy_stone_brick_wall, 'b.mossy_stone_brick_wall' ],
		    [ Blockly.Msg.b_mossy_stone_bricks, 'b.mossy_stone_bricks' ],
		    [ Blockly.Msg.b_moving_piston, 'b.moving_piston' ],
		    [ Blockly.Msg.b_mushroom_stem, 'b.mushroom_stem' ],
		    [ Blockly.Msg.b_mycelium, 'b.mycelium' ],
		    [ Blockly.Msg.b_nether_brick_fence, 'b.nether_brick_fence' ],
		    [ Blockly.Msg.b_nether_brick_slab, 'b.nether_brick_slab' ],
		    [ Blockly.Msg.b_nether_brick_stairs, 'b.nether_brick_stairs' ],
		    [ Blockly.Msg.b_nether_brick_wall, 'b.nether_brick_wall' ],
		    [ Blockly.Msg.b_nether_bricks, 'b.nether_bricks' ],
		    [ Blockly.Msg.b_nether_gold_ore, 'b.nether_gold_ore' ],
		    [ Blockly.Msg.b_nether_portal, 'b.nether_portal' ],
		    [ Blockly.Msg.b_nether_quartz_ore, 'b.nether_quartz_ore' ],
		    [ Blockly.Msg.b_nether_sprouts, 'b.nether_sprouts' ],
		    [ Blockly.Msg.b_nether_wart, 'b.nether_wart' ],
		    [ Blockly.Msg.b_nether_wart_block, 'b.nether_wart_block' ],
		    [ Blockly.Msg.b_netherite_block, 'b.netherite_block' ],
		    [ Blockly.Msg.b_netherrack, 'b.netherrack' ],
		    [ Blockly.Msg.b_note_block, 'b.note_block' ],
		    [ Blockly.Msg.b_oak_button, 'b.oak_button' ],
		    [ Blockly.Msg.b_oak_door, 'b.oak_door' ],
		    [ Blockly.Msg.b_oak_fence, 'b.oak_fence' ],
		    [ Blockly.Msg.b_oak_fence_gate, 'b.oak_fence_gate' ],
		    [ Blockly.Msg.b_oak_leaves, 'b.oak_leaves' ],
		    [ Blockly.Msg.b_oak_log, 'b.oak_log' ],
		    [ Blockly.Msg.b_oak_planks, 'b.oak_planks' ],
		    [ Blockly.Msg.b_oak_pressure_plate, 'b.oak_pressure_plate' ],
		    [ Blockly.Msg.b_oak_sapling, 'b.oak_sapling' ],
		    [ Blockly.Msg.b_oak_sign, 'b.oak_sign' ],
		    [ Blockly.Msg.b_oak_slab, 'b.oak_slab' ],
		    [ Blockly.Msg.b_oak_stairs, 'b.oak_stairs' ],
		    [ Blockly.Msg.b_oak_trapdoor, 'b.oak_trapdoor' ],
		    [ Blockly.Msg.b_oak_wall_sign, 'b.oak_wall_sign' ],
		    [ Blockly.Msg.b_oak_wood, 'b.oak_wood' ],
		    [ Blockly.Msg.b_observer, 'b.observer' ],
		    [ Blockly.Msg.b_obsidian, 'b.obsidian' ],
		    [ Blockly.Msg.b_ominous_banner, 'b.ominous_banner' ],
		    [ Blockly.Msg.b_orange_banner, 'b.orange_banner' ],
		    [ Blockly.Msg.b_orange_bed, 'b.orange_bed' ],
		    [ Blockly.Msg.b_orange_carpet, 'b.orange_carpet' ],
		    [ Blockly.Msg.b_orange_concrete, 'b.orange_concrete' ],
		    [ Blockly.Msg.b_orange_concrete_powder, 'b.orange_concrete_powder' ],
		    [ Blockly.Msg.b_orange_glazed_terracotta, 'b.orange_glazed_terracotta' ],
		    [ Blockly.Msg.b_orange_shulker_box, 'b.orange_shulker_box' ],
		    [ Blockly.Msg.b_orange_stained_glass, 'b.orange_stained_glass' ],
		    [ Blockly.Msg.b_orange_stained_glass_pane, 'b.orange_stained_glass_pane' ],
		    [ Blockly.Msg.b_orange_terracotta, 'b.orange_terracotta' ],
		    [ Blockly.Msg.b_orange_tulip, 'b.orange_tulip' ],
		    [ Blockly.Msg.b_orange_wool, 'b.orange_wool' ],
		    [ Blockly.Msg.b_oxeye_daisy, 'b.oxeye_daisy' ],
		    [ Blockly.Msg.b_packed_ice, 'b.packed_ice' ],
		    [ Blockly.Msg.b_peony, 'b.peony' ],
		    [ Blockly.Msg.b_petrified_oak_slab, 'b.petrified_oak_slab' ],
		    [ Blockly.Msg.b_pink_banner, 'b.pink_banner' ],
		    [ Blockly.Msg.b_pink_bed, 'b.pink_bed' ],
		    [ Blockly.Msg.b_pink_carpet, 'b.pink_carpet' ],
		    [ Blockly.Msg.b_pink_concrete, 'b.pink_concrete' ],
		    [ Blockly.Msg.b_pink_concrete_powder, 'b.pink_concrete_powder' ],
		    [ Blockly.Msg.b_pink_glazed_terracotta, 'b.pink_glazed_terracotta' ],
		    [ Blockly.Msg.b_pink_shulker_box, 'b.pink_shulker_box' ],
		    [ Blockly.Msg.b_pink_stained_glass, 'b.pink_stained_glass' ],
		    [ Blockly.Msg.b_pink_stained_glass_pane, 'b.pink_stained_glass_pane' ],
		    [ Blockly.Msg.b_pink_terracotta, 'b.pink_terracotta' ],
		    [ Blockly.Msg.b_pink_tulip, 'b.pink_tulip' ],
		    [ Blockly.Msg.b_pink_wool, 'b.pink_wool' ],
		    [ Blockly.Msg.b_piston, 'b.piston' ],
		    [ Blockly.Msg.b_piston_head, 'b.piston_head' ],
		    [ Blockly.Msg.b_player_head, 'b.player_head' ],
		    [ Blockly.Msg.b_player_wall_head, 'b.player_wall_head' ],
		    [ Blockly.Msg.b_podzol, 'b.podzol' ],
		    [ Blockly.Msg.b_polished_andesite, 'b.polished_andesite' ],
		    [ Blockly.Msg.b_polished_andesite_slab, 'b.polished_andesite_slab' ],
		    [ Blockly.Msg.b_polished_andesite_stairs, 'b.polished_andesite_stairs' ],
		    [ Blockly.Msg.b_polished_basalt, 'b.polished_basalt' ],
		    [ Blockly.Msg.b_polished_blackstone, 'b.polished_blackstone' ],
		    [ Blockly.Msg.b_polished_blackstone_brick_slab, 'b.polished_blackstone_brick_slab' ],
		    [ Blockly.Msg.b_polished_blackstone_brick_stairs, 'b.polished_blackstone_brick_stairs' ],
		    [ Blockly.Msg.b_polished_blackstone_brick_wall, 'b.polished_blackstone_brick_wall' ],
		    [ Blockly.Msg.b_polished_blackstone_bricks, 'b.polished_blackstone_bricks' ],
		    [ Blockly.Msg.b_polished_blackstone_button, 'b.polished_blackstone_button' ],
		    [ Blockly.Msg.b_polished_blackstone_pressure_plate, 'b.polished_blackstone_pressure_plate' ],
		    [ Blockly.Msg.b_polished_blackstone_slab, 'b.polished_blackstone_slab' ],
		    [ Blockly.Msg.b_polished_blackstone_stairs, 'b.polished_blackstone_stairs' ],
		    [ Blockly.Msg.b_polished_blackstone_wall, 'b.polished_blackstone_wall' ],
		    [ Blockly.Msg.b_polished_diorite, 'b.polished_diorite' ],
		    [ Blockly.Msg.b_polished_diorite_slab, 'b.polished_diorite_slab' ],
		    [ Blockly.Msg.b_polished_diorite_stairs, 'b.polished_diorite_stairs' ],
		    [ Blockly.Msg.b_polished_granite, 'b.polished_granite' ],
		    [ Blockly.Msg.b_polished_granite_slab, 'b.polished_granite_slab' ],
		    [ Blockly.Msg.b_polished_granite_stairs, 'b.polished_granite_stairs' ],
		    [ Blockly.Msg.b_poppy, 'b.poppy' ],
		    [ Blockly.Msg.b_potatoes, 'b.potatoes' ],
		    [ Blockly.Msg.b_potted_acacia_sapling, 'b.potted_acacia_sapling' ],
		    [ Blockly.Msg.b_potted_allium, 'b.potted_allium' ],
		    [ Blockly.Msg.b_potted_azure_bluet, 'b.potted_azure_bluet' ],
		    [ Blockly.Msg.b_potted_bamboo, 'b.potted_bamboo' ],
		    [ Blockly.Msg.b_potted_birch_sapling, 'b.potted_birch_sapling' ],
		    [ Blockly.Msg.b_potted_blue_orchid, 'b.potted_blue_orchid' ],
		    [ Blockly.Msg.b_potted_brown_mushroom, 'b.potted_brown_mushroom' ],
		    [ Blockly.Msg.b_potted_cactus, 'b.potted_cactus' ],
		    [ Blockly.Msg.b_potted_cornflower, 'b.potted_cornflower' ],
		    [ Blockly.Msg.b_potted_crimson_fungus, 'b.potted_crimson_fungus' ],
		    [ Blockly.Msg.b_potted_crimson_roots, 'b.potted_crimson_roots' ],
		    [ Blockly.Msg.b_potted_dandelion, 'b.potted_dandelion' ],
		    [ Blockly.Msg.b_potted_dark_oak_sapling, 'b.potted_dark_oak_sapling' ],
		    [ Blockly.Msg.b_potted_dead_bush, 'b.potted_dead_bush' ],
		    [ Blockly.Msg.b_potted_fern, 'b.potted_fern' ],
		    [ Blockly.Msg.b_potted_jungle_sapling, 'b.potted_jungle_sapling' ],
		    [ Blockly.Msg.b_potted_lily_of_the_valley, 'b.potted_lily_of_the_valley' ],
		    [ Blockly.Msg.b_potted_oak_sapling, 'b.potted_oak_sapling' ],
		    [ Blockly.Msg.b_potted_orange_tulip, 'b.potted_orange_tulip' ],
		    [ Blockly.Msg.b_potted_oxeye_daisy, 'b.potted_oxeye_daisy' ],
		    [ Blockly.Msg.b_potted_pink_tulip, 'b.potted_pink_tulip' ],
		    [ Blockly.Msg.b_potted_poppy, 'b.potted_poppy' ],
		    [ Blockly.Msg.b_potted_red_mushroom, 'b.potted_red_mushroom' ],
		    [ Blockly.Msg.b_potted_red_tulip, 'b.potted_red_tulip' ],
		    [ Blockly.Msg.b_potted_spruce_sapling, 'b.potted_spruce_sapling' ],
		    [ Blockly.Msg.b_potted_warped_fungus, 'b.potted_warped_fungus' ],
		    [ Blockly.Msg.b_potted_warped_roots, 'b.potted_warped_roots' ],
		    [ Blockly.Msg.b_potted_white_tulip, 'b.potted_white_tulip' ],
		    [ Blockly.Msg.b_potted_wither_rose, 'b.potted_wither_rose' ],
		    [ Blockly.Msg.b_powered_rail, 'b.powered_rail' ],
		    [ Blockly.Msg.b_prismarine, 'b.prismarine' ],
		    [ Blockly.Msg.b_prismarine_brick_slab, 'b.prismarine_brick_slab' ],
		    [ Blockly.Msg.b_prismarine_brick_stairs, 'b.prismarine_brick_stairs' ],
		    [ Blockly.Msg.b_prismarine_bricks, 'b.prismarine_bricks' ],
		    [ Blockly.Msg.b_prismarine_slab, 'b.prismarine_slab' ],
		    [ Blockly.Msg.b_prismarine_stairs, 'b.prismarine_stairs' ],
		    [ Blockly.Msg.b_prismarine_wall, 'b.prismarine_wall' ],
		    [ Blockly.Msg.b_pumpkin, 'b.pumpkin' ],
		    [ Blockly.Msg.b_pumpkin_stem, 'b.pumpkin_stem' ],
		    [ Blockly.Msg.b_purple_banner, 'b.purple_banner' ],
		    [ Blockly.Msg.b_purple_bed, 'b.purple_bed' ],
		    [ Blockly.Msg.b_purple_carpet, 'b.purple_carpet' ],
		    [ Blockly.Msg.b_purple_concrete, 'b.purple_concrete' ],
		    [ Blockly.Msg.b_purple_concrete_powder, 'b.purple_concrete_powder' ],
		    [ Blockly.Msg.b_purple_glazed_terracotta, 'b.purple_glazed_terracotta' ],
		    [ Blockly.Msg.b_purple_shulker_box, 'b.purple_shulker_box' ],
		    [ Blockly.Msg.b_purple_stained_glass, 'b.purple_stained_glass' ],
		    [ Blockly.Msg.b_purple_stained_glass_pane, 'b.purple_stained_glass_pane' ],
		    [ Blockly.Msg.b_purple_terracotta, 'b.purple_terracotta' ],
		    [ Blockly.Msg.b_purple_wool, 'b.purple_wool' ],
		    [ Blockly.Msg.b_purpur_block, 'b.purpur_block' ],
		    [ Blockly.Msg.b_purpur_pillar, 'b.purpur_pillar' ],
		    [ Blockly.Msg.b_purpur_slab, 'b.purpur_slab' ],
		    [ Blockly.Msg.b_purpur_stairs, 'b.purpur_stairs' ],
		    [ Blockly.Msg.b_quartz_block, 'b.quartz_block' ],
		    [ Blockly.Msg.b_quartz_bricks, 'b.quartz_bricks' ],
		    [ Blockly.Msg.b_quartz_pillar, 'b.quartz_pillar' ],
		    [ Blockly.Msg.b_quartz_slab, 'b.quartz_slab' ],
		    [ Blockly.Msg.b_quartz_stairs, 'b.quartz_stairs' ],
		    [ Blockly.Msg.b_rail, 'b.rail' ],
		    [ Blockly.Msg.b_red_banner, 'b.red_banner' ],
		    [ Blockly.Msg.b_red_bed, 'b.red_bed' ],
		    [ Blockly.Msg.b_red_carpet, 'b.red_carpet' ],
		    [ Blockly.Msg.b_red_concrete, 'b.red_concrete' ],
		    [ Blockly.Msg.b_red_concrete_powder, 'b.red_concrete_powder' ],
		    [ Blockly.Msg.b_red_glazed_terracotta, 'b.red_glazed_terracotta' ],
		    [ Blockly.Msg.b_red_mushroom, 'b.red_mushroom' ],
		    [ Blockly.Msg.b_red_mushroom_block, 'b.red_mushroom_block' ],
		    [ Blockly.Msg.b_red_nether_brick_slab, 'b.red_nether_brick_slab' ],
		    [ Blockly.Msg.b_red_nether_brick_stairs, 'b.red_nether_brick_stairs' ],
		    [ Blockly.Msg.b_red_nether_brick_wall, 'b.red_nether_brick_wall' ],
		    [ Blockly.Msg.b_red_nether_bricks, 'b.red_nether_bricks' ],
		    [ Blockly.Msg.b_red_sand, 'b.red_sand' ],
		    [ Blockly.Msg.b_red_sandstone, 'b.red_sandstone' ],
		    [ Blockly.Msg.b_red_sandstone_slab, 'b.red_sandstone_slab' ],
		    [ Blockly.Msg.b_red_sandstone_stairs, 'b.red_sandstone_stairs' ],
		    [ Blockly.Msg.b_red_sandstone_wall, 'b.red_sandstone_wall' ],
		    [ Blockly.Msg.b_red_shulker_box, 'b.red_shulker_box' ],
		    [ Blockly.Msg.b_red_stained_glass, 'b.red_stained_glass' ],
		    [ Blockly.Msg.b_red_stained_glass_pane, 'b.red_stained_glass_pane' ],
		    [ Blockly.Msg.b_red_terracotta, 'b.red_terracotta' ],
		    [ Blockly.Msg.b_red_tulip, 'b.red_tulip' ],
		    [ Blockly.Msg.b_red_wool, 'b.red_wool' ],
		    [ Blockly.Msg.b_redstone_block, 'b.redstone_block' ],
		    [ Blockly.Msg.b_redstone_lamp, 'b.redstone_lamp' ],
		    [ Blockly.Msg.b_redstone_ore, 'b.redstone_ore' ],
		    [ Blockly.Msg.b_redstone_torch, 'b.redstone_torch' ],
		    [ Blockly.Msg.b_redstone_wall_torch, 'b.redstone_wall_torch' ],
		    [ Blockly.Msg.b_redstone_wire, 'b.redstone_wire' ],
		    [ Blockly.Msg.b_repeater, 'b.repeater' ],
		    [ Blockly.Msg.b_repeating_command_block, 'b.repeating_command_block' ],
		    [ Blockly.Msg.b_respawn_anchor, 'b.respawn_anchor' ],
		    [ Blockly.Msg.b_rose_bush, 'b.rose_bush' ],
		    [ Blockly.Msg.b_sand, 'b.sand' ],
		    [ Blockly.Msg.b_sandstone, 'b.sandstone' ],
		    [ Blockly.Msg.b_sandstone_slab, 'b.sandstone_slab' ],
		    [ Blockly.Msg.b_sandstone_stairs, 'b.sandstone_stairs' ],
		    [ Blockly.Msg.b_sandstone_wall, 'b.sandstone_wall' ],
		    [ Blockly.Msg.b_scaffolding, 'b.scaffolding' ],
		    [ Blockly.Msg.b_sea_lantern, 'b.sea_lantern' ],
		    [ Blockly.Msg.b_sea_pickle, 'b.sea_pickle' ],
		    [ Blockly.Msg.b_seagrass, 'b.seagrass' ],
		    [ Blockly.Msg.b_set_spawn, 'b.set_spawn' ],
		    [ Blockly.Msg.b_shroomlight, 'b.shroomlight' ],
		    [ Blockly.Msg.b_shulker_box, 'b.shulker_box' ],
		    [ Blockly.Msg.b_skeleton_skull, 'b.skeleton_skull' ],
		    [ Blockly.Msg.b_skeleton_wall_skull, 'b.skeleton_wall_skull' ],
		    [ Blockly.Msg.b_slime_block, 'b.slime_block' ],
		    [ Blockly.Msg.b_smithing_table, 'b.smithing_table' ],
		    [ Blockly.Msg.b_smoker, 'b.smoker' ],
		    [ Blockly.Msg.b_smooth_quartz, 'b.smooth_quartz' ],
		    [ Blockly.Msg.b_smooth_quartz_slab, 'b.smooth_quartz_slab' ],
		    [ Blockly.Msg.b_smooth_quartz_stairs, 'b.smooth_quartz_stairs' ],
		    [ Blockly.Msg.b_smooth_red_sandstone, 'b.smooth_red_sandstone' ],
		    [ Blockly.Msg.b_smooth_red_sandstone_slab, 'b.smooth_red_sandstone_slab' ],
		    [ Blockly.Msg.b_smooth_red_sandstone_stairs, 'b.smooth_red_sandstone_stairs' ],
		    [ Blockly.Msg.b_smooth_sandstone, 'b.smooth_sandstone' ],
		    [ Blockly.Msg.b_smooth_sandstone_slab, 'b.smooth_sandstone_slab' ],
		    [ Blockly.Msg.b_smooth_sandstone_stairs, 'b.smooth_sandstone_stairs' ],
		    [ Blockly.Msg.b_smooth_stone, 'b.smooth_stone' ],
		    [ Blockly.Msg.b_smooth_stone_slab, 'b.smooth_stone_slab' ],
		    [ Blockly.Msg.b_snow, 'b.snow' ],
		    [ Blockly.Msg.b_snow_block, 'b.snow_block' ],
		    [ Blockly.Msg.b_soul_campfire, 'b.soul_campfire' ],
		    [ Blockly.Msg.b_soul_fire, 'b.soul_fire' ],
		    [ Blockly.Msg.b_soul_lantern, 'b.soul_lantern' ],
		    [ Blockly.Msg.b_soul_sand, 'b.soul_sand' ],
		    [ Blockly.Msg.b_soul_soil, 'b.soul_soil' ],
		    [ Blockly.Msg.b_soul_torch, 'b.soul_torch' ],
		    [ Blockly.Msg.b_soul_wall_torch, 'b.soul_wall_torch' ],
		    [ Blockly.Msg.b_spawner, 'b.spawner' ],
		    [ Blockly.Msg.b_sponge, 'b.sponge' ],
		    [ Blockly.Msg.b_spruce_button, 'b.spruce_button' ],
		    [ Blockly.Msg.b_spruce_door, 'b.spruce_door' ],
		    [ Blockly.Msg.b_spruce_fence, 'b.spruce_fence' ],
		    [ Blockly.Msg.b_spruce_fence_gate, 'b.spruce_fence_gate' ],
		    [ Blockly.Msg.b_spruce_leaves, 'b.spruce_leaves' ],
		    [ Blockly.Msg.b_spruce_log, 'b.spruce_log' ],
		    [ Blockly.Msg.b_spruce_planks, 'b.spruce_planks' ],
		    [ Blockly.Msg.b_spruce_pressure_plate, 'b.spruce_pressure_plate' ],
		    [ Blockly.Msg.b_spruce_sapling, 'b.spruce_sapling' ],
		    [ Blockly.Msg.b_spruce_sign, 'b.spruce_sign' ],
		    [ Blockly.Msg.b_spruce_slab, 'b.spruce_slab' ],
		    [ Blockly.Msg.b_spruce_stairs, 'b.spruce_stairs' ],
		    [ Blockly.Msg.b_spruce_trapdoor, 'b.spruce_trapdoor' ],
		    [ Blockly.Msg.b_spruce_wall_sign, 'b.spruce_wall_sign' ],
		    [ Blockly.Msg.b_spruce_wood, 'b.spruce_wood' ],
		    [ Blockly.Msg.b_sticky_piston, 'b.sticky_piston' ],
		    [ Blockly.Msg.b_stone, 'b.stone' ],
		    [ Blockly.Msg.b_stone_brick_slab, 'b.stone_brick_slab' ],
		    [ Blockly.Msg.b_stone_brick_stairs, 'b.stone_brick_stairs' ],
		    [ Blockly.Msg.b_stone_brick_wall, 'b.stone_brick_wall' ],
		    [ Blockly.Msg.b_stone_bricks, 'b.stone_bricks' ],
		    [ Blockly.Msg.b_stone_button, 'b.stone_button' ],
		    [ Blockly.Msg.b_stone_pressure_plate, 'b.stone_pressure_plate' ],
		    [ Blockly.Msg.b_stone_slab, 'b.stone_slab' ],
		    [ Blockly.Msg.b_stone_stairs, 'b.stone_stairs' ],
		    [ Blockly.Msg.b_stonecutter, 'b.stonecutter' ],
		    [ Blockly.Msg.b_stripped_acacia_log, 'b.stripped_acacia_log' ],
		    [ Blockly.Msg.b_stripped_acacia_wood, 'b.stripped_acacia_wood' ],
		    [ Blockly.Msg.b_stripped_birch_log, 'b.stripped_birch_log' ],
		    [ Blockly.Msg.b_stripped_birch_wood, 'b.stripped_birch_wood' ],
		    [ Blockly.Msg.b_stripped_crimson_hyphae, 'b.stripped_crimson_hyphae' ],
		    [ Blockly.Msg.b_stripped_crimson_stem, 'b.stripped_crimson_stem' ],
		    [ Blockly.Msg.b_stripped_dark_oak_log, 'b.stripped_dark_oak_log' ],
		    [ Blockly.Msg.b_stripped_dark_oak_wood, 'b.stripped_dark_oak_wood' ],
		    [ Blockly.Msg.b_stripped_jungle_log, 'b.stripped_jungle_log' ],
		    [ Blockly.Msg.b_stripped_jungle_wood, 'b.stripped_jungle_wood' ],
		    [ Blockly.Msg.b_stripped_oak_log, 'b.stripped_oak_log' ],
		    [ Blockly.Msg.b_stripped_oak_wood, 'b.stripped_oak_wood' ],
		    [ Blockly.Msg.b_stripped_spruce_log, 'b.stripped_spruce_log' ],
		    [ Blockly.Msg.b_stripped_spruce_wood, 'b.stripped_spruce_wood' ],
		    [ Blockly.Msg.b_stripped_warped_hyphae, 'b.stripped_warped_hyphae' ],
		    [ Blockly.Msg.b_stripped_warped_stem, 'b.stripped_warped_stem' ],
		    [ Blockly.Msg.b_structure_block, 'b.structure_block' ],
		    [ Blockly.Msg.b_structure_void, 'b.structure_void' ],
		    [ Blockly.Msg.b_sugar_cane, 'b.sugar_cane' ],
		    [ Blockly.Msg.b_sunflower, 'b.sunflower' ],
		    [ Blockly.Msg.b_sweet_berry_bush, 'b.sweet_berry_bush' ],
		    [ Blockly.Msg.b_tall_grass, 'b.tall_grass' ],
		    [ Blockly.Msg.b_tall_seagrass, 'b.tall_seagrass' ],
		    [ Blockly.Msg.b_target, 'b.target' ],
		    [ Blockly.Msg.b_terracotta, 'b.terracotta' ],
		    [ Blockly.Msg.b_torch, 'b.torch' ],
		    [ Blockly.Msg.b_trapped_chest, 'b.trapped_chest' ],
		    [ Blockly.Msg.b_tripwire, 'b.tripwire' ],
		    [ Blockly.Msg.b_tripwire_hook, 'b.tripwire_hook' ],
		    [ Blockly.Msg.b_tube_coral, 'b.tube_coral' ],
		    [ Blockly.Msg.b_tube_coral_block, 'b.tube_coral_block' ],
		    [ Blockly.Msg.b_tube_coral_fan, 'b.tube_coral_fan' ],
		    [ Blockly.Msg.b_tube_coral_wall_fan, 'b.tube_coral_wall_fan' ],
		    [ Blockly.Msg.b_turtle_egg, 'b.turtle_egg' ],
		    [ Blockly.Msg.b_twisting_vines, 'b.twisting_vines' ],
		    [ Blockly.Msg.b_twisting_vines_plant, 'b.twisting_vines_plant' ],
		    [ Blockly.Msg.b_vine, 'b.vine' ],
		    [ Blockly.Msg.b_void_air, 'b.void_air' ],
		    [ Blockly.Msg.b_wall_torch, 'b.wall_torch' ],
		    [ Blockly.Msg.b_warped_button, 'b.warped_button' ],
		    [ Blockly.Msg.b_warped_door, 'b.warped_door' ],
		    [ Blockly.Msg.b_warped_fence, 'b.warped_fence' ],
		    [ Blockly.Msg.b_warped_fence_gate, 'b.warped_fence_gate' ],
		    [ Blockly.Msg.b_warped_fungus, 'b.warped_fungus' ],
		    [ Blockly.Msg.b_warped_hyphae, 'b.warped_hyphae' ],
		    [ Blockly.Msg.b_warped_nylium, 'b.warped_nylium' ],
		    [ Blockly.Msg.b_warped_planks, 'b.warped_planks' ],
		    [ Blockly.Msg.b_warped_pressure_plate, 'b.warped_pressure_plate' ],
		    [ Blockly.Msg.b_warped_roots, 'b.warped_roots' ],
		    [ Blockly.Msg.b_warped_sign, 'b.warped_sign' ],
		    [ Blockly.Msg.b_warped_slab, 'b.warped_slab' ],
		    [ Blockly.Msg.b_warped_stairs, 'b.warped_stairs' ],
		    [ Blockly.Msg.b_warped_stem, 'b.warped_stem' ],
		    [ Blockly.Msg.b_warped_trapdoor, 'b.warped_trapdoor' ],
		    [ Blockly.Msg.b_warped_wall_sign, 'b.warped_wall_sign' ],
		    [ Blockly.Msg.b_warped_wart_block, 'b.warped_wart_block' ],
		    [ Blockly.Msg.b_water, 'b.water' ],
		    [ Blockly.Msg.b_weeping_vines, 'b.weeping_vines' ],
		    [ Blockly.Msg.b_weeping_vines_plant, 'b.weeping_vines_plant' ],
		    [ Blockly.Msg.b_wet_sponge, 'b.wet_sponge' ],
		    [ Blockly.Msg.b_wheat, 'b.wheat' ],
		    [ Blockly.Msg.b_white_banner, 'b.white_banner' ],
		    [ Blockly.Msg.b_white_bed, 'b.white_bed' ],
		    [ Blockly.Msg.b_white_carpet, 'b.white_carpet' ],
		    [ Blockly.Msg.b_white_concrete, 'b.white_concrete' ],
		    [ Blockly.Msg.b_white_concrete_powder, 'b.white_concrete_powder' ],
		    [ Blockly.Msg.b_white_glazed_terracotta, 'b.white_glazed_terracotta' ],
		    [ Blockly.Msg.b_white_shulker_box, 'b.white_shulker_box' ],
		    [ Blockly.Msg.b_white_stained_glass, 'b.white_stained_glass' ],
		    [ Blockly.Msg.b_white_stained_glass_pane, 'b.white_stained_glass_pane' ],
		    [ Blockly.Msg.b_white_terracotta, 'b.white_terracotta' ],
		    [ Blockly.Msg.b_white_tulip, 'b.white_tulip' ],
		    [ Blockly.Msg.b_white_wool, 'b.white_wool' ],
		    [ Blockly.Msg.b_wither_rose, 'b.wither_rose' ],
		    [ Blockly.Msg.b_wither_skeleton_skull, 'b.wither_skeleton_skull' ],
		    [ Blockly.Msg.b_wither_skeleton_wall_skull, 'b.wither_skeleton_wall_skull' ],
		    [ Blockly.Msg.b_yellow_banner, 'b.yellow_banner' ],
		    [ Blockly.Msg.b_yellow_bed, 'b.yellow_bed' ],
		    [ Blockly.Msg.b_yellow_carpet, 'b.yellow_carpet' ],
		    [ Blockly.Msg.b_yellow_concrete, 'b.yellow_concrete' ],
		    [ Blockly.Msg.b_yellow_concrete_powder, 'b.yellow_concrete_powder' ],
		    [ Blockly.Msg.b_yellow_glazed_terracotta, 'b.yellow_glazed_terracotta' ],
		    [ Blockly.Msg.b_yellow_shulker_box, 'b.yellow_shulker_box' ],
		    [ Blockly.Msg.b_yellow_stained_glass, 'b.yellow_stained_glass' ],
		    [ Blockly.Msg.b_yellow_stained_glass_pane, 'b.yellow_stained_glass_pane' ],
		    [ Blockly.Msg.b_yellow_terracotta, 'b.yellow_terracotta' ],
		    [ Blockly.Msg.b_yellow_wool, 'b.yellow_wool' ],
		    [ Blockly.Msg.b_zombie_head, 'b.zombie_head' ],
		    [ Blockly.Msg.b_zombie_wall_head, 'b.zombie_wall_head' ],
		].sort(compareMCobjects)
	return obList
}

function getMaterials_opOnly() {
	return [		
	    [ Blockly.Msg.b_tnt, 'b.tnt' ],
	    [ Blockly.Msg.b_lava, 'b.lava' ],
		
].sort(compareMCobjects)
}

function getParticles() {
	return [		
		
		[ Blockly.Msg.MC_particles+ ' ' + Blockly.Msg.i_dragon_breath, 'p.DRAGON_BREATH' ],
		[ Blockly.Msg.MC_particles+ ' ' + Blockly.Msg.b_tnt, 'p.EXPLOSION_NORMAL' ],
		[ Blockly.Msg.MC_particles+ ' ' + Blockly.Msg.i_music_disc_blocks, 'p.NOTE' ],
		[ Blockly.Msg.MC_particles+ ' ' + Blockly.Msg.b_snow, 'p.SNOWBALL' ],
		[ Blockly.Msg.MC_particles+ ' ' + Blockly.Msg.e_witch, 'p.SPELL_WITCH' ],
		[ Blockly.Msg.MC_particles+ ' ' + Blockly.Msg.b_torch, 'p.SMOKE_NORMAL' ],
		[ Blockly.Msg.MC_particles+ ' ' + Blockly.Msg.b_water, 'p.DRIP_WATER' ],
		[ Blockly.Msg.MC_particles+ ' ' + Blockly.Msg.i_firework_star, 'p.FIREWORKS_SPARK' ],
		[ Blockly.Msg.MC_particles+ ' ' + Blockly.Msg.i_redstone, 'p.REDSTONE' ],
		[ Blockly.Msg.MC_particles+ ' ' + Blockly.Msg.e_slime, 'p.SLIME' ],
		[ Blockly.Msg.MC_particles+ ' ' + Blockly.Msg.b_furnace, 'p.FLAME' ],
		[ Blockly.Msg.MC_particles+ ' ' + Blockly.Msg.b_lava, 'p.LAVA' ]


].sort(compareMCobjects)
}

function getItems() {
	return [				
		   [ Blockly.Msg.i_acacia_boat, 'i.acacia_boat' ],
		    [ Blockly.Msg.i_apple, 'i.apple' ],
		    [ Blockly.Msg.i_armor_stand, 'i.armor_stand' ],
		    [ Blockly.Msg.i_arrow, 'i.arrow' ],
		    [ Blockly.Msg.i_baked_potato, 'i.baked_potato' ],
		    [ Blockly.Msg.i_bat_spawn_egg, 'i.bat_spawn_egg' ],
		    [ Blockly.Msg.i_bee_spawn_egg, 'i.bee_spawn_egg' ],
		    [ Blockly.Msg.i_beef, 'i.beef' ],
		    [ Blockly.Msg.i_beetroot, 'i.beetroot' ],
		    [ Blockly.Msg.i_beetroot_seeds, 'i.beetroot_seeds' ],
		    [ Blockly.Msg.i_beetroot_soup, 'i.beetroot_soup' ],
		    [ Blockly.Msg.i_birch_boat, 'i.birch_boat' ],
		    [ Blockly.Msg.i_black_dye, 'i.black_dye' ],
		    [ Blockly.Msg.i_blaze_powder, 'i.blaze_powder' ],
		    [ Blockly.Msg.i_blaze_rod, 'i.blaze_rod' ],
		    [ Blockly.Msg.i_blaze_spawn_egg, 'i.blaze_spawn_egg' ],
		    [ Blockly.Msg.i_blue_dye, 'i.blue_dye' ],
		    [ Blockly.Msg.i_bone, 'i.bone' ],
		    [ Blockly.Msg.i_bone_meal, 'i.bone_meal' ],
		    [ Blockly.Msg.i_book, 'i.book' ],
		    [ Blockly.Msg.i_bow, 'i.bow' ],
		    [ Blockly.Msg.i_bowl, 'i.bowl' ],
		    [ Blockly.Msg.i_bread, 'i.bread' ],
		    [ Blockly.Msg.i_brewing_stand, 'i.brewing_stand' ],
		    [ Blockly.Msg.i_brick, 'i.brick' ],
		    [ Blockly.Msg.i_brown_dye, 'i.brown_dye' ],
		    [ Blockly.Msg.i_bucket, 'i.bucket' ],
		    [ Blockly.Msg.i_carrot, 'i.carrot' ],
		    [ Blockly.Msg.i_carrot_on_a_stick, 'i.carrot_on_a_stick' ],
		    [ Blockly.Msg.i_cat_spawn_egg, 'i.cat_spawn_egg' ],
		    [ Blockly.Msg.i_cauldron, 'i.cauldron' ],
		    [ Blockly.Msg.i_cave_spider_spawn_egg, 'i.cave_spider_spawn_egg' ],
		    [ Blockly.Msg.i_chainmail_boots, 'i.chainmail_boots' ],
		    [ Blockly.Msg.i_chainmail_chestplate, 'i.chainmail_chestplate' ],
		    [ Blockly.Msg.i_chainmail_helmet, 'i.chainmail_helmet' ],
		    [ Blockly.Msg.i_chainmail_leggings, 'i.chainmail_leggings' ],
		    [ Blockly.Msg.i_charcoal, 'i.charcoal' ],
		    [ Blockly.Msg.i_chest_minecart, 'i.chest_minecart' ],
		    [ Blockly.Msg.i_chicken, 'i.chicken' ],
		    [ Blockly.Msg.i_chicken_spawn_egg, 'i.chicken_spawn_egg' ],
		    [ Blockly.Msg.i_chorus_fruit, 'i.chorus_fruit' ],
		    [ Blockly.Msg.i_clay_ball, 'i.clay_ball' ],
		    [ Blockly.Msg.i_clock, 'i.clock' ],
		    [ Blockly.Msg.i_coal, 'i.coal' ],
		    [ Blockly.Msg.i_cocoa_beans, 'i.cocoa_beans' ],
		    [ Blockly.Msg.i_cod, 'i.cod' ],
		    [ Blockly.Msg.i_cod_bucket, 'i.cod_bucket' ],
		    [ Blockly.Msg.i_cod_spawn_egg, 'i.cod_spawn_egg' ],
		    [ Blockly.Msg.i_command_block_minecart, 'i.command_block_minecart' ],
		    [ Blockly.Msg.i_compass, 'i.compass' ],
		    [ Blockly.Msg.i_cooked_beef, 'i.cooked_beef' ],
		    [ Blockly.Msg.i_cooked_chicken, 'i.cooked_chicken' ],
		    [ Blockly.Msg.i_cooked_cod, 'i.cooked_cod' ],
		    [ Blockly.Msg.i_cooked_mutton, 'i.cooked_mutton' ],
		    [ Blockly.Msg.i_cooked_porkchop, 'i.cooked_porkchop' ],
		    [ Blockly.Msg.i_cooked_rabbit, 'i.cooked_rabbit' ],
		    [ Blockly.Msg.i_cooked_salmon, 'i.cooked_salmon' ],
		    [ Blockly.Msg.i_cookie, 'i.cookie' ],
		    [ Blockly.Msg.i_cow_spawn_egg, 'i.cow_spawn_egg' ],
		    [ Blockly.Msg.i_creeper_banner_pattern, 'i.creeper_banner_pattern' ],
		    [ Blockly.Msg.i_creeper_spawn_egg, 'i.creeper_spawn_egg' ],
		    [ Blockly.Msg.i_crossbow, 'i.crossbow' ],
		    [ Blockly.Msg.i_cyan_dye, 'i.cyan_dye' ],
		    [ Blockly.Msg.i_dark_oak_boat, 'i.dark_oak_boat' ],
		    [ Blockly.Msg.i_debug_stick, 'i.debug_stick' ],
		    [ Blockly.Msg.i_diamond, 'i.diamond' ],
		    [ Blockly.Msg.i_diamond_axe, 'i.diamond_axe' ],
		    [ Blockly.Msg.i_diamond_boots, 'i.diamond_boots' ],
		    [ Blockly.Msg.i_diamond_chestplate, 'i.diamond_chestplate' ],
		    [ Blockly.Msg.i_diamond_helmet, 'i.diamond_helmet' ],
		    [ Blockly.Msg.i_diamond_hoe, 'i.diamond_hoe' ],
		    [ Blockly.Msg.i_diamond_horse_armor, 'i.diamond_horse_armor' ],
		    [ Blockly.Msg.i_diamond_leggings, 'i.diamond_leggings' ],
		    [ Blockly.Msg.i_diamond_pickaxe, 'i.diamond_pickaxe' ],
		    [ Blockly.Msg.i_diamond_shovel, 'i.diamond_shovel' ],
		    [ Blockly.Msg.i_diamond_sword, 'i.diamond_sword' ],
		    [ Blockly.Msg.i_dolphin_spawn_egg, 'i.dolphin_spawn_egg' ],
		    [ Blockly.Msg.i_donkey_spawn_egg, 'i.donkey_spawn_egg' ],
		    [ Blockly.Msg.i_dragon_breath, 'i.dragon_breath' ],
		    [ Blockly.Msg.i_dried_kelp, 'i.dried_kelp' ],
		    [ Blockly.Msg.i_drowned_spawn_egg, 'i.drowned_spawn_egg' ],
		    [ Blockly.Msg.i_egg, 'i.egg' ],
		    [ Blockly.Msg.i_elder_guardian_spawn_egg, 'i.elder_guardian_spawn_egg' ],
		    [ Blockly.Msg.i_elytra, 'i.elytra' ],
		    [ Blockly.Msg.i_emerald, 'i.emerald' ],
		    [ Blockly.Msg.i_enchanted_book, 'i.enchanted_book' ],
		    [ Blockly.Msg.i_enchanted_golden_apple, 'i.enchanted_golden_apple' ],
		    [ Blockly.Msg.i_end_crystal, 'i.end_crystal' ],
		    [ Blockly.Msg.i_ender_eye, 'i.ender_eye' ],
		    [ Blockly.Msg.i_ender_pearl, 'i.ender_pearl' ],
		    [ Blockly.Msg.i_enderman_spawn_egg, 'i.enderman_spawn_egg' ],
		    [ Blockly.Msg.i_endermite_spawn_egg, 'i.endermite_spawn_egg' ],
		    [ Blockly.Msg.i_evoker_spawn_egg, 'i.evoker_spawn_egg' ],
		    [ Blockly.Msg.i_experience_bottle, 'i.experience_bottle' ],
		    [ Blockly.Msg.i_feather, 'i.feather' ],
		    [ Blockly.Msg.i_fermented_spider_eye, 'i.fermented_spider_eye' ],
		    [ Blockly.Msg.i_filled_map, 'i.filled_map' ],
		    [ Blockly.Msg.i_fire_charge, 'i.fire_charge' ],
		    [ Blockly.Msg.i_firework_rocket, 'i.firework_rocket' ],
		    [ Blockly.Msg.i_firework_star, 'i.firework_star' ],
		    [ Blockly.Msg.i_fishing_rod, 'i.fishing_rod' ],
		    [ Blockly.Msg.i_flint, 'i.flint' ],
		    [ Blockly.Msg.i_flint_and_steel, 'i.flint_and_steel' ],
		    [ Blockly.Msg.i_flower_banner_pattern, 'i.flower_banner_pattern' ],
		    [ Blockly.Msg.i_flower_pot, 'i.flower_pot' ],
		    [ Blockly.Msg.i_fox_spawn_egg, 'i.fox_spawn_egg' ],
		    [ Blockly.Msg.i_furnace_minecart, 'i.furnace_minecart' ],
		    [ Blockly.Msg.i_ghast_spawn_egg, 'i.ghast_spawn_egg' ],
		    [ Blockly.Msg.i_ghast_tear, 'i.ghast_tear' ],
		    [ Blockly.Msg.i_glass_bottle, 'i.glass_bottle' ],
		    [ Blockly.Msg.i_glistering_melon_slice, 'i.glistering_melon_slice' ],
		    [ Blockly.Msg.i_globe_banner_pattern, 'i.globe_banner_pattern' ],
		    [ Blockly.Msg.i_glowstone_dust, 'i.glowstone_dust' ],
		    [ Blockly.Msg.i_gold_ingot, 'i.gold_ingot' ],
		    [ Blockly.Msg.i_gold_nugget, 'i.gold_nugget' ],
		    [ Blockly.Msg.i_golden_apple, 'i.golden_apple' ],
		    [ Blockly.Msg.i_golden_axe, 'i.golden_axe' ],
		    [ Blockly.Msg.i_golden_boots, 'i.golden_boots' ],
		    [ Blockly.Msg.i_golden_carrot, 'i.golden_carrot' ],
		    [ Blockly.Msg.i_golden_chestplate, 'i.golden_chestplate' ],
		    [ Blockly.Msg.i_golden_helmet, 'i.golden_helmet' ],
		    [ Blockly.Msg.i_golden_hoe, 'i.golden_hoe' ],
		    [ Blockly.Msg.i_golden_horse_armor, 'i.golden_horse_armor' ],
		    [ Blockly.Msg.i_golden_leggings, 'i.golden_leggings' ],
		    [ Blockly.Msg.i_golden_pickaxe, 'i.golden_pickaxe' ],
		    [ Blockly.Msg.i_golden_shovel, 'i.golden_shovel' ],
		    [ Blockly.Msg.i_golden_sword, 'i.golden_sword' ],
		    [ Blockly.Msg.i_gray_dye, 'i.gray_dye' ],
		    [ Blockly.Msg.i_green_dye, 'i.green_dye' ],
		    [ Blockly.Msg.i_guardian_spawn_egg, 'i.guardian_spawn_egg' ],
		    [ Blockly.Msg.i_gunpowder, 'i.gunpowder' ],
		    [ Blockly.Msg.i_heart_of_the_sea, 'i.heart_of_the_sea' ],
		    [ Blockly.Msg.i_hoglin_spawn_egg, 'i.hoglin_spawn_egg' ],
		    [ Blockly.Msg.i_honey_bottle, 'i.honey_bottle' ],
		    [ Blockly.Msg.i_honeycomb, 'i.honeycomb' ],
		    [ Blockly.Msg.i_hopper_minecart, 'i.hopper_minecart' ],
		    [ Blockly.Msg.i_horse_spawn_egg, 'i.horse_spawn_egg' ],
		    [ Blockly.Msg.i_husk_spawn_egg, 'i.husk_spawn_egg' ],
		    [ Blockly.Msg.i_ink_sac, 'i.ink_sac' ],
		    [ Blockly.Msg.i_iron_axe, 'i.iron_axe' ],
		    [ Blockly.Msg.i_iron_boots, 'i.iron_boots' ],
		    [ Blockly.Msg.i_iron_chestplate, 'i.iron_chestplate' ],
		    [ Blockly.Msg.i_iron_helmet, 'i.iron_helmet' ],
		    [ Blockly.Msg.i_iron_hoe, 'i.iron_hoe' ],
		    [ Blockly.Msg.i_iron_horse_armor, 'i.iron_horse_armor' ],
		    [ Blockly.Msg.i_iron_ingot, 'i.iron_ingot' ],
		    [ Blockly.Msg.i_iron_leggings, 'i.iron_leggings' ],
		    [ Blockly.Msg.i_iron_nugget, 'i.iron_nugget' ],
		    [ Blockly.Msg.i_iron_pickaxe, 'i.iron_pickaxe' ],
		    [ Blockly.Msg.i_iron_shovel, 'i.iron_shovel' ],
		    [ Blockly.Msg.i_iron_sword, 'i.iron_sword' ],
		    [ Blockly.Msg.i_item_frame, 'i.item_frame' ],
		    [ Blockly.Msg.i_jungle_boat, 'i.jungle_boat' ],
		    [ Blockly.Msg.i_knowledge_book, 'i.knowledge_book' ],
		    [ Blockly.Msg.i_lapis_lazuli, 'i.lapis_lazuli' ],
		    [ Blockly.Msg.i_lava_bucket, 'i.lava_bucket' ],
		    [ Blockly.Msg.i_lead, 'i.lead' ],
		    [ Blockly.Msg.i_leather, 'i.leather' ],
		    [ Blockly.Msg.i_leather_boots, 'i.leather_boots' ],
		    [ Blockly.Msg.i_leather_chestplate, 'i.leather_chestplate' ],
		    [ Blockly.Msg.i_leather_helmet, 'i.leather_helmet' ],
		    [ Blockly.Msg.i_leather_horse_armor, 'i.leather_horse_armor' ],
		    [ Blockly.Msg.i_leather_leggings, 'i.leather_leggings' ],
		    [ Blockly.Msg.i_light_blue_dye, 'i.light_blue_dye' ],
		    [ Blockly.Msg.i_light_gray_dye, 'i.light_gray_dye' ],
		    [ Blockly.Msg.i_lime_dye, 'i.lime_dye' ],
		    [ Blockly.Msg.i_lingering_potion, 'i.lingering_potion' ],
		    [ Blockly.Msg.i_llama_spawn_egg, 'i.llama_spawn_egg' ],
		    [ Blockly.Msg.i_lodestone_compass, 'i.lodestone_compass' ],
		    [ Blockly.Msg.i_magenta_dye, 'i.magenta_dye' ],
		    [ Blockly.Msg.i_magma_cream, 'i.magma_cream' ],
		    [ Blockly.Msg.i_magma_cube_spawn_egg, 'i.magma_cube_spawn_egg' ],
		    [ Blockly.Msg.i_map, 'i.map' ],
		    [ Blockly.Msg.i_melon_seeds, 'i.melon_seeds' ],
		    [ Blockly.Msg.i_melon_slice, 'i.melon_slice' ],
		    [ Blockly.Msg.i_milk_bucket, 'i.milk_bucket' ],
		    [ Blockly.Msg.i_minecart, 'i.minecart' ],
		    [ Blockly.Msg.i_mojang_banner_pattern, 'i.mojang_banner_pattern' ],
		    [ Blockly.Msg.i_mooshroom_spawn_egg, 'i.mooshroom_spawn_egg' ],
		    [ Blockly.Msg.i_mule_spawn_egg, 'i.mule_spawn_egg' ],
		    [ Blockly.Msg.i_mushroom_stew, 'i.mushroom_stew' ],
		    [ Blockly.Msg.i_music_disc_blocks, 'i.music_disc_blocks' ],
		    [ Blockly.Msg.i_music_disc_cat, 'i.music_disc_cat' ],
		    [ Blockly.Msg.i_music_disc_chirp, 'i.music_disc_chirp' ],
		    [ Blockly.Msg.i_music_disc_far, 'i.music_disc_far' ],
		    [ Blockly.Msg.i_music_disc_mall, 'i.music_disc_mall' ],
		    [ Blockly.Msg.i_music_disc_mellohi, 'i.music_disc_mellohi' ],
		    [ Blockly.Msg.i_music_disc_pigstep, 'i.music_disc_pigstep' ],
		    [ Blockly.Msg.i_music_disc_stal, 'i.music_disc_stal' ],
		    [ Blockly.Msg.i_music_disc_strad, 'i.music_disc_strad' ],
		    [ Blockly.Msg.i_music_disc_wait, 'i.music_disc_wait' ],
		    [ Blockly.Msg.i_music_disc_ward, 'i.music_disc_ward' ],
		    [ Blockly.Msg.i_mutton, 'i.mutton' ],
		    [ Blockly.Msg.i_name_tag, 'i.name_tag' ],
		    [ Blockly.Msg.i_nautilus_shell, 'i.nautilus_shell' ],
		    [ Blockly.Msg.i_nether_brick, 'i.nether_brick' ],
		    [ Blockly.Msg.i_nether_star, 'i.nether_star' ],
		    [ Blockly.Msg.i_nether_wart, 'i.nether_wart' ],
		    [ Blockly.Msg.i_netherite_axe, 'i.netherite_axe' ],
		    [ Blockly.Msg.i_netherite_boots, 'i.netherite_boots' ],
		    [ Blockly.Msg.i_netherite_chestplate, 'i.netherite_chestplate' ],
		    [ Blockly.Msg.i_netherite_helmet, 'i.netherite_helmet' ],
		    [ Blockly.Msg.i_netherite_hoe, 'i.netherite_hoe' ],
		    [ Blockly.Msg.i_netherite_ingot, 'i.netherite_ingot' ],
		    [ Blockly.Msg.i_netherite_leggings, 'i.netherite_leggings' ],
		    [ Blockly.Msg.i_netherite_pickaxe, 'i.netherite_pickaxe' ],
		    [ Blockly.Msg.i_netherite_scrap, 'i.netherite_scrap' ],
		    [ Blockly.Msg.i_netherite_shovel, 'i.netherite_shovel' ],
		    [ Blockly.Msg.i_netherite_sword, 'i.netherite_sword' ],
		    [ Blockly.Msg.i_oak_boat, 'i.oak_boat' ],
		    [ Blockly.Msg.i_ocelot_spawn_egg, 'i.ocelot_spawn_egg' ],
		    [ Blockly.Msg.i_orange_dye, 'i.orange_dye' ],
		    [ Blockly.Msg.i_painting, 'i.painting' ],
		    [ Blockly.Msg.i_panda_spawn_egg, 'i.panda_spawn_egg' ],
		    [ Blockly.Msg.i_paper, 'i.paper' ],
		    [ Blockly.Msg.i_parrot_spawn_egg, 'i.parrot_spawn_egg' ],
		    [ Blockly.Msg.i_phantom_membrane, 'i.phantom_membrane' ],
		    [ Blockly.Msg.i_phantom_spawn_egg, 'i.phantom_spawn_egg' ],
		    [ Blockly.Msg.i_pig_spawn_egg, 'i.pig_spawn_egg' ],
		    [ Blockly.Msg.i_piglin_banner_pattern, 'i.piglin_banner_pattern' ],
		    [ Blockly.Msg.i_piglin_spawn_egg, 'i.piglin_spawn_egg' ],
		    [ Blockly.Msg.i_pillager_spawn_egg, 'i.pillager_spawn_egg' ],
		    [ Blockly.Msg.i_pink_dye, 'i.pink_dye' ],
		    [ Blockly.Msg.i_poisonous_potato, 'i.poisonous_potato' ],
		    [ Blockly.Msg.i_polar_bear_spawn_egg, 'i.polar_bear_spawn_egg' ],
		    [ Blockly.Msg.i_popped_chorus_fruit, 'i.popped_chorus_fruit' ],
		    [ Blockly.Msg.i_porkchop, 'i.porkchop' ],
		    [ Blockly.Msg.i_potato, 'i.potato' ],
		    [ Blockly.Msg.i_potion, 'i.potion' ],
		    [ Blockly.Msg.i_prismarine_crystals, 'i.prismarine_crystals' ],
		    [ Blockly.Msg.i_prismarine_shard, 'i.prismarine_shard' ],
		    [ Blockly.Msg.i_pufferfish, 'i.pufferfish' ],
		    [ Blockly.Msg.i_pufferfish_bucket, 'i.pufferfish_bucket' ],
		    [ Blockly.Msg.i_pufferfish_spawn_egg, 'i.pufferfish_spawn_egg' ],
		    [ Blockly.Msg.i_pumpkin_pie, 'i.pumpkin_pie' ],
		    [ Blockly.Msg.i_pumpkin_seeds, 'i.pumpkin_seeds' ],
		    [ Blockly.Msg.i_purple_dye, 'i.purple_dye' ],
		    [ Blockly.Msg.i_quartz, 'i.quartz' ],
		    [ Blockly.Msg.i_rabbit, 'i.rabbit' ],
		    [ Blockly.Msg.i_rabbit_foot, 'i.rabbit_foot' ],
		    [ Blockly.Msg.i_rabbit_hide, 'i.rabbit_hide' ],
		    [ Blockly.Msg.i_rabbit_spawn_egg, 'i.rabbit_spawn_egg' ],
		    [ Blockly.Msg.i_rabbit_stew, 'i.rabbit_stew' ],
		    [ Blockly.Msg.i_ravager_spawn_egg, 'i.ravager_spawn_egg' ],
		    [ Blockly.Msg.i_red_dye, 'i.red_dye' ],
		    [ Blockly.Msg.i_redstone, 'i.redstone' ],
		    [ Blockly.Msg.i_rotten_flesh, 'i.rotten_flesh' ],
		    [ Blockly.Msg.i_saddle, 'i.saddle' ],
		    [ Blockly.Msg.i_salmon, 'i.salmon' ],
		    [ Blockly.Msg.i_salmon_bucket, 'i.salmon_bucket' ],
		    [ Blockly.Msg.i_salmon_spawn_egg, 'i.salmon_spawn_egg' ],
		    [ Blockly.Msg.i_scute, 'i.scute' ],
		    [ Blockly.Msg.i_shears, 'i.shears' ],
		    [ Blockly.Msg.i_sheep_spawn_egg, 'i.sheep_spawn_egg' ],
		    [ Blockly.Msg.i_shield, 'i.shield' ],
		    [ Blockly.Msg.i_shulker_shell, 'i.shulker_shell' ],
		    [ Blockly.Msg.i_shulker_spawn_egg, 'i.shulker_spawn_egg' ],
		    [ Blockly.Msg.i_sign, 'i.sign' ],
		    [ Blockly.Msg.i_silverfish_spawn_egg, 'i.silverfish_spawn_egg' ],
		    [ Blockly.Msg.i_skeleton_horse_spawn_egg, 'i.skeleton_horse_spawn_egg' ],
		    [ Blockly.Msg.i_skeleton_spawn_egg, 'i.skeleton_spawn_egg' ],
		    [ Blockly.Msg.i_skull_banner_pattern, 'i.skull_banner_pattern' ],
		    [ Blockly.Msg.i_slime_ball, 'i.slime_ball' ],
		    [ Blockly.Msg.i_slime_spawn_egg, 'i.slime_spawn_egg' ],
		    [ Blockly.Msg.i_snowball, 'i.snowball' ],
		    [ Blockly.Msg.i_spectral_arrow, 'i.spectral_arrow' ],
		    [ Blockly.Msg.i_spider_eye, 'i.spider_eye' ],
		    [ Blockly.Msg.i_spider_spawn_egg, 'i.spider_spawn_egg' ],
		    [ Blockly.Msg.i_splash_potion, 'i.splash_potion' ],
		    [ Blockly.Msg.i_spruce_boat, 'i.spruce_boat' ],
		    [ Blockly.Msg.i_squid_spawn_egg, 'i.squid_spawn_egg' ],
		    [ Blockly.Msg.i_stick, 'i.stick' ],
		    [ Blockly.Msg.i_stone_axe, 'i.stone_axe' ],
		    [ Blockly.Msg.i_stone_hoe, 'i.stone_hoe' ],
		    [ Blockly.Msg.i_stone_pickaxe, 'i.stone_pickaxe' ],
		    [ Blockly.Msg.i_stone_shovel, 'i.stone_shovel' ],
		    [ Blockly.Msg.i_stone_sword, 'i.stone_sword' ],
		    [ Blockly.Msg.i_stray_spawn_egg, 'i.stray_spawn_egg' ],
		    [ Blockly.Msg.i_strider_spawn_egg, 'i.strider_spawn_egg' ],
		    [ Blockly.Msg.i_string, 'i.string' ],
		    [ Blockly.Msg.i_sugar, 'i.sugar' ],
		    [ Blockly.Msg.i_suspicious_stew, 'i.suspicious_stew' ],
		    [ Blockly.Msg.i_sweet_berries, 'i.sweet_berries' ],
		    [ Blockly.Msg.i_tipped_arrow, 'i.tipped_arrow' ],
		    [ Blockly.Msg.i_totem_of_undying, 'i.totem_of_undying' ],
		    [ Blockly.Msg.i_trader_llama_spawn_egg, 'i.trader_llama_spawn_egg' ],
		    [ Blockly.Msg.i_trident, 'i.trident' ],
		    [ Blockly.Msg.i_tropical_fish, 'i.tropical_fish' ],
		    [ Blockly.Msg.i_tropical_fish_bucket, 'i.tropical_fish_bucket' ],
		    [ Blockly.Msg.i_tropical_fish_spawn_egg, 'i.tropical_fish_spawn_egg' ],
		    [ Blockly.Msg.i_turtle_helmet, 'i.turtle_helmet' ],
		    [ Blockly.Msg.i_turtle_spawn_egg, 'i.turtle_spawn_egg' ],
		    [ Blockly.Msg.i_vex_spawn_egg, 'i.vex_spawn_egg' ],
		    [ Blockly.Msg.i_villager_spawn_egg, 'i.villager_spawn_egg' ],
		    [ Blockly.Msg.i_vindicator_spawn_egg, 'i.vindicator_spawn_egg' ],
		    [ Blockly.Msg.i_wandering_trader_spawn_egg, 'i.wandering_trader_spawn_egg' ],
		    [ Blockly.Msg.i_warped_fungus_on_a_stick, 'i.warped_fungus_on_a_stick' ],
		    [ Blockly.Msg.i_water_bucket, 'i.water_bucket' ],
		    [ Blockly.Msg.i_wheat, 'i.wheat' ],
		    [ Blockly.Msg.i_wheat_seeds, 'i.wheat_seeds' ],
		    [ Blockly.Msg.i_white_dye, 'i.white_dye' ],
		    [ Blockly.Msg.i_witch_spawn_egg, 'i.witch_spawn_egg' ],
		    [ Blockly.Msg.i_wither_skeleton_spawn_egg, 'i.wither_skeleton_spawn_egg' ],
		    [ Blockly.Msg.i_wolf_spawn_egg, 'i.wolf_spawn_egg' ],
		    [ Blockly.Msg.i_wooden_axe, 'i.wooden_axe' ],
		    [ Blockly.Msg.i_wooden_hoe, 'i.wooden_hoe' ],
		    [ Blockly.Msg.i_wooden_pickaxe, 'i.wooden_pickaxe' ],
		    [ Blockly.Msg.i_wooden_shovel, 'i.wooden_shovel' ],
		    [ Blockly.Msg.i_wooden_sword, 'i.wooden_sword' ],
		    [ Blockly.Msg.i_writable_book, 'i.writable_book' ],
		    [ Blockly.Msg.i_written_book, 'i.written_book' ],
		    [ Blockly.Msg.i_yellow_dye, 'i.yellow_dye' ],
		    [ Blockly.Msg.i_zoglin_spawn_egg, 'i.zoglin_spawn_egg' ],
		    [ Blockly.Msg.i_zombie_horse_spawn_egg, 'i.zombie_horse_spawn_egg' ],
		    [ Blockly.Msg.i_zombie_spawn_egg, 'i.zombie_spawn_egg' ],
		    [ Blockly.Msg.i_zombie_villager_spawn_egg, 'i.zombie_villager_spawn_egg' ],
		    [ Blockly.Msg.i_zombified_piglin_spawn_egg, 'i.zombified_piglin_spawn_egg' ],
 ].sort(compareMCobjects)
}

function getItems_opOnly() {
	return [		
	    [ Blockly.Msg.i_tnt_minecart, 'i.tnt_minecart' ],
		
].sort(compareMCobjects)
}



Blockly.Blocks['minecraft_multiciplity'] = {
		init : function() {
			this.jsonInit({
				"type" : "minecraft_multiciplity",
				"message0" : Blockly.Msg.MC_cmd_minecraft_multiciplity,
				"args0" : [ {
					"type" : "field_number",
					"name" : "mutiplicity",
					"value" : 0,
					"min" : 1,
					"max" : 1000,
					"precision" : 1
				}, {
					"type" : "input_value",
					"name" : "singleblock",
					"check" : [ "Material" ]
				} ],
				"output" : "Material",
				"colour" : 330,
				"tooltip" : "",
				"helpUrl" : ""
			});
		}
	};
Blockly.Blocks['minecraft_multiciplity_var'] = {
		init : function() {
			this.jsonInit({
				  "type": "minecraft_multiciplity_var",
				  "message0" : Blockly.Msg.MC_cmd_minecraft_multiciplity,
				  "args0": [
				    {
				      "type": "field_variable",
				      "name": "mutiplicity",
				      "variable": "num"
				    },
				    {
				      "type": "input_value",
				      "name": "singleblock",
						"check" : [ "Material" ]
				    }
				  ],
				  "output": "Material",
				  "colour": 330,
				  "tooltip": "",
				  "helpUrl": ""
				});
		}
	};
Blockly.Blocks['minecraft_delay'] = {
		init : function() {
			this.jsonInit({
				"type" : "minecraft_delay",
				"message0" : Blockly.Msg.MC_cmd_minecraft_delay,
				"args0" : [ {
					"type" : "field_number",
					"name" : "delay",
					"value" : 0,
					"min" : 1,
					"max" : 1000,
					"precision" : 1
				}, {
					"type" : "input_value",
					"name" : "singleblock",
					"check" : [ "Material" ]
				} ],
				"output" : "Material",
				"colour" : 330,
				"tooltip" : "",
				"helpUrl" : ""
			});
		}
	};

Blockly.Blocks['minecraft_delay_var'] = {
		init : function() {
			this.jsonInit({
				  "type": "minecraft_delay_var",
				  "message0" : Blockly.Msg.MC_cmd_minecraft_delay,
				  "args0": [
				    {
				      "type": "field_variable",
				      "name": "delay",
				      "variable": "num"
				    },
				    {
				      "type": "input_value",
				      "name": "singleblock",
						"check" : [ "Material" ]
				    }
				  ],
				  "output": "Material",
				  "colour": 330,
				  "tooltip": "",
				  "helpUrl": ""
				});
		}
	};
Blockly.Blocks['minecraft_delay_random'] = {
		init : function() {
			this.jsonInit({
				"type" : "minecraft_delay_random",
				"message0" : Blockly.Msg.MC_cmd_minecraft_delay_random,
				"args0" : [ {
					"type" : "field_number",
					"name" : "min",
					"value" : 0,
					"min" : 1,
					"max" : 1000,
					"precision" : 1
				},{
					"type" : "field_number",
					"name" : "max",
					"value" : 0,
					"min" : 1,
					"max" : 1000,
					"precision" : 1
				}, {
					"type" : "input_value",
					"name" : "singleblock",
					"check" : [ "Material" ]
				} ],
				"output" : "Material",
				"colour" : 330,
				"tooltip" : "",
				"helpUrl" : ""
			});
		}
	};

Blockly.Blocks['minecraft_delay_random_var'] = {
		init : function() {
			this.jsonInit({
				"type" : "minecraft_delay_random_var",
				"message0" : Blockly.Msg.MC_cmd_minecraft_delay_random,
				"args0" : [ {
				      "type": "field_variable",
				      "name": "min",
				      "variable": "min"
				},{
				      "type": "field_variable",
				      "name": "max",
				      "variable": "max"
				}, {
					"type" : "input_value",
					"name" : "singleblock",
					"check" : [ "Material" ]
				} ],
				"output" : "Material",
				"colour" : 330,
				"tooltip" : "",
				"helpUrl" : ""
			});
		}
	};


Blockly.Blocks['minecraft_delay_reset_random'] = {
		init : function() {
			this.jsonInit( 	
					{
						  "type": "minecraft_delay_reset_random",
						  "message0": Blockly.Msg.MC_cmd_minecraft_delay_random_reset,
						  "args0": [
						    {
						    	"type": "field_number",
						        "name": "seed",
						        "value": 0,
						        "precision": 1
						    }
						  ],
						  "previousStatement": null,
						  "nextStatement": null,
						  "colour": 90,
						  "tooltip": "",
						  "helpUrl": ""
						});
		}
	};




Blockly.Blocks['minecraft_materialbockOnlyOne'] = {
	init : function() {
		this.jsonInit({
			"type" : "minecraft_materialbockonlyone",
			"message0" : "%1 %2",
			"args0" : [ {
				"type" : "field_dropdown",
				"name" : "NAME",
				"options" : getMaterials()
			}, {
				"type" : "input_value",
				"name" : "singleblock",
				"check" : [ "Material" ]
			} ],
			"output" : "Material",
			"colour" : 330,
			"tooltip" : "",
			"helpUrl" : ""
		});
	}
};

Blockly.Blocks['minecraft_materialbockOnlyOne_op'] = {
		init : function() {
			this.jsonInit({
				"type" : "minecraft_materialbockonlyone_op",
				"message0" : "%1 %2",
				"args0" : [ {
					"type" : "field_dropdown",
					"name" : "NAME",
					"options" : getMaterials_opOnly()
				}, {
					"type" : "input_value",
					"name" : "singleblock",
					"check" : [ "Material" ]
				} ],
				"output" : "Material",
				"colour" : 330,
				"tooltip" : "",
				"helpUrl" : ""
			});
		}
	};

Blockly.Blocks['minecraft_particleOnlyOne'] = {
		init : function() {
			this.jsonInit({
				"type" : "minecraft_particleOnlyOne",
				"message0" : "%1 %2",
				"args0" : [ {
					"type" : "field_dropdown",
					"name" : "NAME",
					"options" : getParticles()
				}, {
					"type" : "input_value",
					"name" : "singleblock",
					"check" : [ "Material" ]
				} ],
				"output" : "Material",
				"colour" : 330,
				"tooltip" : "",
				"helpUrl" : ""
			});
		}
	};

Blockly.Blocks['minecraft_entity'] = {
	init : function() {
		this.jsonInit({
			"type" : "minecraft_entity",
			"message0" : "%1 %2",
			"args0" : [ {
				"type" : "field_dropdown",
				"name" : "NAME",
				"options" : getEntities()
			}, {
				"type" : "input_value",
				"name" : "singleblock",
				"check" : [ "Material" ]
		} ],
			"output" : "Material",
			"colour" : 210,
			"tooltip" : "",
			"helpUrl" : ""
		});
	}
};

Blockly.Blocks['minecraft_entity_op'] = {
		init : function() {
			this.jsonInit({
				"type" : "minecraft_entity_op",
				"message0" : "%1 %2",
				"args0" : [ {
					"type" : "field_dropdown",
					"name" : "NAME",
					"options" : getEntities_opOnly()
				}, {
					"type" : "input_value",
					"name" : "singleblock",
					"check" : [ "Material" ]
				} ],
				"output" : "Material",
				"colour" : 210,
				"tooltip" : "",
				"helpUrl" : ""
			});
		}
	};



Blockly.Blocks['minecraft_gotopos'] = {
		init : function() {
			this.jsonInit({
				  "type": "minecraft_gotopos",
				  "message0": Blockly.Msg.MC_cmd_minecraft_gotopos,
				  "args0": [
				    {
				      "type": "input_dummy"
				    },
				    {
				      "type": "field_dropdown",
				      "name": "coordSystem",
				      "options": [
				        [
				          "x, y, z",
				          "cartesian"
				        ],
				        [
					          "r, theta, z",
					          "cylindrical"
					        ],
				        [
					          "r, theta, phi",
					          "spherical"
					        ]
				      ]
				    },
				    {
				      "type": "input_dummy"
				    },
				    {
				      "type": "input_value",
				      "name": "x",
				      "check": "Number"
				    },
				    {
				      "type": "input_value",
				      "name": "y",
				      "check": "Number"
				    },
				    {
				      "type": "input_value",
				      "name": "z",
				      "check": "Number"
				    }
				  ],
				  "inputsInline": true,
				  "previousStatement": null,
				  "nextStatement": null,
				  "colour": 230,
				  "tooltip": "put a number or a variable for the coordinates x,y,z",
				  "helpUrl": ""
				});
		}
	};



Blockly.Blocks['minecraft_polygon'] = {
		init : function() {
			this.jsonInit({
				  "type": "minecraft_polygon",
				  "message0": Blockly.Msg.MC_cmd_minecraft_polygon,
				  "args0": [
				    {
				      "type": "input_dummy"
				    },
				    {
				      "type": "field_dropdown",
				      "name": "fill",
				      "options": [
				        [
				        	Blockly.Msg.MC_cmd_empty,
				          "false"
				        ],
				        [
				        	Blockly.Msg.MC_cmd_full,
				          "true"
				        ]
				      ]
				    },
				    {
				      "type": "input_dummy"
				    },
				    {
				      "type": "input_dummy"
				    },
				    {
				      "type": "input_value",
				      "name": "nr_sides",
				      "check": "Number"
				    },
				    {
				      "type": "input_dummy"
				    },
				    {
				      "type": "input_value",
				      "name": "sideLength",
				      "check": "Number"
				    },
				    {
				      "type": "input_dummy"
				    },
				    {
				      "type": "input_value",
				      "name": "NAME",
						"check" : [ "Material" ]
				    }
				  ],
				  "inputsInline": true,
				  "previousStatement": null,
				  "nextStatement": null,
				  "colour": 120,
				  "tooltip": "",
				  "helpUrl": ""
				});
		}
	};




Blockly.Blocks['minecraft_rectangle'] = {
			init : function() {
				this.jsonInit({
					  "type": "minecraft_rectangle",
					  "message0": Blockly.Msg.MC_cmd_minecraft_rectangle,
					  "args0": [
					    {
					      "type": "input_dummy"
					    },
					    {
					      "type": "field_dropdown",
					      "name": "fill",
					      "options": [
					        [
					        	Blockly.Msg.MC_cmd_empty,
					          "false"
					        ],
					        [
					        	Blockly.Msg.MC_cmd_full,
					          "true"
					        ]
					      ]
					    },
					    {
					      "type": "input_dummy"
					    },
					    {
					      "type": "input_dummy"
					    },
					    {
					      "type": "input_value",
					      "name": "width",
					      "check": "Number"
					    },
					    {
					      "type": "input_dummy"
					    },
					    {
					      "type": "input_value",
					      "name": "height",
					      "check": "Number"
					    },
					    {
					      "type": "input_dummy"
					    },
					    {
					      "type": "input_value",
					      "name": "NAME",
							"check" : [ "Material" ]
					    }
					  ],
					  "inputsInline": true,
					  "previousStatement": null,
					  "nextStatement": null,
					  "colour": 120,
					  "tooltip": "",
					  "helpUrl": ""
					});
			}
		};

Blockly.Blocks['minecraft_ellipse'] = {
		init : function() {
			this.jsonInit({
				  "type": "minecraft_ellipse",
				  "message0": Blockly.Msg.MC_cmd_minecraft_ellipse,
				  "args0": [
				    {
				      "type": "input_dummy"
				    },
				    {
				      "type": "field_dropdown",
				      "name": "fill",
				      "options": [
				        [
				        	Blockly.Msg.MC_cmd_empty,
				          "false"
				        ],
				        [
				        	Blockly.Msg.MC_cmd_full,
				          "true"
				        ]
				      ]
				    },
				    {
				      "type": "input_dummy"
				    },
				    {
				      "type": "input_dummy"
				    },
				    {
				      "type": "input_value",
				      "name": "width",
				      "check": "Number"
				    },
				    {
				      "type": "input_dummy"
				    },
				    {
				      "type": "input_value",
				      "name": "height",
				      "check": "Number"
				    },
				    {
				      "type": "input_dummy"
				    },
				    {
				      "type": "input_value",
				      "name": "NAME",
						"check" : [ "Material" ]
				    }
				  ],
				  "inputsInline": true,
				  "previousStatement": null,
				  "nextStatement": null,
				  "colour": 120,
				  "tooltip": "",
				  "helpUrl": ""
				});
		}
	};



Blockly.Blocks['minecraft_sensing'] = {
		init : function() {
			this.jsonInit({
				  "type": "minecraft_sensing",
				  "message0": Blockly.Msg.MC_cmd_minecraft_sensing,
				  "args0": [
				    {
				      "type": "input_value",
				      "name": "NAME",
						"check" : [ "Material" ]
				    }
				  ],
					"output" : "Boolean",
					"inputsInline": false,
					"colour" : 65,
					"tooltip" : "",
					"helpUrl" : ""
				});
		}
	};



Blockly.Blocks['minecraft_block'] = {
		init : function() {
			this.jsonInit({
				  "type": "minecraft_block",
				  "message0": Blockly.Msg.MC_cmd_minecraft_block,
				  "args0": [
				    {
				      "type": "input_value",
				      "name": "NAME",
						"check" : [ "Material" ]
				    }
				  ],
				  "inputsInline": false,
				  "previousStatement": null,
				  "nextStatement": null,
				  "colour": 120,
				  "tooltip": "",
				  "helpUrl": ""
				});
		}
	};


Blockly.Blocks['minecraft_line'] = {
	init : function() {
		this.jsonInit({
			  "type": "minecraft_line",
			  "message0": Blockly.Msg.MC_cmd_minecraft_line,
			  "args0": [
			    {
			      "type": "input_dummy"
			    },
			    {
			      "type": "input_value",
			      "name": "length",
			      "check": "Number"
			    },
			    {
			      "type": "input_dummy"
			    },
			    {
			      "type": "input_value",
			      "name": "NAME",
					"check" : [ "Material" ]
			    }
			  ],
			  "inputsInline": true,
			  "previousStatement": null,
			  "nextStatement": null,
			  "colour": 120,
			  "tooltip": "",
			  "helpUrl": ""
			});
	}
};

Blockly.Blocks['minecraft_connectPositions'] = {
		init : function() {
			this.jsonInit({
				  "type": "minecraft_connectPositions",
				  "message0": Blockly.Msg.MC_cmd_minecraft_connectPositions1+Blockly.Msg.MC_cmd_minecraft_connectPositions2,
				  "args0": [
				    {
				      "type": "input_value",
				      "name": "NAME",
						"check" : [ "Material" ]
				    }
				  ],
				  "inputsInline": true,
				  "previousStatement": null,
				  "nextStatement": null,
				  "colour": 120,
				  "tooltip": "",
				  "helpUrl": ""
				});
		}
	};



Blockly.Blocks['minecraft_holding'] = {
		init : function() {
			this.jsonInit({

				"type" : "minecraft_holding",
				"message0" : Blockly.Msg.MC_cmd_minecraft_holding,
				"args0" : [ {
					"type" : "input_value",
					"name" : "NAME",
					"check" : ["Material", "Item"]
				} ],
				"output" : "Boolean",
				"colour" : 120,
				"tooltip" : "",
				"helpUrl" : "http://www.example.com/"
			});
		}
	};

Blockly.Blocks['minecraft_playerHas'] = {
		init : function() {
			this.jsonInit({

				"type" : "minecraft_playerHas",
				"message0" : Blockly.Msg.MC_cmd_minecraft_playerHas,
				"args0" : [ {
					"type" : "input_value",
					"name" : "NAME",
					"check" : ["Material", "Item"]
				} ],
				"output" : "Boolean",
				"colour" : 120,
				"tooltip" : "",
				"helpUrl" : "http://www.example.com/"
			});
		}
	};




Blockly.Blocks['minecraft_item'] = {
			init : function() {
				this.jsonInit({
					  "type": "minecraft_item",
					  "message0": "%1 %2",
					  "args0": [
						  {
						      "type": "field_dropdown",
						      "name" : "NAME",
								"options" : getItems()
							},
					    {
					      "type": "input_value",
					      "name": "singleblock",
					      "check": [ "Item" ]
					    }
					  ],
					  "output": "Item",
					  "colour": 20,
					  "tooltip": "",
					  "helpUrl": ""
					});
			}
		};


Blockly.Blocks['minecraft_splashpotion'] = {
		init : function() {
			this.jsonInit({
				  "type": "minecraft_splashpotion",
				  "message0": Blockly.Msg.i_splash_potion+" "+Blockly.Msg.MC_cmd_minecraft_splash_potion_function+" %1 %2",
				  "args0": [
				    {
				      "type": "field_input",
				      "name": "functionName",
				      "text": ""
				    },
				    {
				      "type": "input_value",
				      "name": "name",
				      "check": [ "Item"]
				    }
				  ],
				  "output": "Item",
				  "colour": 20,
				  "tooltip": "",
				  "helpUrl": ""
				});
		}
	};

Blockly.Blocks['minecraft_sign'] = {
		init : function() {
			this.jsonInit({
				  "type": "minecraft_sign",
				  "message0": Blockly.Msg.i_sign+" "+Blockly.Msg.MC_cmd_minecraft_sign_with_text+" %1 %2",
				  "args0": [
				    {
				        "type": "field_variable",
				        "name": "varName",
				        "variable": "text"				    
				    },
				    {
				      "type": "input_value",
				      "name": "name",
						"check" : [ "Material" ]
				    }
				  ],
				  "output": "Material",
				  "colour": 330,
				  "tooltip": "",
				  "helpUrl": ""
				});
		}
	};


Blockly.Blocks['minecraft_hitting'] = {
	init : function() {
		this.jsonInit({
			"type" : "minecraft_hitting",
			"message0" : Blockly.Msg.MC_cmd_minecraft_hitting,
			"args0" : [ {
				"type" : "input_value",
				"name" : "NAME",
				"check" : [ "Material" ]
			} ],
			"output" : "Boolean",
			"colour" : 65,
			"tooltip" : "",
			"helpUrl" : "http://www.example.com/"
		});
	}
};

Blockly.Blocks['minecraft_team'] = {
		init : function() {
			this.jsonInit({
				"type" : "minecraft_team",
				"message0" : "%1 %2",
				"args0" : [ {
					"type" : "field_dropdown",
					"name" : "NAME",
					"options" : [ [ Blockly.Msg.MC_cmd_friendly, "FRIENDLY" ], [ Blockly.Msg.MC_cmd_enemy, "ENEMY" ] ]
				}, {
					"type" : "input_value",
					"name" : "singleblock",
					"check" : [ "Material" ]
				} ],
				"output" : "Material",
				"colour" : 330,
				"tooltip" : "",
				"helpUrl" : ""
			});
		}
	};

Blockly.Blocks['minecraft_direction'] = {
		init : function() {
			this.jsonInit({
				"type" : "minecraft_direction",
				"message0" : Blockly.Msg.MC_cmd_facing,
				"args0" : [ {
					"type" : "field_dropdown",
					"name" : "NAME",
					 "options": [
					        [
					        	Blockly.Msg.MC_cmd_left,
					          "LEFT"
					        ],
					        [
					        	Blockly.Msg.MC_cmd_right,
					          "RIGHT"
					        ],
					        [
					        	Blockly.Msg.MC_cmd_forward,
					          "FW"
					        ],
					        [
					        	Blockly.Msg.MC_cmd_backwards,
					          "BW"
					        ],
					        [
					        	Blockly.Msg.MC_cmd_up,
					          "UP"
					        ],
					        [
					        	Blockly.Msg.MC_cmd_down,
					          "DOWN"
					        ]
					   ]
				}, {
					"type" : "input_value",
					"name" : "singleblock",
					"check" : [ "Material" ]
				} ],
				"output" : "Material",
				"colour" : 330,
				"tooltip" : "",
				"helpUrl" : ""
			});
		}
	};
Blockly.Blocks['minecraft_upper_lower_part'] = {
		init : function() {
			this.jsonInit({
				"type" : "minecraft_upper_lower_part",
				"message0" : Blockly.Msg.MC_cmd_upper_lower,
				"args0" : [ {
					"type" : "field_dropdown",
					"name" : "NAME",
					 "options": [
					        [
					        	Blockly.Msg.MC_cmd_up,
					          "UP"
					        ],
					        [
					        	Blockly.Msg.MC_cmd_down,
					          "DOWN"
					        ]
					   ]
				}, {
					"type" : "input_value",
					"name" : "singleblock",
					"check" : [ "Material" ]
				} ],
				"output" : "Material",
				"colour" : 330,
				"tooltip" : "",
				"helpUrl" : ""
			});
		}
	};

Blockly.Blocks['minecraft_on_the_ground'] = {
		init : function() {
			this.jsonInit({
				"type" : "minecraft_on_the_ground",
				"message0" : Blockly.Msg.MC_cmd_ground,
				"args0" : [ {
					"type" : "input_value",
					"name" : "singleblock",
					"check" : [ "Material" ]
				} ],
				"output" : "Material",
				"colour" : 330,
				"tooltip" : "",
				"helpUrl" : ""
			});
		}
	};

Blockly.Blocks['minecraft_move_to_view_target'] = {
		init : function() {
			this.jsonInit( 	
						{
						  "type": "minecraft_move_to_view_target",
						  "message0": Blockly.Msg.MC_cmd_minecraft_move_to_view,
						  "args0": [
							    {
							      "type": "field_dropdown",
							      "name": "viewer",
							      "options": [
							        [
							        	Blockly.Msg.MC_cmd_minecraft_move_to_view_target,
							          "ROBOT_EYES"
							        ],
							        [
							        	Blockly.Msg.MC_cmd_minecraft_move_to_view_player,
							          "PLAYER_EYES"
							        ]
							      ]
							    }
							  ],						  
						  "previousStatement": null,
						  "nextStatement": null,
						  "colour": 230,
						  "tooltip": "",
						  "helpUrl": ""
						});
		}
	};



Blockly.Blocks['minecraft_move'] = {
		init : function() {
			this.jsonInit( 	
					{
					  "type": "minecraft_move",
					  "message0": Blockly.Msg.MC_cmd_minecraft_move,
					  "args0": [
					    {
					      "type": "input_value",
					      "name": "times",
					      "check": "Number"
					    },
					    {
					      "type": "field_dropdown",
					      "name": "direction",
					      "options": [
					        [
					        	Blockly.Msg.MC_cmd_up,
					          "UP"
					        ],
					        [
					        	Blockly.Msg.MC_cmd_down,
					          "DOWN"
					        ],
					        [
					        	Blockly.Msg.MC_cmd_left,
					          "LEFT"
					        ],
					        [
					        	Blockly.Msg.MC_cmd_right,
					          "RIGHT"
					        ],
					        [
					        	Blockly.Msg.MC_cmd_forward,
					          "FW"
					        ],
					        [
					        	Blockly.Msg.MC_cmd_backwards,
					          "BW"
					        ]
					      ]
					    }
					  ],
					  "inputsInline": true,
					  "previousStatement": null,
					  "nextStatement": null,
					  "colour": 230,
					  "tooltip": "",
					  "helpUrl": ""
					});
		}
	};


Blockly.Blocks['minecraft_rotate'] = {
		init : function() {
			this.jsonInit( 	
					{
						  "type": "minecraft_rotate",
						  "message0": Blockly.Msg.MC_cmd_minecraft_rotate,
						  "args0": [
						    {
						      "type": "input_value",
						      "name": "angle",
						      "check": "Number"
						    }
						  ],
						  "previousStatement": null,
						  "nextStatement": null,
						  "colour": 60,
						  "tooltip": "",
						  "helpUrl": ""
						});
		}
	};

Blockly.Blocks['minecraft_setrotation'] = {
		init : function() {
			this.jsonInit( 	
					{
						  "type": "minecraft_setrotation",
						  "message0": Blockly.Msg.MC_cmd_minecraft_setrotation,
						  "args0": [
						    {
						      "type": "field_dropdown",
						      "name": "angle",
						      "options": [
						        [
						        	Blockly.Msg.MC_cmd_whereLook,
						          "X"
						        ],
						        [
						        	Blockly.Msg.MC_cmd_south,
						          "S"
						        ],
						        [
						        	Blockly.Msg.MC_cmd_north,
						          "N"
						        ],
						        [
						        	Blockly.Msg.MC_cmd_east,
						          "E"
						        ],
						        [
						        	Blockly.Msg.MC_cmd_west,
						          "W"
						        ]
						      ]
						    }
						  ],
						  "previousStatement": null,
						  "nextStatement": null,
						  "colour": 60,
						  "tooltip": "",
						  "helpUrl": ""
						});
		}
	};

Blockly.Blocks['minecraft_set_elevation'] = {
		init : function() {
			this.jsonInit( 	
					{
						  "type": "minecraft_set_elevation",
						  "message0": Blockly.Msg.MC_cmd_minecraft_set_elevation,
						  "args0": [
						    {
						      "type": "input_value",
						      "name": "angle",
						      "check": "Number"
						    }
						  ],
						  "previousStatement": null,
						  "nextStatement": null,
						  "colour": 90,
						  "tooltip": "",
						  "helpUrl": ""
						});
		}
	};

Blockly.Blocks['minecraft_set_elevation_relative'] = {
		init : function() {
			this.jsonInit( 	
					{
						  "type": "minecraft_set_elevation",
						  "message0": Blockly.Msg.MC_cmd_minecraft_set_elevation_relative,
						  "args0": [
						    {
						      "type": "input_value",
						      "name": "angle",
						      "check": "Number"
						    }
						  ],
						  "previousStatement": null,
						  "nextStatement": null,
						  "colour": 90,
						  "tooltip": "",
						  "helpUrl": ""
						});
		}
	};




Blockly.Blocks['minecraft_addevent'] = {
		init : function() {
			this.jsonInit( 	
					{
						  "type": "minecraft_addevent",
						  "message0": Blockly.Msg.MC_cmd_minecraft_addevent,
						  "args0": [
						    {
						      "type": "field_dropdown",
						      "name": "eventType",
						      "options": [
							        [
							        	Blockly.Msg.MC_cmd_HITTING_ENTITY_EVENT,
							          "HITTING_ENTITY_EVENT"
							        ],[
							        	Blockly.Msg.MC_cmd_HIT_BY_ENTITY_EVENT,
								          "HIT_BY_ENTITY_EVENT"
							        ],[
							        	Blockly.Msg.MC_cmd_DIED_EVENT,
								          "DIED_EVENT"
							        ],[
							        	Blockly.Msg.MC_cmd_DAMAGING_BLOCK_EVENT,
								          "DAMAGING_BLOCK_EVENT"
								    ],[
							        	Blockly.Msg.MC_cmd_MOVED_EVENT,
								          "MOVED_EVENT"
								 ]
						      ]
						    },
						    {
						      "type": "input_value",
						      "name": "NAME",
						      "check": "String"
						    }
						  ],
						  "inputsInline": false,
						  "previousStatement": null,
						  "nextStatement": null,
						  "colour": 160,
						  "tooltip": "",
						  "helpUrl": ""
						});
		}
	};



Blockly.Blocks['minecraft_comment'] = {
		init : function() {
			this.jsonInit( 	
					{
						  "type": "minecraft_comment",
						  "message0": "/* %1 */",
						  "args0": [
						    {
						      "type": "field_input",
						      "name": "comment",
						      "text": "comment"
						    }
						  ],
						  "inputsInline": true,
						  "previousStatement": null,
						  "nextStatement": null,
						  "colour": 300,
						  "tooltip": "",
						  "helpUrl": ""
						});
		}
	};

Blockly.Blocks['minecraft_printposition'] = {
		init : function() {
			this.jsonInit( 	
					{
						  "type": "minecraft_printposition",
						  "message0": "print current location",
						  "output": null,
						  "colour": 230,
						  "tooltip": "",
						  "helpUrl": ""
						});
		}
	};



Blockly.Blocks['minecraft_givetoplayer'] = {
		init : function() {
			this.jsonInit( 	
					{
						  "type": "minecraft_givetoplayer",
						  "message0": Blockly.Msg.MC_cmd_minecraft_giveme,
						  "args0": [
						    {
						      "type": "input_value",
						      "name": "NAME",
						      "check": ["Item"]
						    }
						  ],
						  "inputsInline": true,
						  "previousStatement": null,
						  "nextStatement": null,
						  "colour": 120,
						  "tooltip": "",
						  "helpUrl": ""
						});
		}
	};

Blockly.Blocks['minecraft_createchest'] = {
		init : function() {
			this.jsonInit( 	
					{
						  "type": "minecraft_createchest",
						  "message0": Blockly.Msg.MC_cmd_minecraft_createchest,
						  "args0": [
						    {
						      "type": "input_value",
						      "name": "NAME",
						      "check": ["Item"]
						    }
						  ],
						  "inputsInline": true,
						  "previousStatement": null,
						  "nextStatement": null,
						  "colour": 120,
						  "tooltip": "",
						  "helpUrl": ""
						});
		}
	};

Blockly.Blocks['minecraft_text'] = {
		init : function() {
			this.jsonInit( 	
					{
						  "type": "minecraft_text",
						  "message0": Blockly.Msg.MC_cmd_minecraft_writetext,
						  "args0": [
						    {
						      "type": "input_dummy"
						    },
						    {
						      "type": "input_value",
						      "name": "inputText",
						      "check": "String"
						    },
						    {
						      "type": "input_dummy"
						    },
						    {
						      "type": "field_dropdown",
						      "name": "fontName",
						      "options": [
						        [
						          "Arial",
						          "Arial"
						        ],
						        [
						          "Helvetica",
						          "Helvetica"
						        ],
						        [
						          "Garamond",
						          "Garamond"
						        ],
						        [
						          "Bookman",
						          "Bookman"
						        ],
						        [
						          "Courier New",
						          "Courier New"
						        ],
						        [
						          "Times New Roman",
						          "Times New Roman"
						        ],
						        [
						          "Avant Garde",
						          "Avant Garde"
						        ],
						        [
						          "Palatino",
						          "Palatino"
						        ]
						      ]
						    },
						    {
						      "type": "input_dummy"
						    },
						    {
						      "type": "field_dropdown",
						      "name": "fontStyle",
						      "options": [
						        [
						          "plain",
						          "0"
						        ],
						        [
						          "bold",
						          "1"
						        ],
						        [
						          "italic",
						          "2"
						        ]
						      ]
						    },
						    {
						      "type": "input_dummy"
						    },
						    {
						      "type": "input_dummy"
						    },
						    {
						      "type": "input_value",
						      "name": "fontPoints",
						      "check": "Number"
						    },
						    {
						      "type": "input_dummy"
						    },
						    {
						      "type": "input_value",
						      "name": "NAME",
								"check" : [ "Material" ]
						    }
						  ],
						  "inputsInline": true,
						  "previousStatement": null,
						  "nextStatement": null,
						  "colour": 45,
						  "tooltip": "",
						  "helpUrl": ""
						});
		}
	};



Blockly.Blocks['minecraft_mark'] = {
		init : function() {
			this.jsonInit( 	
					{
						  "type": "minecraft_mark",
						  "message0": Blockly.Msg.MC_cmd_minecraft_mark_position,
						  "inputsInline": true,
						  "previousStatement": null,
						  "nextStatement": null,
						  "colour": 180,
						  "tooltip": "",
						  "helpUrl": ""
						});
		}
	};


Blockly.Blocks['minecraft_gotomark'] = {
		init : function() {
			this.jsonInit( 	
					{
						  "type": "minecraft_gotomark",
						  "message0": Blockly.Msg.MC_cmd_minecraft_reset_position,
						  "args0": [
						    {
						      "type": "input_dummy"
						    },
						    {
						      "type": "field_dropdown",
						      "name": "origin",
						      "options": [
						        [
						        	Blockly.Msg.MC_cmd_minecraft_option_start_position,
						          "0"
						        ],
						        [
						        	Blockly.Msg.MC_cmd_minecraft_option_lastmarked_position,
						          "1"
						        ]
						      ]
						    }
						  ],
						  "inputsInline": true,
						  "previousStatement": null,
						  "nextStatement": null,
						  "colour": 180,
						  "tooltip": "",
						  "helpUrl": ""
						});
		}
	};

Blockly.Blocks['minecraft_drawing'] = {
		init : function() {
			this.jsonInit( 	
					{
						  "type": "minecraft_drawing",
						  "message0": Blockly.Msg.MC_cmd_minecraft_draw,
						  "args0": [
							  
						    {
						      "type": "input_value",
						      "name": "matlist",
						      "check": "Array"
						    },
						    {
						        "type": "field_image",
						        "src": "drawcol_icons/drawcol0.jpg",
						        "width": 15,
						        "height": 15,
						        "alt": "*",
						        "flipRtl": false
						    },
						    {
						      "type": "input_value",
						      "name": "blockchoice0",
						      
								"check" : [ "Material", "Array" ]
						    },
						    {
						        "type": "field_image",
						        "src": "drawcol_icons/drawcol1.jpg",
						        "width": 15,
						        "height": 15,
						        "alt": "*",
						        "flipRtl": false
							    },
							    {
							      "type": "input_value",
							      "name": "blockchoice1",
									"check" : [ "Material", "Array" ]
						    },

						    {
						        "type": "field_image",
						        "src": "drawcol_icons/drawcol2.jpg",
						        "width": 15,
						        "height": 15,
						        "alt": "*",
						        "flipRtl": false
						    },
						    {
						      "type": "input_value",
						      "name": "blockchoice2",
								"check" : [ "Material", "Array" ]
						    },
						    {
						        "type": "field_image",
						        "src": "drawcol_icons/drawcol3.jpg",
						        "width": 15,
						        "height": 15,
						        "alt": "*",
						        "flipRtl": false
						    },
						    {
						      "type": "input_value",
						      "name": "blockchoice3",
								"check" : [ "Material", "Array" ]
						    },
						    {
						        "type": "field_image",
						        "src": "drawcol_icons/drawcol4.jpg",
						        "width": 15,
						        "height": 15,
						        "alt": "*",
						        "flipRtl": false
						    },
						    {
						      "type": "input_value",
						      "name": "blockchoice4",
								"check" : [ "Material", "Array" ]
						    },
						    {
						        "type": "field_image",
						        "src": "drawcol_icons/drawcol5.jpg",
						        "width": 15,
						        "height": 15,
						        "alt": "*",
						        "flipRtl": false
						    },
						    {
						      "type": "input_value",
						      "name": "blockchoice5",
								"check" : [ "Material", "Array" ]
						    },
						    {
						        "type": "field_image",
						        "src": "drawcol_icons/drawcol6.jpg",
						        "width": 15,
						        "height": 15,
						        "alt": "*",
						        "flipRtl": false
							    },
							    {
							      "type": "input_value",
							      "name": "blockchoice6",
									"check" : [ "Material", "Array" ]
							    },
							    {
							        "type": "field_image",
							        "src": "drawcol_icons/drawcol7.jpg",
							        "width": 15,
							        "height": 15,
							        "alt": "*",
							        "flipRtl": false
								    },
								    {
								      "type": "input_value",
								      "name": "blockchoice7",
										"check" : [ "Material", "Array" ]
								    },
								    {
								        "type": "field_image",
								        "src": "drawcol_icons/drawcol8.jpg",
								        "width": 15,
								        "height": 15,
								        "alt": "*",
								        "flipRtl": false
									    },
									    {
									      "type": "input_value",
									      "name": "blockchoice8",
											"check" : [ "Material", "Array" ]
									    },
									    {
									        "type": "field_image",
									        "src": "drawcol_icons/drawcol9.jpg",
									        "width": 15,
									        "height": 15,
									        "alt": "*",
									        "flipRtl": false
										    },
										    {
										      "type": "input_value",
										      "name": "blockchoice9",
										      "check": [
										    	  "Material" ]
										    },
										    {
											      "type": "input_value",
											      "name": "index_material",
											      "check": "Number"
											    }
						  ],
						  "inputsInline": false,
						  "previousStatement": null,
						  "nextStatement": null,
						  "colour": 230,
						  "tooltip": "",
						  "helpUrl": ""
						}
);
		}
	};



Blockly.Blocks['minecraft_drawing_extended'] = {
		init : function() {
			this.jsonInit( 	
					{
						  "type": "minecraft_drawing_extended",
						  "message0": Blockly.Msg.MC_cmd_minecraft_draw_extended,
						  "args0": [
							  
						    {
						      "type": "input_value",
						      "name": "matlist",
						      "check": "Array"
						    },
						    {
						        "type": "field_image",
						        "src": "drawcol_icons/drawcol0.jpg",
						        "width": 15,
						        "height": 15,
						        "alt": "*",
						        "flipRtl": false
						    },
						    {
						      "type": "input_value",
						      "name": "blockchoice0",
						      
								"check" : [ "Material", "Array" ]
						    },
						    {
						        "type": "field_image",
						        "src": "drawcol_icons/drawcol1.jpg",
						        "width": 15,
						        "height": 15,
						        "alt": "*",
						        "flipRtl": false
							    },
							    {
							      "type": "input_value",
							      "name": "blockchoice1",
									"check" : [ "Material", "Array" ]
						    },

						    {
						        "type": "field_image",
						        "src": "drawcol_icons/drawcol2.jpg",
						        "width": 15,
						        "height": 15,
						        "alt": "*",
						        "flipRtl": false
						    },
						    {
						      "type": "input_value",
						      "name": "blockchoice2",
								"check" : [ "Material", "Array" ]
						    },
						    {
						        "type": "field_image",
						        "src": "drawcol_icons/drawcol3.jpg",
						        "width": 15,
						        "height": 15,
						        "alt": "*",
						        "flipRtl": false
						    },
						    {
						      "type": "input_value",
						      "name": "blockchoice3",
								"check" : [ "Material", "Array" ]
						    },
						    {
						        "type": "field_image",
						        "src": "drawcol_icons/drawcol4.jpg",
						        "width": 15,
						        "height": 15,
						        "alt": "*",
						        "flipRtl": false
						    },
						    {
						      "type": "input_value",
						      "name": "blockchoice4",
								"check" : [ "Material", "Array" ]
						    },
						    {
						        "type": "field_image",
						        "src": "drawcol_icons/drawcol5.jpg",
						        "width": 15,
						        "height": 15,
						        "alt": "*",
						        "flipRtl": false
						    },
						    {
						      "type": "input_value",
						      "name": "blockchoice5",
								"check" : [ "Material", "Array" ]
						    },
						    {
						        "type": "field_image",
						        "src": "drawcol_icons/drawcol6.jpg",
						        "width": 15,
						        "height": 15,
						        "alt": "*",
						        "flipRtl": false
							    },
							    {
							      "type": "input_value",
							      "name": "blockchoice6",
									"check" : [ "Material", "Array" ]
							    },
							    {
							        "type": "field_image",
							        "src": "drawcol_icons/drawcol7.jpg",
							        "width": 15,
							        "height": 15,
							        "alt": "*",
							        "flipRtl": false
								    },
								    {
								      "type": "input_value",
								      "name": "blockchoice7",
										"check" : [ "Material", "Array" ]
								    },
								    {
								        "type": "field_image",
								        "src": "drawcol_icons/drawcol8.jpg",
								        "width": 15,
								        "height": 15,
								        "alt": "*",
								        "flipRtl": false
									    },
									    {
									      "type": "input_value",
									      "name": "blockchoice8",
											"check" : [ "Material", "Array" ]
									    },
									    {
									        "type": "field_image",
									        "src": "drawcol_icons/drawcol9.jpg",
									        "width": 15,
									        "height": 15,
									        "alt": "*",
									        "flipRtl": false
										    },
										    {
										      "type": "input_value",
										      "name": "blockchoice9",
										      "check": [
										    	  "Material" ]
									    },
									    {
									        "type": "field_image",
									        "src": "drawcol_icons/drawcolz.jpg",
									        "width": 15,
									        "height": 15,
									        "alt": "*",
									        "flipRtl": false
										    },
										    {
										      "type": "input_value",
										      "name": "blockchoicez",
										      "check": [
										    	  "Material" ]
									    },
									    {
									        "type": "field_image",
									        "src": "drawcol_icons/drawcoly.jpg",
									        "width": 15,
									        "height": 15,
									        "alt": "*",
									        "flipRtl": false
										    },
										    {
										      "type": "input_value",
										      "name": "blockchoicey",
										      "check": [
										    	  "Material" ]
									    },
									    {
									        "type": "field_image",
									        "src": "drawcol_icons/drawcolx.jpg",
									        "width": 15,
									        "height": 15,
									        "alt": "*",
									        "flipRtl": false
										    },
										    {
										      "type": "input_value",
										      "name": "blockchoicex",
										      "check": [
										    	  "Material" ]
									    },
									    {
									        "type": "field_image",
									        "src": "drawcol_icons/drawcolw.jpg",
									        "width": 15,
									        "height": 15,
									        "alt": "*",
									        "flipRtl": false
										    },
										    {
										      "type": "input_value",
										      "name": "blockchoicew",
										      "check": [
										    	  "Material" ]
									    },
									    {
									        "type": "field_image",
									        "src": "drawcol_icons/drawcolv.jpg",
									        "width": 15,
									        "height": 15,
									        "alt": "*",
									        "flipRtl": false
										    },
										    {
										      "type": "input_value",
										      "name": "blockchoicev",
										      "check": [
										    	  "Material" ]
									    },
									    {
									        "type": "field_image",
									        "src": "drawcol_icons/drawcolu.jpg",
									        "width": 15,
									        "height": 15,
									        "alt": "*",
									        "flipRtl": false
										    },
										    {
										      "type": "input_value",
										      "name": "blockchoiceu",
										      "check": [
										    	  "Material" ]
									    },
									    {
									        "type": "field_image",
									        "src": "drawcol_icons/drawcolt.jpg",
									        "width": 15,
									        "height": 15,
									        "alt": "*",
									        "flipRtl": false
										    },
										    {
										      "type": "input_value",
										      "name": "blockchoicet",
										      "check": [
										    	  "Material" ]
									    },
									    {
									        "type": "field_image",
									        "src": "drawcol_icons/drawcols.jpg",
									        "width": 15,
									        "height": 15,
									        "alt": "*",
									        "flipRtl": false
										    },
										    {
										      "type": "input_value",
										      "name": "blockchoices",
										      "check": [
										    	  "Material" ]
									    },
									    {
									        "type": "field_image",
									        "src": "drawcol_icons/drawcolr.jpg",
									        "width": 15,
									        "height": 15,
									        "alt": "*",
									        "flipRtl": false
										    },
										    {
										      "type": "input_value",
										      "name": "blockchoicer",
										      "check": [
										    	  "Material" ]
									    },
									    {
									        "type": "field_image",
									        "src": "drawcol_icons/drawcolq.jpg",
									        "width": 15,
									        "height": 15,
									        "alt": "*",
									        "flipRtl": false
										    },
										    {
										      "type": "input_value",
										      "name": "blockchoiceq",
										      "check": [
										    	  "Material" ]
									    },
									    {
										      "type": "input_value",
										      "name": "index_material",
										      "check": "Number"
										    }
						  ],
						  "inputsInline": false,
						  "previousStatement": null,
						  "nextStatement": null,
						  "colour": 230,
						  "tooltip": "",
						  "helpUrl": ""
						}
);
		}
	};



Blockly.Blocks['m_draw_0'] = {
		init : function() {
			this.jsonInit( 	
			{
			  "type": "m_draw_0",
			  "message0": " %1",
			  "args0": [{"type": "input_value", "name": "child"}],
			  "output": null,
			  "colour": getColorForDrawCol('0'), // defined in code.js
			  "tooltip": "",
			  "helpUrl": ""
			});
		}
	};

Blockly.Blocks['m_draw_1'] = {
	init : function() {
		this.jsonInit( 	
		{
		  "type": "m_draw_1",
		  "message0": " %1",
		  "args0": [{"type": "input_value", "name": "child"}],
		  "output": null,
		  "colour": getColorForDrawCol('1'), // defined in code.js
		  "tooltip": "",
		  "helpUrl": ""
		});
	}
};

Blockly.Blocks['m_draw_2'] = {
		init : function() {
			this.jsonInit( 	
			{
			  "type": "m_draw_2",
			  "message0": " %1",
			  "args0": [{"type": "input_value", "name": "child"}],
			  "output": null,
			  "colour": getColorForDrawCol('2'), // defined in code.js
			  "tooltip": "",
			  "helpUrl": ""
			});
		}
	};
Blockly.Blocks['m_draw_3'] = {
		init : function() {
			this.jsonInit( 	
			{
			  "type": "m_draw_3",
			  "message0": " %1",
			  "args0": [{"type": "input_value", "name": "child"}],
			  "output": null,
			  "colour": getColorForDrawCol('3'), // defined in code.js
			  "tooltip": "",
			  "helpUrl": ""
			});
		}
	};
Blockly.Blocks['m_draw_4'] = {
		init : function() {
			this.jsonInit( 	
			{
			  "type": "m_draw_4",
			  "message0": " %1",
			  "args0": [{"type": "input_value", "name": "child"}],
			  "output": null,
			  "colour": getColorForDrawCol('4'), // defined in code.js
			  "tooltip": "",
			  "helpUrl": ""
			});
		}
	};
Blockly.Blocks['m_draw_5'] = {
		init : function() {
			this.jsonInit( 	
			{
			  "type": "m_draw_5",
			  "message0": " %1",
			  "args0": [{"type": "input_value", "name": "child"}],
			  "output": null,
			  "colour": getColorForDrawCol('5'), // defined in code.js
			  "tooltip": "",
			  "helpUrl": ""
			});
		}
	};
Blockly.Blocks['m_draw_6'] = {
		init : function() {
			this.jsonInit( 	
			{
			  "type": "m_draw_6",
			  "message0": " %1",
			  "args0": [{"type": "input_value", "name": "child"}],
			  "output": null,
			  "colour": getColorForDrawCol('6'), // defined in code.js
			  "tooltip": "",
			  "helpUrl": ""
			});
		}
	};
Blockly.Blocks['m_draw_7'] = {
		init : function() {
			this.jsonInit( 	
			{
			  "type": "m_draw_7",
			  "message0": " %1",
			  "args0": [{"type": "input_value", "name": "child"}],
			  "output": null,
			  "colour": getColorForDrawCol('7'), // defined in code.js
			  "tooltip": "",
			  "helpUrl": ""
			});
		}
	};
Blockly.Blocks['m_draw_8'] = {
		init : function() {
			this.jsonInit( 	
			{
			  "type": "m_draw_8",
			  "message0": " %1",
			  "args0": [{"type": "input_value", "name": "child"}],
			  "output": null,
			  "colour": getColorForDrawCol('8'), // defined in code.js
			  "tooltip": "",
			  "helpUrl": ""
			});
		}
	};
Blockly.Blocks['m_draw_9'] = {
		init : function() {
			this.jsonInit( 	
			{
			  "type": "m_draw_9",
			  "message0": " %1",
			  "args0": [{"type": "input_value", "name": "child"}],
			  "output": null,
			  "colour": getColorForDrawCol('9'), // defined in code.js
			  "tooltip": "",
			  "helpUrl": ""
			});
		}
	};
Blockly.Blocks['m_draw_q'] = {
		init : function() {
			this.jsonInit( 	
			{
			  "type": "m_draw_q",
			  "message0": " %1",
			  "args0": [{"type": "input_value", "name": "child"}],
			  "output": null,
			  "colour": getColorForDrawCol('q'), // defined in code.js
			  "tooltip": "",
			  "helpUrl": ""
			});
		}
	};
Blockly.Blocks['m_draw_r'] = {
		init : function() {
			this.jsonInit( 	
			{
			  "type": "m_draw_r",
			  "message0": " %1",
			  "args0": [{"type": "input_value", "name": "child"}],
			  "output": null,
			  "colour": getColorForDrawCol('r'), // defined in code.js
			  "tooltip": "",
			  "helpUrl": ""
			});
		}
	};
Blockly.Blocks['m_draw_s'] = {
		init : function() {
			this.jsonInit( 	
			{
			  "type": "m_draw_s",
			  "message0": " %1",
			  "args0": [{"type": "input_value", "name": "child"}],
			  "output": null,
			  "colour": getColorForDrawCol('s'), // defined in code.js
			  "tooltip": "",
			  "helpUrl": ""
			});
		}
	};
Blockly.Blocks['m_draw_t'] = {
		init : function() {
			this.jsonInit( 	
			{
			  "type": "m_draw_t",
			  "message0": " %1",
			  "args0": [{"type": "input_value", "name": "child"}],
			  "output": null,
			  "colour": getColorForDrawCol('t'), // defined in code.js
			  "tooltip": "",
			  "helpUrl": ""
			});
		}
	};
Blockly.Blocks['m_draw_u'] = {
		init : function() {
			this.jsonInit( 	
			{
			  "type": "m_draw_u",
			  "message0": " %1",
			  "args0": [{"type": "input_value", "name": "child"}],
			  "output": null,
			  "colour": getColorForDrawCol('u'), // defined in code.js
			  "tooltip": "",
			  "helpUrl": ""
			});
		}
	};
Blockly.Blocks['m_draw_v'] = {
		init : function() {
			this.jsonInit( 	
			{
			  "type": "m_draw_v",
			  "message0": " %1",
			  "args0": [{"type": "input_value", "name": "child"}],
			  "output": null,
			  "colour": getColorForDrawCol('v'), // defined in code.js
			  "tooltip": "",
			  "helpUrl": ""
			});
		}
	};
Blockly.Blocks['m_draw_w'] = {
		init : function() {
			this.jsonInit( 	
			{
			  "type": "m_draw_w",
			  "message0": " %1",
			  "args0": [{"type": "input_value", "name": "child"}],
			  "output": null,
			  "colour": getColorForDrawCol('w'), // defined in code.js
			  "tooltip": "",
			  "helpUrl": ""
			});
		}
	};
Blockly.Blocks['m_draw_x'] = {
		init : function() {
			this.jsonInit( 	
			{
			  "type": "m_draw_x",
			  "message0": " %1",
			  "args0": [{"type": "input_value", "name": "child"}],
			  "output": null,
			  "colour": getColorForDrawCol('x'), // defined in code.js
			  "tooltip": "",
			  "helpUrl": ""
			});
		}
	};
Blockly.Blocks['m_draw_y'] = {
		init : function() {
			this.jsonInit( 	
			{
			  "type": "m_draw_y",
			  "message0": " %1",
			  "args0": [{"type": "input_value", "name": "child"}],
			  "output": null,
			  "colour": getColorForDrawCol('y'), // defined in code.js
			  "tooltip": "",
			  "helpUrl": ""
			});
		}
	};
Blockly.Blocks['m_draw_z'] = {
		init : function() {
			this.jsonInit( 	
			{
			  "type": "m_draw_z",
			  "message0": " %1",
			  "args0": [{"type": "input_value", "name": "child"}],
			  "output": null,
			  "colour": getColorForDrawCol('z'), // defined in code.js
			  "tooltip": "",
			  "helpUrl": ""
			});
		}
	};


Blockly.Blocks['minecraft_wait'] = {
		init : function() {
			this.jsonInit( 	
					{
						  "type": "minecraft_wait",
						  "message0": Blockly.Msg.MC_cmd_minecraft_wait,
						  "args0": [
						    {
						      "type": "input_value",
						      "name": "time",
						      "check": "Number"
						    }
						  ],
						  "previousStatement": null,
						  "nextStatement": null,
						  "colour": 230,
						  "tooltip": "",
						  "helpUrl": ""
						});
		}
	};




Blockly.Blocks['minecraft_movePos_To_Player'] = {
		init : function() {
			this.jsonInit( 	
					{
						  "type": "minecraft_movePos_To_Player",
						  "message0": Blockly.Msg.MC_cmd_minecraft_movePos_To_Player, 
						  "args0": [
						    {
						      "type": "input_value",
						      "name": "playerName",
						      "check": "String"
						    }
						  ],
						  "previousStatement": null,
						  "nextStatement": null,
						  "colour": 230,
						  "tooltip": "",
						  "helpUrl": ""
						});
		}
	};


Blockly.Blocks['minecraft_getPlayerCoord'] = {
		  init: function() {
		    this.jsonInit({
		      "message0": Blockly.Msg.MC_cmd_minecraft_playerCoord,
		      "args0": [
		        {
		          "type": "field_dropdown",
		          "name": "coordinateName",
		          "options": [
		            ['x', 'x'],
		            ['y', 'y'],
		            ['z', 'z']
		          ]
		        }
		      ],
		      "output": "Number",
		      "colour": Blockly.Blocks.math.HUE,
		      "tooltip": "",
		      "helpUrl": ""
		    });
		  }
		};

Blockly.Blocks['minecraft_importobj'] = {
		init : function() {
			this.jsonInit( 	
					{
						  "type": "minecraft_importobj",
						  "message0": Blockly.Msg.MC_cmd_minecraft_importObj,
						  "args0": [
						    {
						      "type": "input_dummy"
						    },
						    {
						      "type": "input_value",
						      "name": "filename",
						      "check": "String"
						    },
						    {
						      "type": "input_dummy"
						    },
						    {
						      "type": "input_value",
						      "name": "size",
						      "check": "Number"
						    }
						  ],
						  "inputsInline": true,
						  "previousStatement": null,
						  "nextStatement": null,
						  "colour": 45,
						  "tooltip": "",
						  "helpUrl": ""
						});
		}
	};

Blockly.Blocks['minecraft_cancelEvents'] = {
		init : function() {
			this.jsonInit( 	
					{
						  "type": "minecraft_cancelEvents",
						  "message0": Blockly.Msg.MC_cmd_minecraft_cancel_events,
						  "inputsInline": true,
						  "previousStatement": null,
						  "nextStatement": null,
						  "colour": 180,
						  "tooltip": "",
						  "helpUrl": ""
						});
		}
	};

Blockly.Blocks['minecraft_executecommand'] = {
		init : function() {
			this.jsonInit( 	
					{
						  "type": "minecraft_executecommand",
						  "message0": Blockly.Msg.MC_cmd_minecraft_execute_command,
						  "args0": [
						    {
						      "type": "input_value",
						      "name": "fn"
						    },
						    {
						      "type": "input_value",
						      "name": "player"
						    },
						    {
						      "type": "input_value",
						      "name": "param1"
						    },
						    {
						      "type": "input_value",
						      "name": "param2"
						    },
						    {
						      "type": "input_value",
						      "name": "param3"
						    },
						    {
						      "type": "input_value",
						      "name": "param4"
						    },
						    {
						      "type": "input_value",
						      "name": "param5"
						    }
						  ],
						  "inputsInline": true,
						  "previousStatement": null,
						  "nextStatement": null,
						  "colour": 180,
						  "tooltip": "",
						  "helpUrl": ""
						});
		}
	};

Blockly.Blocks['customimage_var'] = {
		init : function() {
			this.jsonInit({
				  "type": "customimage_var",
				  "message0" : Blockly.Msg.MC_cmd_minecraft_customimage,
				  "args0": [
				    {
				      "type": "field_variable",
				      "name": "url",
				      "variable": "url"
				    },
				    {
				      "type": "input_value",
				      "name": "singleblock",
						"check" : [ "Material" ]
				    }
				  ],
				  "output": "Material",
				  "colour": 330,
				  "tooltip": "",
				  "helpUrl": ""
				});
		}
	};


Blockly.Blocks['minecraft_materialNothing'] = {
		init : function() {
			this.jsonInit({
				  "type": "minecraft_materialNothing",
				  "message0": Blockly.Msg.MC_cmd_minecraft_nothing,
				  "args0": [
				    {
				      "type": "input_value",
				      "name": "singleblock",
					  "check" : [ "Material" ]
				    }
				  ],
				  "output": null,
				  "colour": 230,
				  "tooltip": "",
				  "helpUrl": ""
				});
		}
	};



