import React from "react";
import logo from 'C:/Users/ASUS/Desktop/project/dashboard/src/logo/download.png'
import logo_expanded from "C:/Users/ASUS/Desktop/project/dashboard/src/logo/download.png"
import '../stylesheets/sidebar.css'
import Sidebar from './Sidebar'
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="btn btn-outline-light" data-bs-toggle="offcanvas" href="#sidebar" role="button" aria-controls="sidebar">
                        <span className="material-symbols-outlined">
                            menu
                        </span>
                    </a>               
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <a class="nav-link" href="#">Notifications <span class="badge rounded-pill bg-danger">99</span></a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Chats <span class="badge rounded-pill bg-success">4</span></a>
                            </li>
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </ul>
                    </div>
                </div>     
            </nav>
            <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="sidebar" aria-labelledby="sidebar-label">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel"><img src={logo_expanded} height="25px"/></h5>
                    <button type="button" class="btn-close text-bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        <Sidebar name='Dashboard' icon='speed' url='/'/>  
                        <Sidebar name='Reports' icon='database' url='/reports'/>
                        <Sidebar name='Settings' icon='settings' url='/settings'/>
                        <Sidebar name='Help' icon='help' url='help'/>    
                    </div>
                </div>
                <div class="offcanvas-footer text-center">
                    <Sidebar name='Logout' icon='logout'/>
                <p>© 2024 University of Malaysia.</p>
                <p>All rights reserved.</p>
                </div>
            </div>
        </div>
    )
};

export default Navbar;
