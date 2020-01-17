/**
 * Blockly Demos: Code
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
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
 * @fileoverview JavaScript for Blockly's Code demo.
 * @author fraser@google.com (Neil Fraser)
 */


/**
 * Modifications for Visualmodder
 *
 * Copyright 2017 Visuamodder.org.
 * */

'use strict';

/**
 * Create a namespace for the application.
 */
var Code = {};

/**
 * Lookup for names of supported languages.  Keys should be in ISO 639 format.
 */
Code.LANGUAGE_NAME = {
		  'en': 'English',
		  'de': 'Deutsch',
		  'it': 'Italiano'
};

Code.LANGUAGE_NAME_originalList = {
  'ar': 'Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©',
  'be-tarask': 'TaraÅ¡kievica',
  'br': 'Brezhoneg',
  'ca': 'CatalÃ ',
  'cs': 'ÄŒesky',
  'da': 'Dansk',
  'de': 'Deutsch',
  'el': 'Î•Î»Î»Î·Î½Î¹ÎºÎ¬',
  'en': 'English',
  'es': 'EspaÃ±ol',
  'et': 'Eesti',
  'fa': 'Ù�Ø§Ø±Ø³ÛŒ',
  'fr': 'FranÃ§ais',
  'he': '×¢×‘×¨×™×ª',
  'hrx': 'Hunsrik',
  'hu': 'Magyar',
  'ia': 'Interlingua',
  'is': 'Ã�slenska',
  'it': 'Italiano',
  'ja': 'æ—¥æœ¬èªž',
  'ko': 'í•œêµ­ì–´',
  'mk': 'ÐœÐ°ÐºÐµÐ´Ð¾Ð½Ñ�ÐºÐ¸',
  'ms': 'Bahasa Melayu',
  'nb': 'Norsk BokmÃ¥l',
  'nl': 'Nederlands, Vlaams',
  'oc': 'Lenga d\'Ã²c',
  'pl': 'Polski',
  'pms': 'PiemontÃ¨is',
  'pt-br': 'PortuguÃªs Brasileiro',
  'ro': 'RomÃ¢nÄƒ',
  'ru': 'Ð ÑƒÑ�Ñ�ÐºÐ¸Ð¹',
  'sc': 'Sardu',
  'sk': 'SlovenÄ�ina',
  'sr': 'Ð¡Ñ€Ð¿Ñ�ÐºÐ¸',
  'sv': 'Svenska',
  'ta': 'à®¤à®®à®¿à®´à¯�',
  'th': 'à¸ à¸²à¸©à¸²à¹„à¸—à¸¢',
  'tlh': 'tlhIngan Hol',
  'tr': 'TÃ¼rkÃ§e',
  'uk': 'Ð£ÐºÑ€Ð°Ñ—Ð½Ñ�ÑŒÐºÐ°',
  'vi': 'Tiáº¿ng Viá»‡t',
  'zh-hans': 'ç®€ä½“ä¸­æ–‡',
  'zh-hant': 'æ­£é«”ä¸­æ–‡'
};

/**
 * List of RTL languages.
 */
Code.LANGUAGE_RTL = ['ar', 'fa', 'he', 'lki'];

/**
 * Blockly's main workspace.
 * @type {Blockly.WorkspaceSvg}
 */
Code.workspace = null;

/**
 * Extracts a parameter from the URL.
 * If the parameter is absent default_value is returned.
 * @param {string} name The name of the parameter.
 * @param {string} defaultValue Value to return if paramater not found.
 * @return {string} The parameter value or the default value if not found.
 */
Code.getStringParamFromUrl = function(name, defaultValue) {
  var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
  return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};

/**
 * Get the language of this user from the URL.
 * @return {string} User's language.
 */
Code.getLang = function() {
  var lang = Code.getStringParamFromUrl('lang', '');
  if (Code.LANGUAGE_NAME[lang] === undefined) {
    // Default to English.
    lang = 'en';
  }
  return lang;
};

/**
 * Is the current language (Code.LANG) an RTL language?
 * @return {boolean} True if RTL, false if LTR.
 */
Code.isRtl = function() {
  return Code.LANGUAGE_RTL.indexOf(Code.LANG) != -1;
};

/**
 * Load blocks saved on App Engine Storage or in session/local storage.
 * @param {string} defaultXml Text representation of default blocks.
 */
Code.loadBlocks = function(defaultXml) {
  try {
    var loadOnce = window.sessionStorage.loadOnceBlocks;
  } catch(e) {
    // Firefox sometimes throws a SecurityError when accessing sessionStorage.
    // Restarting Firefox fixes this, so it looks like a bug.
    var loadOnce = null;
  }
  if ('BlocklyStorage' in window && window.location.hash.length > 1) {
    // An href with #key trigers an AJAX call to retrieve saved blocks.
    BlocklyStorage.retrieveXml(window.location.hash.substring(1));
  } else if (loadOnce) {
    // Language switching stores the blocks during the reload.
    delete window.sessionStorage.loadOnceBlocks;
    var xml = Blockly.Xml.textToDom(loadOnce);
    Blockly.Xml.domToWorkspace(xml, Code.workspace);
  } else if (defaultXml) {
    // Load the editor with default starting blocks.
    var xml = Blockly.Xml.textToDom(defaultXml);
    Blockly.Xml.domToWorkspace(xml, Code.workspace);
  } else if ('BlocklyStorage' in window) {
    // Restore saved blocks in a separate thread so that subsequent
    // initialization is not affected from a failed load.
    window.setTimeout(BlocklyStorage.restoreBlocks, 0);
  }
};


