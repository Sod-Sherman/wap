$(function() {
    $("#send").click(updateGuests);
});

function updateGuests() {
    var first = $("#first").val();
    var last = $("#last").val();
    
    $.ajax("guest.ajax", {
		"type": "post",
		"data": {
        	"first": first,
                "last": last
		}
    }).done(displayGuests);
}

function displayGuests(data) {
   // var guestList = "You need to modify this method to display the updated guest list.  Remember to build the entire list before adding it to the DOM.";

    let list = $("===><ul>");
    for (let i = 0; i < data.length; i++) {
        list.append($('<li>', {'html': data[i].first + " " + data[i].last}, '</li>'));
    }
    list.append('</ul>');
    list.append('=>');
    $("#guestList").html(list);
    console.log(list);
    
}