import React from 'react'
import AnimatedIllustration from "../../svg/AnimatedIllustration"
import "./Illustration.scss"

const Illustration: React.FunctionComponent = () => {


  return (
    <section className="illustration">
      <h3 className="instruction">
        Check out a tier list by pressing a button above 
      </h3>
      <article className="info__container">
        <h3 className="info__title">How it works</h3>
        <p className="info">
          - Tier 1 (GOLD): Users registered for 10 or more years <br/>
          - Tier 2 (SILVER): Users registered between 5 and 10 years <br/>
          - Tier 3 (BRONZE): Users registered within less that 5 years <br/>
        </p>
      </article>
      <div className="animation">
        <AnimatedIllustration />
      </div>
    </section>
  );
}

export default Illustration;