Code.getLanguage = function() {
	 var languageMenu = document.getElementById('languageMenu');
	 return encodeURIComponent(languageMenu.options[languageMenu.selectedIndex].value);
}


/**
 * Save the blocks and reload with a different language.
 */
Code.changeLanguage = function() {
  // Store the blocks for the duration of the reload.
  // MSIE 11 does not support sessionStorage on file:// URLs.
  if (window.sessionStorage) {
    var xml = Blockly.Xml.workspaceToDom(Code.workspace);
    var text = Blockly.Xml.domToText(xml);
    window.sessionStorage.loadOnceBlocks = text;
  }

  var languageMenu = document.getElementById('languageMenu');
  var newLang = encodeURIComponent(
      languageMenu.options[languageMenu.selectedIndex].value);
  var search = window.location.search;
  if (search.length <= 1) {
    search = '?lang=' + newLang;
  } else if (search.match(/[?&]lang=[^&]*/)) {
    search = search.replace(/([?&]lang=)[^&]*/, '$1' + newLang);
  } else {
    search = search.replace(/\?/, '?lang=' + newLang + '&');
  }

  window.location = window.location.protocol + '//' +
      window.location.host + window.location.pathname + search;
};

/**
 * Bind a function to a button's click event.
 * On touch enabled browsers, ontouchend is treated as equivalent to onclick.
 * @param {!Element|string} el Button element or ID thereof.
 * @param {!Function} func Event handler to bind.
 */
Code.bindClick = function(el, func) {
  if (typeof el == 'string') {
    el = document.getElementById(el);
  }
  el.addEventListener('click', func, true);
  el.addEventListener('touchend', func, true);
};

/**
 * Load the Prettify CSS and JavaScript.
 */
Code.importPrettify = function() {
  var script = document.createElement('script');
  script.setAttribute('src', 'https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js');
  document.head.appendChild(script);
};

/**
 * Compute the absolute coordinates and dimensions of an HTML element.
 * @param {!Element} element Element to match.
 * @return {!Object} Contains height, width, x, and y properties.
 * @private
 */
Code.getBBox_ = function(element) {
  var height = element.offsetHeight;
  var width = element.offsetWidth;
  var x = 0;
  var y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  return {
    height: height,
    width: width,
    x: x,
    y: y
  };
};

/**
 * User's language (e.g. "en").
 * @type {string}
 */
Code.LANG = Code.getLang();

/**
 * List of tab names.
 * @private
 */
Code.TABS_ = ['blocks', 'javascript', 'xml', 'log'];

Code.selected = 'blocks';

/**
 * Switch the visible pane when a tab is clicked.
 * @param {string} clickedName Name of tab clicked.
 */
Code.tabClick = function(clickedName) {
  // If the XML tab was open, save and render the content.
  if (document.getElementById('tab_xml').className == 'tabon') {
    var xmlTextarea = document.getElementById('content_xml');
    var xmlText = xmlTextarea.value;
    var xmlDom = null;
    try {
      xmlDom = Blockly.Xml.textToDom(xmlText);
    } catch (e) {
      var q =
          window.confirm(MSG['badXml'].replace('%1', e));
      if (!q) {
        // Leave the user on the XML tab.
        return;
      }
    }
    if (xmlDom) {
      Code.workspace.clear();
      Blockly.Xml.domToWorkspace(xmlDom, Code.workspace);
    }
  }

  if (document.getElementById('tab_blocks').className == 'tabon') {
    Code.workspace.setVisible(false);
  }
  // Deselect all tabs and hide all panes.
  for (var i = 0; i < Code.TABS_.length; i++) {
    var name = Code.TABS_[i];
    document.getElementById('tab_' + name).className = 'taboff';
    document.getElementById('content_' + name).style.visibility = 'hidden';
  }

  // Select the active tab.
  Code.selected = clickedName;
  document.getElementById('tab_' + clickedName).className = 'tabon';
  // Show the selected pane.
  document.getElementById('content_' + clickedName).style.visibility =
      'visible';
  Code.renderContent();
  if (clickedName == 'blocks') {
    Code.workspace.setVisible(true);
  }
  Blockly.svgResize(Code.workspace);
};

/**
 * Populate the currently selected pane with content generated from the blocks.
 */
Code.renderContent = function() {
  var content = document.getElementById('content_' + Code.selected);
  // Initialize the pane.
  if (content.id == 'content_xml') {
    var xmlTextarea = document.getElementById('content_xml');
    var xmlDom = Blockly.Xml.workspaceToDom(Code.workspace);
    var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    xmlTextarea.value = xmlText;
    xmlTextarea.focus();
  } else if (content.id == 'content_javascript') {
    Code.attemptCodeGeneration(Blockly.JavaScript);
  } 
  if (typeof PR == 'object') {
    PR.prettyPrint();
  }
};

