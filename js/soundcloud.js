tinyMCEPopup.requireLangPack();

var SoundcloudDialog = {
	init : function() {
        // Should load up the YouTube content and fill the field, but you
        // can't select the video at this point.
	},

	insert : function() {
        var sciframe = document.forms[0].sciframe.value;
        var scid = document.forms[0].scid.value;
        var scdata = '';

        if (scid !== '') {
            scdata = '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F' + scid + '"></iframe>';
        } else {
            scdata = sciframe;
        }
        var html = '<div class="soundcloud soundcloud-track">' + scdata + '</div>';
		tinyMCEPopup.editor.execCommand('mceInsertContent', false, html);
		tinyMCEPopup.close();
	},

    close : function () {
        tinyMCEPopup.close();
    }
};

tinyMCEPopup.onInit.add(SoundcloudDialog.init, SoundcloudDialog);
