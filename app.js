
var state = {
items :[]
};

function addItem(state,item)
{
	
	state.items.push(item);
	//console.log('as');
	//console.log(state.items);
}

$("#js-shopping-list-form").submit( function (event)
{
	event.preventDefault();
	addItem(state,$('#shopping-list-entry').val());
	render(state,$('.shopping-list'));
	//console.log(state);
}
);
var itemE = ('<li>'+
       ' <span class="shopping-item"></span>'+
       ' <div class="shopping-item-controls">'+
         ' <button class="shopping-item-toggle">'+
           ' <span class="button-label">check</span>'+
         ' </button>'+
         ' <button class="shopping-item-delete">'+
           ' <span class="button-label">delete</span>'+
         ' </button>'+
        '</div>');
		
function render(state,element)
{
	
  var a = $(itemE);
a.find('.shopping-item').text(state.items[state.items.length -1]);
	element.append(a);
}

$('.container').on('click','.shopping-item-toggle',(function (event)
{
	var a = $(this).closest('li');
	var b = a.find('.shopping-item');	
	b.toggleClass('shopping-item__checked');
}));

$('.container').on('click','.shopping-item-delete',(function (event)
{
	removeItem(state,$(this).closest('.shopping-item').val());
	(this).closest('li').remove();
}));

function removeItem(state,item)
{
	var post = state.items.indexOf(item);
	state.items.splice(post,1);

	//console.log(state.items);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////}