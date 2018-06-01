

import jQuery from "jquery";
window.$ = jQuery;

import lodash from "lodash";
window._ = lodash;

import {pad} from './js/pad';



$('#b_sameline').click(function(){

	var textarea = $('#textarea');
	var text = textarea.val().trim();

	var words = text.replace(/\n/g, " ").replace(/ +/g, " ").split(" ");

	var result = words.join(" ");

	textarea.val(result);


});


$('#b_incolumn').click(function(){

	var textarea = $('#textarea');
	var text = textarea.val().trim();

	var words = text.replace(/\n/g, " ").replace(/ +/g, " ").split(" ");

	var result = words.join("\n");

	textarea.val(result);


});



$('#b_tosql').click(function(){

	var textarea = $('#textarea');
	var text = textarea.val().trim();

	var words = text.replace(/\n/g, " ").replace(/ +/g, " ").split(" ");

	words = words.map(function(w){
		return "'" + w + "'";
	});

	var result = words.join(",");

	textarea.val(result);

});


$('#b_fromsql').click(function(){

	var textarea = $('#textarea');
	var text = textarea.val().trim();

	var words = text.split(",");


	words = words.map(function(w){
		return w.trim().replace(/^'(.+(?='$))'$/, '$1');
	});


	var result = words.join(" ");

	textarea.val(result);

});



$('#b_sort').click(function(){

	var textarea = $('#textarea');
	var text = textarea.val().trim();

	var words = text.replace(/\n/g, " ").replace(/ +/g, " ").split(" ");

	words.sort();

	var result = words.join("\n");

	textarea.val(result);

});


$('#b_unique').click(function(){

	var textarea = $('#textarea');
	var text = textarea.val().trim();

	var words = text.replace(/\n/g, " ").replace(/ +/g, " ").split(" ");


	var unique = [];
	$.each(words, function(i, el){
		if($.inArray(el, unique) === -1) unique.push(el);
	});


	var result = unique.join("\n");

	textarea.val(result);

});


$('#b_tabs2table').click(function(){

	var textarea = $('#textarea');
	var text = textarea.val().trim();
	var rows = text.split("\n");

	var colsize = [];

	rows = rows.map(function(row){
		return row.split('\t');
	});

	rows.map(function(row){
		row.map(function(col, i){
			if(!colsize[i]) colsize[i] = 0;
			colsize[i] = Math.max(colsize[i], col.length);
		});
	});

	var text = '';

	rows.map(function(row){
		var trow = row.map(function(col, i){
			return pad(col, colsize[i]);
		});

		text += trow.join(' | ') + '\n';
	});

	textarea.val(text);

});




