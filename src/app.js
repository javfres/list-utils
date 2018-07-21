

import jQuery from "jquery";
window.$ = jQuery;

import lodash from "lodash";
window._ = lodash;

import pad from './js/pad';


const textarea = $('#textarea');


function get_words(){
	const text = textarea.val().trim();
	const words = text.replace(/\s+/g, " ").split(" ");
	return words;
}
 

$('#a_random_names').click(() => {
	const names = `Eugene Zack	Fred	Steve	Roy	Larry Zack
	Ruby
	Mary	Melissa Judy	Theresa	Nicole	`;
	textarea.val(names);
});

$('#a_random_table').click(() => {
	const table = `Person	Rank	Value
	Eugene	2	233232
	Melissa	3	232323
	Zack	5	3
	Fred	1	-2323
	Nicole	B	not valid`;
	textarea.val(table);
});


//
// Words to the same line
//
$('#b_sameline').click(() => {

	const words = get_words();
	const result = words.join(" ");

	textarea.val(result);
});


//
// Words in a column
//
$('#b_incolumn').click(function(){

	const words = get_words();
	const result = words.join("\n");

	textarea.val(result);

});


//
// To sql format
//
$('#b_tosql').click(function(){

	let words = get_words();
	words = words.map(w => "'" + w + "'");
		
	const result = words.join(",");
	textarea.val(result);
});


//
// Parse sql format
//
$('#b_fromsql').click(function(){

	const text = textarea.val().trim();
	let words = text.split(",");

	words = words.map(function(w){
		return w.trim().replace(/^'(.+(?='$))'$/, '$1');
	});

	const result = words.join(" ");
	textarea.val(result);

});


//
// Sort
//
$('#b_sort').click(function(){

	let words = get_words();
	words.sort();

	const result = words.join("\n");
	textarea.val(result);

});

//
// Filter unique
//
$('#b_unique').click(function(){

	let words = get_words();

	let unique = [];
	$.each(words, function(i, el){
		if($.inArray(el, unique) === -1) unique.push(el);
	});

	const result = unique.join("\n");

	textarea.val(result);

});

//
// Format as a txt table
//
$('#b_tabs2table').click(function(){

	// Take the row
	const text = textarea.val().trim();
	let rows = text.split("\n");

	// Calculate the colsize
	let colsize = [];

	rows = rows.map(r => r.trim().split('\t'));

	rows.map(r => {
		r.map((c,i) => {
			const cl = c.length;
			colsize[i] = !colsize[i] ? cl : Math.max(colsize[i], cl);
		})
	})


	// Build the result
	let result = '';

	rows.map(row => {
		const trow = row.map((col, i) => {
			return pad(col, colsize[i]);
		});

		result += trow.join(' | ') + '\n';
	});

	textarea.val(result);

});




