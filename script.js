
var gif_i = 0,
    line_i = 0,
    poem_i = 0;

var poems,
    poem_titles;

gif_names = [
    'burger',
    'vhs_sunset',
    'unset',
    //'circle_wave',
    'maneki',
    //'pentagram',
    //'cash',
    //'zags',
    'twirl',
    'lost',
    'play',
    'deer',
]

$('#content').click(function(){
    line = next_line()
    if (line.trim() == '')
        display_random_gif()
})

$('#info_button').click(function(){
    console.log($('#info').css('visibility'))
    if ($('#info').css('visibility') == 'hidden') {
        $('#info_button').html('-i')
        $('#info').css('visibility', 'visible')
    } else  {
        $('#info_button').html('+i')
        $('#info').css('visibility', 'hidden')
    }
})

//LOAD Poems
$.getJSON( "assets/poems.json", function( data ) {
    poems = data;
    poem_titles = Object.keys(poems);
    console.log(poem_titles);
 });

function next_line() {
    var line = poems[poem_titles[poem_i]][line_i]
    $('#content').html(line)
    line_i++
    if (line_i >= poems[poem_titles[poem_i]].length) {
        poem_i++
        line_i = 0
        if (poem_i >= poem_titles.length)
            poem_i = 0
    }
    return line
}

function display_random_gif() {
    //pick gif index such that a gif is never repeated
    if (gif_i >= gif_names.length-1) {
        gif_i = 0
        shuffle(gif_names)
    } else gif_i++
    
    gif_path = 'assets/' + gif_names[gif_i] + '.gif'
    $(document.body).css('background-image','url("'+gif_path+'")')
}

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function() 
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}