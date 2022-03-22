"use strict";
var Gedicht;
(function (Gedicht) {
    let subject = ["Harry", "Hermine", "Ron", "Hagrid", "Dumbledore"];
    let preadikat = ["braut", "liebt", "studiert", "hasst", "zerstört"];
    let object = [" Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "Dementoren"];
    for (let index = 5; index >= 1; index--) {
        //console.log(index);
        //getVerse(subjekt, preadikat, objekt);
        //console.log(getVerse);
        let valueFinal = getVerse(subject, preadikat, object);
        console.log(valueFinal);
    }
    function getVerse(_subject, _preadikat, _object) {
        let value1 = Math.floor(Math.random() * _subject.length);
        let value2 = Math.floor(Math.random() * _preadikat.length);
        let value3 = Math.floor(Math.random() * _object.length);
        let value = _subject[value1] + "" + _preadikat[value3] + "" + _object[value2];
        _subject.splice(value1, 1);
        _object.splice(value2, 1);
        _preadikat.splice(value3, 1);
        return value;
    }
})(Gedicht || (Gedicht = {}));
//# sourceMappingURL=A1_RandomPoem.js.map