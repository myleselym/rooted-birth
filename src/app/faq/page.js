import HeroSection from "@/components/HeroSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Playfair_Display } from "next/font/google";
import { Balancer } from "react-wrap-balancer";
const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

const FAQ = () => {
  return (
    <main>
      <HeroSection
        imgSrc="/faq-baby.jpeg"
        alt="FAQ Baby Header"
        font={`${playfairDisplay.className} text-9xl`}
        heroTitle="FAQ"
      />
      <section className="flex items-center justify-center text_sky">
        <div className="w-[85vw]">
          <Accordion type="single" className="border-b-2" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-2xl text-left moon_font ">
                What is a doula?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                <p className="text-xl">
                  <Balancer>
                    A prenatal, birth, and postpartum doula is a professional
                    trained in birth support. Doulas provide informational,
                    emotional, and physical support for pregnant, birthing, and
                    postpartum people and families.
                  </Balancer>
                </p>
                <br />
                <h3 className="text-xl font-bold">A doula&apos;s role is:</h3>
                <ul className="grid gap-2 pl-5 list-disc">
                  <li>
                    <span className="font-bold">To Care</span>:
                    <br />
                    Provide effective and nurturing support which utilizes brain
                    science to meet the needs of the client and establish trust
                    with the client and any personal support people they want
                    present for the birth.
                  </li>
                  <li>
                    <span className="font-bold">To Comfort:</span>:
                    <br />
                    Supply knowledge of the physiologic and hormonal birth
                    process, as well as continuous physical, neurological, and
                    emotional support.
                  </li>
                  <li>
                    <span className="font-bold">To Communicate:</span>
                    <br />
                    Assist the client in discerning their preferences for birth
                    and postpartum and help the client communicate those
                    preferences to their care team.
                  </li>
                  <li>
                    <span className="font-bold">To Collaborate:</span>
                    <br />
                    Work alongside the birthing person, their support person,
                    and their medical team to maximize positive outcomes as
                    defined by the birthing person.
                  </li>
                  <li>
                    <span className="font-bold">To Empower:</span>
                    <br />
                    Support the client to be involved in their care decisions as
                    much as the client desires and ensure the client has the
                    information they need before making the best choices for
                    them.
                  </li>
                </ul>
                <br />

                <h3 className="text-xl font-bold">{`A doula's role is not:`}</h3>
                <ul className="grid gap-2 pl-5 list-disc">
                  <li>
                    <span className="font-bold">Medical:</span>
                    <br />
                    Doulas do not deliver babies, check vitals, listen to
                    baby&apos;s heart tones, or provide medical advice or
                    diagnosis. All decisions should be made between the birthing
                    person and their primary care provider.
                  </li>
                  <li>
                    <span className="font-bold">A Replacement:</span>
                    <br />
                    Doulas do not take the place of the birthing person&apos;s
                    partner or other personal support people they wish to have
                    involved in their birth. Doulas support and empower the
                    birthing person&apos;s support person to be as involved as
                    they desire.
                  </li>
                  <li>
                    <span className="font-bold">An Advocate:</span>
                    <br />
                    Doulas do not speak for their clients. Instead doulas create
                    space and provide tools for clients to use their own voice.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" className="border-b-2" collapsible>
            <AccordionItem value="item-2">
              <AccordionTrigger
                style={{ wordSpacing: "-.5rem" }}
                className="text-2xl text-left"
              >
                What is the benefit of a doula?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                <p className="text-xl">
                  Read the full{" "}
                  <a
                    className={`${playfairDisplay.className} [word-spacing:.1rem] text_finch hover:text-neutral-400 active:text-black/50 text-lg`}
                    href="https://evidencebasedbirth.com/the-evidence-for-doulas/"
                  >
                    signature article
                  </a>
                  &nbsp;from Evidence Based Birth about the benefits of having a
                  doula. <br />
                  In short, doulas:
                </p>
                <br />
                <ul className="grid gap-2 pl-5 list-disc">
                  <li>Decrease the risk of cesarean</li>
                  <li>
                    Increase in the likelihood of a spontaneous vaginal birth
                  </li>
                  <li>
                    Decrease in the use of any medications for pain relief
                  </li>
                  <li>Shorten labor</li>
                  <li>
                    Decrease in the baby&apos;s risk of a low five minute Apgar
                    score
                  </li>
                  <li>
                    Decrease in the risk of being dissatisfied with the birth
                    experience
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" className="border-b-2" collapsible>
            <AccordionItem value="item-3">
              <AccordionTrigger
                style={{ wordSpacing: "-.5rem" }}
                className="text-2xl text-left"
              >
                What is the process of hiring a doula?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                <h4 className="font-bold">When:</h4>
                <p>
                  There is no wrong time. The earlier you hire your doula, the
                  higher likelihood your preferred doula will be available to
                  support you. Doulas have been hired as late as being called
                  while the birthing person is heading to the hospital and as
                  early as getting a positive pregnancy test.{" "}
                </p>
                <br />
                <h4 className="font-bold">How:</h4>
                <ol
                  style={{ wordSpacing: ".1rem" }}
                  className="pl-5 list-decimal [&>*]:mb-4"
                >
                  <li>
                    <span className="font-bold">Contact a few doulas.</span>
                    <br />
                    Every doula has their own way of contacting them. To contact
                    Bridget, send a message below with your name and estimated
                    due date.
                  </li>
                  <li>
                    <span className="font-bold">
                      Have an initial consultation meeting.
                    </span>
                    <br />
                    {`It's a great time to connect, ask questions, and see if the doula you are considering is the right fit for you. Bridget hosts these meetings via Zoom.`}
                  </li>
                  <li>
                    <span className="font-bold">Hire your doula.</span>
                    <br />
                    This usually means signing a letter of agreement and making
                    a down payment.
                  </li>
                  <li>
                    <span className="font-bold">Mark your calendar.</span>
                    <br />
                    You and your doula will set up dates of service for prenatal
                    visits.
                  </li>
                  <li>
                    <span className="font-bold">Communicate.</span>
                    <br />
                    Then you doula knows how, where, and when to best support
                    you.
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" className="border-b-2" collapsible>
            <AccordionItem value="item-4">
              <AccordionTrigger
                style={{ wordSpacing: "-.5rem" }}
                className="text-2xl text-left"
              >
                Is a doula for me?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                <ul className="grid gap-4">
                  <li>
                    <span className="font-bold">Bottom line: Yes!</span>
                    <br />
                    Everyone deserves to be supported in the way they wish,
                    especially during this paramount time of their lives.
                  </li>
                  <li>
                    <span className="font-bold">
                      I am planning to have an epidural.
                    </span>
                    <br />
                    YES! Doulas can provide non-pharmaceutical comfort measures
                    during the earlier stages of labor before the epidural is
                    placed and know a lot about different comfort measures and
                    position options after to support you and the physiologic
                    labor process.
                  </li>
                  <li>
                    <span className="font-bold">
                      I am planning a caesarian.
                    </span>
                    <br />
                    {`YES! In Madison, doulas are welcome to all planned cesarean
                  births at St. Mary's and some at Meriter. Doulas are a support
                  to foreshadow what to expect, be a continuous support for the
                  birthing person while their partner and baby are away from
                  them at the warmer soon after birth, and can support early
                  skin to skin and/or breastfeeding within the operating room,
                  if you wish. Another benefit to having a doula for a cesarean
                  is to be a support to the partner in the minutes before and
                  after the procedure where they would otherwise be all along
                  and separated from their loved one.`}
                  </li>
                  <li>
                    <span className="font-bold">
                      I am planning a homebirth OR hospital unmedicated birth.
                    </span>
                    <br />
                    YES! Doulas are a great addition to your primary care team.
                    They will be a continuous support and have many ways of
                    empowering the birthing person as they cope with the
                    intensity of labor. Should any partner or other loved ones
                    wish, doulas are also skilled in knowing how to help them
                    support their loved one.
                  </li>
                  <li>
                    <span className="font-bold">
                      I did fine without a doula in a previous birth.
                    </span>
                    <br />
                    YES! Every birth is different and a doula can support you in
                    navigating anything unexpected that you may experience. From
                    the words of a client who was a second time parent:
                    <br />
                    <span className="italic">{`"We
                  finally decided to consider hiring a doula after realizing we
                  wanted more than to just fare “well enough.”`}</span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" className="border-b-2" collapsible>
            <AccordionItem value="item-5">
              <AccordionTrigger
                style={{ wordSpacing: "-.5rem" }}
                className="text-2xl text-left"
              >
                What is a backup doula?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                <Balancer>
                  Because we can&apos;t predict the future and all birthing
                  people deserve to have the high quality support they deserve,
                  all clients who partner with Bridget will also have a backup
                  doula ready to support them. They will meet their backup doula
                  virtually during one of the prenatal visits and would have
                  them join during their labor/birth should an unplanned
                  circumstance arise (illness, family emergency, ect.). If a
                  backup were at a birth, the client, primary doula and the
                  backup doula will work together to determine the best
                  postpartum follow-up plan to assure continuity of support.
                </Balancer>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <p className="pb-8 mt-8 text-xl text-center">
            <span className="italic">{`"I would recommend anyone who is searching for a doula to connect with
        Bridget. She was loving and just so fun. She is amazing."`}</span>{" "}
            -Sasha F.
          </p>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
