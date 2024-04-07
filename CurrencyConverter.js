function convert() 
{
      const CAD_TO_USD_RATE = 0.75;
      const USD_TO_CAD_RATE = 1.33;

      var selectElement = document.getElementById("Value1");
      var selectedValue = selectElement.value;

      if (selectedValue == 'CAD1') {
        const cadAmount = parseFloat(document.getElementById('amount').value);
        if (!isNaN(cadAmount)) {
            const usdResult = (cadAmount * CAD_TO_USD_RATE).toFixed(3);
            document.getElementById('result').value = usdResult + "USD";
        } else {
          alert('Please enter a valid CAD amount');
        }
      }

      else {
        const usdAmount = parseFloat(document.getElementById('amount').value);
        if (!isNaN(usdAmount)) {
            const cadResult = (usdAmount * USD_TO_CAD_RATE).toFixed(3);
            document.getElementById('result').value = cadResult + "CAD";
        } else {
          alert('Please enter a valid USD amount');
        }
      }

}