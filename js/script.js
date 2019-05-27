// $('#id');
// $('.class');
// $('div');

// .addClass()

// .append()
$('#demoList').append('<li>This appends to the end</li>');

// .attr()
$('#toyStoryImage').attr('src', 'images/ironMan.jpg');
// console.log($('#toyStoryImage').attr('id'))

// .blur()
// blur is an event
$('#inputField').blur(function(){
    console.log('this is using blur');
});

// .change()
// change is an event
$('#inputField').change(function(){
    console.log('this has changed');
})

// .children()
// console.log($('#demoList').children('.odd'))

// .click()

// .clone
// var clonedImage = $('#toyStoryImage').clone();
// $('#toyStoryImage').attr('src', 'images/toyStory.jpg');
// $('#pageContainer').append(clonedImage);


// .closest()
// Look back at it

// .css

// .data
// console.log($('#pageContainer').data('name'));

// .dblclick

// .delay();
// $('#demoList').addClass('red').delay(2);

// .each
// var oddChildren = $('#demoList').children('.odd');
// console.log(oddChildren);
// oddChildren.each(function(index){
//     console.log(index);
//     $(this).text('this is an odd child');
// })

// .empty();
// $('#pageContainer').empty();

// event
$('#clickBtn').click(function(){
    console.log(event);
})

// event.preventDefault();
$('#submitBtn').click(function(){
    // event.preventDefault();
});

// .fadeIn()
// .fadeOut(2000)
// .fadeToggle()

// .find()
// .first()
console.log($('#demoList').find('.odd'));
console.log($('#demoList').find('.odd.findMe'));
console.log($('#demoList').find('.odd').first());

// .focus()
$('#inputField').focus(function(){
    console.log('this is using focus');
});

// .hasClass()
console.log($('#pageContainer').hasClass('container'));

// .height();
console.log($('#toyStoryImage').height());
// $('#toyStoryImage').height(2000)

// .hide()

// .hover
$('#inputField').hover(function(){
    console.log("hover");
})

// .html
// $('#demoList').html('<li>this has overiden it</li>');

// .innerHeight
console.log($('#toyStoryImage').innerHeight());
$('#toyStoryImage').innerHeight(200);
// .innerWidth
console.log($('#toyStoryImage').innerWidth());

// .keyup
// .keydown
// .keypress

$('#inputField').keyup(function(){
    console.log(event);
});

// .length();

// .mousedown()
// .mouseenter()
// .mouseleave()
// .mousemove()
// .mouseout()
// .mouseover()
// .mouseup();

// .parent();
// console.log($('#inputField').parent().find('#demoList').children('.odd').first());
console.log($('.odd').first().parent().parent());
// .parents();
console.log($('.odd').first().parents('#pageContainer').find('input'));

// .prepend()
$('#demoList').prepend('<li>This prepends to the top</li>');

// .ready
$(document).ready(function(){
    console.log("document is ready");
});

// .removeClass()

// .show()

// .submit();

$('#myForm').submit(function(){
    event.preventDefault();
    console.log('form has been submitted');
})

// .text();
$('.odd').first().text('<li>hello</li> ');

// .toggle();

// .toggleClass()

// .val()
$('#myForm').submit(function(){
    event.preventDefault();
    var value = $('#inputField').val();
    console.log('The value is ' + value);
})

// .width
