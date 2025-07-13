import 'react'
import './resume.css'
import Navigation_Bar from "../navigation_bar/navigation_bar";
import { Button } from 'react-bootstrap';

function Resume(){
    return(
        <div className='Resume'>
            <Navigation_Bar/>
            <header className="resume-header">Resume</header>
            <div className='download_wrapper'>
                <a href='/resume/resume.pdf' download="luc_resume.pdf">
                    <Button className='download_button not'>
                        Click here to download resume
                    </Button>
                </a>
            </div>
        </div>
        
    )
}
export default Resume