/**
 * Attempt to generate the code and display it in the UI, pretty printed.
 * @param generator {!Blockly.Generator} The generator to use.
 */
Code.attemptCodeGeneration = function(generator) {
  var content = document.getElementById('content_' + Code.selected);
  content.textContent = '';
  if (Code.checkAllGeneratorFunctionsDefined(generator)) {
    var code = generator.workspaceToCode(Code.workspace);
    content.textContent = code;
    // Remove the 'prettyprinted' class, so that Prettify will recalculate.
    content.className = content.className.replace('prettyprinted', '');
  }
};

/**
 * Check whether all blocks in use have generator functions.
 * @param generator {!Blockly.Generator} The generator to use.
 */
Code.checkAllGeneratorFunctionsDefined = function(generator) {
  var blocks = Code.workspace.getAllBlocks(false);
  var missingBlockGenerators = [];
  for (var i = 0; i < blocks.length; i++) {
    var blockType = blocks[i].type;
    if (!generator[blockType]) {
      if (missingBlockGenerators.indexOf(blockType) == -1) {
        missingBlockGenerators.push(blockType);
      }
    }
  }

  var valid = missingBlockGenerators.length == 0;
  if (!valid) {
    var msg = 'The generator code for the following blocks not specified for ' +
        generator.name_ + ':\n - ' + missingBlockGenerators.join('\n - ');
    Blockly.alert(msg);  // Assuming synchronous. No callback.
  }
  return valid;
};

/**
 * Initialize Blockly.  Called on page load.
 */
Code.init = function() {
  Code.initLanguage();

  var rtl = Code.isRtl();
  var container = document.getElementById('content_area');
  var onresize = function(e) {
    var bBox = Code.getBBox_(container);
    for (var i = 0; i < Code.TABS_.length; i++) {
      var el = document.getElementById('content_' + Code.TABS_[i]);
      el.style.top = bBox.y + 'px';
      el.style.left = bBox.x + 'px';
      // Height and width need to be set, read back, then set again to
      // compensate for scrollbars.
      el.style.height = bBox.height + 'px';
      el.style.height = (2 * bBox.height - el.offsetHeight) + 'px';
      el.style.width = bBox.width + 'px';
      el.style.width = (2 * bBox.width - el.offsetWidth) + 'px';
    }
    // Make the 'Blocks' tab line up with the toolbox.
    if (Code.workspace && Code.workspace.toolbox_.width) {
      document.getElementById('tab_blocks').style.minWidth =
          (Code.workspace.toolbox_.width - 38) + 'px';
          // Account for the 19 pixel margin and on each side.
    }
  };
  window.addEventListener('resize', onresize, false);

  // The toolbox XML specifies each category name using Blockly's messaging
  // format (eg. `<category name="%{BKY_CATLOGIC}">`).
  // These message keys need to be defined in `Blockly.Msg` in order to
  // be decoded by the library. Therefore, we'll use the `MSG` dictionary that's
  // been defined for each language to import each category name message
  // into `Blockly.Msg`.
  // TODO: Clean up the message files so this is done explicitly instead of
  // through this for-loop.
  for (var messageKey in MSG) {
    if (messageKey.indexOf('cat') == 0) {
      Blockly.Msg[messageKey.toUpperCase()] = MSG[messageKey];
    }
  }

  // Construct the toolbox XML, replacing translated variable names.
  var toolboxText = document.getElementById('toolbox').outerHTML;
  toolboxText = toolboxText.replace(/(^|[^%]){(\w+)}/g,
      function(m, p1, p2) {return p1 + MSG[p2];});
  var toolboxXml = Blockly.Xml.textToDom(toolboxText);

  Code.workspace = Blockly.inject('content_blocks',
      {grid:
          {spacing: 25,
           length: 3,
           colour: '#ccc',
           snap: true},
       media: '../../media/',
       rtl: rtl,
       toolbox: toolboxXml,
       zoom:
           {controls: true,
            wheel: true}
      });

  // Add to reserved word list: Local variables in execution environment (runJS)
  // and the infinite loop detection function.
  Blockly.JavaScript.addReservedWords('code,timeouts,checkTimeout');

  Code.loadBlocks('');

  if ('BlocklyStorage' in window) {
    // Hook a save function onto unload.
    BlocklyStorage.backupOnUnload(Code.workspace);
  }

  Code.tabClick(Code.selected);

  Code.bindClick('trashButton',
      function() {Code.discard(); Code.renderContent();});
  Code.bindClick('runButton', Code.runJS);
  
  


  for (var i = 0; i < Code.TABS_.length; i++) {
    var name = Code.TABS_[i];
    Code.bindClick('tab_' + name,
        function(name_) {return function() {Code.tabClick(name_);};}(name));
  }
  onresize();
  Blockly.svgResize(Code.workspace);
  
  
  

  // save button ------------------------
  	      document.getElementById('saveButton').onclick = function(code) {
  		 	var inxml = Blockly.Xml.workspaceToDom(Code.workspace);
  			var inxml_text = Blockly.Xml.domToPrettyText(inxml);		
  			//window.alert("saving ..\n"+inxml_text);	
  			var saveLink=document.getElementById('saveButtonDownloadRef');
  			var fileName=window.prompt(document.getElementById('saveButton').title, "vmcode.txt");
  			if (fileName == null || fileName =='undefined' ||  fileName == '') {
  				fileName="vmcode.txt"
  			}
  			saveLink.download=fileName;
 			saveLink.href = 'data:text/plain;charset=utf-8,'+ encodeURIComponent(inxml_text); 
  			saveLink.click();
        };


  // read button ---------------------
	    document.getElementById('readButton').onclick = function(code) {
	    	var fileInput = document.getElementById('readButton1');
	    	fileInput.click();
	    };
  		var fileInput = document.getElementById('readButton1');
  		fileInput.addEventListener('change', function(e) {
  			var file = fileInput.files[0];
  			var textType = /text.*/;

  			if (file.type.match(textType)) {
  				var reader = new FileReader();

  				reader.onload = function(e) {
  					//window.alert(reader.result);
  					var outxml = Blockly.Xml.textToDom(reader.result);
  					Blockly.Xml.domToWorkspace(outxml, Code.workspace);
  					window.alert("ok");
  				}
  				reader.readAsText(file);	
  			} else {
  				window.alert( "File not supported!")
  			}
  		});
  

  // Lazy-load the syntax-highlighting.
  window.setTimeout(Code.importPrettify, 1);
  
  
  // CUSTOM initializations
  document.getElementById('playernamefield').value= 'Minecraft_player_name';
  document.getElementById('ftpLinkfield').value= 'ftp://user:password@server';
  document.getElementById('ftpLinkCheckbox').onchange = function() {
	    document.getElementById('ftpLinkfield').disabled = !this.checked;
	};
  //callGoogleAnalytics();
  setTimeout(callGoogleAnalytics, 3000);  // if we are offline we don't want to wait
  setTimeout(setUpModalForLoadingExamples, 2000);  // speed up loading of main page

  setUpModalForLoadingExamples();

  Code.serverNeedsUpdate=true;
  Code.workspace.addChangeListener(setServerNeedsUpdate);
  window.onkeypress =handleKeyboardShortcuts;
  
};

