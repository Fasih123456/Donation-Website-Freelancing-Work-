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
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="about.html">About</a></li>
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="post.html">Sample Post</a></li>
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="contact.html">Contact</a></li>
                    </ul>
                </React.Fragment>
            );
        }else {
            this.state.renderComponent = (
                <React.Fragment>
                <NavDropdown title="Menu" id="nav-dropdown">
                <li  class="link-item"><a href="#" ><Link to="/" class='active item' id='page1' style={{color: "black"}}>Home</Link></a></li>
                <li ><a class='link-item'><Link to="/WhyDonate" class='item' id='page2' style={{color: "black"}}>Why Donate</Link></a></li>
                <li ><a class='link-item'><Link to="/DonateToday" class='item' id='page3' style={{color: "black"}}>Donate Today</Link></a></li>
                <li ><a class='link-item'><Link to="/FAQ" class='item' id='page4' style={{color: "black"}}>FAQ</Link></a></li>
                <li ><a class='link-item'><Link to="/Contact" class='item' id='page5' style={{color: "black"}}>Contact</Link></a></li>
    
                </NavDropdown>
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