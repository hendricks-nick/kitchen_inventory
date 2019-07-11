function getAll() {
    console.log("Getting All...");   
}

function backToHome() {
    $(".bodyOptions").replaceWith(
        '<div class="bodyOptions">' +
        '<div></div>' +
        '<div><input type="image" src="/img/all_btn.png" alt="all" id="all" onclick="getAll()"></div>' +
        '<div><input type="image" src="/img/meat_btn.png" alt="meat" id="item" onclick="searchByItem(\'meat\')"></div>' +
        '<div><input type="image" src="/img/produce_btn.png" alt="produce" id="item" onclick="searchByItem(\'produce\')"></div>' +
        '<div><input type="image" src="/img/dairy_btn.png" alt="dairy" id="item" onclick="searchByItem(\'dairy\')"></div>' +
        '<div><input type="image" src="/img/grain_btn.png" alt="grain" id="item" onclick="searchByItem(\'grain\')"></div>' +
        '<div><input type="image" src="/img/other_btn.png" alt="other" id="item" onclick="searchByItem(\'other\')"></div>' +
        '<div></div>' +
        '</div>');
}

function addItem () {
    $(".bodyOptions").replaceWith(
        '<div class="itemForm">' +
        '<div></div>' +
        '<div></div>' +
        '<div>' +
        '<form action="/addItem" method="post">' +
            '<h3>Item</h3>' +
            '<input type="text" id="name" name="name" placeholder="Item Name">' +
            '<h3>Item Type</h3>' +
            '<select id="type" name="type" placeholder"Select an item type">' +
                '<option value="meat">Meat</option>' +
                '<option value="produce">Produce</option>' +
                '<option value="dairy">Dairy</option>' +
                '<option value="grain">Grain</option>' +
                '<option value="other">Other</option>' +
            '</select>' +
            '<h3>Item Quantity</h3>' +
            '<input type="text" id="qty" name="qty" placeholder="Quantity (2 lbs, 3 dozen, etc...)">' +
            '<h3>Notes</h3>' +
            '<textarea name="notes" placeholder="Add notes here, such as expiration..." rows="10" cols="auto"></textarea>' +
            '<h3>Location</h3>' +
            '<select id="location" name="location" placeholder="Select the item location..">' +
                '<option value="1">Pantry</option>' +
                '<option value="2">Kitchen Fridge</option>' +
                '<option value="3">Kitchen Freezer</option>' +
                '<option value="4">Garage Fridge</option>' +
                '<option value="5">Garage Freezer</option>' +
                '<option value="6">Food Storage</option>' +
            '</select>' +
            '<input type="submit" value="Add Item">' +
        '</form>' +
        '</div>' +
        '<div></div>' +
        '<div></div>' +
        '</div>');

}
function searchByItem(item) {
    console.log("Getting List of Items...");  
    
    var itemType = item;
    console.log("Item Type: " + itemType);

    $.get("/items", {itemType: itemType}, function(data){
        console.log("Server query complete.");
        console.log(data);

    $(".bodyOptions").replaceWith(
        '<div class="bodyOptions">' +
        '<div></div>' +
        '<div></div>' +
        '<div><h2>Name</h2></div>' +
        '<div><h2>Quantity</h2></div>' +
        '<div><h2>Location</h2></div>' +
        '<div><h2>Notes</h2></div>' +
        '<div><input type="image" src="/img/back_btn.png" alt="back" onclick="backToHome()"></div>' +
        '<div></div>' +
        '</div>');


       for(var i = 0; i < data.list.length; i++) {
            $(".bodyOptions").append(
                "<div></div>" +
                "<div></div>" +
                "<div><h2>" + data.list[i].name + "</h2></div>" +
                "<div><h2>" + data.list[i].qty + "</h2></div>" +
                "<div><h2>" + data.list[i].location_id + "</h2></div>" +
                "<div><h2>" + data.list[i].other_notes + "</h2></div>" +
                "<div></div>" +
                "<div></div>");
        }
    });
}
