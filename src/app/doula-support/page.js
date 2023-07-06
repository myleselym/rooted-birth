import HeroSection from "@/app/components/HeroSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

const DoulaSupport = () => {
  return (
    <main>
      <HeroSection
        imgSrc="/hand-hold.jpeg"
        alt="FAQ Baby Header"
        heroTitle="Doula Support"
      />
      <section className="flex items-center justify-center text_sky">
        <div className="w-[85vw]">
          <Accordion type="single" className="border-b-2" collapsible>
            <AccordionItem value="item-2">
              <AccordionTrigger
                style={{ wordSpacing: "-.5rem" }}
                className="text-2xl text-left"
              >
                Full Spectrum Support
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                <h3 className="my-4 text-xl text-center">
                  Ideal for first time parents and those who hope to have a
                  different birthing experience than previous births.
                </h3>
                <ul
                  style={{ wordSpacing: "2px" }}
                  className={`${playfairDisplay.className} mx-5 list-disc`}
                >
                  <li>
                    3 prenatal sessions to discuss birth plan, postpartum plan,
                    infant feeding goals, childbirth education, labor positions,
                    coping mechanisms for labor <br />( 1.5-2 hrs each )
                  </li>
                  <li>On call starting at 38 weeks gestation</li>
                  <li>
                    Doula present for active labor and birth + up to 2 hours
                    after birth
                  </li>
                  <li>
                    2 postpartum follow up visits around the second, and sixth
                    week postpartum <br />
                    (1.5-2 hrs each)
                  </li>
                  <li>Detailed birth notes</li>
                  <li>
                    Unlimited text communication up to 3 months postpartum
                  </li>
                </ul>
                <div
                  style={{ wordSpacing: "2px" }}
                  className={`${playfairDisplay.className} text-lg`}
                >
                  <p className="mt-4">Investment: $1,200</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" className="border-b-2" collapsible>
            <AccordionItem value="item-2">
              <AccordionTrigger
                style={{ wordSpacing: "-.5rem" }}
                className="text-2xl"
              >
                Labor Support
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                <h3 className="my-4 text-xl text-center">
                  Ideal for experienced parents who know what to expect and what
                  they will need.
                </h3>
                <ul
                  style={{ wordSpacing: "2px" }}
                  className={`${playfairDisplay.className} mx-5 list-disc`}
                >
                  <li>1 prenatal session to discuss birth plan (1.5-2 hrs)</li>
                  <li>On call starting at 38 weeks gestation</li>
                  <li>
                    Doula present for active labor and birth + up to 2 hours
                    after birth
                  </li>
                  <li>Detailed birth notes</li>
                  <li>
                    Unlimited text communication up to 3 months postpartum
                  </li>
                </ul>
                <div
                  style={{ wordSpacing: "2px" }}
                  className={`${playfairDisplay.className} text-lg`}
                >
                  <p className="mt-4">Investment: $800</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" className="border-b-2" collapsible>
            <AccordionItem value="item-2">
              <AccordionTrigger
                style={{ wordSpacing: "-.5rem" }}
                className="text-2xl"
              >
                Postpartum Support
              </AccordionTrigger>
              <AccordionContent>
                <h3 className="my-4 text-xl text-center">
                  Available a la carte or as an add on to any birth package.
                </h3>
                <div
                  style={{ wordSpacing: "2px" }}
                  className={`${playfairDisplay.className} text-lg`}
                >
                  <p className="font-bold">Daytime Care:</p>
                </div>
                <div
                  style={{ wordSpacing: "2px" }}
                  className={`${playfairDisplay.className} text-lg mx-5`}
                >
                  <p className="">
                    I will come into your home to help care for your baby while
                    you do any of the following: rest, eat, shower, journal,
                    chat, listen to a podcast, read a book, go for a walk, or
                    anything else you might need or want to do. Should you wish,
                    I may also do light housework like unloading the dishwasher
                    or folding laundry. We can also use our time together to
                    talk about caring for your newborn or discuss anything
                    relevant to you about your body or your baby.
                  </p>
                </div>
                <div
                  style={{ wordSpacing: "2px" }}
                  className={`${playfairDisplay.className} text-lg`}
                >
                  <p className="my-4">
                    Investment:
                    <br />
                    Singleton $25/hour
                    <br />
                    Twins $30/hour
                    <br />
                    (3 hours or more blocks of time.)
                  </p>
                </div>
                <div
                  style={{ wordSpacing: "2px" }}
                  className={`${playfairDisplay.className} text-lg`}
                >
                  <p className="font-bold">Night Care:</p>
                </div>
                <div
                  style={{ wordSpacing: "2px" }}
                  className={`${playfairDisplay.className} text-lg mx-5`}
                >
                  <p>
                    I will sleep in your home with your baby so parent(s) can
                    get to bed and actually sleep. For breastfed babies, I will
                    bring your baby to you for feedings. When done, I will take
                    care of your baby, enabling you to get more sleep. For
                    bottle fed or formula fed babies, you will give me
                    instructions, both verbal and written, about how to feed
                    your baby prior to you getting sleep. I will feed (if
                    applicable), burp, and diaper your baby.
                  </p>
                </div>
                <div
                  style={{ wordSpacing: "2px" }}
                  className={`${playfairDisplay.className} text-lg`}
                >
                  <p className="mt-4">
                    Investment:
                    <br />
                    Singleton $250/night
                    <br />
                    Twins $300/night
                    <br />
                    (9:30pm - 5:30am)
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" className="border-b-2" collapsible>
            <AccordionItem value="item-2">
              <AccordionTrigger
                style={{ wordSpacing: "-.5rem" }}
                className="text-2xl text-left"
              >
                Birth Indentions Development
              </AccordionTrigger>
              <AccordionContent
                className={`text-lg ${playfairDisplay.className}`}
              >
                <p style={{ wordSpacing: "2px" }} className={`mx-5`}>
                  {`There are many choices to make during the pregnancy, labor,
                  birth, and postpartum experience. We'll work together to come
                  up with a comprehensive list of your birth preferences for you
                  to discuss with your care provider in a way which centers the
                  birthing person's rights and wishes.`}
                </p>
                <p className="mt-4">Investment:&ensp;$50</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" className="border-b-2" collapsible>
            <AccordionItem value="item-2">
              <AccordionTrigger
                style={{ wordSpacing: "-.5rem" }}
                className="text-2xl"
              >
                Virtual Support
              </AccordionTrigger>
              <AccordionContent
                className={`text-lg ${playfairDisplay.className}`}
              >
                <p style={{ wordSpacing: "2px" }} className={`mx-5`}>
                  Virtual prenatal, birth support, and postpartum services are
                  available in a wide spectrum of services. Contact Bridget to
                  determine what virtual support can look like for you.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" className="border-b-2" collapsible>
            <AccordionItem value="item-2">
              <AccordionTrigger
                style={{ wordSpacing: "-.5rem" }}
                className="text-2xl text-left"
              >
                Bereavement Support
              </AccordionTrigger>
              <AccordionContent>
                <p
                  style={{ wordSpacing: "2px" }}
                  className={`${playfairDisplay.className} text-lg mx-5`}
                >
                  This is a free service for anyone who has or is expecting to
                  experience infant loss via miscarriage, stillbirth, or a
                  diagnosis which means the baby will not live long after being
                  delivered.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" className="border-b-2" collapsible>
            <AccordionItem value="item-2">
              <AccordionTrigger
                style={{ wordSpacing: "-.5rem" }}
                className="text-2xl text-left"
              >
                Newborn Photography
              </AccordionTrigger>
              <AccordionContent
                className={`text-lg ${playfairDisplay.className}`}
              >
                <p style={{ wordSpacing: "2px" }} className={`mx-5`}>
                  I have a photography hobby and am happy to share this with
                  clients via a fresh-48 or newborn mini-session. Sessions
                  includes to up 10 edited images of your choosing and all
                  unedited images.
                </p>
                <p className="mt-4">Investment:&ensp;$200</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </main>
  );
};

export default DoulaSupport;
