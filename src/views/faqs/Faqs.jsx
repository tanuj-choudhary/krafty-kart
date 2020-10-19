import React from 'react';

import './faqs.scss';

 function Faqs() {
    return <div className="faqs">
    <div className="faqs__heading mb-24">Dummy FAQs <span className="faqs__heading__span">(Ignore below info)</span> </div>

    <div className="faqs__block mt-20">
        <div className="faqs__block__question mb-5">
        What happens when I update my email address (or mobile number)?
        </div>
        <div className="faqs__block__answer mt-15" >
        Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).
        </div>
    </div>

    <div className="faqs__block mt-20">
        <div className="faqs__block__question mb-5">
        When will my krafty kart account be updated with the new email address (or mobile number)?
        </div>
        <div className="faqs__block__answer mt-15" >
        It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.
        </div>
    </div>

    <div className="faqs__block mt-20">
        <div className="faqs__block__question mb-5">
        What happens to my existing krafty kart account when I update my email address (or mobile number)?
        </div>
        <div className="faqs__block__answer mt-15" >
        Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.
        </div>
    </div>

    <div className="faqs__block mt-20">
        <div className="faqs__block__question mb-5">
        Does my Seller account get affected when I update my email address?
        </div>
        <div className="faqs__block__answer mt-15" >
        krafty kart has a single sign-on policy. Any changes will reflect in your Seller account also.
        </div>
    </div>
</div>;
}

export default Faqs;