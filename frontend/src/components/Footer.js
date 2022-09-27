import React from 'react'
import styled from "styled-components";
import ProjectList from "./ProjectList";


function Footer({projects}) {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        {/* Column 1*/}
                        <div className="col-md-3 col-sm-6">
                            <h4>Contact US</h4>
                            <ul className="list-unstyled">
                                <li>Saint-Petersburg</li>
                                <li>Nevskyi pr. 1</li>
                                <li>999-000-999</li>
                            </ul>
                        </div>
                        {/* Column 2*/}
                        <div className="col-md-3 col-sm-6">
                            <h4>Our Projects</h4>
                            <ul className="list-unstyled">
                                {projects.map((item) => <ProjectList project={item}/>)}
                            </ul>
                        </div>
                        {/* Column 3*/}
                        <div className="col-md-3 col-sm-6">
                            <h4>Company Life</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">Lorem ipsum.</a></li>
                                <li><a href="/">Lorem ipsum.</a></li>
                                <li><a href="/">Lorem ipsum.</a></li>
                                <li><a href="/">Lorem ipsum.</a></li>
                            </ul>
                        </div>
                        {/* Column 4*/}
                        <div className="col-md-3 col-sm-6">
                            <h4>Meet us in SN</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">Lorem ipsum.</a></li>
                                <li><a href="/">Lorem ipsum.</a></li>
                                <li><a href="/">Lorem ipsum.</a></li>
                                <li><a href="/">Lorem ipsum.</a></li>
                            </ul>
                        </div>
                    </div>
                    {/*Footer Buttom*/}
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} City SPb - All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer`
    .footer-middle{
        background: var(--mainDark);
        padding-top: 10px;
        padding-bottom: 10px;
        color: var(--mainWhite);
    }
    
    .footer-bottom{
        padding-top: 10px;
      }
      
    ul li a {
    color: var(--mainGray);
    }      
    
    ul li a:hover {
    color: var(--mainLightGray);
    }  
      `;