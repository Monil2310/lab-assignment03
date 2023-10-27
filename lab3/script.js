document.addEventListener('DOMContentLoaded', function () {
    const billInput = document.getElementById('billTotal');
    const tipSlider = document.getElementById('tipSlider');
    const tipPercentage = document.getElementById('tipPercentage');
    const tipAmountInput = document.getElementById('tipAmount');
    const totalWithTip = document.getElementById('totalWithTip');

    function calculateTip() {
        const billTotal = parseFloat(billInput.value);
        const tipPercentage = parseInt(tipSlider.value);
        const tipAmount = billTotal * (tipPercentage / 100);
        const totalWithTip = billTotal + tipAmount;

        tipPercentage.textContent = tipPercentage + '%';
        tipAmountInput.value = tipAmount.toFixed(2);
        totalWithTip.value = totalWithTip.toFixed(2);
    }

    billInput.addEventListener('input', calculateTip);
    tipSlider.addEventListener('input', calculateTip);

    // Optionally, added these to test for mobile-specific interactions
    billInput.addEventListener('change', calculateTip);
    tipSlider.addEventListener('change', calculateTip);

    
    calculateTip();
});
