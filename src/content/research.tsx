import React from "react";
import "./research.css";
import Navigation_Bar from "../navigation_bar/navigation_bar";
import Footer from "../footer/footer";

function Research() {
  return (
    <div className="Research">
      <Navigation_Bar />
      <header className="research-header">Research</header>
      <div className="main-wrapper">
        <div className="research-container">
          <div className="research">
            <div className="research-title">Past Research</div>
            <p className="res-body">
              <span className="group-title">Phonlab @ UDel (un-paid)</span>:
              <ul>
                <ul></ul>
                <li>
                  Assisting in coding from subject head/hand gestures video data
                </li>
                <li>
                  Training in the structure and phases of co-speech gestures of
                  the hands and head
                </li>
                <li>
                  Application of a coding scheme in the annotation of gestures
                  for linguistical research
                </li>
                <li>transcribing Cameroonian English in Praat</li>
              </ul>
            </p>
            <p className="res-body">
              <span className="group-title">
                <a href="https://sites.harvard.edu/phonlab/about/">
                  Phonlab @ Harvard University
                </a>{" "}
                (paid)
              </span>
              :
              <ul>
                <li>
                  Assisting looking at video data from a subject coding hand
                  gestures & pointing task
                </li>
                <li>
                  Training in the structure and phases of co-speech gestures of
                  the hands and head
                </li>
                <li>
                  Application of a coding scheme in the annotation of gestures
                  for linguistics research
                </li>
                <li>Transcribing Cameroonian English in Praat</li>
                <li>Translating consent form from English to French</li>
              </ul>
            </p>
            <p className="res-body">
              <span className="group-title">
                <a href="https://pal.lingcogsci.udel.edu">
                  The UD Perception and Language Lab (PAL)
                </a>
              </span>
              :
              <ul>
                <li>
                  Researched whether words that encode abstract conceptual
                  distinctions share sound patterns across languages
                </li>
                <ul>
                  <li>
                    Telic vs Atelic verbs with association with/without plosives
                  </li>
                  <li>
                    Created{" "}
                    <a href="https://gitlab.com/look-its-luc/telic-vs-atelic.git">
                      Python code
                    </a>{" "}
                    to parse a selection of words with/without plosives
                  </li>
                </ul>
                <li>
                  Object symmetry perception with visual and auditory stimuli
                </li>
                <ul>
                  <li>
                    Help complete pilot code to perform initial experiments
                  </li>
                  <li>
                    <a href="https://github.com/look-luc/symmetry_spring_github">
                      Github
                    </a>
                    ,{" "}
                    <a href="https://ldn.palresearch.org/bounce_stream/word_assoc_auditory_v002.html">
                      word association
                    </a>
                    ,{" "}
                    <a href="https://ldn.palresearch.org/bounce_stream/exp.html">
                      study
                    </a>
                  </li>
                </ul>
              </ul>
            </p>
            <p className="res-body">
              <span className="group-title">UD Experimental Syntax Lab</span>:
              <ul>
                <li>
                  Assistant programmer in priming test code for participants on
                  the processing of ellipsis in English
                </li>
              </ul>
            </p>
          </div>
          <div className="research-container">
            <div className="research">
              <div className="research-title">Current Research</div>
              <p className="res-body">
                <span className="group-title">French Clear Speach:</span>
                <ul>
                  <li>
                    Research Student Assistant
                  </li>
                  <li>
                    Checking if clear speech in nasal vowels change against casual speech
                  </li>
                  <li>
                    Creating/train a model to check specific values of both nasal and oral vowels
                  </li>
                  <li>
                    <a href="https://github.com/look-luc/french_clear_speech.git">Github Repo</a>
                  </li>
                </ul>
              </p>
              <p className="res-body">
                <span className="group-title">Spec Decoding</span>
                <ul>
                  <li>Research assistant</li>
                  <li>Assisting in coding for low recourse language model for either</li>
                  <ul>
                    <li>
                      knowledge distillation or trained for language modeling
                    </li>
                  </ul>
                  <li>
                    <a href="https://github.com/michaelpginn/spec-decoding.git">Github Repo</a>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Research;
