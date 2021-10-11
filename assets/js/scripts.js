(() => { var r, e = { 81: () => { console.log("%cTheme designed and developed by Gabino Ramírez from https://themes.gabinoramirez.com/ for Cristian Montesinos at https://cristianmontesinos.es/", "color:red") }, 285: () => { } }, o = {}; function n(r) { var a = o[r]; if (void 0 !== a) return a.exports; var i = o[r] = { exports: {} }; return e[r](i, i.exports, n), i.exports } n.m = e, r = [], n.O = (e, o, a, i) => { if (!o) { var t = 1 / 0; for (f = 0; f < r.length; f++) { for (var [o, a, i] = r[f], s = !0, l = 0; l < o.length; l++)(!1 & i || t >= i) && Object.keys(n.O).every((r => n.O[r](o[l]))) ? o.splice(l--, 1) : (s = !1, i < t && (t = i)); if (s) { r.splice(f--, 1); var v = a(); void 0 !== v && (e = v) } } return e } i = i || 0; for (var f = r.length; f > 0 && r[f - 1][2] > i; f--)r[f] = r[f - 1]; r[f] = [o, a, i] }, n.o = (r, e) => Object.prototype.hasOwnProperty.call(r, e), (() => { var r = { 429: 0, 261: 0 }; n.O.j = e => 0 === r[e]; var e = (e, o) => { var a, i, [t, s, l] = o, v = 0; if (t.some((e => 0 !== r[e]))) { for (a in s) n.o(s, a) && (n.m[a] = s[a]); if (l) var f = l(n) } for (e && e(o); v < t.length; v++)i = t[v], n.o(r, i) && r[i] && r[i][0](), r[t[v]] = 0; return n.O(f) }, o = self.webpackChunkjwr_alea_tailwinds = self.webpackChunkjwr_alea_tailwinds || []; o.forEach(e.bind(null, 0)), o.push = e.bind(null, o.push.bind(o)) })(), n.O(void 0, [261], (() => n(81))); var a = n.O(void 0, [261], (() => n(285))); a = n.O(a) })();



function changeStep(showDiv, current) {
    if (checkRequired(current)) {
        var survey = document.getElementById('survey').childNodes;
        for (var i = 0; i < survey.length; i++) {
            if (survey[i].nodeName.toLowerCase() == 'div') {
                survey[i].style.display = 'none';
            }
        }
        document.getElementById(showDiv).style.display = "block";
    }
};

function checkRequired(divStep) {
    var dia = document.getElementById("dia");
    var mes = document.getElementById("mes");
    var anio = document.getElementById("anio");

    if (dia && mes && anio) {
        var valueDia = dia.options[dia.selectedIndex].value;
        var valueMes = mes.options[mes.selectedIndex].value;
        var valueAnio = anio.options[anio.selectedIndex].value;
        document.getElementById("nacimiento").value = valueDia + '/' + valueMes + '/' + valueAnio;
    }

    let allAreFilled = true;

    pAlert = document.createElement('p');
    pAlert.className = "border-4 border-red-500 text-red-500";
    pAlert.innerHTML = "Por favor, rellena este campo"

    document.getElementById(divStep).querySelectorAll("[required]").forEach(function (i) {
        if (!allAreFilled) return;
        if (!i.value) {
            allAreFilled = false;
            console.log(i);
            i.parentElement.appendChild(pAlert);
        }
        if (i.type === "radio") {
            let radioValueCheck = false;
            document.getElementById(divStep).querySelectorAll(`[name=${i.name}]`).forEach(function (r) {
                if (r.checked) { radioValueCheck = true; }
                else { r.parentElement.appendChild(pAlert);
                }
            })
            allAreFilled = radioValueCheck;
        }
    })
    return allAreFilled;
}



/*function show(val) {
    if (val == 'Company') {
        document.getElementById("show").style.display = "block";
        setRequired(true);
    } else {
        document.getElementById("show").style.display = "none";
        setRequired(false);
    }
}

function setRequired(val){
    input = document.getElementById("show").getElementsByTagName('input');
    for(i = 0; i < input.length; i++){
        input[i].required = val;
    }
}*/