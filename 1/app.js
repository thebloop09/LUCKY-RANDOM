document.addEventListener('DOMContentLoaded', function() {
    const btnRandom = document.getElementById('btn-random');
    const resultText = document.getElementById('result-text');
    const minInput = document.getElementById('min');
    const maxInput = document.getElementById('max');
    const errorMsg = document.getElementById('error-message');

    btnRandom.onclick = function() {
        let min = parseInt(minInput.value);
        let max = parseInt(maxInput.value);

        if (isNaN(min) || isNaN(max)) {
            errorMsg.innerText = "❌ Please enter valid numbers";
            resultText.innerText = "--";
            return;
        }

        if (min >= max) {
            errorMsg.innerText = "❌ Min must be less than Max";
            resultText.innerText = "--";
            return;
        }

        errorMsg.innerText = "";
        
        // Hiệu ứng số nhảy
        let count = 0;
        let totalTicks = 20;
        btnRandom.disabled = true;

        let timer = setInterval(() => {
            let temp = Math.floor(Math.random() * (max - min + 1)) + min;
            resultText.innerText = temp;
            resultText.style.color = "#ff7a18";
            
            count++;
            if (count >= totalTicks) {
                clearInterval(timer);
                let final = Math.floor(Math.random() * (max - min + 1)) + min;
                resultText.innerText = final;
                resultText.style.color = "#ffffff";
                btnRandom.disabled = false;
            }
        }, 50);
    };
});