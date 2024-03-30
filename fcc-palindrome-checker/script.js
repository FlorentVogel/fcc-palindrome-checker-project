const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const palindromeChecker = (input) => {
    const inputStr = input
    if (input === '') {
        alert('Please input a value');
        return;
    }

    result.replaceChildren();

    const lowerCaseInput = input.replace(/[^a-z\d]/gi, '').toLowerCase();
    result.classList.remove('hidden');
    return result.innerHTML += `<p><span class="strong">${inputStr}</span> ${
        lowerCaseInput === [...lowerCaseInput].reverse().join('') ? '<span class="isTrue">is</span>' : '<span class="isFalse">is not</span>'
    } a palindrome.</p>`;
};

checkBtn.addEventListener("click", () => {
    palindromeChecker(textInput.value);
    textInput.value = ''
});

