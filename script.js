const phrases = {
    Evolution: [
        "You are evolving more than you realize.",
        "Small steps are still progress.",
        "Every day is a new chance to grow."
    ],

    Happiness: [
        "Happiness starts within you.",
        "Smile, you deserve this moment.",
        "Today is a great day to be happy."
    ],

    Focus: [
        "Focus on the goal, everything else is distraction.",
        "One step at a time.",
        "Discipline today, success tomorrow."
    ],

    Peace: [
        "Take a deep breath, everything will fall into place.",
        "Peace begins when you slow down.",
        "Not everything needs to be solved right now."
    ]
};

function generatePhrase(type) {
    const list = phrases[type];
    const phrase = list[Math.floor(Math.random() * list.length)];

    document.getElementById("frase").innerText = phrase;
}