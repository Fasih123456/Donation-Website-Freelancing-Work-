import React from 'react';
import {Link} from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';


class Navigation extends React.Component{


    constructor(props){
        super(props);

        let width = window.innerWidth;
        this.state = {};
        
        if(width > 900){
            this.state.renderComponent = (
                <React.Fragment>
                    <ul class="navbar-nav ms-auto py-4 py-lg-0">
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" ><Link style={{color: "white "}} to="/" id='page1'>Home</Link></a></li>
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" ><Link style={{color: "white "}} to="/WhyDonate" id='page2'>Why Donate</Link></a></li>
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4"><Link style={{color: "white "}} to="/DonateToday" id='page3'>Donate Today</Link></a></li>
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4"><Link  style={{color: "white "}} to="/FAQ" id='page4'>FAQ</Link></a></li>
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4"><Link  style={{color: "white "}} to="/Contact" id='page5'>Contact</Link></a></li>
                    </ul>
                </React.Fragment>
            );
        }else {
            this.state.renderComponent = (
                <React.Fragment>
                    <ul class="navbar-nav ms-auto py-4 py-lg-0">
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" ><Link style={{color: "white "}} to="/" id='page1'>Home</Link></a></li>
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" ><Link style={{color: "white "}} to="/WhyDonate" id='page2'>Why Donate</Link></a></li>
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4"><Link style={{color: "white "}} to="/DonateToday" id='page3'>Donate Today</Link></a></li>
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4"><Link  style={{color: "white "}} to="/FAQ" id='page4'>FAQ</Link></a></li>
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4"><Link  style={{color: "white "}} to="/Contact" id='page5'>Contact</Link></a></li>
                    </ul>
                </React.Fragment>
            );
        }
    }

    componentDidMount(){

    }

    componentDidUpdate(){
        const currentLocation = window.location.href;
        const BASEURL = 'http://localhost:3000';
        console.log(currentLocation);

        switch(currentLocation){
            case `${BASEURL}/Contact`:
                document.getElementById('page5').classList.add('active');

                document.getElementById('page1').classList.remove('active');
                document.getElementById('page2').classList.remove('active');
                document.getElementById('page3').classList.remove('active');
                document.getElementById('page4').classList.remove('active');
                break;
            case `${BASEURL}/WhyDonate`:
                document.getElementById('page2').classList.add('active');

                document.getElementById('page1').classList.remove('active');
                document.getElementById('page3').classList.remove('active');
                document.getElementById('page4').classList.remove('active');
                document.getElementById('page5').classList.remove('active');
                break;
            case `${BASEURL}/DonateToday`:
                document.getElementById('page3').classList.add('active');
    
                document.getElementById('page1').classList.remove('active');
                document.getElementById('page2').classList.remove('active');
                document.getElementById('page4').classList.remove('active');
                document.getElementById('page5').classList.remove('active');
                break;
            case `${BASEURL}`:
                document.getElementById('page1').classList.add('active');
    
                document.getElementById('page2').classList.remove('active');
                document.getElementById('page3').classList.remove('active');
                document.getElementById('page4').classList.remove('active');
                document.getElementById('page5').classList.remove('active');
                break;
            
            default:
                document.getElementById('page1').classList.add('active');
        }
    }

    render(){

    return (
        <React.Fragment>
        {this.state.renderComponent}

        </React.Fragment>

    );

    }
}

export default Navigation;