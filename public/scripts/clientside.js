function getAll() {
    console.log("Getting All...");   
}

function searchByItem() {
    console.log("Getting List of Items...");  
    
    var itemType = $("#item").val();
    console.log("Item Type: " + itemType);

    $.get("/items", {itemType: itemType}, function(data){
        console.log("Server query complete.");
        console.log("Data retrieved: " + data);


    });
}
