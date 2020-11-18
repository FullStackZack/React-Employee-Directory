import React from 'react';
import Col from "../Col";
import Row from "../Row";
import "./style.css";


function Navbar() {
    return (

        <nav class="navbar navbar-light navbar-expand-lg fixed-top py-3">
            <div class="container">
                <h1>Employee Directory</h1>


                <div>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Name of employee" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                                    </div>
                            </div>
                        </li>
                    </ul>
                </div>
                </div>
        </nav>
    )
};

export default Navbar;
