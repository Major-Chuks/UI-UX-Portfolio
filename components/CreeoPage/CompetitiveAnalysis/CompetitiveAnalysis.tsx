import classes from "./CompetitiveAnalysis.module.css";
import LinkIcon from "../../../assets/link.svg";

const CompetitiveAnalysis = () => {
  return (
    <div className={classes.container}>
      <div className={classes.stages}>
        <div className={classes.stage}>
          <div className={classes.left}>
            <div className={classes.topic}>Competitive <br /> Analysis  </div>
          </div>
          <div className={classes.right}>
            <div className={classes.text}>
              Having gained insight into the user&apos;s emotions when performing the tasks, I then started looking into existing solutions to understand how they are solving the problem. I careful selected three competitors for analysis. Please click on the links below to see the analysis.
            </div>
            <div className={classes.sites}>
              <div className={classes.site}>
                <div className={classes.text}>nft-inator.com</div>
                <LinkIcon />
              </div>
              <div className={classes.site}>
                <div className={classes.text}>Bueno.com</div>
                <LinkIcon />
              </div>
              <div className={classes.site}>
                <div className={classes.text}>Uniqmynft.com</div>
                <LinkIcon />
              </div>
            </div>
            <div className={classes.text}>
              Except for Bueno, the apps all lack customized recommendation catered to the user&apos;s preference/style. While Bueno featured a well-designed process of Generating NFT and minting them to the blockchain, its functionality is pretty limited.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompetitiveAnalysis;