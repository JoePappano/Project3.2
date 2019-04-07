import React from "react"

function Modal(){
    return(
    <div id="modal1" className="modal">
        <div className="modal-content">
            <h4>Who are you?</h4>
            <div className="col s6"><h2>Provider</h2><h1>👷‍</h1></div>
            <div className="col s6"><h2>Homeowner</h2><h1>👩‍🌾</h1></div> 
        </div>
        <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
        </div>
    </div>
    )
}
export default Modal