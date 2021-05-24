/**
 * @license
 * Copyright 2012 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview English strings.
 * @author fraser@google.com (Neil Fraser)
 *
 * After modifying this file, either run "build.py" from the parent directory,
 * or run (from this directory):
 * ../i18n/js_to_json.py
 * to regenerate json/{en,qqq,synonyms}.json.
 *
 * To convert all of the json files to .js files, run:
 * ../i18n/create_messages.py json/*.json
 */
'use strict';


/**
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to message files.
 */

/**
 * Each message is preceded with a triple-slash comment that becomes the
 * message descriptor.  The build process extracts these descriptors, adds
 * them to msg/json/qqq.json, and they show up in the translation console.
 */

/** @type {string} */
/// {{Notranslate}} Hue value for all logic blocks.
Blockly.Msg.LOGIC_HUE = '210';
/** @type {string} */
/// {{Notranslate}} Hue value for all loop blocks.
Blockly.Msg.LOOPS_HUE = '120';
/** @type {string} */
/// {{Notranslate}} Hue value for all math blocks.
Blockly.Msg.MATH_HUE = '230';
/** @type {string} */
/// {{Notranslate}} Hue value for all text blocks.
Blockly.Msg.TEXTS_HUE = '160';
/** @type {string} */
/// {{Notranslate}} Hue value for all list blocks.
Blockly.Msg.LISTS_HUE = '260';
/** @type {string} */
/// {{Notranslate}} Hue value for all colour blocks.
Blockly.Msg.COLOUR_HUE = '20';
/** @type {string} */
/// {{Notranslate}} Hue value for all variable blocks.
Blockly.Msg.VARIABLES_HUE = '330';
/** @type {string} */
/// {{Notranslate}} Hue value for all variable dynamic blocks.
Blockly.Msg.VARIABLES_DYNAMIC_HUE = '310';
/** @type {string} */
/// {{Notranslate}} Hue value for all procedure blocks.
Blockly.Msg.PROCEDURES_HUE = '290';

/** @type {string} */
/// default name - A simple, general default name for a variable, preferably short.
/// For more context, see
/// [[Translating:Blockly#infrequent_message_types]].\n{{Identical|Item}}
Blockly.Msg.VARIABLES_DEFAULT_NAME = 'item';
/** @type {string} */
/// default name - A simple, default name for an unnamed function or variable. Preferably indicates that the item is unnamed.
Blockly.Msg.UNNAMED_KEY = 'unnamed';
/** @type {string} */
/// button text - Button that sets a calendar to today's date.\n{{Identical|Today}}
Blockly.Msg.TODAY = 'Today';

// Context menus.
/** @type {string} */
/// context menu - Make a copy of the selected block (and any blocks it contains).\n{{Identical|Duplicate}}
Blockly.Msg.DUPLICATE_BLOCK = 'Duplicate';
/** @type {string} */
/// context menu - Add a descriptive comment to the selected block.
Blockly.Msg.ADD_COMMENT = 'Add Comment';
/** @type {string} */
/// context menu - Remove the descriptive comment from the selected block.
Blockly.Msg.REMOVE_COMMENT = 'Remove Comment';
/** @type {string} */
/// context menu - Make a copy of the selected workspace comment.\n{{Identical|Duplicate}}
Blockly.Msg.DUPLICATE_COMMENT = 'Duplicate Comment';
/** @type {string} */
/// context menu - Change from 'external' to 'inline' mode for displaying blocks used as inputs to the selected block.  See [[Translating:Blockly#context_menus]].
Blockly.Msg.EXTERNAL_INPUTS = 'External Inputs';
/** @type {string} */
/// context menu - Change from 'internal' to 'external' mode for displaying blocks used as inputs to the selected block.  See [[Translating:Blockly#context_menus]].
Blockly.Msg.INLINE_INPUTS = 'Inline Inputs';
/** @type {string} */
/// context menu - Permanently delete the selected block.
Blockly.Msg.DELETE_BLOCK = 'Delete Block';
/** @type {string} */
/// context menu - Permanently delete the %1 selected blocks.\n\nParameters:\n* %1 - an integer greater than 1.
Blockly.Msg.DELETE_X_BLOCKS = 'Delete %1 Blocks';
/** @type {string} */
/// confirmation prompt - Question the user if they really wanted to permanently delete all %1 blocks.\n\nParameters:\n* %1 - an integer greater than 1.
Blockly.Msg.DELETE_ALL_BLOCKS = 'Delete all %1 blocks?';
/** @type {string} */
/// context menu - Reposition all the blocks so that they form a neat line.
Blockly.Msg.CLEAN_UP = 'Clean up Blocks';
/** @type {string} */
/// context menu - Make the appearance of the selected block smaller by hiding some information about it.
Blockly.Msg.COLLAPSE_BLOCK = 'Collapse Block';
/** @type {string} */
/// context menu - Make the appearance of all blocks smaller by hiding some information about it.  Use the same terminology as in the previous message.
Blockly.Msg.COLLAPSE_ALL = 'Collapse Blocks';
/** @type {string} */
/// context menu - Restore the appearance of the selected block by showing information about it that was hidden (collapsed) earlier.
Blockly.Msg.EXPAND_BLOCK = 'Expand Block';
/** @type {string} */
/// context menu - Restore the appearance of all blocks by showing information about it that was hidden (collapsed) earlier.  Use the same terminology as in the previous message.
Blockly.Msg.EXPAND_ALL = 'Expand Blocks';
/** @type {string} */
/// context menu - Make the selected block have no effect (unless reenabled).
Blockly.Msg.DISABLE_BLOCK = 'Disable Block';
/** @type {string} */
/// context menu - Make the selected block have effect (after having been disabled earlier).
Blockly.Msg.ENABLE_BLOCK = 'Enable Block';
/** @type {string} */
/// context menu - Provide helpful information about the selected block.\n{{Identical|Help}}
Blockly.Msg.HELP = 'Help';
/** @type {string} */
/// context menu - Undo the previous action.\n{{Identical|Undo}}
Blockly.Msg.UNDO = 'Undo';
/** @type {string} */
/// context menu - Undo the previous undo action.\n{{Identical|Redo}}
Blockly.Msg.REDO = 'Redo';

// Variable renaming.
/** @type {string} */
/// prompt - This message is only seen in the Opera browser.  With most browsers, users can edit numeric values in blocks by just clicking and typing.  Opera does not allows this, so we have to open a new window and prompt users with this message to chanage a value.
Blockly.Msg.CHANGE_VALUE_TITLE = 'Change value:';
/** @type {string} */
/// dropdown choice - When the user clicks on a variable block, this is one of the dropdown menu choices.  It is used to rename the current variable.  See [https://github.com/google/blockly/wiki/Variables#dropdown-menu https://github.com/google/blockly/wiki/Variables#dropdown-menu].
Blockly.Msg.RENAME_VARIABLE = 'Rename variable...';
/** @type {string} */
/// prompt - Prompts the user to enter the new name for the selected variable.  See [https://github.com/google/blockly/wiki/Variables#dropdown-menu https://github.com/google/blockly/wiki/Variables#dropdown-menu].\n\nParameters:\n* %1 - the name of the variable to be renamed.
Blockly.Msg.RENAME_VARIABLE_TITLE = 'Rename all "%1" variables to:';

// Variable creation
/** @type {string} */
/// button text - Text on the button used to launch the variable creation dialogue.
Blockly.Msg.NEW_VARIABLE = 'Create variable...';
/** @type {string} */
/// button text - Text on the button used to launch the variable creation dialogue.
Blockly.Msg.NEW_STRING_VARIABLE = 'Create string variable...';
/** @type {string} */
/// button text - Text on the button used to launch the variable creation dialogue.
Blockly.Msg.NEW_NUMBER_VARIABLE = 'Create number variable...';
/** @type {string} */
/// button text - Text on the button used to launch the variable creation dialogue.
Blockly.Msg.NEW_COLOUR_VARIABLE = 'Create colour variable...';
/** @type {string} */
/// prompt - Prompts the user to enter the type for a variable.
Blockly.Msg.NEW_VARIABLE_TYPE_TITLE = 'New variable type:';
/** @type {string} */
/// prompt - Prompts the user to enter the name for a new variable.  See [https://github.com/google/blockly/wiki/Variables#dropdown-menu https://github.com/google/blockly/wiki/Variables#dropdown-menu].
Blockly.Msg.NEW_VARIABLE_TITLE = 'New variable name:';
/** @type {string} */
/// alert - Tells the user that the name they entered is already in use.
Blockly.Msg.VARIABLE_ALREADY_EXISTS = 'A variable named "%1" already exists.';
/** @type {string} */
/// alert - Tells the user that the name they entered is already in use for another type.
Blockly.Msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE = 'A variable named "%1" already exists for another type: "%2".';

// Variable deletion.
/** @type {string} */
/// confirm -  Ask the user to confirm their deletion of multiple uses of a variable.
Blockly.Msg.DELETE_VARIABLE_CONFIRMATION = 'Delete %1 uses of the "%2" variable?';
/** @type {string} */
/// alert - Tell the user that they can't delete a variable because it's part of the definition of a function.
Blockly.Msg.CANNOT_DELETE_VARIABLE_PROCEDURE = 'Can\'t delete the variable "%1" because it\'s part of the definition of the function "%2"';
/** @type {string} */
/// dropdown choice - Delete the currently selected variable.
Blockly.Msg.DELETE_VARIABLE = 'Delete the "%1" variable';

// Colour Blocks.
/** @type {string} */
/// {{Optional}} url - Information about colour.
Blockly.Msg.COLOUR_PICKER_HELPURL = 'https://en.wikipedia.org/wiki/Color';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Colour#picking-a-colour-from-a-palette https://github.com/google/blockly/wiki/Colour#picking-a-colour-from-a-palette].
Blockly.Msg.COLOUR_PICKER_TOOLTIP = 'Choose a colour from the palette.';
/** @type {string} */
/// {{Optional}} url - A link that displays a random colour each time you visit it.
Blockly.Msg.COLOUR_RANDOM_HELPURL = 'http://randomcolour.com';
/** @type {string} */
/// block text - Title of block that generates a colour at random.
Blockly.Msg.COLOUR_RANDOM_TITLE = 'random colour';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Colour#generating-a-random-colour https://github.com/google/blockly/wiki/Colour#generating-a-random-colour].
Blockly.Msg.COLOUR_RANDOM_TOOLTIP = 'Choose a colour at random.';
/** @type {string} */
/// {{Optional}} url - A link for colour codes with percentages (0-100%) for each component, instead of the more common 0-255, which may be more difficult for beginners.
Blockly.Msg.COLOUR_RGB_HELPURL = 'https://www.december.com/html/spec/colorpercompact.html';
/** @type {string} */
/// block text - Title of block for [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].
Blockly.Msg.COLOUR_RGB_TITLE = 'colour with';
/** @type {string} */
/// block input text - The amount of red (from 0 to 100) to use when [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].\n{{Identical|Red}}
Blockly.Msg.COLOUR_RGB_RED = 'red';
/** @type {string} */
/// block input text - The amount of green (from 0 to 100) to use when [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].
Blockly.Msg.COLOUR_RGB_GREEN = 'green';
/** @type {string} */
/// block input text - The amount of blue (from 0 to 100) to use when [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].\n{{Identical|Blue}}
Blockly.Msg.COLOUR_RGB_BLUE = 'blue';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].
Blockly.Msg.COLOUR_RGB_TOOLTIP = 'Create a colour with the specified amount of red, green, and blue. All values must be between 0 and 100.';
/** @type {string} */
/// {{Optional}} url - A useful link that displays blending of two colours.
Blockly.Msg.COLOUR_BLEND_HELPURL = 'https://meyerweb.com/eric/tools/color-blend/#:::rgbp';
/** @type {string} */
/// block text - A verb for blending two shades of paint.
Blockly.Msg.COLOUR_BLEND_TITLE = 'blend';
/** @type {string} */
/// block input text - The first of two colours to [https://github.com/google/blockly/wiki/Colour#blending-colours blend].
Blockly.Msg.COLOUR_BLEND_COLOUR1 = 'colour 1';
/** @type {string} */
/// block input text - The second of two colours to [https://github.com/google/blockly/wiki/Colour#blending-colours blend].
Blockly.Msg.COLOUR_BLEND_COLOUR2 = 'colour 2';
/** @type {string} */
/// block input text - The proportion of the [https://github.com/google/blockly/wiki/Colour#blending-colours blend] containing the first colour; the remaining proportion is of the second colour.  For example, if the first colour is red and the second colour blue, a ratio of 1 would yield pure red, a ratio of .5 would yield purple (equal amounts of red and blue), and a ratio of 0 would yield pure blue.\n{{Identical|Ratio}}
Blockly.Msg.COLOUR_BLEND_RATIO = 'ratio';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Colour#blending-colours https://github.com/google/blockly/wiki/Colour#blending-colours].
Blockly.Msg.COLOUR_BLEND_TOOLTIP = 'Blends two colours together with a given ratio (0.0 - 1.0).';

// Loop Blocks.
/** @type {string} */
/// {{Optional}} url - Describes 'repeat loops' in computer programs; consider using the translation of the page [https://en.wikipedia.org/wiki/Control_flow https://en.wikipedia.org/wiki/Control_flow].
Blockly.Msg.CONTROLS_REPEAT_HELPURL = 'https://en.wikipedia.org/wiki/For_loop';
/** @type {string} */
/// block input text - Title of [https://github.com/google/blockly/wiki/Loops#repeat repeat block].\n\nParameters:\n* %1 - the number of times the body of the loop should be repeated.
Blockly.Msg.CONTROLS_REPEAT_TITLE = 'repeat %1 times';
/** @type {string} */
/// block text - Preceding the blocks in the body of the loop.  See [https://github.com/google/blockly/wiki/Loops https://github.com/google/blockly/wiki/Loops].\n{{Identical|Do}}
Blockly.Msg.CONTROLS_REPEAT_INPUT_DO = 'do';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#repeat https://github.com/google/blockly/wiki/Loops#repeat].
Blockly.Msg.CONTROLS_REPEAT_TOOLTIP = 'Do some statements several times.';
/** @type {string} */
/// {{Optional}} url - Describes 'while loops' in computer programs; consider using the translation of [https://en.wikipedia.org/wiki/While_loop https://en.wikipedia.org/wiki/While_loop], if present, or [https://en.wikipedia.org/wiki/Control_flow https://en.wikipedia.org/wiki/Control_flow].
Blockly.Msg.CONTROLS_WHILEUNTIL_HELPURL = 'https://github.com/google/blockly/wiki/Loops#repeat';
/** @type {string} */
Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
/** @type {string} */
/// dropdown - Specifies that a loop should [https://github.com/google/blockly/wiki/Loops#repeat-while repeat while] the following condition is true.
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = 'repeat while';
/** @type {string} */
/// dropdown - Specifies that a loop should [https://github.com/google/blockly/wiki/Loops#repeat-until repeat until] the following condition becomes true.
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = 'repeat until';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#repeat-while Loops#repeat-while https://github.com/google/blockly/wiki/Loops#repeat-while Loops#repeat-while].
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = 'While a value is true, then do some statements.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#repeat-until https://github.com/google/blockly/wiki/Loops#repeat-until].
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = 'While a value is false, then do some statements.';

/** @type {string} */
/// {{Optional}} url - Describes 'for loops' in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/For_loop https://en.wikipedia.org/wiki/For_loop], if present.
Blockly.Msg.CONTROLS_FOR_HELPURL = 'https://github.com/google/blockly/wiki/Loops#count-with';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#count-with https://github.com/google/blockly/wiki/Loops#count-with].\n\nParameters:\n* %1 - the name of the loop variable.
Blockly.Msg.CONTROLS_FOR_TOOLTIP = 'Have the variable "%1" take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks.';
/** @type {string} */
/// block text - Repeatedly counts a variable (%1)
/// starting with a (usually lower) number in a range (%2),
/// ending with a (usually higher) number in a range (%3), and counting the
/// iterations by a number of steps (%4).  As in
/// [https://github.com/google/blockly/wiki/Loops#count-with
/// https://github.com/google/blockly/wiki/Loops#count-with].
/// [[File:Blockly-count-with.png]]
Blockly.Msg.CONTROLS_FOR_TITLE = 'count with %1 from %2 to %3 by %4';
/** @type {string} */
Blockly.Msg.CONTROLS_FOR_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;

/** @type {string} */
/// {{Optional}} url - Describes 'for-each loops' in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Foreach https://en.wikipedia.org/wiki/Foreach] if present.
Blockly.Msg.CONTROLS_FOREACH_HELPURL = 'https://github.com/google/blockly/wiki/Loops#for-each';
/** @type {string} */
/// block text - Title of [https://github.com/google/blockly/wiki/Loops#for-each for each block].
/// Sequentially assigns every item in array %2 to the valiable %1.
Blockly.Msg.CONTROLS_FOREACH_TITLE = 'for each item %1 in list %2';
/** @type {string} */
Blockly.Msg.CONTROLS_FOREACH_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
/** @type {string} */
/// block text - Description of [https://github.com/google/blockly/wiki/Loops#for-each for each blocks].\n\nParameters:\n* %1 - the name of the loop variable.
Blockly.Msg.CONTROLS_FOREACH_TOOLTIP = 'For each item in a list, set the variable "%1" to the item, and then do some statements.';

/** @type {string} */
/// {{Optional}} url - Describes control flow in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Control_flow https://en.wikipedia.org/wiki/Control_flow], if it exists.
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL = 'https://github.com/google/blockly/wiki/Loops#loop-termination-blocks';
/** @type {string} */
/// dropdown - The current loop should be exited.  See [https://github.com/google/blockly/wiki/Loops#break https://github.com/google/blockly/wiki/Loops#break].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = 'break out of loop';
/** @type {string} */
/// dropdown - The current iteration of the loop should be ended and the next should begin.  See [https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = 'continue with next iteration of loop';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#break-out-of-loop https://github.com/google/blockly/wiki/Loops#break-out-of-loop].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = 'Break out of the containing loop.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = 'Skip the rest of this loop, and continue with the next iteration.';
/** @type {string} */
/// warning - The user has tried placing a block outside of a loop (for each, while, repeat, etc.), but this type of block may only be used within a loop.  See [https://github.com/google/blockly/wiki/Loops#loop-termination-blocks https://github.com/google/blockly/wiki/Loops#loop-termination-blocks].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING = 'Warning: This block may only be used within a loop.';

// Logic Blocks.
/** @type {string} */
/// {{Optional}} url - Describes conditional statements (if-then-else) in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_else https://en.wikipedia.org/wiki/If_else], if present.
Blockly.Msg.CONTROLS_IF_HELPURL = 'https://github.com/google/blockly/wiki/IfElse';
/** @type {string} */
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-blocks 'if' blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement], if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_1 = 'If a value is true, then do some statements.';
/** @type {string} */
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-else-blocks if-else blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement], if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_2 = 'If a value is true, then do the first block of statements. Otherwise, do the second block of statements.';
/** @type {string} */
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-else-if-blocks if-else-if blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement], if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_3 = 'If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.';
/** @type {string} */
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-else-if-else-blocks if-else-if-else blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement], if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_4 = 'If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/IfElse https://github.com/google/blockly/wiki/IfElse].
/// It is recommended, but not essential, that this have text in common with the translation of 'else if'\n{{Identical|If}}
Blockly.Msg.CONTROLS_IF_MSG_IF = 'if';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/IfElse https://github.com/google/blockly/wiki/IfElse].  The English words "otherwise if" would probably be clearer than "else if", but the latter is used because it is traditional and shorter.
Blockly.Msg.CONTROLS_IF_MSG_ELSEIF = 'else if';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/IfElse https://github.com/google/blockly/wiki/IfElse].  The English word "otherwise" would probably be superior to "else", but the latter is used because it is traditional and shorter.
Blockly.Msg.CONTROLS_IF_MSG_ELSE = 'else';
/** @type {string} */
Blockly.Msg.CONTROLS_IF_MSG_THEN = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
/** @type {string} */
Blockly.Msg.CONTROLS_IF_IF_TITLE_IF = Blockly.Msg.CONTROLS_IF_MSG_IF;
/** @type {string} */
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#block-modification if block modification].
Blockly.Msg.CONTROLS_IF_IF_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this if block.';
/** @type {string} */
Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = Blockly.Msg.CONTROLS_IF_MSG_ELSEIF;
/** @type {string} */
/// tooltip - Describes the 'else if' subblock during [https://github.com/google/blockly/wiki/IfElse#block-modification if block modification].
Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP = 'Add a condition to the if block.';
/** @type {string} */
Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE = Blockly.Msg.CONTROLS_IF_MSG_ELSE;
/** @type {string} */
/// tooltip - Describes the 'else' subblock during [https://github.com/google/blockly/wiki/IfElse#block-modification if block modification].
Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP = 'Add a final, catch-all condition to the if block.';

