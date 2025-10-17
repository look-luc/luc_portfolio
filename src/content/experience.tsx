import Navigation_Bar from "../navigation_bar/navigation_bar";
import "./experience.css"
import Footer from "../footer/footer";

function Experience(){
    return(
        <div className="Experience">
            <Navigation_Bar />
            <header className="experience-header">Work Experience</header>
            <div className="main-wrapper">
                <div className="experience-container">
                    <div className="experience">
                        <span className="exp-title">
                            SAFAL Conference @ Boulder, CO
                        </span>
                        
                        <p>Paid technical student organizer</p>
                        <p>
                            <ul>
                                <li>
                                    Worked on updating website with abstracts and conference information
                                </li>
                                <li>
                                    Aid during conference and facilitating Zoom and asynchronous presentation
                                </li>
                            </ul>
                        </p>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Experience;
