/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */ <
script >

    function billingFunction() {

        var name = document.getElementById("shippingName").value;
        var zipCode = document.getElementById("shippingZip").value;
        var checkBox = document.getElementById("same");

        if (checkBox.checked == true) {

            document.getElementById("billingName").value = name;
            document.getElementById("billingName").disabled = true;

            document.getElementById("billingZip").value = zipCode;
            document.getElementById("billingZip").disabled = true;

        } else {

            document.getElementById("billingName").value = "";
            document.getElementById("billingName").disabled = false;

            document.getElementById("billingZip").value = "";
            document.getElementById("billingZip").disabled = false;

        }

    }

<
/script>