/** @type {string} */
/// button text - Text on a button inside a dialogue window, which will accept or acknowledge the contents of the dialogue when pressed.\n{{Identical|OK}}
Blockly.Msg.IOS_OK = 'OK';
/** @type {string} */
/// button text - Text on a button inside a dialogue window, which will close or cancel the dialogue when pressed.\n{{Identical|Cancel}}
Blockly.Msg.IOS_CANCEL = 'Cancel';
/** @type {string} */
/// alert - Title text for an error dialogue.\n{{Identical|Error}}
Blockly.Msg.IOS_ERROR = 'Error';
/** @type {string} */
/// header text - Title of a section that displays a list of parameters (aka. "inputs") that have been defined for a procedure. This is used inside a dialogue window to configure a procedure.\n{{Identical|Input}}
Blockly.Msg.IOS_PROCEDURES_INPUTS = 'INPUTS';
/** @type {string} */
/// button text - Text on a button which will add a parameter (aka. "input") to a procedure. This is used inside a dialogue window to configure a procedure. NOTE: The "+" should be preserved at the beginning of the text.
Blockly.Msg.IOS_PROCEDURES_ADD_INPUT = '+ Add Input';
/** @type {string} */
/// option text - Text describing an option to allow statements to be added within a procedure. This is used inside a dialogue window to configure a procedure.
Blockly.Msg.IOS_PROCEDURES_ALLOW_STATEMENTS = 'Allow statements';
/** @type {string} */
/// alert - Error message when duplicate parameters (aka. "inputs") have been defined on a procedure. This is used inside a dialogue window to configure procedure parameters.
Blockly.Msg.IOS_PROCEDURES_DUPLICATE_INPUTS_ERROR = 'This function has duplicate inputs.';
/** @type {string} */
/// button text - Text on a button which will open a variable creation dialogue when pressed. NOTE: The "+" should be preserved at the beginning of the text.
Blockly.Msg.IOS_VARIABLES_ADD_VARIABLE = '+ Add Variable';
/** @type {string} */
/// button text - Text on a button inside a variable creation dialogue, which will add a variable when pressed.\n{{Identical|Add}}
Blockly.Msg.IOS_VARIABLES_ADD_BUTTON = 'Add';
/** @type {string} */
/// button text - Text on a button inside a variable rename dialogue, which will rename a variable when pressed.\n{{Identical|Rename}}
Blockly.Msg.IOS_VARIABLES_RENAME_BUTTON = 'Rename';
/** @type {string} */
/// button text - Text on a button inside a variable deletion dialogue, which will delete a variable when pressed.\n{{Identical|Delete}}
Blockly.Msg.IOS_VARIABLES_DELETE_BUTTON = 'Delete';
/** @type {string} */
/// placeholder text - Placeholder text used inside a text input, where a variable name should be entered.
Blockly.Msg.IOS_VARIABLES_VARIABLE_NAME = 'Variable name';
/** @type {string} */
/// alert - Error message that is displayed when the user attempts to create a variable without a name.
Blockly.Msg.IOS_VARIABLES_EMPTY_NAME_ERROR = 'You can\'t use an empty variable name.';

/** @type {string} */
/// {{Optional}} url - Information about comparisons.
Blockly.Msg.LOGIC_COMPARE_HELPURL = 'https://en.wikipedia.org/wiki/Inequality_(mathematics)';
/** @type {string} */
/// tooltip - Describes the equals (=) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ = 'Return true if both inputs equal each other.';
/** @type {string} */
/// tooltip - Describes the not equals (≠) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ = 'Return true if both inputs are not equal to each other.';
/** @type {string} */
/// tooltip - Describes the less than (<) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT = 'Return true if the first input is smaller than the second input.';
/** @type {string} */
/// tooltip - Describes the less than or equals (≤) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE = 'Return true if the first input is smaller than or equal to the second input.';
/** @type {string} */
/// tooltip - Describes the greater than (>) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT = 'Return true if the first input is greater than the second input.';
/** @type {string} */
/// tooltip - Describes the greater than or equals (≥) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE = 'Return true if the first input is greater than or equal to the second input.';

/** @type {string} */
/// {{Optional}} url - Information about the Boolean conjunction ("and") and disjunction ("or") operators.  Consider using the translation of [https://en.wikipedia.org/wiki/Boolean_logic https://en.wikipedia.org/wiki/Boolean_logic], if it exists in your language.
Blockly.Msg.LOGIC_OPERATION_HELPURL = 'https://github.com/google/blockly/wiki/Logic#logical-operations';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Logical_conjunction https://en.wikipedia.org/wiki/Logical_conjunction].
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND = 'Return true if both inputs are true.';
/** @type {string} */
/// block text - See [https://en.wikipedia.org/wiki/Logical_conjunction https://en.wikipedia.org/wiki/Logical_conjunction].\n{{Identical|And}}
Blockly.Msg.LOGIC_OPERATION_AND = 'and';
/** @type {string} */
/// block text - See [https://en.wikipedia.org/wiki/Disjunction https://en.wikipedia.org/wiki/Disjunction].
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR = 'Return true if at least one of the inputs is true.';
/** @type {string} */
/// block text - See [https://en.wikipedia.org/wiki/Disjunction https://en.wikipedia.org/wiki/Disjunction].\n{{Identical|Or}}
Blockly.Msg.LOGIC_OPERATION_OR = 'or';

/** @type {string} */
/// {{Optional}} url - Information about logical negation.  The translation of [https://en.wikipedia.org/wiki/Logical_negation https://en.wikipedia.org/wiki/Logical_negation] is recommended if it exists in the target language.
Blockly.Msg.LOGIC_NEGATE_HELPURL = 'https://github.com/google/blockly/wiki/Logic#not';
/** @type {string} */
/// block text - This is a unary operator that returns ''false'' when the input is ''true'', and ''true'' when the input is ''false''.
/// \n\nParameters:\n* %1 - the input (which should be either the value "true" or "false")
Blockly.Msg.LOGIC_NEGATE_TITLE = 'not %1';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Logical_negation https://en.wikipedia.org/wiki/Logical_negation].
Blockly.Msg.LOGIC_NEGATE_TOOLTIP = 'Returns true if the input is false. Returns false if the input is true.';

/** @type {string} */
/// {{Optional}} url - Information about the logic values ''true'' and ''false''.  Consider using the translation of [https://en.wikipedia.org/wiki/Truth_value https://en.wikipedia.org/wiki/Truth_value] if it exists in your language.
Blockly.Msg.LOGIC_BOOLEAN_HELPURL = 'https://github.com/google/blockly/wiki/Logic#values';
/** @type {string} */
/// block text - The word for the [https://en.wikipedia.org/wiki/Truth_value logical value] ''true''.\n{{Identical|True}}
Blockly.Msg.LOGIC_BOOLEAN_TRUE = 'true';
/** @type {string} */
/// block text - The word for the [https://en.wikipedia.org/wiki/Truth_value logical value] ''false''.\n{{Identical|False}}
Blockly.Msg.LOGIC_BOOLEAN_FALSE = 'false';
/** @type {string} */
/// tooltip - Indicates that the block returns either of the two possible [https://en.wikipedia.org/wiki/Truth_value logical values].
Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP = 'Returns either true or false.';

/** @type {string} */
/// {{Optional}} url - Provide a link to the translation of [https://en.wikipedia.org/wiki/Nullable_type https://en.wikipedia.org/wiki/Nullable_type], if it exists in your language; otherwise, do not worry about translating this advanced concept.
Blockly.Msg.LOGIC_NULL_HELPURL = 'https://en.wikipedia.org/wiki/Nullable_type';
/** @type {string} */
/// block text - In computer languages, ''null'' is a special value that indicates that no value has been set.  You may use your language's word for "nothing" or "invalid".\n{{Identical|Null}}
Blockly.Msg.LOGIC_NULL = 'null';
/** @type {string} */
/// tooltip - This should use the word from the previous message.
Blockly.Msg.LOGIC_NULL_TOOLTIP = 'Returns null.';

/** @type {string} */
/// {{Optional}} url - Describes the programming language operator known as the ''ternary'' or ''conditional'' operator.  It is recommended that you use the translation of [https://en.wikipedia.org/wiki/%3F: https://en.wikipedia.org/wiki/%3F:] if it exists.
Blockly.Msg.LOGIC_TERNARY_HELPURL = 'https://en.wikipedia.org/wiki/%3F:';
/** @type {string} */
/// block input text - Label for the input whose value determines which of the other two inputs is returned.  In some programming languages, this is called a ''''predicate''''.
Blockly.Msg.LOGIC_TERNARY_CONDITION = 'test';
/** @type {string} */
/// block input text - Indicates that the following input should be returned (used as output) if the test input is true.  Remember to try to keep block text terse (short).
Blockly.Msg.LOGIC_TERNARY_IF_TRUE = 'if true';
/** @type {string} */
/// block input text - Indicates that the following input should be returned (used as output) if the test input is false.
Blockly.Msg.LOGIC_TERNARY_IF_FALSE = 'if false';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/%3F: https://en.wikipedia.org/wiki/%3F:].
Blockly.Msg.LOGIC_TERNARY_TOOLTIP = 'Check the condition in "test". If the condition is true, returns the "if true" value; otherwise returns the "if false" value.';

// Math Blocks.
/** @type {string} */
/// {{Optional}} url - Information about (real) numbers.
Blockly.Msg.MATH_NUMBER_HELPURL = 'https://en.wikipedia.org/wiki/Number';
/** @type {string} */
/// tooltip - Any positive or negative number, not necessarily an integer.
Blockly.Msg.MATH_NUMBER_TOOLTIP = 'A number.';

/** @type {string} */
/// {{Optional}} math - The symbol for the binary operation addition.
Blockly.Msg.MATH_ADDITION_SYMBOL = '+';
/** @type {string} */
/// {{Optional}} math - The symbol for the binary operation indicating that the right operand should be
/// subtracted from the left operand.
Blockly.Msg.MATH_SUBTRACTION_SYMBOL = '-';
/** @type {string} */
/// {{Optional}} math - The binary operation indicating that the left operand should be divided by
/// the right operand.
Blockly.Msg.MATH_DIVISION_SYMBOL = '÷';
/** @type {string} */
/// {{Optional}} math - The symbol for the binary operation multiplication.
Blockly.Msg.MATH_MULTIPLICATION_SYMBOL = '×';
/** @type {string} */
/// {{Optional}} math - The symbol for the binary operation exponentiation.  Specifically, if the
/// value of the left operand is L and the value of the right operand (the exponent) is
/// R, multiply L by itself R times.  (Fractional and negative exponents are also legal.)
Blockly.Msg.MATH_POWER_SYMBOL = '^';

/** @type {string} */
/// math - The short name of the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent sine].
Blockly.Msg.MATH_TRIG_SIN = 'sin';
/** @type {string} */
/// math - The short name of the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent cosine].
Blockly.Msg.MATH_TRIG_COS = 'cos';
/** @type {string} */
/// math - The short name of the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent tangent].
Blockly.Msg.MATH_TRIG_TAN = 'tan';
/** @type {string} */
/// math - The short name of the ''inverse of'' the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent sine].
Blockly.Msg.MATH_TRIG_ASIN = 'asin';
/** @type {string} */
/// math - The short name of the ''inverse of'' the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent cosine].
Blockly.Msg.MATH_TRIG_ACOS = 'acos';
/** @type {string} */
/// math - The short name of the ''inverse of'' the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent tangent].
Blockly.Msg.MATH_TRIG_ATAN = 'atan';

/** @type {string} */
/// {{Optional}} url - Information about addition, subtraction, multiplication, division, and exponentiation.
Blockly.Msg.MATH_ARITHMETIC_HELPURL = 'https://en.wikipedia.org/wiki/Arithmetic';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Addition https://en.wikipedia.org/wiki/Addition].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD = 'Return the sum of the two numbers.';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Subtraction https://en.wikipedia.org/wiki/Subtraction].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS = 'Return the difference of the two numbers.';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Multiplication https://en.wikipedia.org/wiki/Multiplication].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = 'Return the product of the two numbers.';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Division_(mathematics) https://en.wikipedia.org/wiki/Division_(mathematics)].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE = 'Return the quotient of the two numbers.';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Exponentiation https://en.wikipedia.org/wiki/Exponentiation].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER = 'Return the first number raised to the power of the second number.';

/** @type {string} */
/// {{Optional}} url - Information about the square root operation.
Blockly.Msg.MATH_SINGLE_HELPURL = 'https://en.wikipedia.org/wiki/Square_root';
/** @type {string} */
/// dropdown - This computes the positive [https://en.wikipedia.org/wiki/Square_root square root] of its input.  For example, the square root of 16 is 4.
Blockly.Msg.MATH_SINGLE_OP_ROOT = 'square root';
/** @type {string} */
/// tooltip - Please use the same term as in the previous message.
Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT = 'Return the square root of a number.';
/** @type {string} */
/// dropdown - This leaves positive numeric inputs changed and inverts negative inputs.  For example, the absolute value of 5 is 5; the absolute value of -5 is also 5.  For more information, see [https://en.wikipedia.org/wiki/Absolute_value https://en.wikipedia.org/wiki/Absolute_value].
Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE = 'absolute';
/** @type {string} */
/// tooltip - Please use the same term as in the previous message.
Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS = 'Return the absolute value of a number.';

/** @type {string} */
/// tooltip - Calculates '''0-n''', where '''n''' is the single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG = 'Return the negation of a number.';
/** @type {string} */
/// tooltip - Calculates the [https://en.wikipedia.org/wiki/Natural_logarithm|natural logarithm] of its single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_LN = 'Return the natural logarithm of a number.';
/** @type {string} */
/// tooltip - Calculates the [https://en.wikipedia.org/wiki/Common_logarithm common logarithm] of its single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG10 = 'Return the base 10 logarithm of a number.';
/** @type {string} */
/// tooltip - Multiplies [https://en.wikipedia.org/wiki/E_(mathematical_constant) e] by itself n times, where n is the single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP = 'Return e to the power of a number.';
/** @type {string} */
/// tooltip - Multiplies 10 by itself n times, where n is the single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_POW10 = 'Return 10 to the power of a number.';

/** @type {string} */
/// {{Optional}} url - Information about the trigonometric functions sine, cosine, tangent, and their inverses (ideally using degrees, not radians).
Blockly.Msg.MATH_TRIG_HELPURL = 'https://en.wikipedia.org/wiki/Trigonometric_functions';
/** @type {string} */
/// tooltip - Return the [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent sine] of an [https://en.wikipedia.org/wiki/Degree_(angle) angle in degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_SIN = 'Return the sine of a degree (not radian).';
/** @type {string} */
/// tooltip - Return the [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent cosine] of an [https://en.wikipedia.org/wiki/Degree_(angle) angle in degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_COS = 'Return the cosine of a degree (not radian).';
/** @type {string} */
/// tooltip - Return the [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent tangent] of an [https://en.wikipedia.org/wiki/Degree_(angle) angle in degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_TAN = 'Return the tangent of a degree (not radian).';
/** @type {string} */
/// tooltip - The [https://en.wikipedia.org/wiki/Inverse_trigonometric_functions inverse] of the [https://en.wikipedia.org/wiki/Cosine#Sine.2C_cosine_and_tangent sine function], using [https://en.wikipedia.org/wiki/Degree_(angle) degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_ASIN = 'Return the arcsine of a number.';
/** @type {string} */
/// tooltip - The [https://en.wikipedia.org/wiki/Inverse_trigonometric_functions inverse] of the [https://en.wikipedia.org/wiki/Cosine#Sine.2C_cosine_and_tangent cosine] function, using [https://en.wikipedia.org/wiki/Degree_(angle) degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_ACOS = 'Return the arccosine of a number.';
/** @type {string} */
/// tooltip - The [https://en.wikipedia.org/wiki/Inverse_trigonometric_functions inverse] of the [https://en.wikipedia.org/wiki/Cosine#Sine.2C_cosine_and_tangent tangent] function, using [https://en.wikipedia.org/wiki/Degree_(angle) degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_ATAN = 'Return the arctangent of a number.';

/** @type {string} */
/// {{Optional}} url - Information about the mathematical constants Pi (π), e, the golden ratio (φ), √ 2, √ 1/2, and infinity (∞).
Blockly.Msg.MATH_CONSTANT_HELPURL = 'https://en.wikipedia.org/wiki/Mathematical_constant';
/** @type {string} */
/// tooltip - Provides the specified [https://en.wikipedia.org/wiki/Mathematical_constant mathematical constant].
Blockly.Msg.MATH_CONSTANT_TOOLTIP = 'Return one of the common constants: π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…), or ∞ (infinity).';
/** @type {string} */
/// dropdown - A number is '''even''' if it is a multiple of 2.  For example, 4 is even (yielding true), but 3 is not (false).
Blockly.Msg.MATH_IS_EVEN = 'is even';
/** @type {string} */
/// dropdown - A number is '''odd''' if it is not a multiple of 2.  For example, 3 is odd (yielding true), but 4 is not (false).  The opposite of "odd" is "even".
Blockly.Msg.MATH_IS_ODD = 'is odd';
/** @type {string} */
/// dropdown - A number is [https://en.wikipedia.org/wiki/Prime prime] if it cannot be evenly divided by any positive integers except for 1 and itself.  For example, 5 is prime, but 6 is not because 2 × 3 = 6.
Blockly.Msg.MATH_IS_PRIME = 'is prime';
/** @type {string} */
/// dropdown - A number is '''whole''' if it is an [https://en.wikipedia.org/wiki/Integer integer].  For example, 5 is whole, but 5.1 is not.
Blockly.Msg.MATH_IS_WHOLE = 'is whole';
/** @type {string} */
/// dropdown - A number is '''positive''' if it is greater than 0.  (0 is neither negative nor positive.)
Blockly.Msg.MATH_IS_POSITIVE = 'is positive';
/** @type {string} */
/// dropdown - A number is '''negative''' if it is less than 0.  (0 is neither negative nor positive.)
Blockly.Msg.MATH_IS_NEGATIVE = 'is negative';
/** @type {string} */
/// dropdown - A number x is divisible by y if y goes into x evenly.  For example, 10 is divisible by 5, but 10 is not divisible by 3.
Blockly.Msg.MATH_IS_DIVISIBLE_BY = 'is divisible by';
/** @type {string} */
/// tooltip - This block lets the user specify via a dropdown menu whether to check if the numeric input is even, odd, prime, whole, positive, negative, or divisible by a given value.
Blockly.Msg.MATH_IS_TOOLTIP = 'Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.';

/** @type {string} */
/// {{Optional}} url - Information about incrementing (increasing the value of) a variable.
/// For other languages, just use the translation of the Wikipedia page about
/// addition ([https://en.wikipedia.org/wiki/Addition https://en.wikipedia.org/wiki/Addition]).
Blockly.Msg.MATH_CHANGE_HELPURL = 'https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter';
/** @type {string} */
/// - As in: ''change'' [the value of variable] ''item'' ''by'' 1 (e.g., if the variable named 'item' had the value 5, change it to 6).
/// %1 is a variable name.
/// %2 is the amount of change.
Blockly.Msg.MATH_CHANGE_TITLE = 'change %1 by %2';
/** @type {string} */
Blockly.Msg.MATH_CHANGE_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/** @type {string} */
/// tooltip - This updates the value of the variable by adding to it the following numeric input.\n\nParameters:\n* %1 - the name of the variable whose value should be increased.
Blockly.Msg.MATH_CHANGE_TOOLTIP = 'Add a number to variable "%1".';

/** @type {string} */
/// {{Optional}} url - Information about how numbers are rounded to the nearest integer
Blockly.Msg.MATH_ROUND_HELPURL = 'https://en.wikipedia.org/wiki/Rounding';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Rounding https://en.wikipedia.org/wiki/Rounding].
Blockly.Msg.MATH_ROUND_TOOLTIP = 'Round a number up or down.';
/** @type {string} */
/// dropdown - This rounds its input to the nearest whole number.  For example, 3.4 is rounded to 3.
Blockly.Msg.MATH_ROUND_OPERATOR_ROUND = 'round';
/** @type {string} */
/// dropdown - This rounds its input up to the nearest whole number.  For example, if the input was 2.2, the result would be 3.
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP = 'round up';
/** @type {string} */
/// dropdown - This rounds its input down to the nearest whole number.  For example, if the input was 3.8, the result would be 3.
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN = 'round down';

/** @type {string} */
/// {{Optional}} url - Information about applying a function to a list of numbers.  (We were unable to find such information in English.  Feel free to skip this and any other URLs that are difficult.)
Blockly.Msg.MATH_ONLIST_HELPURL = '';
/** @type {string} */
/// dropdown - This computes the sum of the numeric elements in the list.  For example, the sum of the list {1, 4} is 5.
Blockly.Msg.MATH_ONLIST_OPERATOR_SUM = 'sum of list';
/** @type {string} */
/// tooltip - Please use the same term for "sum" as in the previous message.
Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM = 'Return the sum of all the numbers in the list.';
/** @type {string} */
/// dropdown - This finds the smallest (minimum) number in a list.  For example, the smallest number in the list [-5, 0, 3] is -5.
Blockly.Msg.MATH_ONLIST_OPERATOR_MIN = 'min of list';
/** @type {string} */
/// tooltip - Please use the same term for "min" or "minimum" as in the previous message.
Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN = 'Return the smallest number in the list.';
/** @type {string} */
/// dropdown - This finds the largest (maximum) number in a list.  For example, the largest number in the list [-5, 0, 3] is 3.
Blockly.Msg.MATH_ONLIST_OPERATOR_MAX = 'max of list';
/** @type {string} */
/// tooltip
Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX = 'Return the largest number in the list.';
/** @type {string} */
/// dropdown - This adds up all of the numbers in a list and divides the sum by the number of elements in the list.  For example, the [https://en.wikipedia.org/wiki/Arithmetic_mean average] of the list [1, 2, 3, 4] is 2.5 (10/4).
Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE = 'average of list';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Arithmetic_mean https://en.wikipedia.org/wiki/Arithmetic_mean] for more informatin.
Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE = 'Return the average (arithmetic mean) of the numeric values in the list.';
/** @type {string} */
/// dropdown - This finds the [https://en.wikipedia.org/wiki/Median median] of the numeric values in a list.  For example, the median of the list {1, 2, 7, 12, 13} is 7.
Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN = 'median of list';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Median median https://en.wikipedia.org/wiki/Median median] for more information.
Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN = 'Return the median number in the list.';
/** @type {string} */
/// dropdown - This finds the most common numbers ([https://en.wikipedia.org/wiki/Mode_(statistics) modes]) in a list.  For example, the modes of the list {1, 3, 9, 3, 9}  are {3, 9}.
Blockly.Msg.MATH_ONLIST_OPERATOR_MODE = 'modes of list';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Mode_(statistics) https://en.wikipedia.org/wiki/Mode_(statistics)] for more information.
Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE = 'Return a list of the most common item(s) in the list.';
/** @type {string} */
/// dropdown - This finds the [https://en.wikipedia.org/wiki/Standard_deviation standard deviation] of the numeric values in a list.
Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV = 'standard deviation of list';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Standard_deviation https://en.wikipedia.org/wiki/Standard_deviation] for more information.
Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV = 'Return the standard deviation of the list.';
/** @type {string} */
/// dropdown - This choose an element at random from a list.  Each element is chosen with equal probability.
Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM = 'random item of list';
/** @type {string} */
/// tooltip - Please use same term for 'random' as in previous entry.
Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM = 'Return a random element from the list.';

