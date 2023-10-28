document.addEventListener('DOMContentLoaded', function () {
    const TotalBillInput = document.getElementById('billTotal');
    const tipSlider = document.getElementById('tipSlider');
    const tipPercentageOutput = document.getElementById('tipPercentage');
    const TipAmountInput = document.getElementById('tipAmount');
    const TotalWithTip = document.getElementById('totalWithTip');

    function calculateTip() {
        console.log("Calculating tip...");
        const billTotal = parseFloat(TotalBillInput.value);
        const tipPercentage = parseInt(tipSlider.value);
        const tipAmount = billTotal * (tipPercentage / 100);
        const totalWithTip = billTotal + tipAmount;

        tipPercentageOutput.textContent = tipPercentage + '%';
        TipAmountInput.value = tipAmount.toFixed(2);
        TotalWithTip.value = totalWithTip.toFixed(2);
    }

    TotalBillInput.addEventListener('input', calculateTip);
    tipSlider.addEventListener('input', calculateTip);

    // Optionally, added these to test for mobile-specific interactions
    TotalBillInput.addEventListener('change', calculateTip);
    tipSlider.addEventListener('change', calculateTip);

    
    calculateTip();
});
