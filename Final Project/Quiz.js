
        const quizData = [
            { question: "What is the primary objective of SDG 4?", options: ["Ensure inclusive and equitable quality education", "Improve global economic growth", "Reduce unemployment rates", "Provide universal healthcare"], answer: 0 },
            { question: "Which global organization leads efforts for SDG 4?", options: ["World Health Organization (WHO)", "United Nations Educational, Scientific and Cultural Organization (UNESCO)", "International Monetary Fund (IMF)", "World Trade Organization (WTO)"], answer: 1 },
            { question: "What is one of the key focuses of SDG 4?", options: ["Free education for all ages", "Improving infrastructure", "Eliminating trade barriers", "Providing free housing"], answer: 0 },
            { question: "By what year is SDG 4 expected to achieve its goals?", options: ["2025", "2030", "2045", "2050"], answer: 1 },
            { question: "Which of the following is a major target of SDG 4?", options: ["Universal access to quality primary and secondary education", "Providing free internet worldwide", "Building more universities", "Expanding public transportation"], answer: 0 }
        ];
        let currentQuestion = 0, score = 0;

        function loadQuestion() {
            document.getElementById("result").classList.add("hidden");
            if (currentQuestion === 0) {
                document.getElementById("nextButton").style.marginLeft = "auto";
            }
            document.getElementById("nextButton").classList.remove("hidden");
            document.getElementById("prevButton").classList.add("hidden");
            document.getElementById("submitButton").classList.add("hidden");
            let q = quizData[currentQuestion];
            document.getElementById("question").innerText = q.question;
            let optionsDiv = document.getElementById("options");
            optionsDiv.innerHTML = "";
            q.options.forEach((opt, index) => {
                let btn = document.createElement("button");
                btn.innerText = opt;
                btn.className = "option";
                btn.onclick = () => checkAnswer(index, btn);
                optionsDiv.appendChild(btn);
            });
            if (currentQuestion > 0) document.getElementById("prevButton").classList.remove("hidden");
            if (currentQuestion < quizData.length - 1) {
                document.getElementById("nextButton").classList.remove("hidden");
            } else {
                document.getElementById("nextButton").classList.add("hidden");
                document.getElementById("submitButton").classList.remove("hidden");
            }
            if (currentQuestion === quizData.length - 1) document.getElementById("submitButton").classList.remove("hidden");
        }

        function checkAnswer(index, btn) {
            let correct = quizData[currentQuestion].answer;
            document.querySelectorAll(".option").forEach((opt, idx) => {
                opt.disabled = true;
                if (idx === correct) {
                    opt.classList.add("correct");
                } else if (idx === index) {
                    opt.classList.add("incorrect");
                }
            });
            if (index === correct) score++;
        }

        document.getElementById("nextButton").onclick = () => {
            currentQuestion++;
            loadQuestion();
        };
        
        document.getElementById("prevButton").onclick = () => {
            currentQuestion--;
            loadQuestion();
        };
        
        document.getElementById("submitButton").onclick = () => {
            document.querySelector(".buttons").style.display = "none";
            document.getElementById("question").innerText = "Quiz Completed!";
            document.getElementById("options").innerHTML = "";
            document.getElementById("result").innerText = `Your score: ${score} / ${quizData.length}`;
            document.getElementById("result").classList.remove("hidden");
            document.querySelector(".buttons").classList.add("hidden");

        };

        loadQuestion();
    
