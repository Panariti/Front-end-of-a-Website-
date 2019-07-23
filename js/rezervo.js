var types = {
    "Banese": {
        "Nje Dhomeshe(250 euro)": [],
        "Dy Dhomeshe(500 euro)": []
    },
    "Shtepi": {
        "Nje kateshe(2340 euro)": [],
        "Dy kateshe(4680 euro)": []
    },
    "Ville": {
        "Per dy persona(50 euro nata)": [],
        "Per kater persona(75 euro nata)": []
    }
}

window.onload = function () {
    var subType = document.getElementById("subType");

    typeSelection.onchange = function () {
        subType.length = 1;
        if (this.selectedIndex < 1) return;
        for (var s in types[this.value]) {
            subType.options[subType.options.length] = new Option(s, s);
        }
    }
}