/**
 * Initialize the page language.
 */
Code.initLanguage = function() {
  // Set the HTML's language and direction.
  var rtl = Code.isRtl();
  document.dir = rtl ? 'rtl' : 'ltr';
  document.head.parentElement.setAttribute('lang', Code.LANG);

  // Sort languages alphabetically.
  var languages = [];
  for (var lang in Code.LANGUAGE_NAME) {
    languages.push([Code.LANGUAGE_NAME[lang], lang]);
  }
  var comp = function(a, b) {
    // Sort based on first argument ('English', 'Русский', '简体字', etc).
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  };
  languages.sort(comp);
  // Populate the language selection menu.
  var languageMenu = document.getElementById('languageMenu');
  languageMenu.options.length = 0;
  for (var i = 0; i < languages.length; i++) {
    var tuple = languages[i];
    var lang = tuple[tuple.length - 1];
    var option = new Option(tuple[0], lang);
    if (lang == Code.LANG) {
      option.selected = true;
    }
    languageMenu.options.add(option);
  }
  languageMenu.addEventListener('change', Code.changeLanguage, true);

  // Inject language strings.
  document.title = 'Visual Modder';
  document.getElementById('tab_blocks').textContent = MSG['blocks'];

  document.getElementById('readButton').title = MSG['t_readTooltip'];
  document.getElementById('saveButton').title = MSG['t_saveTooltip'];
  document.getElementById('runButton').title = MSG['runTooltip'];
  document.getElementById('trashButton').title = MSG['trashTooltip'];
};

/**
 * Execute the user's code.
 */
