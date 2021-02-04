class FiftyFifty extends LifeLine {
    constructor(isUsed) {
        super(isUsed);
        let _name = `pół na pół!`;
        this.getName = () => _name;
        this.setName = (_newName) => _name = _newName;

    }

    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }


    //funkcja zwracajaca liste 3ech niepoprawnych odpowiedzi
    algorithmFiftyFifty() {
        //dwie poniższe linijki służą do wyjęcia drugiej odpowiedzi, która tym razem będzie błędna
        const LIST_INCORRECT_ANSWERS = ["A", "B", "C", "D"];
        const index = LIST_INCORRECT_ANSWERS.indexOf(QUESTION.getAnswerTrue());
        //usun z listy element, ktory jest dobra odpowiedzia (litera wskazujaca na dobra odpowiedz)
        if (index > -1) {
            LIST_INCORRECT_ANSWERS.splice(index, 1);
        }

        const SHUFFLED_LIST_INCORRECT_ANSWERS = this.shuffle(LIST_INCORRECT_ANSWERS);

        return SHUFFLED_LIST_INCORRECT_ANSWERS;

    }
}