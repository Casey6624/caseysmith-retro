import React from "react"

export default function Footer(props) {
    return (
        <div>
            <footer className="footer">
                <a className="emailAddress" href="mailto:hello@caseysmith.co.uk">HELLO@CASEYSMITH.CO.UK</a> <br />
                © {new Date().getFullYear()} CASEY SMITH
            </footer>
        </div>
    )
}