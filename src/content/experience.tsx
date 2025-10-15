import Navigation_Bar from "../navigation_bar/navigation_bar";
import "./experience.css"

function Experience(){
    return(
        <div className="Experience">
            <Navigation_Bar />
            <header className="experience-header">Work Experience</header>
            <div className="main-wrapper">
                <div className="experience-container">
                    <div className="experience">
                        SAFAL Conference [PI Dr. Bhuvana Narasimhan]
                        <p>Paid technical student organizer</p>
                        <p>
                            (Boulder, CO; September 2025-November 2025)<br/>
                            I worked on updating website with presenters abstracts and making sure all of the participants and attendees are accounted for.  I also aided during the conference days and facilitate the Zoom room and asynchronous presentation
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experience;