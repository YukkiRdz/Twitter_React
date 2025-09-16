import { useState } from "react";

export function CatubeHeader(logo) {
    return (
        <header>
            <div className="ct-header-logo">
                <img className="ct-header-logo" src={logo} alt='Logo de Catube' />
                <span className="ct-header-title">Catube</span>
            </div>
        </header> 
    )
}