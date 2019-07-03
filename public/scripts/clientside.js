function getAll() {
    console.log("Getting All...");   
}

function searchByItem() {
    console.log("Getting List of Items...");  
    
    var itemType = $("#item").val();
    console.log("Item Type: " + itemType);

    $.get("/items", {itemType: itemType}, function(data){
        console.log("Server query complete.");
        console.log(data);
        

    $(".bodyOptions").replaceWith(
        "<div></div>" +
        "<div></div>" +
        "<div><h2>Name</h2></div>" +
        "<div><h2>Quantity</h2></div>" +
        "<div><h2>Location</h2></div>" +
        "<div><h2>Notes</h2></div>" +
        "<div></div>" +
        "<div></div>");


        for(var i = 0; i < data.list.length; i++) {
            $(".bodyOptions").appendTo(
                "<div></div>" +
                "<div></div>" +
                "<div><h2>" + data.list.name[i] + "</h2></div>" +
                "<div><h2>" + data.list.qty[i] + "</h2></div>" +
                "<div><h2>" + data.list.location_id[i] + "</h2></div>" +
                "<div><h2>" + data.list.other_notes[i] + "</h2></div>" +
                "<div></div>" +
                "<div></div>");
        }
    });
}
