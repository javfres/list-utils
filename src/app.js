

import jQuery from "jquery";
window.$ = jQuery;

import lodash from "lodash";
window._ = lodash;




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





var STR_PAD_LEFT = 1;
var STR_PAD_RIGHT = 2;
var STR_PAD_BOTH = 3;

function pad(str, len, pad, dir) {

    if (typeof(len) == "undefined") { var len = 0; }
    if (typeof(pad) == "undefined") { var pad = ' '; }
    if (typeof(dir) == "undefined") { var dir = STR_PAD_RIGHT; }

    if (len + 1 >= str.length) {

        switch (dir){

            case STR_PAD_LEFT:
                str = Array(len + 1 - str.length).join(pad) + str;
            break;

            case STR_PAD_BOTH:
                var right = Math.ceil((padlen = len - str.length) / 2);
                var left = padlen - right;
                str = Array(left+1).join(pad) + str + Array(right+1).join(pad);
            break;

            default:
                str = str + Array(len + 1 - str.length).join(pad);
            break;

        } // switch

    }

    return str;

}
