import Header from "./Header";
import Footer from "./Footer";
import Accord from "../components/Accordion";

const contents = [
  'We accept the majority of vehicles, including but not limited to cars, trucks, vans, SUVs, trailers, RVs, and boats. To be eligible, your vehicle must meet a few criteria. The registered owner, for example, or their legal representative, must donate the vehicle. A car must be registered in Canada. The vehicle must be "complete," with no significant component flaws. Vehicles with minor body damage are welcome. RVs, trailers, and boats will face additional restrictions. We are unable to accept vehicles with pending insurance claims. Vehicles that have liens or other encumbrances are not accepted. Although RVs must usually be dropped off, each case is handled differently.',
  `
    A: To donate your vehicle, please follow the steps outlined below.

From the home page, select the "Donate Now" button. To qualify your vehicle, you will need to answer a few simple questions here.
On the donation form, include information about your vehicle, your contact information, and the organisation to which you want to donate.
Examine the information you've provided, agree to the terms and conditions, and then submit your car donation request.
Additional instructions for towing or dropping off will be provided.
Check your inbox for our email confirmation. If you do not receive the confirmation message right away, please check your junk mail folder.
For more information on this subject, please see the link more info.
    `,
  `
    This total is determined by a number of factors. Please click on this link, more info, for more specific information.
    `,
  `
    Yes, we can take non-running automobiles.
    `,
  `
    There must be proof of ownership on file. A bill of sale, a letter from your local registry requesting "evidence of last car registration," or a current or expired registration are all acceptable forms of identification.
    `,
  `
    Your car no longer requires insurance after it has been picked up by our towing provider and recycled. If your car is up for auction, we recommend that you keep coverage on it until it is sold. We'll notify you via email once your vehicle has been sold.
    `,
  `
    One of our towing agents will contact you within 48 hours. You can then arrange for your car to be picked up at a time that is most convenient for you.
    `,
  `
The licence plates belong to the registered owner of the vehicle. If the licence plates are still attached to the car when it is donated, the auction house or recycling company will store or remove them. Recyclers frequently smash, shred, or mark licence plates to prevent unregistered owners from using them.

When licence plates are returned to the provincial registry, some jurisdictions may offer a minor reimbursement. If you want to keep your licence plates, simply remove them at the time of pick-up or have one of our tow assistance representatives do it for you. They will gladly assist you!
Please be aware that any automobiles left on public streets without licence plates may be confiscated by your city's parking authority. Although it is rare, the city may impound your vehicle if it is left unregistered on the street before our towing crew arrives. These impound fees are not Give&Go's responsibility. `,
  `
We offer our services in several regions across Canada, and we are constantly adding new cities. If we do not currently service your region, we will try to find an agent to pick up your car after receiving your online submission.`,
  `
It is not your responsibility to pay for having your car towed. If the car is recycled, the towing fee is waived. If the vehicle is consigned to auction, the towing fee is deducted from the sale price.`,
  `
It benefits the charity if you drop off your car at our selling agent because it prevents transportation costs from being deducted from your donation. We have several drop-off locations depending on whether we can sell or recycle your vehicle. We may provide you with drop-off locations and instructions once your online form is completed. `,
  `
Yes! A car donation can be made to ANY known Canadian charity. When filling out your gift form, you will have the option of selecting any charity that is not currently on our receiving list (add it into the extra notes section). To finish the form, you must also select a second charity from our active drop-down list. `,
  `
Yes, you will receive a receipt for your contribution that you can use as a tax deduction. Guaranteed!`,
  `Following the sale of your vehicle and the completion of our accounting process, we will send you an email confirming that your donation has been sent to the charity. After the charity receives your gift, you should receive your tax receipt within two weeks.`,
  `
After the sale of your car and our accounting procedure are completed, we will send you an email to confirm that your donation has been sent to the charity. You should receive your tax receipt within two weeks of the charity receiving your contribution.`,
  `
To donate a boat, it must usually be dropped off at our local sales agent, and certain conditions must be met. We will collaborate with you and our auction agents to determine the best procedure. To donate a boat right away, go to the give now page. If you have any problems entering the boat's serial number, please see FAQ #14 for assistance.`,
  `
Yes, we can assist you in donating their estate car. Please fill out our online submission form so we can walk you through the steps. `,
  `Provide a Vehicle Canada has been in the business of assisting Canadian contributors and their preferred organisations since 2005. Many charities are unable to accept Gifts in Kind donations because of the time-consuming administrative procedures involved. Give&Go's handles the various processes required in processing a car for donation, saving your organisation time and resources.
    `,
];

const FAQ = () => {
  return (
    <div>
      <Header />
      <div className="main body ui container" style={{ paddingBottom: "20px" }}>
        <p className="red-heading" style={{ marginBottom: "7.5px", marginTop: "20px" }}>
          Frequently Asked Questions(FAQ)
        </p>
        <p style={{ marginBottom: "45px" }}>Click a question to see its answer below</p>
        <Accord id="1" title="What can I donate?" content={contents[0]} />
        <Accord id="2" title="How do I Donate My Car?" content={contents[1]} />
        <Accord id="3" title="What will the amount of my tax receipt be?" content={contents[2]} />
        <Accord
          id="4"
          title="Can I still donate my car even though it hasn't run in a year?"
          content={contents[3]}
        />
        <Accord id="5" title="What if my car isn't registered?" content={contents[4]} />
        <Accord id="6" title="What if I don't have insurance?" content={contents[5]} />
        <Accord id="7" title="When will you come to pick up my car?" content={contents[6]} />
        <Accord
          id="8"
          title="What am I supposed to do with my licence plates?"
          content={contents[7]}
        />
        <Accord
          id="9"
          title="Can you come to any location to pick up my car?"
          content={contents[8]}
        />
        <Accord id="10" title="Do I have to pay to have my vehicle towed?" content={contents[9]} />
        <Accord id="11" title="Can I drop off my car?" content={contents[10]} />
        <Accord
          id="12"
          title="Can I give my car to another charitable organisation?"
          content={contents[11]}
        />
        <Accord id="13" title="Is my contribution tax deductible?" content={contents[12]} />
        <Accord id="14" title="When will I receive my tax receipt" content={contents[13]} />
        <Accord id="15" title="When will I get my tax receipt?" content={contents[14]} />
        <Accord id="16" title="How do I Make a Boat Donation?" content={contents[15]} />
        <Accord
          id="17"
          title="My beloved has died. Can I donate their deceased vehicle?"
          content={contents[16]}
        />
        <Accord id="18" title="Is Give&Go a non-profit organisation?" content={contents[17]} />
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
