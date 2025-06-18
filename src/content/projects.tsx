import React from "react";
import "./projects.css";
import Navigation_Bar from "../navigation_bar/navigation_bar";
import Footer from "../footer/footer";

function Projects() {
  return (
    <div className="Projects">
      <Navigation_Bar />
      <header className="project-header">Projects</header>
      <div className="main-wrapper">
        <div className="project-container">
          <div className="projects">
            <div className="projects-title">
              <a href="https://pal.lingcogsci.udel.edu">PAL lab</a>
            </div>
            <p className="proj-body">
              I primarily coded experiments, under Dr, Hafri. The first
              experiment I worked on was about telic and atelic verbs about
              plosives in the word. I checked with a table of sixteen verbs from{" "}
              <a href="https://www.pnas.org/doi/full/10.1073/pnas.1423080112#supplementary-materials">
                Strickland et al. (2015)
              </a>
              {""}. I wrote a Python script that would go through each word and
              count the number of plosives and perform a t-test. I did not only
              do it in English, I used every language provided by the Google API
              package performed the same test.
            </p>
            <p className="proj-body">
              The second experiment that I aided in was focusing on seeing if
              visual and auditory stimuli aid, in having a beep when two objects
              meet, in perceiving bouncing or streaming, and whether seeing the
              perception of the objects hit or not. I implemented audio along
              with the visual, this will entail the difference of symmetrical
              perception. I helped code the bounce vs stream experiment to have
              it up and running to do a pilot experiment. To be able to move
              forward with Dr. Hafri’s original experiment, he and I just wanted
              to be able to replicate the outcome when a beep is added with the
              collision of two objects.
            </p>
          </div>
          <div className="projects">
            <div className="projects-title">Phonlab</div>
            <p className="proj-body">
              I worked with Dr. Kathryn Franich in the Phonlab research lab
              before she moved to Harvard. I worked in Elan, the video
              annotation software, looking at videos of Medumbe speakers where I
              annotated both head and hand movements. When Dr. Franich worked at{" "}
              <a href="https://sites.harvard.edu/phonlab/">Harvard</a>, I
              remotely worked on English speakers annotating hand movements. I
              transcribed in Praat, the standard software for audio
              transcription, what two Cameroonian participants said when
              speaking their variety of English. I translated a consent form
              from English to French for work in Cameroon.
            </p>
          </div>
        </div>
        <div className="syntax-container">
          <div className="syntax">
            <div className="projects-title">Experimental Syntax Lab</div>
            <p className="proj-body">
              I helped to code in PcIbex their priming test for participants on
              the processing of ellipsis in English. This helped me better
              understand a topic in Linguistics that I was unable to get into in
              my syntax class at the time. This experience helped me see a
              potential view of how the workspace will be as a potential
              employee; I was given the majority of the code, Dr. Tollan
              instructed me what she wanted at the end, and it was my job to
              code according to her guidelines.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Projects;
