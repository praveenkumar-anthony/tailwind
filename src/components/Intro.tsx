import { CardBody, CardHeader, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

import Icon from "../assets/document.png";
import { CFSCard } from "./Card";
import { CFSButton } from "./Button";

import "../App.css";

function Intro() {
  const history = useNavigate();

  return (
    <>
      <div className="flex flex-col p-6 gap-6 px-10 bg-white">
        <div className="flex">
          <CFSCard type="tile" onClick={(e) => console.log(e)}>
            <CardHeader>
              <Image height="90" width="90" src={Icon} />
            </CardHeader>
            <CardBody>
              <h2 className="text-2xl mb-1.5">You have an adviser</h2>
              <span>Our records show that Adrian Smith has been managing your investments. 
                Before opening a pension account we recommend consulting your adviser.</span>
            </CardBody>
          </CFSCard>
        </div>
        <div className="flex">
          <CFSCard type="tile" onClick={(e) => console.log(e)}>
            <CardHeader>
              <Image height="90" width="90" src={Icon} />
            </CardHeader>
            <CardBody>
              <h2 className="text-2xl mb-1.5">Last chance to top up super</h2>
              <span>Money can only be transferred from your super to your pension account at the 
                time it's opened. If you're planning to top up your super, this needs to 
                be completed first.
              </span>
            </CardBody>
          </CFSCard>
        </div>        
        <div className="flex gap-6">
            <CFSCard className="basis-1/2">
              <CardHeader>
                <Image height="90" width="90" src={Icon} />
              </CardHeader>
              <CardBody>
                <h2 className="text-2xl mb-1.5">Consider your insurance needs</h2>
                <p>Unlike super, insurance is not available within a pension 
                  account. Consider if you want to retain your insurance by 
                  leaving your super account open.</p>
              </CardBody>
            </CFSCard>           
            <CFSCard className="basis-1/2">
              <CardHeader>
                <Image height="90" width="90" src={Icon} />
              </CardHeader>
              <CardBody>
                <h2 className="text-2xl mb-1.5">Have your ID handy</h2>
                <p>We need details from two forms of ID (Australian license, 
                  Australian passport, Australian visa, Medicare, or Centrelink 
                  Concession Card).</p>
              </CardBody>
            </CFSCard>                   
        </div>
      </div>
      <CFSButton onPress={() => history('/eligibility')} className="mt-10" type="primary">Start Application</CFSButton>
    </>
  );
}

export default Intro;
