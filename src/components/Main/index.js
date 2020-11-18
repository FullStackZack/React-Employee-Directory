import React, { useState, useEffect } from 'react';
import "./style.css";
import API from '../../utils/API';

class Main extends React.Component {

    state = {
        search: "",
        employees: []
    }

    componentDidMount() {
        API.getUsers()
            .then(res => {
                this.setState({
                    employees: res.data.results
                })
            })
            .catch(err => console.log(err));
    }

};

export default Main;