import React from "react";
import Welcome from "./WelcomePage";
import { DropdownProvider } from "./contexts/DropdownCtx";

function Routing(){
    return (
        <DropdownProvider>
        <div className="content-wrapper">
            <Welcome name="Clive" />
        </div>
        </DropdownProvider>
    )
}

export default Routing;