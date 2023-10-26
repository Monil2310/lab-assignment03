document.addEventListener('DOMContentLoaded', function () {
    const billTotalInput = document.getElementById('billTotal');
    const tipSlider = document.getElementById('tipSlider');
    const tipPercentageOutput = document.getElementById('tipPercentage');
    const tipAmountInput = document.getElementById('tipAmount');
    const totalWithTipInput = document.getElementById('totalWithTip');

    function calculateTip() {
        const billTotal = parseFloat(billTotalInput.value);
        const tipPercentage = parseInt(tipSlider.value);
        const tipAmount = billTotal * (tipPercentage / 100);
        const totalWithTip = billTotal + tipAmount;

        tipPercentageOutput.textContent = tipPercentage + '%';
        tipAmountInput.value = tipAmount.toFixed(2);
        totalWithTipInput.value = totalWithTip.toFixed(2);
    }

    billTotalInput.addEventListener('input', calculateTip);
    tipSlider.addEventListener('input', calculateTip);

    // Optionally, added these to test for mobile-specific interactions
    billTotalInput.addEventListener('change', calculateTip);
    tipSlider.addEventListener('change', calculateTip);

    
    calculateTip();
});
