import React from "react"
import "./footer.css"
import MailIcon from '@material-ui/icons/Mail';
import Icons from "../Icons/Icons"

export default function Footer(props) {

    const GITHUB_URL = "https://github.com/Casey6624"
    const TWITTER_URL = "https://twitter.com/CaseyKCSmith"

    return (
        <div>
            <footer className="footer">
            <div class="legal-stuff">
                    <h1>© {new Date().getFullYear()} CASEY SMITH</h1>
                </div>
                <div className="mail-me">
                    <MailIcon />
                    <a className="emailAddress" href="mailto:hello@caseysmith.co.uk">HELLO@CASEYSMITH.CO.UK</a>    
                </div>
            </footer>
            <div className="social-icons-footer">
                    <p id="githubLogoF" onClick={() => window.open(GITHUB_URL)}>{Icons.Github}</p>
                    <p id="twitterLogoF" onClick={() => window.open(TWITTER_URL)}>{Icons.Twitter}</p>
                </div>
        </div>
    )
}