import React from 'react'
import { useState } from 'react'

function Villa(){
    const [state, setState] = React.useState({
        inKopsPris: 1,
        kontantInsats: 1,
        ranta: 1,
        vatten: 400,
        el: 1400,
        sopor: 500,
        varme: 1000,
    });

    function updateState(){
        setState({
            inKopsPris: document.getElementById("inKopsPrisValue").value,
            kontantInsats: document.getElementById("kontantInsatsValue").value,
            ranta: document.getElementById("rantaValue").value,
            vatten: 400,
            el: 1400,
            sopor: 500,
            varme: 1000,
        });
    }

    function calculating(){
        let lanPengar = parseInt(state.inKopsPris - state.kontantInsats)/(30*12);
        let kostnadPerManad = parseInt(lanPengar * (1 + state.ranta/100));
        let kostnad = parseInt(kostnadPerManad + parseInt(state.vatten) + parseInt(state.el) + parseInt(state.sopor) + parseInt(state.varme));
        return kostnad;
    }



    return(
        <div id="Villa">
            <h1>Villa</h1>
            <p>Inköpspris {state.inKopsPris.toString()} kr</p>
            <input id="inKopsPrisValue" value={state.inKopsPris}type="range" min="0" max="20000000" step="25000" onChange={() => updateState()}></input>
            <p>Kontantinsats {state.kontantInsats.toString()} kr</p>
            <input id="kontantInsatsValue" value={state.kontantInsats}type="range" min="0" max={state.inKopsPris} step="10000" onChange={() => updateState()}></input>
            <p>Ränta {state.ranta.toString()} %</p>
            <input id="rantaValue" value={state.ranta} type="range" min="0" max="15" step="0.1" onChange={() => updateState()}></input>
            <p>Vatten 400kr/mån</p>
            <p>El 1400kr/mån</p>
            <p>Sopor 500kr/mån</p>
            <p>Värme 1000kr/mån</p>

            <h2>MånadsKostnad {calculating()}</h2>
        </div>
    )
}

export default Villa;