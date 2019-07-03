function getAll() {
    console.log("Getting All...");   
}

function backToHome() {
    $.get("/");
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
        '<div></div>' +
        '<div><input type="image" src="/img/back_btn.png" alt="back" id="back" value="back" onclick="backToHome()"></div>' +
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
