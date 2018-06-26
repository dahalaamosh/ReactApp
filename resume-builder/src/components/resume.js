import React, { Component } from 'react';

class Resume extends Component {
  render() {
    if(this.props.data){
      var educations = this.props.data.education.map(function(educationes){
        return <div className="row item" key={educationes.school}>
            <div className="twelve columns">
              <h3>{educationes.school}</h3>
                <p className="info">{educationes.degree} <span>&bull;</span> <em className="date">{educationes.graduated}</em></p>
                <p>
                {educationes.description}
                </p>
            </div>
          </div>
      });

      var works = this.props.data.work.map(function(work){
        return <div className="row item" key={work.title}>
          <div className="twelve columns">
            <h3>{work.company}</h3>
              <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
              <p>
                 {work.description}
              </p>
            </div>
           </div>
      });

      var skills = this.props.data.skills.map(function(skill){
        var name = "bar-expand "+skill.name.toLowerCase();
        return <li key={skill.name}><span style= {{width:skill.level}} className={name}></span><em>{skill.name}</em></li>
      });
    }
    return (
      <div className="App">
        <section id="resume">
          <div className="row education">
            <div className="three columns header-col">
              <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
              {educations}
            </div>
         </div>
         <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            {works}
          </div>
         </div>
         <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
               <p>
               </p>
          <div className="bars">
             <ul className="skills">
               {skills}
            </ul>
          </div>
        </div>
        </div>
      </section>
    </div>
    );
  }
}

export default Resume;
