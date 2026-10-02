/* ========================================= */
/* GAME DATA */
/* ========================================= */


/* ---------- RAPID FIRE ---------- */

const rapidQuestions = [

    {
        question: "Cuddles 🫂 or Kisses 💋?",
        choices: [
            "Cuddles 🫂",
            "Kisses 💋"
        ]
    },

    {
        question: "Good morning texts ☀️ or late-night calls 🌙?",
        choices: [
            "Good morning texts ☀️",
            "Late-night calls 🌙"
        ]
    },

    {
        question: "Movie date 🎬 or long drive 🚗?",
        choices: [
            "Movie date 🎬",
            "Long drive 🚗"
        ]
    },

    {
        question: "Holding hands 🤝 or forehead kisses 🥹?",
        choices: [
            "Holding hands 🤝",
            "Forehead kisses 🥹"
        ]
    },

    {
        question: "Random 'I miss you' texts 💌 or surprise calls 📞?",
        choices: [
            "I miss you texts 💌",
            "Surprise calls 📞"
        ]
    },

    {
        question: "Stay in and cuddle 🛋️ or go out together 🌃?",
        choices: [
            "Stay in and cuddle 🛋️",
            "Go out together 🌃"
        ]
    },

    {
        question: "Sharing food 🍕 or stealing each other's food 😭?",
        choices: [
            "Sharing food 🍕",
            "Stealing food 😭"
        ]
    },

    {
        question: "Sunset date 🌅 or late-night date 🌙?",
        choices: [
            "Sunset date 🌅",
            "Late-night date 🌙"
        ]
    }

];


let rapidIndex = 0;



/* ---------- REASONS ---------- */

const reasons = [

    "I love the way you make me feel safe enough to be completely myself. ",

    "I love how you can make an ordinary conversation feel like my favourite part of the day. ",

    "I love the little things you do that you probably don't even realize I notice. ",

    "I love how talking to you can instantly make my mood better and make me forget anything that was not goodd. 🌷",

    "I love that somehow, even after talking to you for hours and even staying for the whole day with you, I still want more time with you. ",

    "I love the person I get to be when I'm with you. ",

    "I love your little habits, your expressions, and all those tiny things that make you YOU. ",

    "I love having someone who feels like both my favourite person and my most safest place. 🌙",

    "And most importantly... I love you simply because you're you and you are my baby. "

];


let reasonsOpened = 0;



/* ---------- HOW WELL DO YOU KNOW ME? ---------- */

const quizQuestions = [

    {
        question:
            "What's my favourite way of feeling loved?",

        options: [

            "Big romantic surprises 🎁",

            "Being seen + knowing you made an effort 🥹",

            "Receiving expensive gifts 💎",

            "Constant texting throughout the day 💬"

        ],

        answer: 1
    },


    {
        question:
            "What can fix my mood surprisingly fast?",

        options: [

            "Food 🍜",

            "You ❤️",

            "A good song 🎧",

            "Honestly... all but one option is the best"

        ],

        answer: 3
    },


    {
        question:
            "What could I probably do for hours without getting bored?",

        options: [

            "Watch random movies 🎬",

            "Yap about absolutely everything + listen to songs 🎧",

            "Scroll social media 📱",

            "Sleep 😭"

        ],

        answer: 1
    },


    {
        question:
            "If I walked into a shop and saw a pair of earrings I loved...", 

        options: [

            "I'd admire them and leave 😌",

            "I'd buy them only if I needed them",

            "I'd probably add them to my collection like Pokémon 😭",

            "I'd send you a picture and forget about them"

        ],

        answer: 2
    },


    {
        question:
            "What's one thing I'm basically incapable of having 'enough' of?",

        options: [

            "Shoes 👟",

            "Earrings + clothes 👗✨",

            "Books 📚",

            "Bags 👜"

        ],

        answer: 1
    },


    {
        question:
            "Which activity feels the most like me?",

        options: [

            "Dancing 💃",

            "Painting 🎨",

            "Running 🏃‍♀️",

            "Cooking 👩‍🍳"

        ],

        answer: 0
    },


    {
        question:
            "You have one mission: make me feel loved. What are you doing?",

        options: [

            "Buy me something expensive 💎",

            "Give me a huge romantic speech ❤️",

            "Notice the little things, show up, and actually make an effort 🥹",

            "Give me some space"

        ],

        answer: 2
    },


    {
        question:
            "If I had to choose my perfect little combination for a bad day...",

        options: [

            "Shopping + coffee + sleep",

            "Food + you + songs + dancing",

            "Movies + shopping + makeup",

            "Dancing + travelling + food"

        ],

        answer: 1
    }

];


let quizIndex = 0;



