const questions = [
    {
        question: "¿En qué ciudad de España nació Juan Agramunt Riera?",
        options: ["Madrid", "Castellón", "Valencia", "Sevilla"],
        answer: 1
    },
    {
        question: "¿En qué año nació Juan Agramunt Riera?",
        options: ["1912", "1967", "1890", "1907"],
        answer: 3
    },
    {
        question: "¿En qué arte se destacó mientras se encontraba en las Escuelas Pías?",
        options: ["Pintura", "Escultura", "Música", "Literatura"],
        answer: 2
    },
    {
        question:"¿Qúe hizo para ayudar a sus compañeros escolapios cuando fueron aprisionados",
        options: ["Les llevó comida", "Les ayudó a escapar", "Luchó f;isicamente contra los guardias", "Les brindaba confianza y la Confesión"],
        answer: 3
    },
    {
        question:"¿Qué ejemplo nos deja el Beato Juan Agramunt Riera?",
        options: ["El ejemplo de la perseverancia y el amor al prójimo", "El ejemplo de la valentía y la fe", "El ejemplo de la paciencia y la perseverancia","El ejemplo de la humildad y la obediencia"],
        answer: 0
    }

];
let currentQuestion = 0;
let score = 0;
const questionEl=document.getElementById("question");
const optionsEl=document.getElementById("options");
const nextBtn=document.getElementById("next-btn");
const resultEl=document.getElementById("result");
function loadQuestion() {
    resetState();
    let q=questions[currentQuestion];
    questionEl.innerText=q.question;

    q.options.forEach((option,index) => {
        const btn = document.createElement("button");
        btn.innerText=option;
        btn.addEventListener("click", () =>selectAnswer(index));
        optionsEl.appendChild(btn);
    });
}
function resetState() {
    nextBtn.style.display="none";
    optionsEl.innerHTML="";
}
function selectAnswer(selectedIndex) {
    let q= questions[currentQuestion];
    const buttons= optionsEl.getElementsByTagName("button");
    if(selectedIndex === q.answer) {
        buttons[selectedIndex].classList.add("correct");
        score++;
    } else {
        buttons[selectedIndex].classList.add("incorrect");
        if (buttons[q.answer]) {
            buttons[q.answer].classList.add("correct");
        }
    }
    for(let btn of buttons) {
        btn.disabled=true;
    }
    nextBtn.style.display="block";
}

nextBtn.addEventListener("click", ()=>{ 
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        questionEl.style.display = "none";
        optionsEl.style.display = "none";
        nextBtn.style.display = "none";
        resultEl.innerText = `Has obtenido ${score} de ${questions.length} preguntas correctas.`;
    }
});
  loadQuestion();
