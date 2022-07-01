import Header from './Header';
import Footer from './Footer';
import Accord from '../components/Accordion';

const contents = [
    
    'Including but not limited to cars, trucks, vans, SUVs, trailers, RVs, and boats, we accept the majority of vehicles. Your car must meet a few requirements in order to be eligible. For example, the registered owner or their legal agent must donate the car. Automobile must be registered in Canada. Vehicle must be "complete" and without any significant component deficiencies. Vehicles with body damage are accepted. RVs, trailers, and boats will be subject to further restrictions. We are unable to accept vehicles that have insurance claims pending. Vehicles with liens or other encumbrances cannot be accepted. Although RVs must typically be dropped off, each instance will be treated differently.'
    ,
    `
    A: To donate your vehicle, follow the steps below.

    Choose the "Donate Now" tab from the home page. To qualify your vehicle, you will need to respond to a few straightforward questions here.
Include details about your car, your contact information, and the organization you want to donate to on the donation form.
Review the information you have provided, accept the terms and conditions, and then submit the donation request for your car.
Additional directions will be given for towing or dropping off.
For our email confirmation, check your inbox. Please check your junk mail folder if you do not immediately see the confirmation message.
Please click the link more info for comprehensive information on this subject.
    `
    ,
    `
    This sum is calculated using a variety of criteria. Please click on this link, more info, for more information that is more specific.
    `
    ,
    `
    Yes, we can take automobiles that aren't running.
    `
    ,
    `
    There must be ownership documentation on file. A bill of sale, a letter from your local registry requesting "evidence of last car registration," or a current or expired registration are all acceptable.
    `
    ,
    `
    Once it has been picked up by our towing provider and is being recycled, your car no longer needs insurance. We advise you to maintain coverage on your car until it is sold if it is coming up for auction. When your car has been sold, we'll send you an email to let you know.
    `
    ,
    `
    Within 48 hours, one of our towing agents will get in touch with you. You may then plan for the pick-up of your car at a time that is most convenient for you.
    `
    ,
    `
    The vehicle's registered owner is the rightful owner of the licence plates. The auction house or recycling company will store or remove the licence plates if they are still attached to the car when it is donated. To prevent a non-registered owner from using the plate, recyclers often smash, shred, or mark it.

    When licence plates are returned to the provincial registry, a minor reimbursement may be offered in some jurisdictions. Simply take off your licence plates at the time of pick-up if you want to keep them, or ask one of our tow assistance representatives to do it for you. They'll be glad to assist you! 

Please be aware that your city's parking authority may confiscate any automobiles left on public streets without licence plates. Although it doesn't happen often, the city may impounded your car if it is left unregistered on the street before our towing personnel arrive. These impound fees are not the responsibility of InTow.
    `
    ,
    `
    We provide our services in several regions around Canada, and we're always adding more cities. Upon receiving your online submission, we will try to locate an agent to pick up your car if we do not currently service your region.
    `
    ,
    `
    The cost of having your car towed is not your responsibility. The cost of towing is covered if the car is recycled. The towing fee is subtracted from the vehicle's sale price if it is consigned to the auction.
    `
    ,
    `
    It's advantageous for the charity if you drop off your car at our selling agent since it prevents transport expenses from being subtracted from your gift. Depending on whether we can sell or recycle your given vehicle, we have several drop-off sites. Once your online form is complete, we may give you drop-off locations and instructions.
    `
    ,
    `
    Yes! ANY recognised Canadian charity is eligible to receive a car donation. You will have the option to select any charity not currently on our receiving list when filling out your gift form (add it into the extra notes section). In order to complete the form, you must also choose a second charity from our active drop-down list.
    `
    ,
    `
    Yes, you will get a receipt for your gift that you may use as tax deduction. Guaranteed!
    `
    ,
    `After the sale of your vehicle and our accounting process is complete, we will send you an email confirming your donation has been sent to the charity. You should then receive your tax receipt within 2 weeks of the charity receiving your gift.
    `
    ,
    `
    We will email you to confirm your gift has been sent to the charity after the sale of your car and our accounting procedure are finished. Within two weeks of the charity receiving your contribution, you ought to obtain your tax receipt.
    `
    ,
    `
    Most of the time, to donate a boat, it must be dropped off to our local sales agent, and certain requirements will apply. To choose the optimal procedure, we'll work together with you and our auction agents. Visit the give now page to donate a boat right away. Please refer to FAQ #14 if you experience any issues while inputting the boat's serial number.
    `
    ,
    `
    We can help you donate their estate car, yes. Please complete our online submission form so that we can walk you through the procedure.
    `
    ,
    `Give a Car Since 2005, Canada has been in the business of helping Canadian contributors and their preferred organisations. Due to the labor-intensive administrative procedure involved with Gifts in Kind donations, many charities are unable to accept this method of fundraising. In order to save your organisation time and resources, InTow handles the various processes required in processing a car for donation.

    `
]

const FAQ = () => {
    return (
        <div>
            <Header />
            <div className='main body ui container' style={{paddingBottom: "20px"}}>
            <p className='red-heading' style={{marginBottom:"7.5px", marginTop:"20px"}}>Frequently Asked Questions(FAQ)</p>
            <p style={{marginBottom: "45px"}}>Click a question to see its answer below</p>
            <Accord id='1' title='What can i donate' content={contents[0]}/>
            <Accord id='2' title='How do i donate my vechile' content={contents[1]} />
            <Accord id='3' title='How much will my tax receipt be' content={contents[2]} />
            <Accord id='4' title='My car hasnt run in year, can i still donate it' content={contents[3]} />
            <Accord id='5' title='What if my vehicle is not registered' content={contents[4]} />
            <Accord id='6' title='What if I do not have insurance' content={contents[5]} />
            <Accord id='7' title='When will you pick up my car' content={contents[6]} />
            <Accord id='8' title='What do i do with my license plates' content={contents[7]} />
            <Accord id='9' title='Can you pick up my car from any location' content={contents[8]} />
            <Accord id='10' title='Do i have to pay for my vechile to be towed' content={contents[9]} />
            <Accord id='11' title='Can i drop off my vehicle' content={contents[10]} />
            <Accord id='12' title='Can i donate my car to another charitable group' content={contents[11]} />
            <Accord id='13' title='Is my donation tax deductible' content={contents[12]} />
            <Accord id='14' title='When will I receive my tax receipt' content={contents[13]} />
            <Accord id='15' title='The submission form will not accept my serial number' content={contents[14]}/>
            <Accord id='16' title='How do i donate a boat' content={contents[15]} />
            <Accord id='17' title='My loved one has passed. Can i donate their estate vechile' content={contents[16]} />
            <Accord id='18' title='Is InTow a charity' content={contents[17]} />

            </div>
            <Footer />
        </div>
    )
}

export default FAQ;