import React from 'react'
import { useState } from 'react'

function Bostadsratt() {
    const [state, setState] = React.useState({
        inKopsPris: 1,
        kontantInsats: 1,
        ranta: 1,
        avgift: 1,
        ovrigt: 1,
    });



    function updateState() {



        setState({
            inKopsPris: document.getElementById("inKopsPrisValue").value,
            kontantInsats: document.getElementById("kontantInsatsValue").value,
            ranta: document.getElementById("rantaValue").value,
            avgift: document.getElementById("avgiftValue").value,
            ovrigt: document.getElementById("ovrigtValue").value
        })


    }

    function calculating(){
        let lanPengar = parseInt(state.inKopsPris - state.kontantInsats)
        let ranta = lanPengar*((parseInt(state.ranta)/100)/12)
        let amortering = lanPengar/(30*12)
        let kostnadPerManad = parseInt(amortering+ranta)
        let kostnad = parseInt(kostnadPerManad + parseInt(state.avgift) + parseInt(state.ovrigt));

        return kostnad;
    }

    function triangle(){
        if (state.kontantInsats < state.inKopsPris*0.15) {
            let triangle = <p>Farligt de e under 15%!</p>
            return triangle;
        }
    }

    return (
        <div>
            <h1>Bostadsrätt</h1>
            <p>Inköpspris {state.inKopsPris.toString()} kr</p>
            <input id="inKopsPrisValue" value={state.inKopsPris} type="range" min="0" max="20000000" step="25000" onChange={() => updateState()}></input>
            <p>Kontantinsats {state.kontantInsats.toString()} kr</p>
            <input id="kontantInsatsValue" value={state.kontantInsats} type="range" min="0" max={state.inKopsPris} step="10000" onChange={() => updateState()}></input>
            <p>Ränta {state.ranta.toString()} %</p>
            <input id="rantaValue" value={state.ranta} type="range" min="0" max="15" step="0.1" onChange={() => updateState()}></input>
            <p>Avgift {state.avgift.toString()} kr</p>
            <input id="avgiftValue" value={state.avgift} type="range" min="0" max="10000" step="100" onChange={() => updateState()}></input>
            <p>Övrigt {state.ovrigt.toString()} kr</p>
            <input id="ovrigtValue" value={state.ovrigt} type="range" min="0" max="10000" step="100" onChange={() => updateState()}></input>

            <h2>MånadsKostnad: {calculating()}{triangle()}</h2>
        </div>
    )
}

export default Bostadsratt;