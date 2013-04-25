//    __  _______________   _____                       __________                __
//   /  |/  / ____/ ____/  / ___/____  __  ______  ____/ / ____/ /___  __  ______/ /
//  / /|_/ / /   / __/     \__ \/ __ \/ / / / __ \/ __  / /   / / __ \/ / / / __  /
// / /  / / /___/ /___    ___/ / /_/ / /_/ / / / / /_/ / /___/ / /_/ / /_/ / /_/ /
///_/  /_/\____/_____/   /____/\____/\__,_/_/ /_/\__,_/\____/_/\____/\__,_/\__,_/
//
// A TinyMCE plugin for embeding Soundcloud files - this is heavily influenced/based
// on the tinymce-youtube plugin by Jimmy Hills: https://github.com/hatchddigital/tinymce-youtube
// UDOX 2013 | jaymz campbell | u-dox.com

(function() {
	// Load plugin specific language pack
	tinymce.PluginManager.requireLangPack('soundcloud');

	tinymce.create('tinymce.plugins.soundcloudPlugin', {
		init : function(ed, url) {

			// Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceExample');
			ed.addCommand('mcesoundcloud', function() {
				ed.windowManager.open({
					file: url + '/dialog.html?time=' + Math.random(),
					width: 500 + parseInt(ed.getLang('soundcloud.delta_width', 0), 10),
					height: 300 + parseInt(ed.getLang('soundcloud.delta_height', 0), 10),
					inline: 1
				}, {
					plugin_url : url, // Plugin absolute URL
					some_custom_arg : 'custom arg' // Custom argument
				});
			});

			ed.addButton('soundcloud', {
				title : 'soundcloud.desc',
				cmd : 'mcesoundcloud',
				image : url + '/img/soundcloud-icon.png'
			});

			// Add a node change handler, selects the button in the UI when a image is selected
			ed.onNodeChange.add(function(ed, cm, n) {
				cm.setActive('soundcloud', n.nodeName == 'IMG');
			});
		},

		getInfo : function() {
			return {
				longname : 'soundcloud plugin',
				author : 'Jaymz Campbell / UDOX',
				authorurl : 'http://u-dox.com/',
				infourl : 'http://github.com/udox/tinymce-soundcloud',
				version : "1.0"
			};
		}

	});

	// Register plugin
	tinymce.PluginManager.add('soundcloud', tinymce.plugins.soundcloudPlugin);
})();