Code.runJS = function() {
	var nameField=document.getElementById('playernamefield');
	var playerName=nameField.value.trim();
	nameField.style.backgroundColor = "#FFFFFF"
   if(playerName=='Minecraft_player_name' || 
		   playerName=='' || 
		   playerName.length > 16 || 
		   playerName.indexOf(" ")>=0) {
	   nameField.style.backgroundColor = "red";
	   displayResultMessage(MSG['warn_entername'], "red");
   } else {
		var ftpLink=document.getElementById('ftpLinkfield').value.trim();
		var ftpCheck=document.getElementById('ftpLinkCheckbox');
		ftpLinkfield.style.backgroundColor = "#FFFFFF";
	   if(ftpCheck.checked &&(ftpLink=='ftp://user:password@server' || ftpLink.indexOf("@")==-1 || ftpLink.indexOf("ftp:")==-1)) {
		   ftpLinkfield.style.backgroundColor = "red";
		   displayResultMessage('FTP server ?', "red");
	   } else {
		   if(!ftpCheck.checked){
			   ftpLink="";
		   }
		   var code = Blockly.JavaScript.workspaceToCode(Code.workspace);
		   var xmlCodeDom = Blockly.Xml.workspaceToDom(Code.workspace);
		   var xmlCode = Blockly.Xml.domToText(xmlCodeDom);
		   var host='http://'+window.location.host; 	   
		   var hpath=host+'/EXE';
		   
		   //postToServer('/EXE', {'EXECODE': code});
		   //postToServer(playerName, host+':'+port+'/EXE', {'EXECODE': code , 'Playername':playerName});
		   var formData = new FormData(); 
		   formData.append('EXECODE', code);
		   formData.append('XMLCODE', xmlCode);
		   formData.append('Playername', playerName);
		   formData.append('FtpLink', ftpLink);
		   formData.append('langsel', Code.getLanguage());


		   
		   var xhr = new XMLHttpRequest();
		   xhr.open("POST", hpath, true); 
		   xhr.timeout = 2000; 
		   xhr.onload=function(event){
			   if(event.target.response.substr(0, 2)=='OK'){
				   Code.serverNeedsUpdate=false;
				   displayResultMessage(MSG['info_deploySuccess'].replace('%2', playerName), "green"); 
			   } else if(event.target.response.substr(0, 2)=='WA'){ //Warning
				   Code.serverNeedsUpdate=false;
				   displayResultMessage(MSG['info_deploySuccessWithWarning'].replace('%2', playerName), "yellow"); 
			   } else {
				   displayResultMessage(xhr.responseText, "red"); 			   
			   }
				 //ga('send', 'pageview');
		   }; 
		   xhr.onerror=function(event){ 
			   displayResultMessage(xhr.responseText, "red"); 
		   }; 
		   xhr.ontimeout = function (e) {
			   displayResultMessage("TIMEOUT  "+xhr.responseText, "red"); 
			 };
		   xhr.send(formData);	   
		   
		   //window.alert(MSG['info_deploySuccess'].replace('%1', host).replace('%2', playerName)+" ("+port+")");
		   //location.reload(); // force reload of page
	   } 
   }
};


Code.loadLog = function() {
	var nameField=document.getElementById('playernamefield');
	var playerName=nameField.value.trim();
	var logTextarea = document.getElementById('content_log');
	var host='http://'+window.location.host; 	   
	var hpath=host+'/LOG';
	var formData = new FormData(); 
	formData.append('Playername', playerName);
   
	var xhr = new XMLHttpRequest();
	xhr.open("POST", hpath, true); 
	xhr.timeout = 2000; 
	xhr.onload=function(event){
	   logTextarea.value =xhr.responseText;  			   
	}; 
	xhr.onerror=function(event){ 
	   logTextarea.value ='ERROR Connecting server\n'+xhr.responseText; 
	}; 
	xhr.ontimeout = function (e) {
	   logTextarea.value ="TIMEOUT Connecting server\n  "+xhr.responseText; 
	};
	xhr.send(formData);	   
};

function displayResultMessage(message, color){
	var subcolor="white";
	if (color=="green") {
		subcolor="#c6f1bc"
	} else 	if (color=="yellow") {
		subcolor="##f1d967"
	} else 	if (color=="red") {
		subcolor="#ffb6b6"
	}


	var modalDeployResultMessage=document.getElementById('modalDeployResultMessage');
	var modalDeployResultMessageText=document.getElementById('modalDeployResultMessageText');
	modalDeployResultMessage.style.display = "block";
	modalDeployResultMessageText.innerHTML = message;
	modalDeployResultMessageText.style.borderColor = color;
	modalDeployResultMessageText.style.backgroundColor = subcolor;

	modalDeployResultMessage.onclick = function() {
		modalDeployResultMessage.style.display = "none";
	}

}






/**
 * Discard all blocks from the workspace.
 */
Code.discard = function() {
  var count = Code.workspace.getAllBlocks(false).length;
  if (count < 2 ||
      window.confirm(Blockly.Msg['DELETE_ALL_BLOCKS'].replace('%1', count))) {
    Code.workspace.clear();
    if (window.location.hash) {
      window.location.hash = '';
    }
  }
};

function setExample(id, title, xmlfile, pngfile){
	document.getElementById(id+'Text').textContent = MSG[title];
	document.getElementById(id+'Button').title = xmlfile;
	document.getElementById(id+'Image').src = pngfile;
	document.getElementById(id+'Image').alt = MSG[title];
	Code.bindClick(id+'Button', Code.loadExampleCode);
	
}

