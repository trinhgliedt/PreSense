const db = firebase.database();
var fips = userZip = null;

$('#zipcode').on('change', function() { 
    db.ref("zipToFips").on("value", function(snapshot){
        userZip = $('input[name="zipcode"]').val();
        fips = snapshot.val()[userZip];
        $('input[name="fips"]').val(fips);
        console.log("fips: ", fips);
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });
});

