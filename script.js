function checkAnswer(answer) {
    let correctAnswer = "bleu";
    let resultText = (answer === correctAnswer) ? "Bravo, 彩衣 ! 🎉" : "Hmm... essaie encore ! 😘";
    document.getElementById("result").innerText = resultText;
}
