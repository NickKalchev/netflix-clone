import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
       <div className="footer">
           <h3 className="footer__heading">
               The following links will take you to the original Netflix
           </h3>
           <ul class="footer__links">
               <li class="footer__linkItem">
                    <a class="footer__link" href="https://help.netflix.com/support/412">FAQ</a>
                </li>
                <li class="footer__linkItem">
                    <a class="footer__link" href="https://help.netflix.com">Help Center</a>
                </li>
                <li class="footer__linkItem">
                    <a class="footer__link" href="/youraccount">Account</a>
                </li>
                <li class="footer__linkItem">
                    <a class="footer__link" href="https://media.netflix.com/">Media Center</a>
                </li>
                <li class="footer__linkItem">
                    <a class="footer__link" href="http://ir.netflix.com/">Investor Relations</a>
                </li>
                <li class="footer__linkItem">
                    <a class="footer__link" href="https://jobs.netflix.com/jobs">Jobs</a>
                </li>
                <li class="footer__linkItem">
                    <a class="footer__link" href="/redeem">Redeem Gift Cards</a>
                </li>
                <li class="footer__linkItem">
                    <a class="footer__link" href="/gift-cards">Buy Gift Cards</a>
                </li>
                <li class="footer__linkItem">
                    <a class="footer__link" href="/watch">Ways to Watch</a>
                </li>
                <li class="footer__linkItem">
                    <a class="footer__link" href="https://help.netflix.com/legal/termsofuse">Terms of Use</a>
                </li>
                <li class="footer__linkItem">
                    <a class="footer__link" href="https://help.netflix.com/legal/privacy">Privacy</a>
                </li>
                <li class="footer__linkItem">
                    <a class="footer__link" href="https://help.netflix.com/legal/corpinfo">Corporate Information</a>
                </li>
                <li class="footer__linkItem">
                    <a class="footer__link" href="https://help.netflix.com/contactus">Contact Us</a>
                </li>
                <li class="footer__linkItem">
                    <a class="footer__link" href="https://fast.com">Speed Test</a>
                </li>
                <li class="footer__linkItem">
                    <a class="footer__link" href="https://help.netflix.com/legal/notices">Legal Notices</a>
                </li>
                <li class="footer__linkItem originals-link">
                    <a class="footer__link" href="https://www.netflix.com/cz-en/browse/genre/839338">Only on Netflix</a>
                </li>
            </ul>
            <div className="footer__end">
                <h3 className="footer__creator">
                    <span className='footer__end--Netflix'>Netflix</span> Clone - created by <a href='https://nick-kalchev.web.app/'>N!ck</a>
                </h3>
            </div>
       </div>
    )
}

export default Footer
