import React from "react";
import "../CSS/Team.css";
import "../THE S & C0..jpg";

export const Team = () => {
  return (
    <>
      <div className="container">
        <img
          className="img"
          src="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQafbtBN4i4vB5Gk9hhrlALaJqPpzQbh90Fe_6nPXv-HI_D8fwBI-MYHFT7FPRg7fA9LXZOxT--VsRHNp1SuiwxzFSOknGxEm1cns8sp8t9eBe6Hkw0tcoLeuDFLj8ouSdaf_3_9FPkOypWx5igMe3e136NE.jpg?r=2da"
          alt=""
        ></img>
      </div>

      <div className="team">
        <p className="teamTitle">Meet Our Team</p>
        <div className="teamList">
          <div className="teamItem">
            <div
              style={{
                backgroundImage: `url(${"https://eyemediastudios.co.uk/wp-content/uploads/2022/09/university-of-strathclyde-Copy.jpg"})`,
              }}
            ></div>
            <p className="member-name">Ryan G. Reynolds</p>
            <p className="member-post">Sales Director / Broker</p>
          </div>
          <div className="teamItem">
            <div
              style={{
                backgroundImage: `url(${"https://images.squarespace-cdn.com/content/v1/5521b031e4b06ebe90178744/1560360135937-3YXVZ3124L1YL2FOASSQ/headshots-linkedin-photographer.jpg?format=1500w"})`,
              }}
            ></div>
            <p className="member-name">Joshua Geller</p>
            <p className="member-post">Realtor Associate</p>
          </div>
          <div className="teamItem">
            <div
              style={{
                backgroundImage: `url(${"https://global-uploads.webflow.com/639ff8596ae419fae300b099/641017314cc67f8921c517a6_good-linkedin-profile-photo-750x500.jpeg"})`,
              }}
            ></div>
            <p className="member-name">Scarlett Johanson</p>
            <p className="member-post">Interior Designer</p>
          </div>
          <div className="teamItem">
            <div
              style={{
                backgroundImage: `url(${"https://static.wixstatic.com/media/7fa9fc_192387d80b2e443485d5972b81ce85e4~mv2.jpg/v1/fit/w_507,h_362,q_90/7fa9fc_192387d80b2e443485d5972b81ce85e4~mv2.jpg"})`,
              }}
            ></div>
            <p className="member-name">Sarah Thompson</p>
            <p className="member-post">Broker Associate</p>
          </div>
          <div className="teamItem">
            <div
              style={{
                backgroundImage: `url(${"https://cdn.wealthygorilla.com/wp-content/uploads/2020/08/The-Best-Harvey-Specter-Quotes.jpg"})`,
              }}
            ></div>
            <p className="member-name">Harvey Specter</p>
            <p className="member-post">Legal Attorney</p>
          </div>
          <div className="teamItem">
            <div
              style={{
                backgroundImage: `url(${"https://images.squarespace-cdn.com/content/v1/572e050c4d088ea3a8f0ac9d/1652567773904-09JGFWWP2CZB2O6JHCZS/TM-+Capital-147-Edit-PRINT.jpg"})`,
              }}
            ></div>
            <p className="member-name">Stephanie Sanchez</p>
            <p className="member-post">Risk Management</p>
          </div>
        </div>
      </div>
    </>
  );
};
