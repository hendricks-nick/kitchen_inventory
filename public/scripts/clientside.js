function getAll() {
    console.log("Getting All...");   
}

function backToHome() {
    $(".bodyOptions").replaceWith(
        '<div class="bodyOptions">' +
        '<div></div>' +
        '<div><input type="image" src="/img/all_btn.png" alt="all" id="all" onclick="getAll()"></div>' +
        '<div><input type="image" src="/img/meat_btn.png" alt="meat" id="item" value="meat" onclick="searchByItem()"></div>' +
        '<div><input type="image" src="/img/produce_btn.png" alt="produce" id="item" value="produce" onclick="searchByItem()"></div>' +
        '<div><input type="image" src="/img/dairy_btn.png" alt="dairy" id="item" value="dairy" onclick="searchByItem()"></div>' +
        '<div><input type="image" src="/img/grain_btn.png" alt="grain" id="item" value="grain" onclick="searchByItem()"></div>' +
        '<div><input type="image" src="/img/other_btn.png" alt="other" id="item" value="other" onclick="searchByItem()"></div>' +
        '<div></div>' +
        '</div>');
}

function searchByItem() {
    console.log("Getting List of Items...");  
    
    var itemType = $("#item").val();
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
