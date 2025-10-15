import 'react'
import './resume.css'
import Navigation_Bar from "../navigation_bar/navigation_bar";
import { Button } from 'react-bootstrap';
import resume from '../assets/resume.pdf'

function Resume(){
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = resume;
        link.download = "luc_resume.pdf";
        link.click();
    };
    return(
        <div className='Resume'>
            <Navigation_Bar/>
            <header className="resume-header">Resume</header>
            <div className='download_wrapper'>
                <Button
                    className='download_button not'
                    onClick={handleDownload}
                >
                    Click here to download resume
                </Button>
            </div>
        </div>
        
    )
}
export default Resume