/** @type {string} */
/// {{Optional}} url - information about the modulo (remainder) operation.
Blockly.Msg.MATH_MODULO_HELPURL = 'https://en.wikipedia.org/wiki/Modulo_operation';
/** @type {string} */
/// block text - Title of block providing the remainder when dividing the first numerical input by the second.  For example, the remainder of 10 divided by 3 is 1.\n\nParameters:\n* %1 - the dividend (10, in our example)\n* %2 - the divisor (3 in our example).
Blockly.Msg.MATH_MODULO_TITLE = 'remainder of %1 ÷ %2';
/** @type {string} */
/// tooltip - For example, the remainder of 10 divided by 3 is 1.
Blockly.Msg.MATH_MODULO_TOOLTIP = 'Return the remainder from dividing the two numbers.';

/** @type {string} */
/// {{Optional}} url - Information about constraining a numeric value to be in a specific range.  (The English URL is not ideal.  Recall that translating URLs is the lowest priority.)
Blockly.Msg.MATH_CONSTRAIN_HELPURL = 'https://en.wikipedia.org/wiki/Clamping_(graphics)';
/** @type {string} */
/// block text - The title of the block that '''constrain'''s (forces) a number to be in a given range.
///For example, if the number 150 is constrained to be between 5 and 100, the result will be 100.
///\n\nParameters:\n* %1 - the value to constrain (e.g., 150)\n* %2 - the minimum value (e.g., 5)\n* %3 - the maximum value (e.g., 100).
Blockly.Msg.MATH_CONSTRAIN_TITLE = 'constrain %1 low %2 high %3';
/** @type {string} */
/// tooltip - This compares a number ''x'' to a low value ''L'' and a high value ''H''.  If ''x'' is less then ''L'', the result is ''L''.  If ''x'' is greater than ''H'', the result is ''H''.  Otherwise, the result is ''x''.
Blockly.Msg.MATH_CONSTRAIN_TOOLTIP = 'Constrain a number to be between the specified limits (inclusive).';

/** @type {string} */
/// {{Optional}} url - Information about how computers generate random numbers.
Blockly.Msg.MATH_RANDOM_INT_HELPURL = 'https://en.wikipedia.org/wiki/Random_number_generation';
/** @type {string} */
/// block text - The title of the block that generates a random integer (whole number) in the specified range.  For example, if the range is from 5 to 7, this returns 5, 6, or 7 with equal likelihood. %1 is a placeholder for the lower number, %2 is the placeholder for the larger number.
Blockly.Msg.MATH_RANDOM_INT_TITLE = 'random integer from %1 to %2';
/** @type {string} */
/// tooltip - Return a random integer between two values specified as inputs.  For example, if one input was 7 and another 9, any of the numbers 7, 8, or 9 could be produced.
Blockly.Msg.MATH_RANDOM_INT_TOOLTIP = 'Return a random integer between the two specified limits, inclusive.';

/** @type {string} */
/// {{Optional}} url - Information about how computers generate random numbers (specifically, numbers in the range from 0 to just below 1).
Blockly.Msg.MATH_RANDOM_FLOAT_HELPURL = 'https://en.wikipedia.org/wiki/Random_number_generation';
/** @type {string} */
/// block text - The title of the block that generates a random number greater than or equal to 0 and less than 1.
Blockly.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM = 'random fraction';
/** @type {string} */
/// tooltip - Return a random fraction between 0 and 1.  The value may be equal to 0 but must be less than 1.
Blockly.Msg.MATH_RANDOM_FLOAT_TOOLTIP = 'Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).';

/** @type {string} */
/// {{Optional}} url - Information about how to calculate atan2.
Blockly.Msg.MATH_ATAN2_HELPURL = 'https://en.wikipedia.org/wiki/Atan2';
/** @type {string} */
/// block text - The title of the block that calculates atan2 of point (X, Y).  For example, if the point is (-1, -1), this returns -135. %1 is a placeholder for the X coordinate, %2 is the placeholder for the Y coordinate.
Blockly.Msg.MATH_ATAN2_TITLE = 'atan2 of X:%1 Y:%2';
/** @type {string} */
/// tooltip - Return the arctangent of point (X, Y) in degrees from -180 to 180. For example, if the point is (-1, -1) this returns -135.
Blockly.Msg.MATH_ATAN2_TOOLTIP = 'Return the arctangent of point (X, Y) in degrees from -180 to 180.';

// Text Blocks.
/** @type {string} */
/// {{Optional}} url - Information about how computers represent text (sometimes referred to as ''string''s).
Blockly.Msg.TEXT_TEXT_HELPURL = 'https://en.wikipedia.org/wiki/String_(computer_science)';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Text https://github.com/google/blockly/wiki/Text].
Blockly.Msg.TEXT_TEXT_TOOLTIP = 'A letter, word, or line of text.';

/** @type {string} */
/// {{Optional}} url - Information on concatenating/appending pieces of text.
Blockly.Msg.TEXT_JOIN_HELPURL = 'https://github.com/google/blockly/wiki/Text#text-creation';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation].
Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH = 'create text with';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-creation create text with] for more information.
Blockly.Msg.TEXT_JOIN_TOOLTIP = 'Create a piece of text by joining together any number of items.';

/** @type {string} */
/// block text - This is shown when the programmer wants to change the number of pieces of text being joined together.  See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation], specifically the last picture in the 'Text creation' section.\n{{Identical|Join}}
Blockly.Msg.TEXT_CREATE_JOIN_TITLE_JOIN = 'join';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation], specifically the last picture in the 'Text creation' section.
Blockly.Msg.TEXT_CREATE_JOIN_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this text block.';
/** @type {string} */
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation], specifically the last picture in the 'Text creation' section.
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP = 'Add an item to the text.';

/** @type {string} */
/// {{Optional}} url - This and the other text-related URLs are going to be hard to translate.  As always, it is okay to leave untranslated or paste in the English-language URL.  For these URLs, you might also consider a general URL about how computers represent text (such as the translation of [https://en.wikipedia.org/wiki/String_(computer_science) this Wikipedia page]).
Blockly.Msg.TEXT_APPEND_HELPURL = 'https://github.com/google/blockly/wiki/Text#text-modification';
/** @type {string} */
/// block input text - Message that the variable name at %1 will have the item at %2 appended to it.
/// [[File:blockly-append-text.png]]
Blockly.Msg.TEXT_APPEND_TITLE = 'to %1 append text %2';
/** @type {string} */
Blockly.Msg.TEXT_APPEND_VARIABLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-modification https://github.com/google/blockly/wiki/Text#text-modification] for more information.\n\nParameters:\n* %1 - the name of the variable to which text should be appended
Blockly.Msg.TEXT_APPEND_TOOLTIP = 'Append some text to variable "%1".';

/** @type {string} */
/// {{Optional}} url - Information about text on computers (usually referred to as 'strings').
Blockly.Msg.TEXT_LENGTH_HELPURL = 'https://github.com/google/blockly/wiki/Text#text-modification';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/Text#text-length https://github.com/google/blockly/wiki/Text#text-length].
/// \n\nParameters:\n* %1 - the piece of text to take the length of
Blockly.Msg.TEXT_LENGTH_TITLE = 'length of %1';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-length https://github.com/google/blockly/wiki/Text#text-length].
Blockly.Msg.TEXT_LENGTH_TOOLTIP = 'Returns the number of letters (including spaces) in the provided text.';

/** @type {string} */
/// {{Optional}} url - Information about empty pieces of text on computers (usually referred to as 'empty strings').
Blockly.Msg.TEXT_ISEMPTY_HELPURL = 'https://github.com/google/blockly/wiki/Text#checking-for-empty-text';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/Text#checking-for-empty-text https://github.com/google/blockly/wiki/Text#checking-for-empty-text].
/// \n\nParameters:\n* %1 - the piece of text to test for emptiness
Blockly.Msg.TEXT_ISEMPTY_TITLE = '%1 is empty';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Text#checking-for-empty-text https://github.com/google/blockly/wiki/Text#checking-for-empty-text].
Blockly.Msg.TEXT_ISEMPTY_TOOLTIP = 'Returns true if the provided text is empty.';

/** @type {string} */
/// {{Optional}} url - Information about finding a character in a piece of text.
Blockly.Msg.TEXT_INDEXOF_HELPURL = 'https://github.com/google/blockly/wiki/Text#finding-text';
/** @type {string} */
/// tooltip - %1 will be replaced by either the number 0 or -1 depending on the indexing mode. See [https://github.com/google/blockly/wiki/Text#finding-text https://github.com/google/blockly/wiki/Text#finding-text].
Blockly.Msg.TEXT_INDEXOF_TOOLTIP = 'Returns the index of the first/last occurrence of the first text in the second text. Returns %1 if text is not found.';
/** @type {string} */
/// block text - Title of blocks allowing users to find text.  See
/// [https://github.com/google/blockly/wiki/Text#finding-text
/// https://github.com/google/blockly/wiki/Text#finding-text].
/// [[File:Blockly-find-text.png]].
/// In English the expanded message is "in text %1 find (first|last) occurance of text %3"
/// where %1 and %3 are added by the user. See TEXT_INDEXOF_OPERATOR_FIRST and
/// TEXT_INDEXOF_OPERATOR_LAST for the dropdown text that replaces %2.
Blockly.Msg.TEXT_INDEXOF_TITLE = 'in text %1 %2 %3';
/** @type {string} */
/// dropdown - See [https://github.com/google/blockly/wiki/Text#finding-text
/// https://github.com/google/blockly/wiki/Text#finding-text].
/// [[File:Blockly-find-text.png]].
Blockly.Msg.TEXT_INDEXOF_OPERATOR_FIRST = 'find first occurrence of text';
/** @type {string} */
/// dropdown - See [https://github.com/google/blockly/wiki/Text#finding-text
/// https://github.com/google/blockly/wiki/Text#finding-text].  This would
/// replace "find first occurrence of text" below.  (For more information on
/// how common text is factored out of dropdown menus, see
/// [https://translatewiki.net/wiki/Translating:Blockly#Drop-Down_Menus
/// https://translatewiki.net/wiki/Translating:Blockly#Drop-Down_Menus)].)
/// [[File:Blockly-find-text.png]].
Blockly.Msg.TEXT_INDEXOF_OPERATOR_LAST = 'find last occurrence of text';
/** @type {string} */

/// {{Optional}} url - Information about extracting characters (letters, number, symbols, etc.) from text.
Blockly.Msg.TEXT_CHARAT_HELPURL = 'https://github.com/google/blockly/wiki/Text#extracting-text';
/** @type {string} */
/// block text - Text for a block to extract a letter (or number,
/// punctuation character, etc.) from a string, as shown below. %1 is added by
/// the user and %2 is replaced by a dropdown of options, possibly followed by
/// another user supplied string. TEXT_CHARAT_TAIL is then added to the end.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_TITLE = 'in text %1 %2';
/** @type {string} */
/// dropdown - Indicates that the letter (or number, punctuation character, etc.) with the
/// specified index should be obtained from the preceding piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_FROM_START = 'get letter #';
/** @type {string} */
/// block text - Indicates that the letter (or number, punctuation character, etc.) with the
/// specified index from the end of a given piece of text should be obtained. See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_FROM_END = 'get letter # from end';
/** @type {string} */
/// block text - Indicates that the first letter of the following piece of text should be
/// retrieved.  See [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_FIRST = 'get first letter';
/** @type {string} */
/// block text - Indicates that the last letter (or number, punctuation mark, etc.) of the
/// following piece of text should be retrieved.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_LAST = 'get last letter';
/** @type {string} */
/// block text - Indicates that any letter (or number, punctuation mark, etc.) in the
/// following piece of text should be randomly selected.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_RANDOM = 'get random letter';
/** @type {string} */
/// block text - Text that goes after the rightmost block/dropdown when getting a single letter from
/// a piece of text, as in [https://blockly-demo.appspot.com/static/apps/code/index.html#3m23km these
/// blocks] or shown below.  For most languages, this will be blank.
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_TAIL = '';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_TOOLTIP = 'Returns the letter at the specified position.';

/** @type {string} */
/// See [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
Blockly.Msg.TEXT_GET_SUBSTRING_TOOLTIP = 'Returns a specified portion of the text.';
/** @type {string} */
/// {{Optional}} url - Information about extracting characters from text.  Reminder: urls are the
/// lowest priority translations.  Feel free to skip.
Blockly.Msg.TEXT_GET_SUBSTRING_HELPURL = 'https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text';
/** @type {string} */
/// block text - Precedes a piece of text from which a portion should be extracted.
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = 'in text';
/** @type {string} */
/// dropdown - Indicates that the following number specifies the position (relative to the start
/// position) of the beginning of the region of text that should be obtained from the preceding
/// piece of text.  See [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_START = 'get substring from letter #';
/** @type {string} */
/// dropdown - Indicates that the following number specifies the position (relative to the end
/// position) of the beginning of the region of text that should be obtained from the preceding
/// piece of text.  See [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// Note: If {{msg-blockly|ORDINAL_NUMBER_SUFFIX}} is defined, it will
/// automatically appear ''after'' this and any other
/// [https://translatewiki.net/wiki/Translating:Blockly#Ordinal_numbers ordinal numbers]
/// on this block.
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_END = 'get substring from letter # from end';
/** @type {string} */
/// block text - Indicates that a region starting with the first letter of the preceding piece
/// of text should be extracted.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_START_FIRST = 'get substring from first letter';
/** @type {string} */
/// dropdown - Indicates that the following number specifies the position (relative to
/// the start position) of the end of the region of text that should be obtained from the
/// preceding piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_START = 'to letter #';
/** @type {string} */
/// dropdown - Indicates that the following number specifies the position (relative to the
/// end position) of the end of the region of text that should be obtained from the preceding
/// piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_END = 'to letter # from end';
/** @type {string} */
/// block text - Indicates that a region ending with the last letter of the preceding piece
/// of text should be extracted.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_END_LAST = 'to last letter';
/** @type {string} */
/// block text - Text that should go after the rightmost block/dropdown when
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// extracting a region of text].  In most languages, this will be the empty string.
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_TAIL = '';

/** @type {string} */
/// {{Optional}} url - Information about the case of letters (upper-case and lower-case).
Blockly.Msg.TEXT_CHANGECASE_HELPURL = 'https://github.com/google/blockly/wiki/Text#adjusting-text-case';
/** @type {string} */
/// tooltip - Describes a block to adjust the case of letters.  For more information on this block,
/// see [https://github.com/google/blockly/wiki/Text#adjusting-text-case
/// https://github.com/google/blockly/wiki/Text#adjusting-text-case].
Blockly.Msg.TEXT_CHANGECASE_TOOLTIP = 'Return a copy of the text in a different case.';
/** @type {string} */
/// block text - Indicates that all of the letters in the following piece of text should be
/// capitalized.  If your language does not use case, you may indicate that this is not
/// applicable to your language.  For more information on this block, see
/// [https://github.com/google/blockly/wiki/Text#adjusting-text-case
/// https://github.com/google/blockly/wiki/Text#adjusting-text-case].
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE = 'to UPPER CASE';
/** @type {string} */
/// block text - Indicates that all of the letters in the following piece of text should be converted to lower-case.  If your language does not use case, you may indicate that this is not applicable to your language.  For more information on this block, see [https://github.com/google/blockly/wiki/Text#adjusting-text-case https://github.com/google/blockly/wiki/Text#adjusting-text-case].
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE = 'to lower case';
/** @type {string} */
/// block text - Indicates that the first letter of each of the following words should be capitalized and the rest converted to lower-case.  If your language does not use case, you may indicate that this is not applicable to your language.  For more information on this block, see [https://github.com/google/blockly/wiki/Text#adjusting-text-case https://github.com/google/blockly/wiki/Text#adjusting-text-case].
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE = 'to Title Case';

/** @type {string} */
/// {{Optional}} url - Information about trimming (removing) text off the beginning and ends of pieces of text.
Blockly.Msg.TEXT_TRIM_HELPURL = 'https://github.com/google/blockly/wiki/Text#trimming-removing-spaces';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
/// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].
Blockly.Msg.TEXT_TRIM_TOOLTIP = 'Return a copy of the text with spaces removed from one or both ends.';
/** @type {string} */
/// dropdown - Removes spaces from the beginning and end of a piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
/// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].  Note that neither
/// this nor the other options modify the original piece of text (that follows);
/// the block just returns a version of the text without the specified spaces.
Blockly.Msg.TEXT_TRIM_OPERATOR_BOTH = 'trim spaces from both sides of';
/** @type {string} */
/// dropdown - Removes spaces from the beginning of a piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
/// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].
/// Note that in right-to-left scripts, this will remove spaces from the right side.
Blockly.Msg.TEXT_TRIM_OPERATOR_LEFT = 'trim spaces from left side of';
/** @type {string} */
/// dropdown - Removes spaces from the end of a piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
/// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].
/// Note that in right-to-left scripts, this will remove spaces from the left side.
Blockly.Msg.TEXT_TRIM_OPERATOR_RIGHT = 'trim spaces from right side of';

/** @type {string} */
/// {{Optional}} url - Information about displaying text on computers.
Blockly.Msg.TEXT_PRINT_HELPURL = 'https://github.com/google/blockly/wiki/Text#printing-text';
/** @type {string} */
/// block text - Display the input on the screen.  See
/// [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
/// \n\nParameters:\n* %1 - the value to print
Blockly.Msg.TEXT_PRINT_TITLE = 'print %1';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PRINT_TOOLTIP = 'Print the specified text, number or other value.';
/** @type {string} */
/// {{Optional}} url - Information about getting text from users.
Blockly.Msg.TEXT_PROMPT_HELPURL = 'https://github.com/google/blockly/wiki/Text#getting-input-from-the-user';
/** @type {string} */
/// dropdown - Specifies that a piece of text should be requested from the user with
/// the following message.  See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PROMPT_TYPE_TEXT = 'prompt for text with message';
/** @type {string} */
/// dropdown - Specifies that a number should be requested from the user with the
/// following message.  See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER = 'prompt for number with message';
/** @type {string} */
/// dropdown - Precedes the message with which the user should be prompted for
/// a number.  See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER = 'Prompt for user for a number.';
/** @type {string} */
/// dropdown - Precedes the message with which the user should be prompted for some text.
/// See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT = 'Prompt for user for some text.';

/** @type {string} */
/// block text - Title of a block that counts the number of instances of
/// a smaller pattern (%1) inside a longer string (%2).
Blockly.Msg.TEXT_COUNT_MESSAGE0 = 'count %1 in %2';
/** @type {string} */
/// {{Optional}} url - Information about counting how many times a string appears in another string.
Blockly.Msg.TEXT_COUNT_HELPURL = 'https://github.com/google/blockly/wiki/Text#counting-substrings';
/** @type {string} */
/// tooltip - Short description of a block that counts how many times some text occurs within some other text.
Blockly.Msg.TEXT_COUNT_TOOLTIP = 'Count how many times some text occurs within some other text.';

/** @type {string} */
/// block text - Title of a block that returns a copy of text (%3) with all
/// instances of some smaller text (%1) replaced with other text (%2).
Blockly.Msg.TEXT_REPLACE_MESSAGE0 = 'replace %1 with %2 in %3';
/** @type {string} */
/// {{Optional}} url - Information about replacing each copy text (or string, in computer lingo) with other text.
Blockly.Msg.TEXT_REPLACE_HELPURL = 'https://github.com/google/blockly/wiki/Text#replacing-substrings';
/** @type {string} */
/// tooltip - Short description of a block that replaces copies of text in a large text with other text.
Blockly.Msg.TEXT_REPLACE_TOOLTIP = 'Replace all occurances of some text within some other text.';

/** @type {string} */
/// block text - Title of block that returns a copy of text (%1) with the order
/// of letters and characters reversed.
Blockly.Msg.TEXT_REVERSE_MESSAGE0 = 'reverse %1';
/** @type {string} */
/// {{Optional}} url - Information about reversing a letters/characters in text.
Blockly.Msg.TEXT_REVERSE_HELPURL = 'https://github.com/google/blockly/wiki/Text#reversing-text';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Text].
Blockly.Msg.TEXT_REVERSE_TOOLTIP = 'Reverses the order of the characters in the text.';

// Lists Blocks.
/** @type {string} */
/// {{Optional}} url - Information on empty lists.
Blockly.Msg.LISTS_CREATE_EMPTY_HELPURL = 'https://github.com/google/blockly/wiki/Lists#create-empty-list';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-empty-list https://github.com/google/blockly/wiki/Lists#create-empty-list].
Blockly.Msg.LISTS_CREATE_EMPTY_TITLE = 'create empty list';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-empty-list https://github.com/google/blockly/wiki/Lists#create-empty-list].
Blockly.Msg.LISTS_CREATE_EMPTY_TOOLTIP = 'Returns a list, of length 0, containing no data records';

/** @type {string} */
/// {{Optional}} url - Information on building lists.
Blockly.Msg.LISTS_CREATE_WITH_HELPURL = 'https://github.com/google/blockly/wiki/Lists#create-list-with';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#create-list-with https://github.com/google/blockly/wiki/Lists#create-list-with].
Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP = 'Create a list with any number of items.';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-list-with https://github.com/google/blockly/wiki/Lists#create-list-with].
Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH = 'create list with';
/** @type {string} */
/// block text - This appears in a sub-block when [https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs changing the number of inputs in a ''''create list with'''' block].\n{{Identical|List}}
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = 'list';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs].
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this list block.';
/** @type {string} */
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs].
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP = 'Add an item to the list.';

