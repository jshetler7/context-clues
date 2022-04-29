$(function() {
    
    for(var i = 1; i <= 100; i++) {
        var h3 = $(`<h3 id="${i}" class="h3 my-3 d-flex justify-content-center align-items-center bg-white shadow-sm"> 
                    Accusation ${i}</h3>`);
        
        $('#header-location').append(h3);
        
        h3.click(function(evt) {
            var friend = ['Austin', 'Kaleb', 'Isaac', 'Brandon', 'Jackson'];

            var location = ['kitchen', 'dining room', 'cellar', 'attic', 'stairwell', 'front entryway', 'garage', 
            'bathroom', 'bedroom', 'hallway'];
    
            var weapon = ['screwdriver', 'coffee cup', 'G2 Pilot pen', '#2 pencil', 'standardized test', 
            'hydroflask', 'comically large inflatable hammer', 'piano that fell from out of nowhere', 
            'sarcastic quip', 'overly-long and dull conversation', 'microphone', 'knife', 'disgusting IPA', 
            'Christmas-Vacation-level dry turkey', 'social anxiety', 'crippling depression', 'small talk',
             'pants that cause bloating', 'thermostat that was set way too high', 'gun'];
            
            Swal.fire(`Accusation ${this.id}: I accuse ${friend[this.id % friend.length]}, 
            with the ${weapon[this.id % weapon.length]} in the ${location[this.id % location.length]}!`);
            })
            
        }
});