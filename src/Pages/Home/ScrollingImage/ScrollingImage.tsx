import React from 'react';
import './ScrollingImage.css'

const ScrollingImage = () => {
  
    
    return (
        <div>
           
<div className="scroll-filler"></div>

<div className="scroll-reveal-section">
  
  
  <div className="item">

    <div className="image-holder">
     <img src="https://images.squarespace-cdn.com/content/v1/56f1d1777da24fd2594c0f51/e710ec37-616b-4265-b428-bca9ccfb883f/18.gif?format=750w" alt="" />
    </div>

    <div className="text-holder">
              <h1 className='text-2xl font-bold'>Project risk analysis</h1>
              <p>Besides the actual structure of your project, which only you can determine based on the specifics of your project, the last question to answer is how will you manage the changes and risks associated with your project? This project risk analysis table breaks down the risks associated with your project and then ranks them based on their level of impact and probability of occurrence. Multiply these together to calculate a risk value, which is an estimate of the cost of risk.</p>
    </div>

  </div>



  <div className="item">

    <div className="image-holder">
    <img src="https://images.squarespace-cdn.com/content/v1/56f1d1777da24fd2594c0f51/e46b66eb-6ca4-45ba-9bae-27b32c69b714/16.gif?format=750w" alt="" />
    </div>
    <div className="text-holder">
    <h1  className='text-2xl font-bold'>Problem follower</h1>
    <p>Here's one last tool to help with risk management - an issue tracker, which is helpful to assess whether your project is on target as you initially thought, or if you need to push back your timeline. This ties in well with the PERT chart, since if dependent tasks become problematic, it can be a red flag to push back your project timeline. This is helpful for complex, medium to large-scale projects - eg, the Hoover Dam!</p>
    </div>
  </div>

  
  <div className="item">
    <div className="image-holder">
 <img  src="https://blog.trello.com/hs-fs/hubfs/8.more-option-modal.gif?width=647&name=8.more-option-modal.gif" alt="" />
    </div>
    <div className="text-holder">
    <h1  className='text-2xl font-bold'>Project Risk Matrix</h1>
    <p>Inform your risk analysis with this risk matrix to track risk probability against outcome levels. If a risk has extreme catastrophic impact and certainty, it needs to be managed carefully.</p>
    </div>
</div>
</div>
</div>
    );
};

export default ScrollingImage;