function setUpModalForLoadingExamples(){
	
	document.getElementById('openModalButton').textContent = MSG['c_Examples'];
	document.getElementById('openModalTitle').textContent = MSG['c_Examples'];
	
	setExample('ex1', 'c_Sphere', 'examples/Sphere.xml', 'examples/Sphere.png')
	setExample('ex2', 'c_Tower', 'examples/Tower.xml', 'examples/Tower.png')
	setExample('ex3', 'c_Slide', 'examples/Slide.xml', 'examples/Slide.png')
	setExample('ex4', 'c_Eiffel', 'examples/Eiffel_Tower.xml', 'examples/Eiffel_Tower.png')
	setExample('ex5', 'c_Medusa', 'examples/Medusa.xml', 'examples/Medusa.png')
	setExample('ex6', 'c_Train', 'examples/Train.xml', 'examples/Train.png')
	setExample('ex7', 'c_SpaceShip', 'examples/SpaceShip.xml', 'examples/SpaceShip.png')
	setExample('ex8', 'c_Pumpkin', 'examples/Pumpkin.xml', 'examples/Pumpkin.png')
	setExample('ex9', 'c_Labirinth', 'examples/Labirinth.xml', 'examples/Labirinth.png')
	setExample('ex10', 'c_Door', 'examples/Door.xml', 'examples/Door.png')
	setExample('ex11', 'c_Bridge', 'examples/Bridge.xml', 'examples/Bridge.png')
	setExample('ex12', 'c_Orientation', 'examples/Orientation.xml', 'examples/Orientation.png')
	setExample('ex13', 'c_Stadium', 'examples/Stadium.xml', 'examples/Stadium.png')
	setExample('ex14', 'c_Boat', 'examples/Boat.xml', 'examples/Boat.png')
	setExample('ex15', 'c_Disco', 'examples/Disco.xml', 'examples/Disco.png')
	setExample('ex16', 'c_Sail', 'examples/Vessel.xml', 'examples/Vessel.png')
	setExample('ex17', 'c_Skull', 'examples/Skull.xml', 'examples/Skull.png')
	setExample('ex18', 'c_Pool', 'examples/Pool.xml', 'examples/Pool.png')
	setExample('ex19', 'c_Tennis', 'examples/Tennis.xml', 'examples/Tennis.png')
	setExample('ex20', 'c_Coca', 'examples/Coca.xml', 'examples/Coca.png')
	setExample('ex21', 'c_Bell', 'examples/Bell.xml', 'examples/Bell.png')
	setExample('ex22', 'c_Renna', 'examples/Renna.xml', 'examples/Renna.png')
	setExample('ex23', 'c_Regalo', 'examples/Regalo.xml', 'examples/Regalo.png')
	setExample('ex24', 'c_Pino', 'examples/Pino.xml', 'examples/Pino.png')
	setExample('ex25', 'c_Calendar', 'examples/Calendar.xml', 'examples/Calendar.png')
	setExample('ex26', 'c_MountPolar', 'examples/MountPolar.xml', 'examples/MountPolar.png')
	setExample('ex27', 'c_StairSpiral', 'examples/StairSpiral.xml', 'examples/StairSpiral.png')
	setExample('ex28', 'c_Temple', 'examples/Temple.xml', 'examples/Temple.png')
	setExample('ex29', 'c_Parkour', 'examples/Parkour.xml', 'examples/Parkour.png')
	setExample('ex30', 'c_Millennium', 'examples/Millennium.xml', 'examples/Millennium.png')
	setExample('ex31', 'c_Piano', 'examples/Piano.xml', 'examples/Piano.png')
	setExample('ex32', 'c_Empty', 'examples/Empty.xml', 'examples/Empty.png')

	
	//Get the modal
	var modal = document.getElementById('myModal');
	
	// Get the button that opens the modal
	var btn = document.getElementById("openModalButton");
	
	// Get the <span> element that closes the modal
	var span = document.getElementById("closeModal");
	
	// When the user clicks on the button, open the modal 
	btn.onclick = function() {
	    modal.style.display = "block";
	}
	
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}
	
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}
}

Code.loadExampleCode = function() {
	loadExampleFiles(this.title);
}

function loadExampleFiles(filename) {   
    var xobj = new XMLHttpRequest();
    xobj.open('GET', filename, true); 
    xobj.onload=function(event){ 
		 //alert("hsuccess call "+xobj.responseText);
		 var outxml = Blockly.Xml.textToDom(xobj.responseText);
		 Blockly.Xml.domToWorkspace(outxml, Code.workspace);
	   }; 
	xobj.onerror=function(event){ alert("ERROR status="+xobj.statusText+"  msg="+xobj.responseText); }; 
	xobj.send(null);
	var modal = document.getElementById('myModal');
	modal.style.display = "none";
 }




