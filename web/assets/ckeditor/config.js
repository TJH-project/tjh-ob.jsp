/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.filebrowserBrowseUrl = './kcfinder/browse.php?opener=ckeditor&type=files';
	config.filebrowserImageBrowseUrl = './assets/ckeditor/kcfinder/browse.jsp';
	config.filebrowserFlashBrowseUrl = './kcfinder/browse.php?opener=ckeditor&type=flash';
	config.filebrowserUploadUrl = './kcfinder/uploadImage';
	config.filebrowserImageUploadUrl = 'upload';
	config.filebrowserFlashUploadUrl = './kcfinder/upload.php?opener=ckeditor&type=flash';
};