/** @type {string} */
/// {{Optional}} url - Information about [https://github.com/google/blockly/wiki/Lists#create-list-with creating a list with multiple copies of a single item].
Blockly.Msg.LISTS_REPEAT_HELPURL = 'https://github.com/google/blockly/wiki/Lists#create-list-with';
/** @type {string} */
/// {{Optional}} url - See [https://github.com/google/blockly/wiki/Lists#create-list-with creating a list with multiple copies of a single item].
Blockly.Msg.LISTS_REPEAT_TOOLTIP = 'Creates a list consisting of the given value repeated the specified number of times.';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-list-with
/// https://github.com/google/blockly/wiki/Lists#create-list-with].
///\n\nParameters:\n* %1 - the item (text) to be repeated\n* %2 - the number of times to repeat it
Blockly.Msg.LISTS_REPEAT_TITLE = 'create list with item %1 repeated %2 times';

/** @type {string} */
/// {{Optional}} url - Information about how the length of a list is computed (i.e., by the total number of elements, not the number of different elements).
Blockly.Msg.LISTS_LENGTH_HELPURL = 'https://github.com/google/blockly/wiki/Lists#length-of';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/Lists#length-of https://github.com/google/blockly/wiki/Lists#length-of].
/// \n\nParameters:\n* %1 - the list whose length is desired
Blockly.Msg.LISTS_LENGTH_TITLE = 'length of %1';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#length-of https://github.com/google/blockly/wiki/Lists#length-of Blockly:Lists:length of].
Blockly.Msg.LISTS_LENGTH_TOOLTIP = 'Returns the length of a list.';

/** @type {string} */
/// {{Optional}} url - See [https://github.com/google/blockly/wiki/Lists#is-empty https://github.com/google/blockly/wiki/Lists#is-empty].
Blockly.Msg.LISTS_ISEMPTY_HELPURL = 'https://github.com/google/blockly/wiki/Lists#is-empty';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/Lists#is-empty
/// https://github.com/google/blockly/wiki/Lists#is-empty].
/// \n\nParameters:\n* %1 - the list to test
Blockly.Msg.LISTS_ISEMPTY_TITLE = '%1 is empty';
/** @type {string} */
/// block tooltip - See [https://github.com/google/blockly/wiki/Lists#is-empty
/// https://github.com/google/blockly/wiki/Lists#is-empty].
Blockly.Msg.LISTS_ISEMPTY_TOOLTIP = 'Returns true if the list is empty.';

/** @type {string} */
/// block text - Title of blocks operating on [https://github.com/google/blockly/wiki/Lists lists].
Blockly.Msg.LISTS_INLIST = 'in list';

/** @type {string} */
/// {{Optional}} url - See [https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list
/// https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list].
Blockly.Msg.LISTS_INDEX_OF_HELPURL = 'https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list';
/** @type {string} */
Blockly.Msg.LISTS_INDEX_OF_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
/** @type {string} */
/// dropdown - See [https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list
/// Lists#finding-items-in-a-list].
/// [[File:Blockly-list-find.png]]
Blockly.Msg.LISTS_INDEX_OF_FIRST = 'find first occurrence of item';
/** @type {string} */
/// dropdown - See [https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list
/// https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list].
/// [[File:Blockly-list-find.png]]
Blockly.Msg.LISTS_INDEX_OF_LAST = 'find last occurrence of item';
/** @type {string} */
/// tooltip - %1 will be replaced by either the number 0 or -1 depending on the indexing mode.  See [https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list
/// https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list].
/// [[File:Blockly-list-find.png]]
Blockly.Msg.LISTS_INDEX_OF_TOOLTIP = 'Returns the index of the first/last occurrence of the item in the list. Returns %1 if item is not found.';

/** @type {string} */
Blockly.Msg.LISTS_GET_INDEX_HELPURL = Blockly.Msg.LISTS_INDEX_OF_HELPURL;
/** @type {string} */
/// dropdown - Indicates that the user wishes to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
/// get an item from a list] without removing it from the list.
Blockly.Msg.LISTS_GET_INDEX_GET = 'get';
/** @type {string} */
/// dropdown - Indicates that the user wishes to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
/// get and remove an item from a list], as opposed to merely getting
/// it without modifying the list.
Blockly.Msg.LISTS_GET_INDEX_GET_REMOVE = 'get and remove';
/** @type {string} */
/// dropdown - Indicates that the user wishes to
/// [https://github.com/google/blockly/wiki/Lists#removing-an-item
/// remove an item from a list].\n{{Identical|Remove}}
Blockly.Msg.LISTS_GET_INDEX_REMOVE = 'remove';
/** @type {string} */
/// dropdown - Indicates that an index relative to the front of the list should be used to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item get and/or remove
/// an item from a list].  Note: If {{msg-blockly|ORDINAL_NUMBER_SUFFIX}} is defined, it will
/// automatically appear ''after'' this number (and any other ordinal numbers on this block).
/// See [[Translating:Blockly#Ordinal_numbers]] for more information on ordinal numbers in Blockly.
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_FROM_START = '#';
/** @type {string} */
/// dropdown - Indicates that an index relative to the end of the list should be used
/// to [https://github.com/google/blockly/wiki/Lists#getting-a-single-item access an item in a list].
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_FROM_END = '# from end';
/** @type {string} */
/// dropdown - Indicates that the '''first''' item should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item accessed in a list].
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_FIRST = 'first';
/** @type {string} */
/// dropdown - Indicates that the '''last''' item should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item accessed in a list].
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_LAST = 'last';
/** @type {string} */
/// dropdown - Indicates that a '''random''' item should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item accessed in a list].
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_RANDOM = 'random';
/** @type {string} */
/// block text - Text that should go after the rightmost block/dropdown when
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
/// accessing an item from a list].  In most languages, this will be the empty string.
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_TAIL = '';
/** @type {string} */
Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
/** @type {string} */
/// tooltip - Indicates the ordinal number that the first item in a list is referenced by.  %1 will be replaced by either "#0" or "#1" depending on the indexing mode.
Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP = '%1 is the first item.';
/** @type {string} */
/// tooltip - Indicates the ordinal number that the last item in a list is referenced by.  %1 will be replaced by either "#0" or "#1" depending on the indexing mode.
Blockly.Msg.LISTS_INDEX_FROM_END_TOOLTIP = '%1 is the last item.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM = 'Returns the item at the specified position in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = 'Returns the first item in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST = 'Returns the last item in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = 'Returns a random item in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for '#' or '# from end'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM = 'Removes and returns the item at the specified position in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'first'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = 'Removes and returns the first item in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'last'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = 'Removes and returns the last item in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'random'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = 'Removes and returns a random item in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for '#' or '# from end'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM = 'Removes the item at the specified position in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'first'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = 'Removes the first item in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'last'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = 'Removes the last item in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'random'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = 'Removes a random item in a list.';
/** @type {string} */
/// {{Optional}} url - Information about putting items in lists.
Blockly.Msg.LISTS_SET_INDEX_HELPURL = 'https://github.com/google/blockly/wiki/Lists#in-list--set';
/** @type {string} */
Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
/** @type {string} */
/// block text - [https://github.com/google/blockly/wiki/Lists#in-list--set
/// Replaces an item in a list].
/// [[File:Blockly-in-list-set-insert.png]]
Blockly.Msg.LISTS_SET_INDEX_SET = 'set';
/** @type {string} */
/// block text - [https://github.com/google/blockly/wiki/Lists#in-list--insert-at
/// Inserts an item into a list].
/// [[File:Blockly-in-list-set-insert.png]]
Blockly.Msg.LISTS_SET_INDEX_INSERT = 'insert at';
/** @type {string} */
/// block text - The word(s) after the position in the list and before the item to be set/inserted.
/// [[File:Blockly-in-list-set-insert.png]]
Blockly.Msg.LISTS_SET_INDEX_INPUT_TO = 'as';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM = 'Sets the item at the specified position in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = 'Sets the first item in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST = 'Sets the last item in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = 'Sets a random item in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM = 'Inserts the item at the specified position in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = 'Inserts the item at the start of a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = 'Append the item to the end of a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = 'Inserts the item randomly in a list.';

/** @type {string} */
/// {{Optional}} url - Information describing extracting a sublist from an existing list.
Blockly.Msg.LISTS_GET_SUBLIST_HELPURL = 'https://github.com/google/blockly/wiki/Lists#getting-a-sublist';
/** @type {string} */
Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
/** @type {string} */
/// dropdown - Indicates that an index relative to the front of the list should be used
/// to specify the beginning of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
/// [[File:Blockly-get-sublist.png]]
/// Note: If {{msg-blockly|ORDINAL_NUMBER_SUFFIX}} is defined, it will
/// automatically appear ''after'' this number (and any other ordinal numbers on this block).
/// See [[Translating:Blockly#Ordinal_numbers]] for more information on ordinal numbers in Blockly.
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START = 'get sub-list from #';
/** @type {string} */
/// dropdown - Indicates that an index relative to the end of the list should be used
/// to specify the beginning of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END = 'get sub-list from # from end';
/** @type {string} */
/// dropdown - Indicates that the
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist sublist to extract]
/// should begin with the list's first item.
Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST = 'get sub-list from first';
/** @type {string} */
/// dropdown - Indicates that an index relative to the front of the list should be
/// used to specify the end of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_START = 'to #';
/** @type {string} */
/// dropdown - Indicates that an index relative to the end of the list should be
/// used to specify the end of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_END = 'to # from end';
/** @type {string} */
/// dropdown - Indicates that the '''last''' item in the given list should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist the end
/// of the selected sublist].
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_END_LAST = 'to last';
/** @type {string} */
/// block text - This appears in the rightmost position ("tail") of the
/// sublist block, as described at
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist
/// https://github.com/google/blockly/wiki/Lists#getting-a-sublist].
/// In English and most other languages, this is the empty string.
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_TAIL = '';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-sublist
/// https://github.com/google/blockly/wiki/Lists#getting-a-sublist] for more information.
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP = 'Creates a copy of the specified portion of a list.';

/** @type {string} */
/// {{Optional}} url - Information describing sorting a list.
Blockly.Msg.LISTS_SORT_HELPURL = 'https://github.com/google/blockly/wiki/Lists#sorting-a-list';
/** @type {string} */
/// Sort as type %1 (numeric or alphabetic) in order %2 (ascending or descending) a list of items %3.\n{{Identical|Sort}}
Blockly.Msg.LISTS_SORT_TITLE = 'sort %1 %2 %3';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#sorting-a-list].
Blockly.Msg.LISTS_SORT_TOOLTIP = 'Sort a copy of a list.';
/** @type {string} */
/// sorting order or direction from low to high value for numeric, or A-Z for alphabetic.\n{{Identical|Ascending}}
Blockly.Msg.LISTS_SORT_ORDER_ASCENDING = 'ascending';
/** @type {string} */
/// sorting order or direction from high to low value for numeric, or Z-A for alphabetic.\n{{Identical|Descending}}
Blockly.Msg.LISTS_SORT_ORDER_DESCENDING = 'descending';
/** @type {string} */
/// sort by treating each item as a number.
Blockly.Msg.LISTS_SORT_TYPE_NUMERIC = 'numeric';
/** @type {string} */
/// sort by treating each item alphabetically, case-sensitive.
Blockly.Msg.LISTS_SORT_TYPE_TEXT = 'alphabetic';
/** @type {string} */
/// sort by treating each item alphabetically, ignoring differences in case.
Blockly.Msg.LISTS_SORT_TYPE_IGNORECASE = 'alphabetic, ignore case';

/** @type {string} */
/// {{Optional}} url - Information describing splitting text into a list, or joining a list into text.
Blockly.Msg.LISTS_SPLIT_HELPURL = 'https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists';
/** @type {string} */
/// dropdown - Indicates that text will be split up into a list (e.g. "a-b-c" -> ["a", "b", "c"]).
Blockly.Msg.LISTS_SPLIT_LIST_FROM_TEXT = 'make list from text';
/** @type {string} */
/// dropdown - Indicates that a list will be joined together to form text (e.g. ["a", "b", "c"] -> "a-b-c").
Blockly.Msg.LISTS_SPLIT_TEXT_FROM_LIST = 'make text from list';
/** @type {string} */
/// block text - Prompts for a letter to be used as a separator when splitting or joining text.
Blockly.Msg.LISTS_SPLIT_WITH_DELIMITER = 'with delimiter';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#make-list-from-text
/// https://github.com/google/blockly/wiki/Lists#make-list-from-text] for more information.
Blockly.Msg.LISTS_SPLIT_TOOLTIP_SPLIT = 'Split text into a list of texts, breaking at each delimiter.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#make-text-from-list
/// https://github.com/google/blockly/wiki/Lists#make-text-from-list] for more information.
Blockly.Msg.LISTS_SPLIT_TOOLTIP_JOIN = 'Join a list of texts into one text, separated by a delimiter.';

/** @type {string} */
/// {{Optional}} url - Information describing reversing a list.
Blockly.Msg.LISTS_REVERSE_HELPURL = 'https://github.com/google/blockly/wiki/Lists#reversing-a-list';
/** @type {string} */
/// block text - Title of block that returns a copy of a list (%1) with the order of items reversed.
Blockly.Msg.LISTS_REVERSE_MESSAGE0 = 'reverse %1';
/** @type {string} */
/// tooltip - Short description for a block that reverses a copy of a list.
Blockly.Msg.LISTS_REVERSE_TOOLTIP = 'Reverse a copy of a list.';

/** @type {string} */
/// grammar - Text that follows an ordinal number (a number that indicates
/// position relative to other numbers).  In most languages, such text appears
/// before the number, so this should be blank.  An exception is Hungarian.
/// See [[Translating:Blockly#Ordinal_numbers]] for more information.
Blockly.Msg.ORDINAL_NUMBER_SUFFIX = '';

// Variables Blocks.
/** @type {string} */
/// {{Optional}} url - Information about ''variables'' in computer programming.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Variable_(computer_science) https://en.wikipedia.org/wiki/Variable_(computer_science)], if it exists.
Blockly.Msg.VARIABLES_GET_HELPURL = 'https://github.com/google/blockly/wiki/Variables#get';
/** @type {string} */
/// tooltip - This gets the value of the named variable without modifying it.
Blockly.Msg.VARIABLES_GET_TOOLTIP = 'Returns the value of this variable.';
/** @type {string} */
/// context menu - Selecting this creates a block to set (change) the value of this variable.
/// \n\nParameters:\n* %1 - the name of the variable.
Blockly.Msg.VARIABLES_GET_CREATE_SET = 'Create "set %1"';

/** @type {string} */
/// {{Optional}} url - Information about ''variables'' in computer programming.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Variable_(computer_science) https://en.wikipedia.org/wiki/Variable_(computer_science)], if it exists.
Blockly.Msg.VARIABLES_SET_HELPURL = 'https://github.com/google/blockly/wiki/Variables#set';
/** @type {string} */
/// block text - Change the value of a mathematical variable: '''set [the value of] x to 7'''.\n\nParameters:\n* %1 - the name of the variable.\n* %2 - the value to be assigned.
Blockly.Msg.VARIABLES_SET = 'set %1 to %2';
/** @type {string} */
/// tooltip - This initializes or changes the value of the named variable.
Blockly.Msg.VARIABLES_SET_TOOLTIP = 'Sets this variable to be equal to the input.';
/** @type {string} */
/// context menu - Selecting this creates a block to get (change) the value of
/// this variable.\n\nParameters:\n* %1 - the name of the variable.
Blockly.Msg.VARIABLES_SET_CREATE_GET = 'Create "get %1"';

// Procedures Blocks.
/** @type {string} */
/// {{Optional}} url - Information about defining [https://en.wikipedia.org/wiki/Subroutine functions] that do not have return values.
Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL = 'https://en.wikipedia.org/wiki/Subroutine';
/** @type {string} */
/// block text - This precedes the name of the function when defining it.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#c84aoc this sample
/// function definition].
Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE = 'to';
/** @type {string} */
/// default name - This acts as a placeholder for the name of a function on a
/// function definition block, as shown on
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#w7cfju this block].
/// The user will replace it with the function's name.
Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE = 'do something';
/** @type {string} */
/// block text - This precedes the list of parameters on a function's definition block.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#voztpd this sample
/// function with parameters].
Blockly.Msg.PROCEDURES_BEFORE_PARAMS = 'with:';
/** @type {string} */
/// block text - This precedes the list of parameters on a function's caller block.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#voztpd this sample
/// function with parameters].
Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS = 'with:';
/** @type {string} */
/// block text - This appears next to the function's "body", the blocks that should be
/// run when the function is called, as shown in
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#voztpd this sample
/// function definition].
Blockly.Msg.PROCEDURES_DEFNORETURN_DO = '';
/** @type {string} */
/// tooltip
Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP = 'Creates a function with no output.';
/** @type {string} */
/// Placeholder text that the user is encouraged to replace with a description of what their function does.
Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT = 'Describe this function...';
/** @type {string} */
/// {{Optional}} url - Information about defining [https://en.wikipedia.org/wiki/Subroutine functions] that have return values.
Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL = 'https://en.wikipedia.org/wiki/Subroutine';
/** @type {string} */
Blockly.Msg.PROCEDURES_DEFRETURN_TITLE = Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE;
/** @type {string} */
Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE = Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE;
/** @type {string} */
Blockly.Msg.PROCEDURES_DEFRETURN_DO = Blockly.Msg.PROCEDURES_DEFNORETURN_DO;
/** @type {string} */
Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT = Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT;
/** @type {string} */
/// block text - This imperative or infinite verb precedes the value that is used as the return value
/// (output) of this function.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#6ot5y5 this sample
/// function that returns a value].
Blockly.Msg.PROCEDURES_DEFRETURN_RETURN = 'return';
/** @type {string} */
/// tooltip
Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP = 'Creates a function with an output.';
/** @type {string} */
/// Label for a checkbox that controls if statements are allowed in a function.
Blockly.Msg.PROCEDURES_ALLOW_STATEMENTS = 'allow statements';

/** @type {string} */
/// alert - The user has created a function with two parameters that have the same name.  Every parameter must have a different name.
Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING = 'Warning: This function has duplicate parameters.';

/** @type {string} */
/// {{Optional}} url - Information about calling [https://en.wikipedia.org/wiki/Subroutine functions] that do not return values.
Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL = 'https://en.wikipedia.org/wiki/Subroutine';
/** @type {string} */
/// tooltip - This block causes the body (blocks inside) of the named function definition to be run.
Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP = 'Run the user-defined function "%1".';

/** @type {string} */
/// {{Optional}} url - Information about calling [https://en.wikipedia.org/wiki/Subroutine functions] that return values.
Blockly.Msg.PROCEDURES_CALLRETURN_HELPURL = 'https://en.wikipedia.org/wiki/Subroutine';
/** @type {string} */
/// tooltip - This block causes the body (blocks inside) of the named function definition to be run.\n\nParameters:\n* %1 - the name of the function.
Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP = 'Run the user-defined function "%1" and use its output.';

/** @type {string} */
/// block text - This text appears on a block in a window that appears when the user clicks
/// on the plus sign or star on a function definition block.  It refers to the set of parameters
/// (referred to by the simpler term "inputs") to the function.  See
/// [[Translating:Blockly#function_definitions]].\n{{Identical|Input}}
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE = 'inputs';
/** @type {string} */
/// tooltip
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP = 'Add, remove, or reorder inputs to this function.';
/** @type {string} */
/// block text - This text appears on a block in a window that appears when the user clicks
/// on the plus sign or star on a function definition block].  It appears on the block for
/// adding an individual parameter (referred to by the simpler term "inputs") to the function.
/// See [[Translating:Blockly#function_definitions]].
Blockly.Msg.PROCEDURES_MUTATORARG_TITLE = 'input name:';
/** @type {string} */
/// tooltip
Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP = 'Add an input to the function.';

/** @type {string} */
/// context menu - This appears on the context menu for function calls.  Selecting
/// it causes the corresponding function definition to be highlighted (as shown at
/// [[Translating:Blockly#context_menus]].
Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF = 'Highlight function definition';
/** @type {string} */
/// context menu - This appears on the context menu for function definitions.
/// Selecting it creates a block to call the function.\n\nParameters:\n* %1 - the name of the function.\n{{Identical|Create}}
Blockly.Msg.PROCEDURES_CREATE_DO = 'Create "%1"';

/** @type {string} */
/// tooltip - If the first value is true, this causes the second value to be returned
/// immediately from the enclosing function.
Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP = 'If a value is true, then return a second value.';
/** @type {string} */
/// {{Optional}} url - Information about guard clauses.
Blockly.Msg.PROCEDURES_IFRETURN_HELPURL = 'http://c2.com/cgi/wiki?GuardClause';
/** @type {string} */
/// warning - This appears if the user tries to use this block outside of a function definition.
Blockly.Msg.PROCEDURES_IFRETURN_WARNING = 'Warning: This block may be used only within a function definition.';

/** @type {string} */
/// comment text - This text appears in a new workspace comment, to hint that
/// the user can type here.
Blockly.Msg.WORKSPACE_COMMENT_DEFAULT_TEXT = 'Say something...';

/** @type {string} */
/// warning - This appears if the user collapses a block, and blocks inside
/// that block have warnings attached to them. It should inform the user that the
/// block they collapsed contains blocks that have warnings.
Blockly.Msg.COLLAPSED_WARNINGS_WARNING = 'Collapsed blocks contain warnings.';

