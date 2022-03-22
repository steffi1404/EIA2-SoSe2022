namespace Gedicht {

    let subject: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Dumbledore"];

    let preadikat: string[] = ["braut", "liebt", "studiert", "hasst", "zerstört"];

    let object: string[] = [" Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "Dementoren"];

    for (let index: number = 5; index >= 1; index--) {
        //console.log(index);
        //getVerse(subjekt, preadikat, objekt);
        //console.log(getVerse);
        let valueFinal: string = getVerse(subject, preadikat, object);
        console.log(valueFinal);
    }

    function getVerse(_subject: string[], _preadikat: string[], _object: string[]): string {
        let value1: number = Math.floor(Math.random() * _subject.length);
        let value2: number = Math.floor(Math.random() * _preadikat.length);
        let value3: number = Math.floor(Math.random() * _object.length);

        let value: string = _subject[value1] + "" + _preadikat[value3] + "" + _object[value2];

        _subject.splice(value1, 1);
        _object.splice(value2, 1);
        _preadikat.splice(value3, 1);
        return value;
    }

}