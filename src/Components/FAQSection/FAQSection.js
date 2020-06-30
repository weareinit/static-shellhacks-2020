import React from "react"

import FAQ from "../FAQ/FAQ"
import "./FAQSection.sass"

const FAQSection = props => {
  const questions = [
                      {name: "What is a hackathon?", body: "A hackathon is a weekend-long event where students come together to learn about the latest technologies and build innovative products"},
                      {name: "When and where is ShellHacks?", body: "ShellHacks is taking place from September 25th through the 27th virtually"},
                      {name: "How long is it?", body: "ShellHacks is a 36-hour hackathon, beginning at 6pm on Friday and ending at 2pm on Sunday. We encourage you to work on your project for as long as you can during this time"},
                      {name: "Who can come?", body: "If you’re currently a college student or have graduated in the past year, you're more than welcome to attend! Not a student? No problem! You can attend as a mentor and help out our students!"},
                      {name: "How much experience do I need?", body: "None! We welcome students from all academic backgrounds and skill levels, so don’t be afraid to come and join us! We’ll have introductory workshops for you to learn new skills, industry mentors to help you out, and great tools to build your projects. Whether you’ve never coded before or have lots of experience, there’s a place for you at ShellHacks!"},
                      {name: "Do I need to have a group?", body: "Not at all! You can be a lone wolf, come with a pre-made team (no more than four people), or join some teams at the event. We’ll also have team building activities to help you find the right teammates!"},
                      {name: "How much does it cost?", body: "Nothing! That’s right, ShellHacks is entirely free for all attendees to participate. All you need to worry about is learning new skills, developing cool projects, and having fun!"},
                      {name: "How can I become a sponsor?", body: "If you'd like to sponsor, please send us an email at upe@fiu.edu and our team will get back to you promptly."}                    
                    ]
  return (
    <div className="FAQSection">
      <h1 className="FAQSection__title">Frequently Asked Questions (FAQ)</h1>
      <div className="FAQSection__container">
        {questions &&
          questions.map((question, index) => {
            question = questions[index]
            return <FAQ name={question.name} body={question.body} />
          })}
      </div>
    </div>
  )
}

export default FAQSection