Blockly.Msg.b_acacia_button='Acacia Button';
Blockly.Msg.b_acacia_door='Acacia Wood Door';
Blockly.Msg.b_acacia_fence='Acacia Wood Fence';
Blockly.Msg.b_acacia_fence_gate='Acacia Wood Fence Gate';
Blockly.Msg.b_acacia_leaves='Acacia Leaves';
Blockly.Msg.b_acacia_log='Acacia Log';
Blockly.Msg.b_acacia_planks='Acacia Planks';
Blockly.Msg.b_acacia_pressure_plate='Acacia Pressure Plate';
Blockly.Msg.b_acacia_sapling='Acacia Sapling';
Blockly.Msg.b_acacia_sign='Acacia Sign';
Blockly.Msg.b_acacia_slab='Acacia Slab';
Blockly.Msg.b_acacia_stairs='Acacia Stairs';
Blockly.Msg.b_acacia_trapdoor='Acacia Trapdoor';
Blockly.Msg.b_acacia_wall_sign='Acacia Wall Sign';
Blockly.Msg.b_acacia_wood='Acacia Wood';
Blockly.Msg.b_activator_rail='Activator Rail';
Blockly.Msg.b_air='Air';
Blockly.Msg.b_allium='Allium';
Blockly.Msg.b_ancient_debris='Ancient Debris';
Blockly.Msg.b_andesite='Andesite';
Blockly.Msg.b_andesite_slab='Andesite Slab';
Blockly.Msg.b_andesite_stairs='Andesite Stairs';
Blockly.Msg.b_andesite_wall='Andesite Wall';
Blockly.Msg.b_anvil='Anvil';
Blockly.Msg.b_attached_melon_stem='Attached Melon Stem';
Blockly.Msg.b_attached_pumpkin_stem='Attached Pumpkin Stem';
Blockly.Msg.b_azure_bluet='Azure Bluet';
Blockly.Msg.b_bamboo='Bamboo';
Blockly.Msg.b_bamboo_sapling='Bamboo Shoot';
Blockly.Msg.b_barrel='Barrel';
Blockly.Msg.b_barrier='Barrier';
Blockly.Msg.b_basalt='Basalt';
Blockly.Msg.b_beacon='Beacon';
Blockly.Msg.b_bedrock='Bedrock';
Blockly.Msg.b_bee_nest='Bee Nest';
Blockly.Msg.b_beehive='Beehive';
Blockly.Msg.b_beetroots='Beetroots';
Blockly.Msg.b_bell='Bell';
Blockly.Msg.b_birch_button='Birch Button';
Blockly.Msg.b_birch_door='Birch Wood Door';
Blockly.Msg.b_birch_fence='Birch Wood Fence';
Blockly.Msg.b_birch_fence_gate='Birch Wood Fence Gate';
Blockly.Msg.b_birch_leaves='Birch Leaves';
Blockly.Msg.b_birch_log='Birch Log';
Blockly.Msg.b_birch_planks='Birch Planks';
Blockly.Msg.b_birch_pressure_plate='Birch Pressure Plate';
Blockly.Msg.b_birch_sapling='Birch Sapling';
Blockly.Msg.b_birch_sign='Birch Sign';
Blockly.Msg.b_birch_slab='Birch Slab';
Blockly.Msg.b_birch_stairs='Birch Stairs';
Blockly.Msg.b_birch_trapdoor='Birch Trapdoor';
Blockly.Msg.b_birch_wall_sign='Birch Wall Sign';
Blockly.Msg.b_birch_wood='Birch Wood';
Blockly.Msg.b_black_banner='Black Banner';
Blockly.Msg.b_black_bed='Black Bed';
Blockly.Msg.b_black_carpet='Black Carpet';
Blockly.Msg.b_black_concrete='Black Concrete';
Blockly.Msg.b_black_concrete_powder='Black Concrete Powder';
Blockly.Msg.b_black_glazed_terracotta='Black Glazed Terracotta';
Blockly.Msg.b_black_shulker_box='Black Shulker Box';
Blockly.Msg.b_black_stained_glass='Black Stained Glass';
Blockly.Msg.b_black_stained_glass_pane='Black Stained Glass Pane';
Blockly.Msg.b_black_terracotta='Black Terracotta';
Blockly.Msg.b_black_wool='Black Wool';
Blockly.Msg.b_blackstone='Blackstone';
Blockly.Msg.b_blackstone_slab='Blackstone Slab';
Blockly.Msg.b_blackstone_stairs='Blackstone Stairs';
Blockly.Msg.b_blackstone_wall='Blackstone Wall';
Blockly.Msg.b_blast_furnace='Blast Furnace';
Blockly.Msg.b_blue_banner='Blue Banner';
Blockly.Msg.b_blue_bed='Blue Bed';
Blockly.Msg.b_blue_carpet='Blue Carpet';
Blockly.Msg.b_blue_concrete='Blue Concrete';
Blockly.Msg.b_blue_concrete_powder='Blue Concrete Powder';
Blockly.Msg.b_blue_glazed_terracotta='Blue Glazed Terracotta';
Blockly.Msg.b_blue_ice='Blue Ice';
Blockly.Msg.b_blue_orchid='Blue Orchid';
Blockly.Msg.b_blue_shulker_box='Blue Shulker Box';
Blockly.Msg.b_blue_stained_glass='Blue Stained Glass';
Blockly.Msg.b_blue_stained_glass_pane='Blue Stained Glass Pane';
Blockly.Msg.b_blue_terracotta='Blue Terracotta';
Blockly.Msg.b_blue_wool='Blue Wool';
Blockly.Msg.b_bone_block='Bone Block';
Blockly.Msg.b_bookshelf='Bookshelf';
Blockly.Msg.b_brain_coral='Brain Coral';
Blockly.Msg.b_brain_coral_block='Brain Coral Block';
Blockly.Msg.b_brain_coral_fan='Brain Coral Fan';
Blockly.Msg.b_brain_coral_wall_fan='Brain Coral Wall Fan';
Blockly.Msg.b_brewing_stand='Brewing Stand';
Blockly.Msg.b_brick_slab='Brick Slab';
Blockly.Msg.b_brick_stairs='Brick Stairs';
Blockly.Msg.b_brick_wall='Brick Wall';
Blockly.Msg.b_bricks='Bricks';
Blockly.Msg.b_brown_banner='Brown Banner';
Blockly.Msg.b_brown_bed='Brown Bed';
Blockly.Msg.b_brown_carpet='Brown Carpet';
Blockly.Msg.b_brown_concrete='Brown Concrete';
Blockly.Msg.b_brown_concrete_powder='Brown Concrete Powder';
Blockly.Msg.b_brown_glazed_terracotta='Brown Glazed Terracotta';
Blockly.Msg.b_brown_mushroom='Brown Mushroom';
Blockly.Msg.b_brown_mushroom_block='Brown Mushroom Block';
Blockly.Msg.b_brown_shulker_box='Brown Shulker Box';
Blockly.Msg.b_brown_stained_glass='Brown Stained Glass';
Blockly.Msg.b_brown_stained_glass_pane='Brown Stained Glass Pane';
Blockly.Msg.b_brown_terracotta='Brown Terracotta';
Blockly.Msg.b_brown_wool='Brown Wool';
Blockly.Msg.b_bubble_column='Bubble Column';
Blockly.Msg.b_bubble_coral='Bubble Coral';
Blockly.Msg.b_bubble_coral_block='Bubble Coral Block';
Blockly.Msg.b_bubble_coral_fan='Bubble Coral Fan';
Blockly.Msg.b_bubble_coral_wall_fan='Bubble Coral Wall Fan';
Blockly.Msg.b_cactus='Cactus';
Blockly.Msg.b_cake='Cake';
Blockly.Msg.b_campfire='Campfire';
Blockly.Msg.b_carrots='Carrots';
Blockly.Msg.b_cartography_table='Cartography Table';
Blockly.Msg.b_carved_pumpkin='Carved Pumpkin';
Blockly.Msg.b_cauldron='Cauldron';
Blockly.Msg.b_cave_air='Cave Air';
Blockly.Msg.b_chain='Chain';
Blockly.Msg.b_chain_command_block='Chain Command Block';
Blockly.Msg.b_chest='Chest';
Blockly.Msg.b_chipped_anvil='Chipped Anvil';
Blockly.Msg.b_chiseled_nether_bricks='Chiselled Nether Bricks';
Blockly.Msg.b_chiseled_polished_blackstone='Chiselled Polished Blackstone';
Blockly.Msg.b_chiseled_quartz_block='Chiselled Quartz Block';
Blockly.Msg.b_chiseled_red_sandstone='Chiselled Red Sandstone';
Blockly.Msg.b_chiseled_sandstone='Chiselled Sandstone';
Blockly.Msg.b_chiseled_stone_bricks='Chiselled Stone Bricks';
Blockly.Msg.b_chorus_flower='Chorus Flower';
Blockly.Msg.b_chorus_plant='Chorus Plant';
Blockly.Msg.b_clay='Clay';
Blockly.Msg.b_coal_block='Block of Coal';
Blockly.Msg.b_coal_ore='Coal Ore';
Blockly.Msg.b_coarse_dirt='Coarse Dirt';
Blockly.Msg.b_cobblestone='Cobblestone';
Blockly.Msg.b_cobblestone_slab='Cobblestone Slab';
Blockly.Msg.b_cobblestone_stairs='Cobblestone Stairs';
Blockly.Msg.b_cobblestone_wall='Cobblestone Wall';
Blockly.Msg.b_cobweb='Cobweb';
Blockly.Msg.b_cocoa='Cocoa';
Blockly.Msg.b_command_block='Command Block';
Blockly.Msg.b_comparator='Redstone Comparator';
Blockly.Msg.b_composter='Composter';
Blockly.Msg.b_conduit='Conduit';
Blockly.Msg.b_cornflower='Cornflower';
Blockly.Msg.b_cracked_nether_bricks='Cracked Nether Bricks';
Blockly.Msg.b_cracked_polished_blackstone_bricks='Cracked Polished Blackstone Bricks';
Blockly.Msg.b_cracked_stone_bricks='Cracked Stone Bricks';
Blockly.Msg.b_crafting_table='Crafting Table';
Blockly.Msg.b_creeper_head='Creeper Head';
Blockly.Msg.b_creeper_wall_head='Creeper Wall Head';
Blockly.Msg.b_crimson_button='Crimson Button';
Blockly.Msg.b_crimson_door='Crimson Door';
Blockly.Msg.b_crimson_fence='Crimson Fence';
Blockly.Msg.b_crimson_fence_gate='Crimson Fence Gate';
Blockly.Msg.b_crimson_fungus='Crimson Fungus';
Blockly.Msg.b_crimson_hyphae='Crimson Hyphae';
Blockly.Msg.b_crimson_nylium='Crimson Nylium';
Blockly.Msg.b_crimson_planks='Crimson Planks';
Blockly.Msg.b_crimson_pressure_plate='Crimson Pressure Plate';
Blockly.Msg.b_crimson_roots='Crimson Roots';
Blockly.Msg.b_crimson_sign='Crimson Sign';
Blockly.Msg.b_crimson_slab='Crimson Slab';
Blockly.Msg.b_crimson_stairs='Crimson Stairs';
Blockly.Msg.b_crimson_stem='Crimson Stem';
Blockly.Msg.b_crimson_trapdoor='Crimson Trapdoor';
Blockly.Msg.b_crimson_wall_sign='Crimson Wall Sign';
Blockly.Msg.b_crying_obsidian='Crying Obsidian';
Blockly.Msg.b_cut_red_sandstone='Cut Red Sandstone';
Blockly.Msg.b_cut_red_sandstone_slab='Cut Red Sandstone Slab';
Blockly.Msg.b_cut_sandstone='Cut Sandstone';
Blockly.Msg.b_cut_sandstone_slab='Cut Sandstone Slab';
Blockly.Msg.b_cyan_banner='Cyan Banner';
Blockly.Msg.b_cyan_bed='Cyan Bed';
Blockly.Msg.b_cyan_carpet='Cyan Carpet';
Blockly.Msg.b_cyan_concrete='Cyan Concrete';
Blockly.Msg.b_cyan_concrete_powder='Cyan Concrete Powder';
Blockly.Msg.b_cyan_glazed_terracotta='Cyan Glazed Terracotta';
Blockly.Msg.b_cyan_shulker_box='Cyan Shulker Box';
Blockly.Msg.b_cyan_stained_glass='Cyan Stained Glass';
Blockly.Msg.b_cyan_stained_glass_pane='Cyan Stained Glass Pane';
Blockly.Msg.b_cyan_terracotta='Cyan Terracotta';
Blockly.Msg.b_cyan_wool='Cyan Wool';
Blockly.Msg.b_damaged_anvil='Damaged Anvil';
Blockly.Msg.b_dandelion='Dandelion';
Blockly.Msg.b_dark_oak_button='Dark Oak Button';
Blockly.Msg.b_dark_oak_door='Dark Oak Wood Door';
Blockly.Msg.b_dark_oak_fence='Dark Oak Wood Fence';
Blockly.Msg.b_dark_oak_fence_gate='Dark Oak Wood Fence Gate';
Blockly.Msg.b_dark_oak_leaves='Dark Oak Leaves';
Blockly.Msg.b_dark_oak_log='Dark Oak Log';
Blockly.Msg.b_dark_oak_planks='Dark Oak Planks';
Blockly.Msg.b_dark_oak_pressure_plate='Dark Oak Pressure Plate';
Blockly.Msg.b_dark_oak_sapling='Dark Oak Sapling';
Blockly.Msg.b_dark_oak_sign='Dark Oak Sign';
Blockly.Msg.b_dark_oak_slab='Dark Oak Slab';
Blockly.Msg.b_dark_oak_stairs='Dark Oak Stairs';
Blockly.Msg.b_dark_oak_trapdoor='Dark Oak Trapdoor';
Blockly.Msg.b_dark_oak_wall_sign='Dark Oak Wall Sign';
Blockly.Msg.b_dark_oak_wood='Dark Oak Wood';
Blockly.Msg.b_dark_prismarine='Dark Prismarine';
Blockly.Msg.b_dark_prismarine_slab='Dark Prismarine Slab';
Blockly.Msg.b_dark_prismarine_stairs='Dark Prismarine Stairs';
Blockly.Msg.b_daylight_detector='Daylight Detector';
Blockly.Msg.b_dead_brain_coral='Dead Brain Coral';
Blockly.Msg.b_dead_brain_coral_block='Dead Brain Coral Block';
Blockly.Msg.b_dead_brain_coral_fan='Dead Brain Coral Fan';
Blockly.Msg.b_dead_brain_coral_wall_fan='Dead Brain Coral Wall Fan';
Blockly.Msg.b_dead_bubble_coral='Dead Bubble Coral';
Blockly.Msg.b_dead_bubble_coral_block='Dead Bubble Coral Block';
Blockly.Msg.b_dead_bubble_coral_fan='Dead Bubble Coral Fan';
Blockly.Msg.b_dead_bubble_coral_wall_fan='Dead Bubble Coral Wall Fan';
Blockly.Msg.b_dead_bush='Dead Bush';
Blockly.Msg.b_dead_fire_coral='Dead Fire Coral';
Blockly.Msg.b_dead_fire_coral_block='Dead Fire Coral Block';
Blockly.Msg.b_dead_fire_coral_fan='Dead Fire Coral Fan';
Blockly.Msg.b_dead_fire_coral_wall_fan='Dead Fire Coral Wall Fan';
Blockly.Msg.b_dead_horn_coral='Dead Horn Coral';
Blockly.Msg.b_dead_horn_coral_block='Dead Horn Coral Block';
Blockly.Msg.b_dead_horn_coral_fan='Dead Horn Coral Fan';
Blockly.Msg.b_dead_horn_coral_wall_fan='Dead Horn Coral Wall Fan';
Blockly.Msg.b_dead_tube_coral='Dead Tube Coral';
Blockly.Msg.b_dead_tube_coral_block='Dead Tube Coral Block';
Blockly.Msg.b_dead_tube_coral_fan='Dead Tube Coral Fan';
Blockly.Msg.b_dead_tube_coral_wall_fan='Dead Tube Coral Wall Fan';
Blockly.Msg.b_detector_rail='Detector Rail';
Blockly.Msg.b_diamond_block='Block of Diamond';
Blockly.Msg.b_diamond_ore='Diamond Ore';
Blockly.Msg.b_diorite='Diorite';
Blockly.Msg.b_diorite_slab='Diorite Slab';
Blockly.Msg.b_diorite_stairs='Diorite Stairs';
Blockly.Msg.b_diorite_wall='Diorite Wall';
Blockly.Msg.b_dirt='Dirt';
Blockly.Msg.b_dispenser='Dispenser';
Blockly.Msg.b_dragon_egg='Dragon Egg';
Blockly.Msg.b_dragon_head='Dragon Head';
Blockly.Msg.b_dragon_wall_head='Dragon Wall Head';
Blockly.Msg.b_dried_kelp_block='Dried Kelp Block';
Blockly.Msg.b_dropper='Dropper';
Blockly.Msg.b_emerald_block='Block of Emerald';
Blockly.Msg.b_emerald_ore='Emerald Ore';
Blockly.Msg.b_enchanting_table='Enchanting Table';
Blockly.Msg.b_end_gateway='End Gateway';
Blockly.Msg.b_end_portal='End Portal';
Blockly.Msg.b_end_portal_frame='End Portal Frame';
Blockly.Msg.b_end_rod='End Rod';
Blockly.Msg.b_end_stone='End Stone';
Blockly.Msg.b_end_stone_brick_slab='End Stone Brick Slab';
Blockly.Msg.b_end_stone_brick_stairs='End Stone Brick Stairs';
Blockly.Msg.b_end_stone_brick_wall='End Stone Brick Wall';
Blockly.Msg.b_end_stone_bricks='End Stone Bricks';
Blockly.Msg.b_ender_chest='Ender Chest';
Blockly.Msg.b_farmland='Farmland';
Blockly.Msg.b_fern='Fern';
Blockly.Msg.b_fire='Fire';
Blockly.Msg.b_fire_coral='Fire Coral';
Blockly.Msg.b_fire_coral_block='Fire Coral Block';
Blockly.Msg.b_fire_coral_fan='Fire Coral Fan';
Blockly.Msg.b_fire_coral_wall_fan='Fire Coral Wall Fan';
Blockly.Msg.b_fletching_table='Fletching Table';
Blockly.Msg.b_flower_pot='Flower Pot';
Blockly.Msg.b_frosted_ice='Frosted Ice';
Blockly.Msg.b_furnace='Furnace';
Blockly.Msg.b_gilded_blackstone='Gilded Blackstone';
Blockly.Msg.b_glass='Glass';
Blockly.Msg.b_glass_pane='Glass Pane';
Blockly.Msg.b_glowstone='Glowstone';
Blockly.Msg.b_gold_block='Block of Gold';
Blockly.Msg.b_gold_ore='Gold Ore';
Blockly.Msg.b_granite='Granite';
Blockly.Msg.b_granite_slab='Granite Slab';
Blockly.Msg.b_granite_stairs='Granite Stairs';
Blockly.Msg.b_granite_wall='Granite Wall';
Blockly.Msg.b_grass='Grass';
Blockly.Msg.b_grass_block='Grass Block';
Blockly.Msg.b_grass_path='Grass Path';
Blockly.Msg.b_gravel='Gravel';
Blockly.Msg.b_gray_banner='Grey Banner';
Blockly.Msg.b_gray_bed='Grey Bed';
Blockly.Msg.b_gray_carpet='Grey Carpet';
Blockly.Msg.b_gray_concrete='Grey Concrete';
Blockly.Msg.b_gray_concrete_powder='Grey Concrete Powder';
Blockly.Msg.b_gray_glazed_terracotta='Grey Glazed Terracotta';
Blockly.Msg.b_gray_shulker_box='Grey Shulker Box';
Blockly.Msg.b_gray_stained_glass='Grey Stained Glass';
Blockly.Msg.b_gray_stained_glass_pane='Grey Stained Glass Pane';
Blockly.Msg.b_gray_terracotta='Grey Terracotta';
Blockly.Msg.b_gray_wool='Grey Wool';
Blockly.Msg.b_green_banner='Green Banner';
Blockly.Msg.b_green_bed='Green Bed';
Blockly.Msg.b_green_carpet='Green Carpet';
Blockly.Msg.b_green_concrete='Green Concrete';
Blockly.Msg.b_green_concrete_powder='Green Concrete Powder';
Blockly.Msg.b_green_glazed_terracotta='Green Glazed Terracotta';
Blockly.Msg.b_green_shulker_box='Green Shulker Box';
Blockly.Msg.b_green_stained_glass='Green Stained Glass';
Blockly.Msg.b_green_stained_glass_pane='Green Stained Glass Pane';
Blockly.Msg.b_green_terracotta='Green Terracotta';
Blockly.Msg.b_green_wool='Green Wool';
Blockly.Msg.b_grindstone='Grindstone';
Blockly.Msg.b_hay_block='Straw Bale';
Blockly.Msg.b_heavy_weighted_pressure_plate='Heavy Weighted Pressure Plate';
Blockly.Msg.b_honey_block='Honey Block';
Blockly.Msg.b_honeycomb_block='Honeycomb Block';
Blockly.Msg.b_hopper='Hopper';
Blockly.Msg.b_horn_coral='Horn Coral';
Blockly.Msg.b_horn_coral_block='Horn Coral Block';
Blockly.Msg.b_horn_coral_fan='Horn Coral Fan';
Blockly.Msg.b_horn_coral_wall_fan='Horn Coral Wall Fan';
Blockly.Msg.b_ice='Ice';
Blockly.Msg.b_infested_chiseled_stone_bricks='Infested Chiselled Stone Bricks';
Blockly.Msg.b_infested_cobblestone='Infested Cobblestone';
Blockly.Msg.b_infested_cracked_stone_bricks='Infested Cracked Stone Bricks';
Blockly.Msg.b_infested_mossy_stone_bricks='Infested Mossy Stone Bricks';
Blockly.Msg.b_infested_stone='Infested Stone';
Blockly.Msg.b_infested_stone_bricks='Infested Stone Bricks';
Blockly.Msg.b_iron_bars='Iron Bars';
Blockly.Msg.b_iron_block='Block of Iron';
Blockly.Msg.b_iron_door='Iron Door';
Blockly.Msg.b_iron_ore='Iron Ore';
Blockly.Msg.b_iron_trapdoor='Iron Trapdoor';
Blockly.Msg.b_jack_o_lantern='Jack O"Lantern';
Blockly.Msg.b_jigsaw='Jigsaw Block';
Blockly.Msg.b_jukebox='Jukebox';
Blockly.Msg.b_jungle_button='Jungle Button';
Blockly.Msg.b_jungle_door='Jungle Wood Door';
Blockly.Msg.b_jungle_fence='Jungle Wood Fence';
Blockly.Msg.b_jungle_fence_gate='Jungle Wood Fence Gate';
Blockly.Msg.b_jungle_leaves='Jungle Leaves';
Blockly.Msg.b_jungle_log='Jungle Log';
Blockly.Msg.b_jungle_planks='Jungle Planks';
Blockly.Msg.b_jungle_pressure_plate='Jungle Pressure Plate';
Blockly.Msg.b_jungle_sapling='Jungle Sapling';
Blockly.Msg.b_jungle_sign='Jungle Sign';
Blockly.Msg.b_jungle_slab='Jungle Slab';
Blockly.Msg.b_jungle_stairs='Jungle Stairs';
Blockly.Msg.b_jungle_trapdoor='Jungle Trapdoor';
Blockly.Msg.b_jungle_wall_sign='Jungle Wall Sign';
Blockly.Msg.b_jungle_wood='Jungle Wood';
Blockly.Msg.b_kelp='Kelp';
Blockly.Msg.b_kelp_plant='Kelp Plant';
Blockly.Msg.b_ladder='Ladder';
Blockly.Msg.b_lantern='Lantern';
Blockly.Msg.b_lapis_block='Lapis Lazuli Block';
Blockly.Msg.b_lapis_ore='Lapis Lazuli Ore';
Blockly.Msg.b_large_fern='Large Fern';
Blockly.Msg.b_lava='Lava';
Blockly.Msg.b_lectern='Lectern';
Blockly.Msg.b_lever='Lever';
Blockly.Msg.b_light_blue_banner='Light Blue Banner';
Blockly.Msg.b_light_blue_bed='Light Blue Bed';
Blockly.Msg.b_light_blue_carpet='Light Blue Carpet';
Blockly.Msg.b_light_blue_concrete='Light Blue Concrete';
Blockly.Msg.b_light_blue_concrete_powder='Light Blue Concrete Powder';
Blockly.Msg.b_light_blue_glazed_terracotta='Light Blue Glazed Terracotta';
Blockly.Msg.b_light_blue_shulker_box='Light Blue Shulker Box';
Blockly.Msg.b_light_blue_stained_glass='Light Blue Stained Glass';
Blockly.Msg.b_light_blue_stained_glass_pane='Light Blue Stained Glass Pane';
Blockly.Msg.b_light_blue_terracotta='Light Blue Terracotta';
Blockly.Msg.b_light_blue_wool='Light Blue Wool';
Blockly.Msg.b_light_gray_banner='Light Grey Banner';
Blockly.Msg.b_light_gray_bed='Light Grey Bed';
Blockly.Msg.b_light_gray_carpet='Light Grey Carpet';
Blockly.Msg.b_light_gray_concrete='Light Grey Concrete';
Blockly.Msg.b_light_gray_concrete_powder='Light Grey Concrete Powder';
Blockly.Msg.b_light_gray_glazed_terracotta='Light Grey Glazed Terracotta';
Blockly.Msg.b_light_gray_shulker_box='Light Grey Shulker Box';
Blockly.Msg.b_light_gray_stained_glass='Light Grey Stained Glass';
Blockly.Msg.b_light_gray_stained_glass_pane='Light Grey Stained Glass Pane';
Blockly.Msg.b_light_gray_terracotta='Light Grey Terracotta';
Blockly.Msg.b_light_gray_wool='Light Grey Wool';
Blockly.Msg.b_light_weighted_pressure_plate='Light Weighted Pressure Plate';
Blockly.Msg.b_lilac='Lilac';
Blockly.Msg.b_lily_of_the_valley='Lily of the Valley';
Blockly.Msg.b_lily_pad='Lily Pad';
Blockly.Msg.b_lime_banner='Lime Banner';
Blockly.Msg.b_lime_bed='Lime Bed';
Blockly.Msg.b_lime_carpet='Lime Carpet';
Blockly.Msg.b_lime_concrete='Lime Concrete';
Blockly.Msg.b_lime_concrete_powder='Lime Concrete Powder';
Blockly.Msg.b_lime_glazed_terracotta='Lime Glazed Terracotta';
Blockly.Msg.b_lime_shulker_box='Lime Shulker Box';
Blockly.Msg.b_lime_stained_glass='Lime Stained Glass';
Blockly.Msg.b_lime_stained_glass_pane='Lime Stained Glass Pane';
Blockly.Msg.b_lime_terracotta='Lime Terracotta';
Blockly.Msg.b_lime_wool='Lime Wool';
Blockly.Msg.b_lodestone='Lodestone';
Blockly.Msg.b_loom='Loom';
Blockly.Msg.b_magenta_banner='Magenta Banner';
Blockly.Msg.b_magenta_bed='Magenta Bed';
Blockly.Msg.b_magenta_carpet='Magenta Carpet';
Blockly.Msg.b_magenta_concrete='Magenta Concrete';
Blockly.Msg.b_magenta_concrete_powder='Magenta Concrete Powder';
Blockly.Msg.b_magenta_glazed_terracotta='Magenta Glazed Terracotta';
Blockly.Msg.b_magenta_shulker_box='Magenta Shulker Box';
Blockly.Msg.b_magenta_stained_glass='Magenta Stained Glass';
Blockly.Msg.b_magenta_stained_glass_pane='Magenta Stained Glass Pane';
Blockly.Msg.b_magenta_terracotta='Magenta Terracotta';
Blockly.Msg.b_magenta_wool='Magenta Wool';
Blockly.Msg.b_magma_block='Magma Block';
Blockly.Msg.b_melon='Melon';
Blockly.Msg.b_melon_stem='Melon Stem';
Blockly.Msg.b_mossy_cobblestone='Mossy Cobblestone';
Blockly.Msg.b_mossy_cobblestone_slab='Mossy Cobblestone Slab';
Blockly.Msg.b_mossy_cobblestone_stairs='Mossy Cobblestone Stairs';
Blockly.Msg.b_mossy_cobblestone_wall='Mossy Cobblestone Wall';
Blockly.Msg.b_mossy_stone_brick_slab='Mossy Stone Brick Slab';
Blockly.Msg.b_mossy_stone_brick_stairs='Mossy Stone Brick Stairs';
Blockly.Msg.b_mossy_stone_brick_wall='Mossy Stone Brick Wall';
Blockly.Msg.b_mossy_stone_bricks='Mossy Stone Bricks';
Blockly.Msg.b_moving_piston='Moving Piston';
Blockly.Msg.b_mushroom_stem='Mushroom Stem';
Blockly.Msg.b_mycelium='Mycelium';
Blockly.Msg.b_nether_brick_fence='Nether Brick Fence';
Blockly.Msg.b_nether_brick_slab='Nether Brick Slab';
Blockly.Msg.b_nether_brick_stairs='Nether Brick Stairs';
Blockly.Msg.b_nether_brick_wall='Nether Brick Wall';
Blockly.Msg.b_nether_bricks='Nether Bricks';
Blockly.Msg.b_nether_gold_ore='Nether Gold Ore';
Blockly.Msg.b_nether_portal='Nether Portal';
Blockly.Msg.b_nether_quartz_ore='Nether Quartz Ore';
Blockly.Msg.b_nether_sprouts='Nether Sprouts';
Blockly.Msg.b_nether_wart='Nether Wart';
Blockly.Msg.b_nether_wart_block='Nether Wart Block';
Blockly.Msg.b_netherite_block='Block of Netherite';
Blockly.Msg.b_netherrack='Netherrack';
Blockly.Msg.b_note_block='Note Block';
Blockly.Msg.b_oak_button='Oak Button';
Blockly.Msg.b_oak_door='Oak Wood Door';
Blockly.Msg.b_oak_fence='Oak Wood Fence';
Blockly.Msg.b_oak_fence_gate='Oak Wood Fence Gate';
Blockly.Msg.b_oak_leaves='Oak Leaves';
Blockly.Msg.b_oak_log='Oak Log';
Blockly.Msg.b_oak_planks='Oak Planks';
Blockly.Msg.b_oak_pressure_plate='Oak Pressure Plate';
Blockly.Msg.b_oak_sapling='Oak Sapling';
Blockly.Msg.b_oak_sign='Oak Sign';
Blockly.Msg.b_oak_slab='Oak Slab';
Blockly.Msg.b_oak_stairs='Oak Stairs';
Blockly.Msg.b_oak_trapdoor='Oak Trapdoor';
Blockly.Msg.b_oak_wall_sign='Oak Wall Sign';
Blockly.Msg.b_oak_wood='Oak Wood';
Blockly.Msg.b_observer='Observer';
Blockly.Msg.b_obsidian='Obsidian';
Blockly.Msg.b_ominous_banner='Ominous Banner';
Blockly.Msg.b_orange_banner='Orange Banner';
Blockly.Msg.b_orange_bed='Orange Bed';
Blockly.Msg.b_orange_carpet='Orange Carpet';
Blockly.Msg.b_orange_concrete='Orange Concrete';
Blockly.Msg.b_orange_concrete_powder='Orange Concrete Powder';
Blockly.Msg.b_orange_glazed_terracotta='Orange Glazed Terracotta';
Blockly.Msg.b_orange_shulker_box='Orange Shulker Box';
Blockly.Msg.b_orange_stained_glass='Orange Stained Glass';
Blockly.Msg.b_orange_stained_glass_pane='Orange Stained Glass Pane';
Blockly.Msg.b_orange_terracotta='Orange Terracotta';
Blockly.Msg.b_orange_tulip='Orange Tulip';
Blockly.Msg.b_orange_wool='Orange Wool';
Blockly.Msg.b_oxeye_daisy='Moon Daisy';
Blockly.Msg.b_packed_ice='Packed Ice';
Blockly.Msg.b_peony='Peony';
Blockly.Msg.b_petrified_oak_slab='Petrified Oak Slab';
Blockly.Msg.b_pink_banner='Pink Banner';
Blockly.Msg.b_pink_bed='Pink Bed';
Blockly.Msg.b_pink_carpet='Pink Carpet';
Blockly.Msg.b_pink_concrete='Pink Concrete';
Blockly.Msg.b_pink_concrete_powder='Pink Concrete Powder';
Blockly.Msg.b_pink_glazed_terracotta='Pink Glazed Terracotta';
Blockly.Msg.b_pink_shulker_box='Pink Shulker Box';
Blockly.Msg.b_pink_stained_glass='Pink Stained Glass';
Blockly.Msg.b_pink_stained_glass_pane='Pink Stained Glass Pane';
Blockly.Msg.b_pink_terracotta='Pink Terracotta';
Blockly.Msg.b_pink_tulip='Pink Tulip';
Blockly.Msg.b_pink_wool='Pink Wool';
Blockly.Msg.b_piston='Piston';
Blockly.Msg.b_piston_head='Piston Head';
Blockly.Msg.b_player_head='Player Head';
Blockly.Msg.b_player_wall_head='Player Wall Head';
Blockly.Msg.b_podzol='Podzol';
Blockly.Msg.b_polished_andesite='Polished Andesite';
Blockly.Msg.b_polished_andesite_slab='Polished Andesite Slab';
Blockly.Msg.b_polished_andesite_stairs='Polished Andesite Stairs';
Blockly.Msg.b_polished_basalt='Polished Basalt';
Blockly.Msg.b_polished_blackstone='Polished Blackstone';
Blockly.Msg.b_polished_blackstone_brick_slab='Polished Blackstone Brick Slab';
Blockly.Msg.b_polished_blackstone_brick_stairs='Polished Blackstone Brick Stairs';
Blockly.Msg.b_polished_blackstone_brick_wall='Polished Blackstone Brick Wall';
Blockly.Msg.b_polished_blackstone_bricks='Polished Blackstone Bricks';
Blockly.Msg.b_polished_blackstone_button='Polished Blackstone Button';
Blockly.Msg.b_polished_blackstone_pressure_plate='Polished Blackstone Pressure Plate';
Blockly.Msg.b_polished_blackstone_slab='Polished Blackstone Slab';
Blockly.Msg.b_polished_blackstone_stairs='Polished Blackstone Stairs';
Blockly.Msg.b_polished_blackstone_wall='Polished Blackstone Wall';
Blockly.Msg.b_polished_diorite='Polished Diorite';
Blockly.Msg.b_polished_diorite_slab='Polished Diorite Slab';
Blockly.Msg.b_polished_diorite_stairs='Polished Diorite Stairs';
Blockly.Msg.b_polished_granite='Polished Granite';
Blockly.Msg.b_polished_granite_slab='Polished Granite Slab';
Blockly.Msg.b_polished_granite_stairs='Polished Granite Stairs';
Blockly.Msg.b_poppy='Poppy';
Blockly.Msg.b_potatoes='Potatoes';
Blockly.Msg.b_potted_acacia_sapling='Potted Acacia Sapling';
Blockly.Msg.b_potted_allium='Potted Allium';
Blockly.Msg.b_potted_azure_bluet='Potted Azure Bluet';
Blockly.Msg.b_potted_bamboo='Potted Bamboo';
Blockly.Msg.b_potted_birch_sapling='Potted Birch Sapling';
Blockly.Msg.b_potted_blue_orchid='Potted Blue Orchid';
Blockly.Msg.b_potted_brown_mushroom='Potted Brown Mushroom';
Blockly.Msg.b_potted_cactus='Potted Cactus';
Blockly.Msg.b_potted_cornflower='Potted Cornflower';
Blockly.Msg.b_potted_crimson_fungus='Potted Crimson Fungus';
Blockly.Msg.b_potted_crimson_roots='Potted Crimson Roots';
Blockly.Msg.b_potted_dandelion='Potted Dandelion';
Blockly.Msg.b_potted_dark_oak_sapling='Potted Dark Oak Sapling';
Blockly.Msg.b_potted_dead_bush='Dead Potted Bush';
Blockly.Msg.b_potted_fern='Potted Fern';
Blockly.Msg.b_potted_jungle_sapling='Potted Jungle Sapling';
Blockly.Msg.b_potted_lily_of_the_valley='Potted Lily of the Valley';
Blockly.Msg.b_potted_oak_sapling='Potted Oak Sapling';
Blockly.Msg.b_potted_orange_tulip='Potted Orange Tulip';
Blockly.Msg.b_potted_oxeye_daisy='Potted Oxeye Daisy';
Blockly.Msg.b_potted_pink_tulip='Potted Pink Tulip';
Blockly.Msg.b_potted_poppy='Potted Poppy';
Blockly.Msg.b_potted_red_mushroom='Potted Red Mushroom';
Blockly.Msg.b_potted_red_tulip='Potted Red Tulip';
Blockly.Msg.b_potted_spruce_sapling='Potted Spruce Sapling';
Blockly.Msg.b_potted_warped_fungus='Potted Warped Fungus';
Blockly.Msg.b_potted_warped_roots='Potted Warped Roots';
Blockly.Msg.b_potted_white_tulip='Potted White Tulip';
Blockly.Msg.b_potted_wither_rose='Potted Wither Rose';
Blockly.Msg.b_powered_rail='Powered Rail';
Blockly.Msg.b_prismarine='Prismarine';
Blockly.Msg.b_prismarine_brick_slab='Prismarine Brick Slab';
Blockly.Msg.b_prismarine_brick_stairs='Prismarine Brick Stairs';
Blockly.Msg.b_prismarine_bricks='Prismarine Bricks';
Blockly.Msg.b_prismarine_slab='Prismarine Slab';
Blockly.Msg.b_prismarine_stairs='Prismarine Stairs';
Blockly.Msg.b_prismarine_wall='Prismarine Wall';
Blockly.Msg.b_pumpkin='Pumpkin';
Blockly.Msg.b_pumpkin_stem='Pumpkin Stem';
Blockly.Msg.b_purple_banner='Purple Banner';
Blockly.Msg.b_purple_bed='Purple Bed';
Blockly.Msg.b_purple_carpet='Purple Carpet';
Blockly.Msg.b_purple_concrete='Purple Concrete';
Blockly.Msg.b_purple_concrete_powder='Purple Concrete Powder';
Blockly.Msg.b_purple_glazed_terracotta='Purple Glazed Terracotta';
Blockly.Msg.b_purple_shulker_box='Purple Shulker Box';
Blockly.Msg.b_purple_stained_glass='Purple Stained Glass';
Blockly.Msg.b_purple_stained_glass_pane='Purple Stained Glass Pane';
Blockly.Msg.b_purple_terracotta='Purple Terracotta';
Blockly.Msg.b_purple_wool='Purple Wool';
Blockly.Msg.b_purpur_block='Purpur Block';
Blockly.Msg.b_purpur_pillar='Purpur Pillar';
Blockly.Msg.b_purpur_slab='Purpur Slab';
Blockly.Msg.b_purpur_stairs='Purpur Stairs';
Blockly.Msg.b_quartz_block='Block of Quartz';
Blockly.Msg.b_quartz_bricks='Quartz Bricks';
Blockly.Msg.b_quartz_pillar='Quartz Pillar';
Blockly.Msg.b_quartz_slab='Quartz Slab';
Blockly.Msg.b_quartz_stairs='Quartz Stairs';
Blockly.Msg.b_rail='Rail';
Blockly.Msg.b_red_banner='Red Banner';
Blockly.Msg.b_red_bed='Red Bed';
Blockly.Msg.b_red_carpet='Red Carpet';
Blockly.Msg.b_red_concrete='Red Concrete';
Blockly.Msg.b_red_concrete_powder='Red Concrete Powder';
Blockly.Msg.b_red_glazed_terracotta='Red Glazed Terracotta';
Blockly.Msg.b_red_mushroom='Red Mushroom';
Blockly.Msg.b_red_mushroom_block='Red Mushroom Block';
Blockly.Msg.b_red_nether_brick_slab='Red Nether Brick Slab';
Blockly.Msg.b_red_nether_brick_stairs='Red Nether Brick Stairs';
Blockly.Msg.b_red_nether_brick_wall='Red Nether Brick Wall';
Blockly.Msg.b_red_nether_bricks='Red Nether Bricks';
Blockly.Msg.b_red_sand='Red Sand';
Blockly.Msg.b_red_sandstone='Red Sandstone';
Blockly.Msg.b_red_sandstone_slab='Red Sandstone Slab';
Blockly.Msg.b_red_sandstone_stairs='Red Sandstone Stairs';
Blockly.Msg.b_red_sandstone_wall='Red Sandstone Wall';
Blockly.Msg.b_red_shulker_box='Red Shulker Box';
Blockly.Msg.b_red_stained_glass='Red Stained Glass';
Blockly.Msg.b_red_stained_glass_pane='Red Stained Glass Pane';
Blockly.Msg.b_red_terracotta='Red Terracotta';
Blockly.Msg.b_red_tulip='Red Tulip';
Blockly.Msg.b_red_wool='Red Wool';
Blockly.Msg.b_redstone_block='Block of Redstone';
Blockly.Msg.b_redstone_lamp='Redstone Lamp';
Blockly.Msg.b_redstone_ore='Redstone Ore';
Blockly.Msg.b_redstone_torch='Redstone Torch';
Blockly.Msg.b_redstone_wall_torch='Redstone Wall Torch';
Blockly.Msg.b_redstone_wire='Redstone Wire';
Blockly.Msg.b_repeater='Redstone Repeater';
Blockly.Msg.b_repeating_command_block='Repeating Command Block';
Blockly.Msg.b_respawn_anchor='Respawn Anchor';
Blockly.Msg.b_rose_bush='Rose Bush';
Blockly.Msg.b_sand='Sand';
Blockly.Msg.b_sandstone='Sandstone';
Blockly.Msg.b_sandstone_slab='Sandstone Slab';
Blockly.Msg.b_sandstone_stairs='Sandstone Stairs';
Blockly.Msg.b_sandstone_wall='Sandstone Wall';
Blockly.Msg.b_scaffolding='Scaffolding';
Blockly.Msg.b_sea_lantern='Sea Lantern';
Blockly.Msg.b_sea_pickle='Sea Pickle';
Blockly.Msg.b_seagrass='Seagrass';
Blockly.Msg.b_set_spawn='Respawn point set';
Blockly.Msg.b_shroomlight='Shroomlight';
Blockly.Msg.b_shulker_box='Shulker Box';
Blockly.Msg.b_skeleton_skull='Skeleton Skull';
Blockly.Msg.b_skeleton_wall_skull='Skeleton Wall Skull';
Blockly.Msg.b_slime_block='Slime Block';
Blockly.Msg.b_smithing_table='Smithing Table';
Blockly.Msg.b_smoker='Smoker';
Blockly.Msg.b_smooth_quartz='Smooth Quartz Block';
Blockly.Msg.b_smooth_quartz_slab='Smooth Quartz Slab';
Blockly.Msg.b_smooth_quartz_stairs='Smooth Quartz Stairs';
Blockly.Msg.b_smooth_red_sandstone='Smooth Red Sandstone';
Blockly.Msg.b_smooth_red_sandstone_slab='Smooth Red Sandstone Slab';
Blockly.Msg.b_smooth_red_sandstone_stairs='Smooth Red Sandstone Stairs';
Blockly.Msg.b_smooth_sandstone='Smooth Sandstone';
Blockly.Msg.b_smooth_sandstone_slab='Smooth Sandstone Slab';
Blockly.Msg.b_smooth_sandstone_stairs='Smooth Sandstone Stairs';
Blockly.Msg.b_smooth_stone='Smooth Stone';
Blockly.Msg.b_smooth_stone_slab='Smooth Stone Slab';
Blockly.Msg.b_snow='Snow';
Blockly.Msg.b_snow_block='Snow Block';
Blockly.Msg.b_soul_campfire='Soul Campfire';
Blockly.Msg.b_soul_fire='Soul Fire';
Blockly.Msg.b_soul_lantern='Soul Lantern';
Blockly.Msg.b_soul_sand='Soul Sand';
Blockly.Msg.b_soul_soil='Soul Soil';
Blockly.Msg.b_soul_torch='Soul Torch';
Blockly.Msg.b_soul_wall_torch='Soul Wall Torch';
Blockly.Msg.b_spawner='Spawner';
Blockly.Msg.b_sponge='Sponge';
Blockly.Msg.b_spruce_button='Spruce Button';
Blockly.Msg.b_spruce_door='Spruce Wood Door';
Blockly.Msg.b_spruce_fence='Spruce Wood Fence';
Blockly.Msg.b_spruce_fence_gate='Spruce Wood Fence Gate';
Blockly.Msg.b_spruce_leaves='Spruce Leaves';
Blockly.Msg.b_spruce_log='Spruce Log';
Blockly.Msg.b_spruce_planks='Spruce Planks';
Blockly.Msg.b_spruce_pressure_plate='Spruce Pressure Plate';
Blockly.Msg.b_spruce_sapling='Spruce Sapling';
Blockly.Msg.b_spruce_sign='Spruce Sign';
Blockly.Msg.b_spruce_slab='Spruce Slab';
Blockly.Msg.b_spruce_stairs='Spruce Stairs';
Blockly.Msg.b_spruce_trapdoor='Spruce Trapdoor';
Blockly.Msg.b_spruce_wall_sign='Spruce Wall Sign';
Blockly.Msg.b_spruce_wood='Spruce Wood';
Blockly.Msg.b_sticky_piston='Sticky Piston';
Blockly.Msg.b_stone='Stone';
Blockly.Msg.b_stone_brick_slab='Stone Brick Slab';
Blockly.Msg.b_stone_brick_stairs='Stone Brick Stairs';
Blockly.Msg.b_stone_brick_wall='Stone Brick Wall';
Blockly.Msg.b_stone_bricks='Stone Bricks';
Blockly.Msg.b_stone_button='Stone Button';
Blockly.Msg.b_stone_pressure_plate='Stone Pressure Plate';
Blockly.Msg.b_stone_slab='Stone Slab';
Blockly.Msg.b_stone_stairs='Stone Stairs';
Blockly.Msg.b_stonecutter='Stonecutter';
Blockly.Msg.b_stripped_acacia_log='Stripped Acacia Log';
Blockly.Msg.b_stripped_acacia_wood='Stripped Acacia Wood';
Blockly.Msg.b_stripped_birch_log='Stripped Birch Log';
Blockly.Msg.b_stripped_birch_wood='Stripped Birch Wood';
Blockly.Msg.b_stripped_crimson_hyphae='Stripped Crimson Hyphae';
Blockly.Msg.b_stripped_crimson_stem='Stripped Crimson Stem';
Blockly.Msg.b_stripped_dark_oak_log='Stripped Dark Oak Log';
Blockly.Msg.b_stripped_dark_oak_wood='Stripped Dark Oak Wood';
Blockly.Msg.b_stripped_jungle_log='Stripped Jungle Log';
Blockly.Msg.b_stripped_jungle_wood='Stripped Jungle Wood';
Blockly.Msg.b_stripped_oak_log='Stripped Oak Log';
Blockly.Msg.b_stripped_oak_wood='Stripped Oak Wood';
Blockly.Msg.b_stripped_spruce_log='Stripped Spruce Log';
Blockly.Msg.b_stripped_spruce_wood='Stripped Spruce Wood';
Blockly.Msg.b_stripped_warped_hyphae='Stripped Warped Hyphae';
Blockly.Msg.b_stripped_warped_stem='Stripped Warped Stem';
Blockly.Msg.b_structure_block='Structure Block';
Blockly.Msg.b_structure_void='Structure Void';
Blockly.Msg.b_sugar_cane='Sugar Cane';
Blockly.Msg.b_sunflower='Sunflower';
Blockly.Msg.b_sweet_berry_bush='Sweet Berry Bush';
Blockly.Msg.b_tall_grass='Tall Grass';
Blockly.Msg.b_tall_seagrass='Tall Seagrass';
Blockly.Msg.b_target='Target';
Blockly.Msg.b_terracotta='Terracotta';
Blockly.Msg.b_tnt='TNT';
Blockly.Msg.b_torch='Torch';
Blockly.Msg.b_trapped_chest='Trapped Chest';
Blockly.Msg.b_tripwire='Tripwire';
Blockly.Msg.b_tripwire_hook='Tripwire Hook';
Blockly.Msg.b_tube_coral='Tube Coral';
Blockly.Msg.b_tube_coral_block='Tube Coral Block';
Blockly.Msg.b_tube_coral_fan='Tube Coral Fan';
Blockly.Msg.b_tube_coral_wall_fan='Tube Coral Wall Fan';
Blockly.Msg.b_turtle_egg='Turtle Egg';
Blockly.Msg.b_twisting_vines='Twisting Vines';
Blockly.Msg.b_twisting_vines_plant='Twisting Vines Plant';
Blockly.Msg.b_vine='Vines';
Blockly.Msg.b_void_air='Void Air';
Blockly.Msg.b_wall_torch='Wall Torch';
Blockly.Msg.b_warped_button='Warped Button';
Blockly.Msg.b_warped_door='Warped Door';
Blockly.Msg.b_warped_fence='Warped Fence';
Blockly.Msg.b_warped_fence_gate='Warped Fence Gate';
Blockly.Msg.b_warped_fungus='Warped Fungus';
Blockly.Msg.b_warped_hyphae='Warped Hyphae';
Blockly.Msg.b_warped_nylium='Warped Nylium';
Blockly.Msg.b_warped_planks='Warped Planks';
Blockly.Msg.b_warped_pressure_plate='Warped Pressure Plate';
Blockly.Msg.b_warped_roots='Warped Roots';
Blockly.Msg.b_warped_sign='Warped Sign';
Blockly.Msg.b_warped_slab='Warped Slab';
Blockly.Msg.b_warped_stairs='Warped Stairs';
Blockly.Msg.b_warped_stem='Warped Stem';
Blockly.Msg.b_warped_trapdoor='Warped Trapdoor';
Blockly.Msg.b_warped_wall_sign='Warped Wall Sign';
Blockly.Msg.b_warped_wart_block='Warped Wart Block';
Blockly.Msg.b_water='Water';
Blockly.Msg.b_weeping_vines='Weeping Vines';
Blockly.Msg.b_weeping_vines_plant='Weeping Vines Plant';
Blockly.Msg.b_wet_sponge='Wet Sponge';
Blockly.Msg.b_wheat='Wheat Crops';
Blockly.Msg.b_white_banner='White Banner';
Blockly.Msg.b_white_bed='White Bed';
Blockly.Msg.b_white_carpet='White Carpet';
Blockly.Msg.b_white_concrete='White Concrete';
Blockly.Msg.b_white_concrete_powder='White Concrete Powder';
Blockly.Msg.b_white_glazed_terracotta='White Glazed Terracotta';
Blockly.Msg.b_white_shulker_box='White Shulker Box';
Blockly.Msg.b_white_stained_glass='White Stained Glass';
Blockly.Msg.b_white_stained_glass_pane='White Stained Glass Pane';
Blockly.Msg.b_white_terracotta='White Terracotta';
Blockly.Msg.b_white_tulip='White Tulip';
Blockly.Msg.b_white_wool='White Wool';
Blockly.Msg.b_wither_rose='Wither Rose';
Blockly.Msg.b_wither_skeleton_skull='Wither Skeleton Skull';
Blockly.Msg.b_wither_skeleton_wall_skull='Wither Skeleton Wall Skull';
Blockly.Msg.b_yellow_banner='Yellow Banner';
Blockly.Msg.b_yellow_bed='Yellow Bed';
Blockly.Msg.b_yellow_carpet='Yellow Carpet';
Blockly.Msg.b_yellow_concrete='Yellow Concrete';
Blockly.Msg.b_yellow_concrete_powder='Yellow Concrete Powder';
Blockly.Msg.b_yellow_glazed_terracotta='Yellow Glazed Terracotta';
Blockly.Msg.b_yellow_shulker_box='Yellow Shulker Box';
Blockly.Msg.b_yellow_stained_glass='Yellow Stained Glass';
Blockly.Msg.b_yellow_stained_glass_pane='Yellow Stained Glass Pane';
Blockly.Msg.b_yellow_terracotta='Yellow Terracotta';
Blockly.Msg.b_yellow_wool='Yellow Wool';
Blockly.Msg.b_zombie_head='Zombie Head';
Blockly.Msg.b_zombie_wall_head='Zombie Wall Head';
Blockly.Msg.e_area_effect_cloud='Area Effect Cloud';
Blockly.Msg.e_armor_stand='Armour Stand';
Blockly.Msg.e_arrow='Arrow';
Blockly.Msg.e_bat='Bat';
Blockly.Msg.e_bee='Bee';
Blockly.Msg.e_blaze='Blaze';
Blockly.Msg.e_boat='Boat';
Blockly.Msg.e_cat='Cat';
Blockly.Msg.e_cave_spider='Cave Spider';
Blockly.Msg.e_chest_minecart='Minecart with Chest';
Blockly.Msg.e_chicken='Chicken';
Blockly.Msg.e_cod='Cod';
Blockly.Msg.e_command_block_minecart='Minecart with Command Block';
Blockly.Msg.e_cow='Cow';
Blockly.Msg.e_creeper='Creeper';
Blockly.Msg.e_dolphin='Dolphin';
Blockly.Msg.e_donkey='Donkey';
Blockly.Msg.e_dragon_fireball='Dragon Fireball';
Blockly.Msg.e_drowned='Drowned';
Blockly.Msg.e_egg='Thrown Egg';
Blockly.Msg.e_elder_guardian='Elder Guardian';
Blockly.Msg.e_end_crystal='End Crystal';
Blockly.Msg.e_ender_dragon='Ender Dragon';
Blockly.Msg.e_ender_pearl='Thrown Ender Pearl';
Blockly.Msg.e_enderman='Enderman';
Blockly.Msg.e_endermite='Endermite';
Blockly.Msg.e_evoker='Evoker';
Blockly.Msg.e_evoker_fangs='Evoker Fangs';
Blockly.Msg.e_experience_bottle='Thrown Bottle o" Enchanting';
Blockly.Msg.e_experience_orb='Experience Orb';
Blockly.Msg.e_eye_of_ender='Eye of Ender';
Blockly.Msg.e_falling_block='Falling Block';
Blockly.Msg.e_fireball='Fireball';
Blockly.Msg.e_firework_rocket='Firework Rocket';
Blockly.Msg.e_fishing_bobber='Fishing Bobber';
Blockly.Msg.e_fox='Fox';
Blockly.Msg.e_furnace_minecart='Minecart with Furnace';
Blockly.Msg.e_ghast='Ghast';
Blockly.Msg.e_giant='Giant';
Blockly.Msg.e_guardian='Guardian';
Blockly.Msg.e_hoglin='Hoglin';
Blockly.Msg.e_hopper_minecart='Minecart with Hopper';
Blockly.Msg.e_horse='Horse';
Blockly.Msg.e_husk='Husk';
Blockly.Msg.e_illusioner='Illusioner';
Blockly.Msg.e_iron_golem='Iron Golem';
Blockly.Msg.e_item='Item';
Blockly.Msg.e_item_frame='Item Frame';
Blockly.Msg.e_killer_bunny='The Killer Bunny';
Blockly.Msg.e_leash_knot='Leash Knot';
Blockly.Msg.e_lightning_bolt='Lightning Bolt';
Blockly.Msg.e_llama='Llama';
Blockly.Msg.e_llama_spit='Llama Spit';
Blockly.Msg.e_magma_cube='Magma Cube';
Blockly.Msg.e_minecart='Minecart';
Blockly.Msg.e_mooshroom='Mooshroom';
Blockly.Msg.e_mule='Mule';
Blockly.Msg.e_ocelot='Ocelot';
Blockly.Msg.e_painting='Painting';
Blockly.Msg.e_panda='Panda';
Blockly.Msg.e_parrot='Parrot';
Blockly.Msg.e_phantom='Phantom';
Blockly.Msg.e_pig='Pig';
Blockly.Msg.e_piglin='Piglin';
Blockly.Msg.e_pillager='Pillager';
Blockly.Msg.e_player='Player';
Blockly.Msg.e_polar_bear='Polar Bear';
Blockly.Msg.e_potion='Potion';
Blockly.Msg.e_pufferfish='Pufferfish';
Blockly.Msg.e_rabbit='Rabbit';
Blockly.Msg.e_ravager='Ravager';
Blockly.Msg.e_salmon='Salmon';
Blockly.Msg.e_sheep='Sheep';
Blockly.Msg.e_shulker='Shulker';
Blockly.Msg.e_shulker_bullet='Shulker Bullet';
Blockly.Msg.e_silverfish='Silverfish';
Blockly.Msg.e_skeleton='Skeleton';
Blockly.Msg.e_skeleton_horse='Skeleton Horse';
Blockly.Msg.e_slime='Slime';
Blockly.Msg.e_small_fireball='Small Fireball';
Blockly.Msg.e_snow_golem='Snow Golem';
Blockly.Msg.e_snowball='Snowball';
Blockly.Msg.e_spawner_minecart='Minecart with Spawner';
Blockly.Msg.e_spectral_arrow='Spectral Arrow';
Blockly.Msg.e_spider='Spider';
Blockly.Msg.e_squid='Squid';
Blockly.Msg.e_stray='Stray';
Blockly.Msg.e_strider='Strider';
Blockly.Msg.e_tnt='Primed TNT';
Blockly.Msg.e_tnt_minecart='Minecart with TNT';
Blockly.Msg.e_trader_llama='Trader Llama';
Blockly.Msg.e_trident='Trident';
Blockly.Msg.e_tropical_fish='Tropical Fish';
Blockly.Msg.e_turtle='Turtle';
Blockly.Msg.e_vex='Vex';
Blockly.Msg.e_villager='Villager';
Blockly.Msg.e_vindicator='Vindicator';
Blockly.Msg.e_wandering_trader='Wandering Trader';
Blockly.Msg.e_witch='Witch';
Blockly.Msg.e_wither='Wither';
Blockly.Msg.e_wither_skeleton='Wither Skeleton';
Blockly.Msg.e_wither_skull='Wither Skull';
Blockly.Msg.e_wolf='Wolf';
Blockly.Msg.e_zoglin='Zoglin';
Blockly.Msg.e_zombie='Zombie';
Blockly.Msg.e_zombie_horse='Zombie Horse';
Blockly.Msg.e_zombie_villager='Zombie Villager';
Blockly.Msg.e_zombified_piglin='Zombified Piglin';
Blockly.Msg.i_acacia_boat='Acacia Boat';
Blockly.Msg.i_apple='Apple';
Blockly.Msg.i_armor_stand='Armour Stand';
Blockly.Msg.i_arrow='Arrow';
Blockly.Msg.i_baked_potato='Baked Potato';
Blockly.Msg.i_bat_spawn_egg='Bat Spawn Egg';
Blockly.Msg.i_bee_spawn_egg='Bee Spawn Egg';
Blockly.Msg.i_beef='Raw Beef';
Blockly.Msg.i_beetroot='Beetroot';
Blockly.Msg.i_beetroot_seeds='Beetroot Seeds';
Blockly.Msg.i_beetroot_soup='Beetroot Soup';
Blockly.Msg.i_birch_boat='Birch Boat';
Blockly.Msg.i_black_dye='Black Dye';
Blockly.Msg.i_blaze_powder='Blaze Powder';
Blockly.Msg.i_blaze_rod='Blaze Rod';
Blockly.Msg.i_blaze_spawn_egg='Blaze Spawn Egg';
Blockly.Msg.i_blue_dye='Blue Dye';
Blockly.Msg.i_bone='Bone';
Blockly.Msg.i_bone_meal='Bone Meal';
Blockly.Msg.i_book='Book';
Blockly.Msg.i_bow='Bow';
Blockly.Msg.i_bowl='Bowl';
Blockly.Msg.i_bread='Bread';
Blockly.Msg.i_brewing_stand='Brewing Stand';
Blockly.Msg.i_brick='Brick';
Blockly.Msg.i_brown_dye='Brown Dye';
Blockly.Msg.i_bucket='Bucket';
Blockly.Msg.i_carrot='Carrot';
Blockly.Msg.i_carrot_on_a_stick='Carrot on a Stick';
Blockly.Msg.i_cat_spawn_egg='Cat Spawn Egg';
Blockly.Msg.i_cauldron='Cauldron';
Blockly.Msg.i_cave_spider_spawn_egg='Cave Spider Spawn Egg';
Blockly.Msg.i_chainmail_boots='Mail Boots';
Blockly.Msg.i_chainmail_chestplate='Mail Chestplate';
Blockly.Msg.i_chainmail_helmet='Mail Helmet';
Blockly.Msg.i_chainmail_leggings='Mail Leggings';
Blockly.Msg.i_charcoal='Charcoal';
Blockly.Msg.i_chest_minecart='Minecart with Chest';
Blockly.Msg.i_chicken='Raw Chicken';
Blockly.Msg.i_chicken_spawn_egg='Chicken Spawn Egg';
Blockly.Msg.i_chorus_fruit='Chorus Fruit';
Blockly.Msg.i_clay_ball='Clay Ball';
Blockly.Msg.i_clock='Clock';
Blockly.Msg.i_coal='Coal';
Blockly.Msg.i_cocoa_beans='Cocoa Beans';
Blockly.Msg.i_cod='Raw Cod';
Blockly.Msg.i_cod_bucket='Bucket of Cod';
Blockly.Msg.i_cod_spawn_egg='Cod Spawn Egg';
Blockly.Msg.i_command_block_minecart='Minecart with Command Block';
Blockly.Msg.i_compass='Compass';
Blockly.Msg.i_cooked_beef='Steak';
Blockly.Msg.i_cooked_chicken='Cooked Chicken';
Blockly.Msg.i_cooked_cod='Cooked Cod';
Blockly.Msg.i_cooked_mutton='Cooked Mutton';
Blockly.Msg.i_cooked_porkchop='Cooked Porkchop';
Blockly.Msg.i_cooked_rabbit='Cooked Rabbit';
Blockly.Msg.i_cooked_salmon='Cooked Salmon';
Blockly.Msg.i_cookie='Cookie';
Blockly.Msg.i_cow_spawn_egg='Cow Spawn Egg';
Blockly.Msg.i_creeper_banner_pattern='Banner Pattern';
Blockly.Msg.i_creeper_spawn_egg='Creeper Spawn Egg';
Blockly.Msg.i_crossbow='Crossbow';
Blockly.Msg.i_cyan_dye='Cyan Dye';
Blockly.Msg.i_dark_oak_boat='Dark Oak Boat';
Blockly.Msg.i_debug_stick='Debug Stick';
Blockly.Msg.i_diamond='Diamond';
Blockly.Msg.i_diamond_axe='Diamond Axe';
Blockly.Msg.i_diamond_boots='Diamond Boots';
Blockly.Msg.i_diamond_chestplate='Diamond Chestplate';
Blockly.Msg.i_diamond_helmet='Diamond Helmet';
Blockly.Msg.i_diamond_hoe='Diamond Hoe';
Blockly.Msg.i_diamond_horse_armor='Diamond Horse Armour';
Blockly.Msg.i_diamond_leggings='Diamond Leggings';
Blockly.Msg.i_diamond_pickaxe='Diamond Pickaxe';
Blockly.Msg.i_diamond_shovel='Diamond Shovel';
Blockly.Msg.i_diamond_sword='Diamond Sword';
Blockly.Msg.i_dolphin_spawn_egg='Dolphin Spawn Egg';
Blockly.Msg.i_donkey_spawn_egg='Donkey Spawn Egg';
Blockly.Msg.i_dragon_breath='Dragon"s Breath';
Blockly.Msg.i_dried_kelp='Dried Kelp';
Blockly.Msg.i_drowned_spawn_egg='Drowned Spawn Egg';
Blockly.Msg.i_egg='Egg';
Blockly.Msg.i_elder_guardian_spawn_egg='Elder Guardian Spawn Egg';
Blockly.Msg.i_elytra='Elytra';
Blockly.Msg.i_emerald='Emerald';
Blockly.Msg.i_enchanted_book='Enchanted Book';
Blockly.Msg.i_enchanted_golden_apple='Enchanted Golden Apple';
Blockly.Msg.i_end_crystal='End Crystal';
Blockly.Msg.i_ender_eye='Eye of Ender';
Blockly.Msg.i_ender_pearl='Ender Pearl';
Blockly.Msg.i_enderman_spawn_egg='Enderman Spawn Egg';
Blockly.Msg.i_endermite_spawn_egg='Endermite Spawn Egg';
Blockly.Msg.i_evoker_spawn_egg='Evoker Spawn Egg';
Blockly.Msg.i_experience_bottle='Bottle o" Enchanting';
Blockly.Msg.i_feather='Feather';
Blockly.Msg.i_fermented_spider_eye='Fermented Spider Eye';
Blockly.Msg.i_filled_map='Map';
Blockly.Msg.i_fire_charge='Fire Charge';
Blockly.Msg.i_firework_rocket='Firework Rocket';
Blockly.Msg.i_firework_star='Firework Star';
Blockly.Msg.i_fishing_rod='Fishing Rod';
Blockly.Msg.i_flint='Flint';
Blockly.Msg.i_flint_and_steel='Flint and Steel';
Blockly.Msg.i_flower_banner_pattern='Banner Pattern';
Blockly.Msg.i_flower_pot='Flower Pot';
Blockly.Msg.i_fox_spawn_egg='Fox Spawn Egg';
Blockly.Msg.i_furnace_minecart='Minecart with Furnace';
Blockly.Msg.i_ghast_spawn_egg='Ghast Spawn Egg';
Blockly.Msg.i_ghast_tear='Ghast Tear';
Blockly.Msg.i_glass_bottle='Glass Bottle';
Blockly.Msg.i_glistering_melon_slice='Glistering Melon Slice';
Blockly.Msg.i_globe_banner_pattern='Banner Pattern';
Blockly.Msg.i_glowstone_dust='Glowstone Dust';
Blockly.Msg.i_gold_ingot='Gold Ingot';
Blockly.Msg.i_gold_nugget='Gold Nugget';
Blockly.Msg.i_golden_apple='Golden Apple';
Blockly.Msg.i_golden_axe='Golden Axe';
Blockly.Msg.i_golden_boots='Golden Boots';
Blockly.Msg.i_golden_carrot='Golden Carrot';
Blockly.Msg.i_golden_chestplate='Golden Chestplate';
Blockly.Msg.i_golden_helmet='Golden Helmet';
Blockly.Msg.i_golden_hoe='Golden Hoe';
Blockly.Msg.i_golden_horse_armor='Golden Horse Armour';
Blockly.Msg.i_golden_leggings='Golden Leggings';
Blockly.Msg.i_golden_pickaxe='Golden Pickaxe';
Blockly.Msg.i_golden_shovel='Golden Shovel';
Blockly.Msg.i_golden_sword='Golden Sword';
Blockly.Msg.i_gray_dye='Grey Dye';
Blockly.Msg.i_green_dye='Green Dye';
Blockly.Msg.i_guardian_spawn_egg='Guardian Spawn Egg';
Blockly.Msg.i_gunpowder='Gunpowder';
Blockly.Msg.i_heart_of_the_sea='Heart of the Sea';
Blockly.Msg.i_hoglin_spawn_egg='Hoglin Spawn Egg';
Blockly.Msg.i_honey_bottle='Honey Bottle';
Blockly.Msg.i_honeycomb='Honeycomb';
Blockly.Msg.i_hopper_minecart='Minecart with Hopper';
Blockly.Msg.i_horse_spawn_egg='Horse Spawn Egg';
Blockly.Msg.i_husk_spawn_egg='Husk Spawn Egg';
Blockly.Msg.i_ink_sac='Ink Sac';
Blockly.Msg.i_iron_axe='Iron Axe';
Blockly.Msg.i_iron_boots='Iron Boots';
Blockly.Msg.i_iron_chestplate='Iron Chestplate';
Blockly.Msg.i_iron_helmet='Iron Helmet';
Blockly.Msg.i_iron_hoe='Iron Hoe';
Blockly.Msg.i_iron_horse_armor='Iron Horse Armour';
Blockly.Msg.i_iron_ingot='Iron Ingot';
Blockly.Msg.i_iron_leggings='Iron Leggings';
Blockly.Msg.i_iron_nugget='Iron Nugget';
Blockly.Msg.i_iron_pickaxe='Iron Pickaxe';
Blockly.Msg.i_iron_shovel='Iron Shovel';
Blockly.Msg.i_iron_sword='Iron Sword';
Blockly.Msg.i_item_frame='Item Frame';
Blockly.Msg.i_jungle_boat='Jungle Boat';
Blockly.Msg.i_knowledge_book='Knowledge Book';
Blockly.Msg.i_lapis_lazuli='Lapis Lazuli';
Blockly.Msg.i_lava_bucket='Lava Bucket';
Blockly.Msg.i_lead='Lead';
Blockly.Msg.i_leather='Leather';
Blockly.Msg.i_leather_boots='Leather Boots';
Blockly.Msg.i_leather_chestplate='Leather Tunic';
Blockly.Msg.i_leather_helmet='Leather Cap';
Blockly.Msg.i_leather_horse_armor='Leather Horse Armour';
Blockly.Msg.i_leather_leggings='Leather Pants';
Blockly.Msg.i_light_blue_dye='Light Blue Dye';
Blockly.Msg.i_light_gray_dye='Light Grey Dye';
Blockly.Msg.i_lime_dye='Lime Dye';
Blockly.Msg.i_lingering_potion='Lingering Potion';
Blockly.Msg.i_llama_spawn_egg='Llama Spawn Egg';
Blockly.Msg.i_lodestone_compass='Lodestone Compass';
Blockly.Msg.i_magenta_dye='Magenta Dye';
Blockly.Msg.i_magma_cream='Magma Cream';
Blockly.Msg.i_magma_cube_spawn_egg='Magma Cube Spawn Egg';
Blockly.Msg.i_map='Empty Map';
Blockly.Msg.i_melon_seeds='Melon Seeds';
Blockly.Msg.i_melon_slice='Melon Slice';
Blockly.Msg.i_milk_bucket='Milk Bucket';
Blockly.Msg.i_minecart='Minecart';
Blockly.Msg.i_mojang_banner_pattern='Banner Pattern';
Blockly.Msg.i_mooshroom_spawn_egg='Mooshroom Spawn Egg';
Blockly.Msg.i_mule_spawn_egg='Mule Spawn Egg';
Blockly.Msg.i_mushroom_stew='Mushroom Stew';
Blockly.Msg.i_music_disc_blocks='Music Disc';
Blockly.Msg.i_music_disc_cat='Music Disc';
Blockly.Msg.i_music_disc_chirp='Music Disc';
Blockly.Msg.i_music_disc_far='Music Disc';
Blockly.Msg.i_music_disc_mall='Music Disc';
Blockly.Msg.i_music_disc_mellohi='Music Disc';
Blockly.Msg.i_music_disc_pigstep='Music Disc';
Blockly.Msg.i_music_disc_stal='Music Disc';
Blockly.Msg.i_music_disc_strad='Music Disc';
Blockly.Msg.i_music_disc_wait='Music Disc';
Blockly.Msg.i_music_disc_ward='Music Disc';
Blockly.Msg.i_mutton='Raw Mutton';
Blockly.Msg.i_name_tag='Name Tag';
Blockly.Msg.i_nautilus_shell='Nautilus Shell';
Blockly.Msg.i_nether_brick='Nether Brick';
Blockly.Msg.i_nether_star='Nether Star';
Blockly.Msg.i_nether_wart='Nether Wart';
Blockly.Msg.i_netherite_axe='Netherite Axe';
Blockly.Msg.i_netherite_boots='Netherite Boots';
Blockly.Msg.i_netherite_chestplate='Netherite Chestplate';
Blockly.Msg.i_netherite_helmet='Netherite Helmet';
Blockly.Msg.i_netherite_hoe='Netherite Hoe';
Blockly.Msg.i_netherite_ingot='Netherite Ingot';
Blockly.Msg.i_netherite_leggings='Netherite Leggings';
Blockly.Msg.i_netherite_pickaxe='Netherite Pickaxe';
Blockly.Msg.i_netherite_scrap='Netherite Scrap';
Blockly.Msg.i_netherite_shovel='Netherite Shovel';
Blockly.Msg.i_netherite_sword='Netherite Sword';
Blockly.Msg.i_oak_boat='Oak Boat';
Blockly.Msg.i_ocelot_spawn_egg='Ocelot Spawn Egg';
Blockly.Msg.i_orange_dye='Orange Dye';
Blockly.Msg.i_painting='Painting';
Blockly.Msg.i_panda_spawn_egg='Panda Spawn Egg';
Blockly.Msg.i_paper='Paper';
Blockly.Msg.i_parrot_spawn_egg='Parrot Spawn Egg';
Blockly.Msg.i_phantom_membrane='Phantom Membrane';
Blockly.Msg.i_phantom_spawn_egg='Phantom Spawn Egg';
Blockly.Msg.i_pig_spawn_egg='Pig Spawn Egg';
Blockly.Msg.i_piglin_banner_pattern='Banner Pattern';
Blockly.Msg.i_piglin_spawn_egg='Piglin Spawn Egg';
Blockly.Msg.i_pillager_spawn_egg='Pillager Spawn Egg';
Blockly.Msg.i_pink_dye='Pink Dye';
Blockly.Msg.i_poisonous_potato='Poisonous Potato';
Blockly.Msg.i_polar_bear_spawn_egg='Polar Bear Spawn Egg';
Blockly.Msg.i_popped_chorus_fruit='Popped Chorus Fruit';
Blockly.Msg.i_porkchop='Raw Porkchop';
Blockly.Msg.i_potato='Potato';
Blockly.Msg.i_potion='Potion';
Blockly.Msg.i_prismarine_crystals='Prismarine Crystals';
Blockly.Msg.i_prismarine_shard='Prismarine Shard';
Blockly.Msg.i_pufferfish='Pufferfish';
Blockly.Msg.i_pufferfish_bucket='Bucket of Pufferfish';
Blockly.Msg.i_pufferfish_spawn_egg='Pufferfish Spawn Egg';
Blockly.Msg.i_pumpkin_pie='Pumpkin Pie';
Blockly.Msg.i_pumpkin_seeds='Pumpkin Seeds';
Blockly.Msg.i_purple_dye='Purple Dye';
Blockly.Msg.i_quartz='Nether Quartz';
Blockly.Msg.i_rabbit='Raw Rabbit';
Blockly.Msg.i_rabbit_foot='Rabbit"s Foot';
Blockly.Msg.i_rabbit_hide='Rabbit Hide';
Blockly.Msg.i_rabbit_spawn_egg='Rabbit Spawn Egg';
Blockly.Msg.i_rabbit_stew='Rabbit Stew';
Blockly.Msg.i_ravager_spawn_egg='Ravager Spawn Egg';
Blockly.Msg.i_red_dye='Red Dye';
Blockly.Msg.i_redstone='Redstone Dust';
Blockly.Msg.i_rotten_flesh='Rotten Flesh';
Blockly.Msg.i_saddle='Saddle';
Blockly.Msg.i_salmon='Raw Salmon';
Blockly.Msg.i_salmon_bucket='Bucket of Salmon';
Blockly.Msg.i_salmon_spawn_egg='Salmon Spawn Egg';
Blockly.Msg.i_scute='Scute';
Blockly.Msg.i_shears='Shears';
Blockly.Msg.i_sheep_spawn_egg='Sheep Spawn Egg';
Blockly.Msg.i_shield='Shield';
Blockly.Msg.i_shulker_shell='Shulker Shell';
Blockly.Msg.i_shulker_spawn_egg='Shulker Spawn Egg';
Blockly.Msg.i_sign='Sign';
Blockly.Msg.i_silverfish_spawn_egg='Silverfish Spawn Egg';
Blockly.Msg.i_skeleton_horse_spawn_egg='Skeleton Horse Spawn Egg';
Blockly.Msg.i_skeleton_spawn_egg='Skeleton Spawn Egg';
Blockly.Msg.i_skull_banner_pattern='Banner Pattern';
Blockly.Msg.i_slime_ball='Slimeball';
Blockly.Msg.i_slime_spawn_egg='Slime Spawn Egg';
Blockly.Msg.i_snowball='Snowball';
Blockly.Msg.i_spectral_arrow='Spectral Arrow';
Blockly.Msg.i_spider_eye='Spider Eye';
Blockly.Msg.i_spider_spawn_egg='Spider Spawn Egg';
Blockly.Msg.i_splash_potion='Splash Potion';
Blockly.Msg.i_spruce_boat='Spruce Boat';
Blockly.Msg.i_squid_spawn_egg='Squid Spawn Egg';
Blockly.Msg.i_stick='Stick';
Blockly.Msg.i_stone_axe='Stone Axe';
Blockly.Msg.i_stone_hoe='Stone Hoe';
Blockly.Msg.i_stone_pickaxe='Stone Pickaxe';
Blockly.Msg.i_stone_shovel='Stone Shovel';
Blockly.Msg.i_stone_sword='Stone Sword';
Blockly.Msg.i_stray_spawn_egg='Stray Spawn Egg';
Blockly.Msg.i_strider_spawn_egg='Strider Spawn Egg';
Blockly.Msg.i_string='String';
Blockly.Msg.i_sugar='Sugar';
Blockly.Msg.i_suspicious_stew='Suspicious Stew';
Blockly.Msg.i_sweet_berries='Sweet Berries';
Blockly.Msg.i_tipped_arrow='Tipped Arrow';
Blockly.Msg.i_tnt_minecart='Minecart with TNT';
Blockly.Msg.i_totem_of_undying='Totem of Undying';
Blockly.Msg.i_trader_llama_spawn_egg='Trader Llama Spawn Egg';
Blockly.Msg.i_trident='Trident';
Blockly.Msg.i_tropical_fish='Tropical Fish';
Blockly.Msg.i_tropical_fish_bucket='Bucket of Tropical Fish';
Blockly.Msg.i_tropical_fish_spawn_egg='Tropical Fish Spawn Egg';
Blockly.Msg.i_turtle_helmet='Turtle Shell';
Blockly.Msg.i_turtle_spawn_egg='Turtle Spawn Egg';
Blockly.Msg.i_vex_spawn_egg='Vex Spawn Egg';
Blockly.Msg.i_villager_spawn_egg='Villager Spawn Egg';
Blockly.Msg.i_vindicator_spawn_egg='Vindicator Spawn Egg';
Blockly.Msg.i_wandering_trader_spawn_egg='Wandering Trader Spawn Egg';
Blockly.Msg.i_warped_fungus_on_a_stick='Warped Fungus on a Stick';
Blockly.Msg.i_water_bucket='Water Bucket';
Blockly.Msg.i_wheat='Wheat';
Blockly.Msg.i_wheat_seeds='Wheat Seeds';
Blockly.Msg.i_white_dye='White Dye';
Blockly.Msg.i_witch_spawn_egg='Witch Spawn Egg';
Blockly.Msg.i_wither_skeleton_spawn_egg='Wither Skeleton Spawn Egg';
Blockly.Msg.i_wolf_spawn_egg='Wolf Spawn Egg';
Blockly.Msg.i_wooden_axe='Wooden Axe';
Blockly.Msg.i_wooden_hoe='Wooden Hoe';
Blockly.Msg.i_wooden_pickaxe='Wooden Pickaxe';
Blockly.Msg.i_wooden_shovel='Wooden Shovel';
Blockly.Msg.i_wooden_sword='Wooden Sword';
Blockly.Msg.i_writable_book='Book and Quill';
Blockly.Msg.i_written_book='Written Book';
Blockly.Msg.i_yellow_dye='Yellow Dye';
Blockly.Msg.i_zoglin_spawn_egg='Zoglin Spawn Egg';
Blockly.Msg.i_zombie_horse_spawn_egg='Zombie Horse Spawn Egg';
Blockly.Msg.i_zombie_spawn_egg='Zombie Spawn Egg';
Blockly.Msg.i_zombie_villager_spawn_egg='Zombie Villager Spawn Egg';
Blockly.Msg.i_zombified_piglin_spawn_egg='Zombified Piglin Spawn Egg';