(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

function callGoogleAnalytics(){
	  ga('create', 'UA-114678111-4', 'auto');
	  ga('set', 'dimension1', 'V2.0');
	  ga('send', 'pageview');
	  }

function setServerNeedsUpdate(event) {
	  if (event.type != Blockly.Events.UI) {
		  Code.serverNeedsUpdate=true;
	  }
	}

// Load the Code demo's language strings.
document.write('<script src="msg/' + Code.LANG + '.js"></script>\n');
// Load Blockly's language strings.
document.write('<script src="../../msg/js/' + Code.LANG + '.js"></script>\n');


window.addEventListener('load', Code.init);
window.onblur = function() {
	if(Code.serverNeedsUpdate){
		Code.runJS()
	}
	
document.getElementById('playernamefield').onblur = function() {
		Code.serverNeedsUpdate=true;
	}

}

var lastSelectedDrawColBlock=null; // global to keep track of the last selection
function handleKeyboardShortcuts(event) { // add a key 'r' that repeats the last used colour in the drawings
	var selected=Blockly.selected;
	if(selected!=null && selected.type.startsWith('minecraft_drawcol_')) {
		if(event.key>='0' && event.key<='9') { // colour a block
			//getDrawingBlockCoordinate(Blockly.selected);
			//setDrawingBlockByCoordinate(getContainingList(Blockly.selected), 19, 19, event.key)
			//alert(event.key)
			setDrawingBlock(selected, event.key);
			//Blockly.Events.fire(new Blockly.Events.BlockChange(selected, 'field', 'tooltip', 'minecraft_drawcol_0', 'minecraft_drawcol_1'));
		}
		else if(event.key=='m' ) { // mark the starting block
			selected.setColour(Blockly.utils.colour.blend(selected.getColour(), '#ffffff', .5));
			lastSelectedDrawColBlock=selected;
			//selected.setColour('#ff0000');
		}
		else if(event.key=='i' || event.key=='d' ) { // insert or delete a column
			var coord=getDrawingBlockCoordinate(selected)
			if(coord!=null){
				var mainList=getContainingList(selected);
				//alert(mainList.childBlocks_.length);
				var nLines=mainList.childBlocks_.length;
				for (var y = 0; y < 20; y++) {
					//alert(coord.x+","+y);
					var inBlock=getDrawingBlockByCoordinate(mainList, coord.x, y);
					if(inBlock!=null){
						if(event.key=='d'){
							deleteDrawingBlock(inBlock);
						}else{
							insertDrawingBlock(inBlock);
						}
					}
				}
			}
			//selected.setColour('#ff0000');
		}
		else if(lastSelectedDrawColBlock!=null && lastSelectedDrawColBlock.type.startsWith('minecraft_drawcol_')){
			var coordStart=getDrawingBlockCoordinate(lastSelectedDrawColBlock);
			var coordEnd=getDrawingBlockCoordinate(selected);
			var mainList=getContainingList(selected)
			var id=lastSelectedDrawColBlock.type.substring('minecraft_drawcol_'.length);
			if(coordStart!=null && coordEnd!=null){
				if(event.key=='l' ) { // draw line
						bresenham_draw_line (coordStart.x, coordStart.y, coordEnd.x, coordEnd.y, mainList, id);
				} else if(event.key=='r' ) { // draw rectangle
					bresenham_draw_line (coordStart.x, coordStart.y, coordEnd.x, coordStart.y, mainList, id);
					bresenham_draw_line (coordStart.x, coordStart.y, coordStart.x, coordEnd.y, mainList, id);
					bresenham_draw_line (coordStart.x, coordEnd.y, coordEnd.x, coordEnd.y, mainList, id);
					bresenham_draw_line (coordEnd.x, coordStart.y, coordEnd.x, coordEnd.y, mainList, id);
				} else if(event.key=='c' ) { // draw rectangle
					var dx=Math.abs(coordEnd.x - coordStart.x);
					var dy=Math.abs(coordEnd.y - coordStart.y);
					var radiusExp2=dx*dx+dy*dy;
					var radius=Math.sqrt(radiusExp2);
					for (var x = coordStart.x-radius; x <= coordStart.x+radius; x+=.1) {
						var y=Math.sqrt(radiusExp2-Math.pow(x-coordStart.x, 2));
				    	setDrawingBlockByCoordinate(mainList, Math.round(x), Math.round(coordStart.y+y), id);
				    	setDrawingBlockByCoordinate(mainList, Math.round(x), Math.round(coordStart.y-y), id);
				    	//window.alert(x +","+ y+",rad="+ radius +", start= "+coordStart.x +","+coordStart.y+'--->'+(radiusExp2-(x-coordStart.x)^2)+'-a->'+(x-coordStart.x)+'-b->'+Math.pow(x-coordStart.x,2)+'-xx>'+radiusExp2);	
					}
					
				} else if(event.key=='f' ) { // draw full block
					if(coordStart.y<coordEnd.y){
						for (var i = coordStart.y; i <= coordEnd.y; i++) {
							bresenham_draw_line (coordStart.x, i, coordEnd.x, i, mainList, id);						
						}
					} else {
						for (var i = coordEnd.y; i <= coordStart.y; i++) {
							bresenham_draw_line (coordStart.x, i, coordEnd.x, i, mainList, id);						
						}
						
					}
				} 
			}
		}
	}
}

function setDrawingBlock(selected, key) { 
	selected.type='minecraft_drawcol_'+key;
	selected.setColour(getColorForDrawCol(parseInt(key)));
	//alert(selected.type);
}

function insertDrawingBlock(selected) { 
	//var oldBlock=Code.workspace.getBlockById(event.blockId);
	var workspace=Code.workspace;
	var parent=selected.getParent();
	
	var newBlock = workspace.newBlock(selected.type);
	var coordinate = selected.getRelativeToSurfaceXY();
	newBlock.moveBy(coordinate.x, coordinate.y)

	//parent.setColour(23);
	//newBlock.setColour(100);
	newBlock.initSvg();
	newBlock.render();
	
	if(parent!=null) {
		var parentConnection = parent.getInputWithBlock(selected).connection;
		if(parentConnection!=null) {
			parentConnection.connect(newBlock.outputConnection);
		}
	}

	var newBlockchildConnection = newBlock.getInput('child').connection;
	newBlockchildConnection.connect(selected.outputConnection);
		



}


function deleteDrawingBlock(selected) { 
	//var oldBlock=Code.workspace.getBlockById(event.blockId);
	var workspace=Code.workspace;
	var parent=selected.getParent();
	var child = selected.getInputTargetBlock('child');
	
	if(parent!=null && child!=null) {
		var parentConnection = parent.getInputWithBlock(selected).connection;
		if(parentConnection!=null) {
			parentConnection.connect(child.outputConnection);
		}
	}
	selected.dispose();		

}

function getDrawingBlockCoordinate(block){
	var x=0;
	var parent=block.getParent();
	while (parent!=null && parent.type.startsWith('minecraft_drawcol_')) {
		x++;
		block=parent;
		parent=parent.getParent();
	}
	var coord=null;
	if(parent!=null){
		coord={'x':x, 'y':parseInt(parent.getInputWithBlock(block).name.substring(3))};
	}
	//window.alert(x +","+ 	parent.getInputWithBlock(block).name.substring(3));
	return coord;
}

function getContainingList(block){
	var parent=block.getParent();
	while (parent!=null && parent.type.startsWith('minecraft_drawcol_')) {
		parent=parent.getParent();
	}
	return parent;
}

function setDrawingBlockByCoordinate(listBlock, x, y, id){
	//window.alert(x +","+ y);	
	var block = getDrawingBlockByCoordinate(listBlock, x, y)
	if(block!=null){
		setDrawingBlock(block, id);		
	}
}

function getDrawingBlockByCoordinate(listBlock, x, y){
	//window.alert(x +","+ y);	
	var block = listBlock.getInputTargetBlock('ADD'+y);
	for (var i = 0; i < x; i++) {
		if(block==null){
			break;
		}
		block=block.getInputTargetBlock('child');
	}
	return block;
}

function bresenham_draw_line (x1, y1, x2, y2, listBlock, id) {
	//alert(x1+','+y1+'    '+x2+','+y2)


    let x, y, dx, dy, dx1, dy1, px, py, xe, ye, i;

    // Calculate deltas
    dx = x2 - x1;
    dy = y2 - y1;

    // 
    dx1 = Math.abs(dx);
    dy1 = Math.abs(dy);

    // Calculate error intervals 
    px = 2 * dy1 - dx1;
    py = 2 * dx1 - dy1;

    // The line is X-axis dominant
    if (dy1 <= dx1) {

        // Line is drawn left to right
        if (dx >= 0) {
            x = x1; y = y1; xe = x2;
        } else { // Line is drawn right to left (swap )
            x = x2; y = y2; xe = x1;
        }

    	setDrawingBlockByCoordinate(listBlock, x, y, id)


        // Rasterize the line
        for (i = 0; x < xe; i++) {
            x = x + 1;

            // octants.
            if (px < 0) {
                px = px + 2 * dy1;
            } else {
                if ((dx < 0 && dy < 0) || (dx > 0 && dy > 0)) {
                    y = y + 1;
                } else {
                    y = y - 1;
                }
                px = px + 2 * (dy1 - dx1);
            }

        	setDrawingBlockByCoordinate(listBlock, x, y, id)
        }

    } else { //The line is Y-axis dominant

        //  bottom to top
        if (dy >= 0) {
            x = x1; y = y1; ye = y2;
        } else { // Line is drawn top to bottom
            x = x2; y = y2; ye = y1;
        }

    	setDrawingBlockByCoordinate(listBlock, x, y, id)

        // Rasterize 
        for (i = 0; y < ye; i++) {
            y = y + 1;

             if (py <= 0) {
                py = py + 2 * dx1;
            } else {
                if ((dx < 0 && dy<0) || (dx > 0 && dy > 0)) {
                    x = x + 1;
                } else {
                    x = x - 1;
                }
                py = py + 2 * (dx1 - dy1);
            }

        	setDrawingBlockByCoordinate(listBlock, x, y, id)
        }
    }
 }

function getColorForDrawCol(color){
	switch(color) {
	  case 0:
		  return '#888888';
	    break;
	  case 1:
		  return '#ff4000';
	    break;
	  case 2:
		  return '#ffbf00';
	    break;
	  case 3:
		  return '#bfff00';
	    break;
	  case 4:
		  return '#00ff80';
	    break;
	  case 5:
		  return '#00bfff';
	    break;
	  case 6:
		  return '#0040ff';
	    break;
	  case 7:
		  return '#8000ff';
	    break;
	  case 8:
		  return '#ff00ff';
	    break;
	  case 9:
		  return '#ff0040';
	    break;
	  default:
		  return '#111111';
	}
}


