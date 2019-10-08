import React from 'react';
import ReactDOM from 'react-dom';

import Contact from './contact/contact.jsx';
import './index.scss';
// import './index.html';

import Term from './term/term.jsx';
// import './term.scss';
import './index.html';


class App extends React.Component {
  render() {
    return (
      <>
        <h1 className="headline"> QUOTES GOOD READS </h1>
        <h2> Famous Man Quotes</h2>
        <Term 
          term="ISAAC ASIMOV" 
          quote="We live in a world where extraterrestrials could be everywhere and you would never know. A world driven by god’s, unexplained structures, countless stories and extraterrestrial occurrences. There is proof that our planet has been and still continues to be visited by extraterrestrial life, but until we are able to capture and study them, the question will remain. Do Aliens Really Exist?"
        />
        <Term 
          term="Antidisestablishmentarianism" 
          quote="A political position that developed in 19th-century Britain in opposition to Liberal proposals for the disestablishment of the Church of England—meaning the removal of the Anglican Church's status as the state church of England, Ireland, and Wales. The establishment was maintained in England, but in Ireland, the Church of Ireland (Anglican) was disestablished in 1871. In Wales, four Church of England dioceses were disestablished in 1920 and became the Church in Wales."
        />
        <Term 
          term="electroencephalographically" 
          quote = "So. What's the longest word in the dictionary.
          If you said antidisestablishmentarianism, you're wrong. The longest word in Merriam-Webster's Collegiate Dictionary is currently electroencephalographically, which meansHave you examined the patient electroencephalographically?"
        />
        
        
        <Term 
          term="UFO" 
          quote="To my way of thinking, there is every bit as much evidence for the
          existence of UFOs as there is for the existence of God. Probably far
          more. At least in the case of UFOs there have been countless taped
          and filmed and, by the way, unexplained sightings from all over the
          world, along with documented radar evidence seen by experienced
          military and civilian radar operators.les."
          
        />
        <Term 
          term = "QUOTE COLD FUSION"
          quote = "Well, it is generally considered— though not always true— that the wife of a man so honoured is likely also to be worthy of the honour, and so it is accorded her. In the event it is false, and I have known that to be so in more than one circumstance , it is still accorded her in deference to her husband. ~Sherlock Holmes, with respect to aristocratic titles” Stephanie Osborn, The Case of the Cosmological Killer: The Rendlesham Incident"
        
         /> 
         <Term 
          term = "Isaac Asimov"
          quote = "Violence is the last refuge of the incompeten,
          Life is pleasant Death is peaceful troublesom Never let your sense of morals get in the way of doing whats right
          Writing to me  is simply thinking through my fingers
          I do not fear computers I fear the lack of them
          If knowledge can create problems it is not through ignorance that we can solve them.
          Self-education is, I firmly believe, the only kind of education there is."
        
         /> 
        <Contact 
          firstName="ISAAC " 
          lastName="ASIMOV"
          email="ASIMOV@springmail.com" 
        />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