Blockly.Msg.MC_particles='particles';




Blockly.Msg.MC_cmd_minecraft_customimage = 'image %1 %2';
Blockly.Msg.MC_cmd_minecraft_delay = 'after %1 sec. %2';
Blockly.Msg.MC_cmd_minecraft_delay_random = 'after a time between %1 and %2 sec. %3';
Blockly.Msg.MC_cmd_minecraft_delay_random_reset = 'reset the random generator for delays to %1';
Blockly.Msg.MC_cmd_minecraft_multiciplity = '%1 of %2';
Blockly.Msg.MC_cmd_minecraft_gotopos = 'set the position at %1 %2 %3 %4 %5 %6 from the start position';
Blockly.Msg.MC_cmd_minecraft_polygon = 'create a %1 %2 %3 polygon with %4 %5 sides and radius %6 %7 made of %8 %9';
Blockly.Msg.MC_cmd_minecraft_rectangle = 'create a %1 %2 %3 rectangle of width %4 %5 and length %6 %7 made of %8 %9';
Blockly.Msg.MC_cmd_minecraft_ellipse = 'create a %1 %2 %3 ellipse with radiusX %4 %5 and radiusY %6 %7 made of %8 %9';
Blockly.Msg.MC_cmd_minecraft_block = 'create a block made of %1';
Blockly.Msg.MC_cmd_minecraft_line = 'create a row of length %1 %2 made of %3 %4';
Blockly.Msg.MC_cmd_minecraft_connectPositions1 = 'create a row made of %1';
Blockly.Msg.MC_cmd_minecraft_connectPositions2 = 'from the last marked position to this position';
Blockly.Msg.MC_cmd_minecraft_holding = 'I"m holding a %1';
Blockly.Msg.MC_cmd_minecraft_playerHas = 'I have a %1';
Blockly.Msg.MC_cmd_minecraft_hitting = 'I"m hitting a %1';
Blockly.Msg.MC_cmd_minecraft_sensing = 'this block is made of %1';
Blockly.Msg.MC_cmd_minecraft_giveme = 'give me %1';
Blockly.Msg.MC_cmd_minecraft_createchest = 'create chest with %1';
Blockly.Msg.MC_cmd_minecraft_move = 'change the position %1 times %2';
Blockly.Msg.MC_cmd_minecraft_rotate = 'change direction by %1 degrees (0 - 360) to the right';
Blockly.Msg.MC_cmd_minecraft_setrotation = 'set the direction to %1';
Blockly.Msg.MC_cmd_minecraft_set_elevation = 'set the vertical axes to %1 degrees (0=vertical, 90=horizontal)';
Blockly.Msg.MC_cmd_minecraft_set_elevation_relative = 'change the vertical axes by %1 degrees';
Blockly.Msg.MC_cmd_minecraft_writetext = 'write %1 %2 using font %3 %4 %5 %6 %7 of size %8 %9 points, made of %10 %11'
Blockly.Msg.MC_cmd_minecraft_addevent = 'When %1 call function %2';
Blockly.Msg.MC_cmd_minecraft_wait = 'wait %1 milliseconds';
Blockly.Msg.MC_cmd_friendly = 'friendly';
Blockly.Msg.MC_cmd_enemy = 'enemy';
Blockly.Msg.MC_cmd_up = 'up';
Blockly.Msg.MC_cmd_down = 'down';
Blockly.Msg.MC_cmd_left = 'left';
Blockly.Msg.MC_cmd_right = 'right';
Blockly.Msg.MC_cmd_forward = 'forward';
Blockly.Msg.MC_cmd_backwards = 'backwards';
Blockly.Msg.MC_cmd_whereLook = 'where I"m looking';
Blockly.Msg.MC_cmd_south = 'south';
Blockly.Msg.MC_cmd_north = 'north';
Blockly.Msg.MC_cmd_east = 'east';
Blockly.Msg.MC_cmd_west = 'west';
Blockly.Msg.MC_cmd_HITTING_ENTITY_EVENT = 'I hit someone';
Blockly.Msg.MC_cmd_HIT_BY_ENTITY_EVENT = 'I"m hit by someone';
Blockly.Msg.MC_cmd_DIED_EVENT = 'I die';
Blockly.Msg.MC_cmd_DAMAGING_BLOCK_EVENT = 'I hit a block';
Blockly.Msg.MC_cmd_MOVED_EVENT = 'I move';
Blockly.Msg.MC_cmd_empty = 'empty';
Blockly.Msg.MC_cmd_full = 'full';
Blockly.Msg.MC_cmd_minecraft_move_to_view = 'Set the position to %1';
Blockly.Msg.MC_cmd_minecraft_move_to_view_player = ' where I"m looking';
Blockly.Msg.MC_cmd_minecraft_move_to_view_target = 'the next solid block';
Blockly.Msg.MC_cmd_minecraft_movePos_To_Player = 'Set the position to player %1';
Blockly.Msg.MC_cmd_minecraft_mark_position = 'mark this position';
Blockly.Msg.MC_cmd_minecraft_reset_position = 'reset the current position to %1 %2';
Blockly.Msg.MC_cmd_minecraft_option_start_position = 'the start position';
Blockly.Msg.MC_cmd_minecraft_option_lastmarked_position = 'the last marked position';
Blockly.Msg.MC_cmd_facing = 'facing %1 %2';
Blockly.Msg.MC_cmd_upper_lower = 'side %1 %2';
Blockly.Msg.MC_cmd_ground = 'on the ground %1';
Blockly.Msg.MC_cmd_minecraft_cancel_events = 'cancel all events';
Blockly.Msg.MC_cmd_minecraft_draw = 'Draw %1 %2 0 %3 %4 1 %5 %6 2 %7 %8 3 %9 %10 4 %11 %12 5 %13 %14 6 %15 %16 7 %17 %18 8 %19 %20 9 %21 nr: %22';
Blockly.Msg.MC_cmd_minecraft_draw_extended = 'Draw %1 %2 0 %3 %4 1 %5 %6 2 %7 %8 3 %9 %10 4 %11 %12 5 %13 %14 6 %15 %16 7 %17 %18 8 %19 %20 9 %21 %22 z %23 %24 y %25 %26 x %27 %28 w %29 %30 v %31 %32 u %33 %34 t %35 %36 s %37 %38 r %39 %40 q %41 nr: %42';
Blockly.Msg.MC_cmd_minecraft_playerCoord = 'player pos %1';
Blockly.Msg.MC_cmd_minecraft_importObj = 'import %1 %2 with size %3 %4';
Blockly.Msg.MC_cmd_minecraft_splash_potion_function = 'with function';
Blockly.Msg.MC_cmd_minecraft_sign_with_text = 'with text';
Blockly.Msg.MC_cmd_minecraft_execute_command = 'call function %1 of player %2 with parameter %3 %4 %5 %6 %7';
Blockly.Msg.MC_cmd_minecraft_nothing = 'nothing %1';
Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE = '/vm';
Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE = 'mycommand';







