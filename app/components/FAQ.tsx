import { AccordionDemo } from "./ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "How to Register for MU CodeStorm?",
      answer: (
        <>
          <p>Follow these steps to register:</p>
          <ol className="list-decimal pl-5">
            <li>
              <span> Click </span>
              <a
                className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"
                href="#reg"
              >
                "Register Now"
              </a>
              <span> to start your registration.</span>
            </li>
            <li> Fill Out the Form – Enter your details and team info.</li>
          </ol>
          <p className="mt-2"><strong>Note:</strong></p>
          <ul className="list-disc pl-5 text-sm opacity-90">
          
            <li>The official hackathon problem statements will be provided at the labs on the event day.</li>
          </ul>
        </>
      ),
    },
    {
      question: "Rules and Regulations",
      answer: (
        <>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Team Size:</strong> This is a team event. Teams must have a minimum of 3 and a maximum of 4 members.</li>
            <li><strong>Team Formation:</strong> : Teams can consist of members from different branches within the same college.</li>
            <li><strong>Identification:</strong> All participants must carry the original student ID card of their respective college.</li>
            <li><strong>Problem Statements:</strong> A list of problem statements will be declared at the labs. Teams must select one topic from that list.</li>
            <li><strong>Original Work:</strong> Pre-written code is strictly not allowed. All development must be done during the hackathon hours.</li>
            <li><strong>Tech Stack:</strong> Participants are free to choose any technology domain or stack to develop their solution.</li>
            <li><strong>Equipment:</strong> Participants must carry their own laptops and necessary hardware for the competition.</li>
            <li><strong>Attendance:</strong> Participants are required to stay at the event venue day and night on March 19 & 20. At least two members must be present at their assigned table at all times.</li>
          </ul>
        </>
      ),
    },
    {
      question: "Is there a registration fee?",
      answer: "Yes, there is a very minimal registration fee of ₹1500 per team.",
    },
    {
      question: "What's included in the registration fee?",
      answer: (
        <span>
          We provide accommodation and meals for participants to ensure a hassle-free experience, along with full access to the Spandan 2K26 Event. For more info, visit{" "}
          <a href="https://www.mufests.com" className="underline text-blue-400">
            Spandan 2K26
          </a>.
        </span>
      ),
    },
  ]

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto p-8 rounded-2xl shadow-lg">
          <AccordionDemo items={faqs} />
        </div>
      </div>
    </section>
  )
}