/* ========================================= */
/* SCREEN CONTROL */
/* ========================================= */

function showScreen(screenId) {

    const screens =
        document.querySelectorAll(".screen");


    screens.forEach(screen => {

        screen.classList.remove("active");

    });


    document
        .getElementById(screenId)
        .classList.add("active");

}



/* ========================================= */
/* START GAME */
/* ========================================= */

function startGame() {

    showScreen("rapid-fire");

    loadRapidQuestion();

}



/* ========================================= */
/* RAPID FIRE */
/* ========================================= */

function loadRapidQuestion() {

    const question =
        rapidQuestions[rapidIndex];


    document
        .getElementById("question")
        .textContent =
        question.question;


    document
        .getElementById("choice1")
        .textContent =
        question.choices[0];


    document
        .getElementById("choice2")
        .textContent =
        question.choices[1];


    document
        .getElementById("rapid-feedback")
        .textContent = "";


    const progress =
        (rapidIndex / rapidQuestions.length) * 100;


    document
        .getElementById("rapid-progress")
        .style.width =
        progress + "%";

}



function chooseRapid(choice) {

    const feedback =
        document.getElementById(
            "rapid-feedback"
        );


    const cuteResponses = [

        "Hmm... interesting choice. 👀",

        "Noted. Very important information. 😌",

        "I knew you'd choose that. ❤️",

        "Okayyy, I'll remember that. 🥹",

        "Good answer. You may continue. 😌"

    ];


    feedback.textContent =
        cuteResponses[
            Math.floor(
                Math.random() *
                cuteResponses.length
            )
        ];


    rapidIndex++;


    setTimeout(() => {

        if (
            rapidIndex <
            rapidQuestions.length
        ) {

            loadRapidQuestion();

        }

        else {

            showScreen("reasons");

        }

    }, 800);

}



/* ========================================= */
/* REASONS WHY I LOVE YOU */
/* ========================================= */

function showReason(index) {

    const display =
        document.getElementById(
            "reason-display"
        );


    display.textContent =
        reasons[index];


    const hearts =
        document.querySelectorAll(
            ".love-heart"
        );


    hearts[index]
        .classList
        .add("used");


    reasonsOpened++;


    if (
        reasonsOpened >=
        reasons.length
    ) {

        document
            .getElementById(
                "reasons-next"
            )
            .classList
            .remove("hidden");

    }

}



/* ========================================= */
/* QUIZ */
/* ========================================= */

function goToQuiz() {

    showScreen("quiz");

    loadQuizQuestion();

}



function loadQuizQuestion() {

    const current =
        quizQuestions[quizIndex];


    document
        .getElementById(
            "quiz-question"
        )
        .textContent =
        current.question;


    const optionsContainer =
        document.getElementById(
            "quiz-options"
        );


    optionsContainer.innerHTML = "";


    current.options.forEach(
        (option, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "quiz-option";


            button.textContent =
                option;


            button.onclick =
                () => checkAnswer(index);


            optionsContainer
                .appendChild(button);

        }
    );


    const progress =
        (quizIndex /
        quizQuestions.length) *
        100;


    document
        .getElementById(
            "quiz-progress"
        )
        .style.width =
        progress + "%";


    document
        .getElementById(
            "quiz-feedback"
        )
        .textContent = "";

}



/* ========================================= */
/* CHECK QUIZ ANSWER */
/* ========================================= */

function checkAnswer(
    selectedIndex
) {

    const current =
        quizQuestions[quizIndex];


    const buttons =
        document.querySelectorAll(
            ".quiz-option"
        );


    const feedback =
        document.getElementById(
            "quiz-feedback"
        );


    buttons.forEach(button => {

        button.disabled = true;

    });


    if (
        selectedIndex ===
        current.answer
    ) {

        buttons[selectedIndex]
            .classList
            .add("correct");


        feedback.textContent =
            "Correct. You actually know me. 🥹❤️";

    }

    else {

        buttons[selectedIndex]
            .classList
            .add("wrong");


        buttons[current.answer]
            .classList
            .add("correct");


        feedback.textContent =
            "I'll forgive you... this time. 😭❤️";

    }


    quizIndex++;


    setTimeout(() => {

        if (
            quizIndex <
            quizQuestions.length
        ) {

            loadQuizQuestion();

        }

        else {

            showTreasureHunt();

        }

    }, 1300);

}



/* ========================================= */
/* FINAL TREASURE HUNT */
/* ========================================= */

function showTreasureHunt() {

    showScreen(
        "treasure-screen"
    );

}



/* ========================================= */
/* TREASURE UNLOCK */
/* ========================================= */

function unlockTreasure() {

    showScreen(
        "treasure-unlocked"
    );

}