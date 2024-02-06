import "@/components/first-page/page.css";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function FirstPage() {

  const isMobileOrTablet = useMediaQuery("(max-width: 767px)");
  return (
    <div>
      {isMobileOrTablet ? (
        <div className="firstPage" style={{flexDirection:"row-reverse", height:"80vh"}}>
        

        <div className="fpLeftBlock" style={{width:"40vw" , height:"80vh"}}>
          <div className="fpageMainTextBlock" style={{flexDirection:"row" , justifyContent:"center", alignItems:"center",width:"100%"}}>
            <div className="fpageMainTextBlockName" style={{flexDirection:"column" , justifyContent:"flex-start", alignItems:"flex-end",width:"100%"}} >
              <h2 style={{fontSize:"1.4rem", alignSelf:"flex-end"}}>Arnav Gupta</h2>
              <h3 style={{fontSize:"0.7rem",alignSelf:"flex-end"}}>Full Stack Developer</h3>
            </div>

            {/* <div className="resumeLink">
              <button
                className="resumeLinkButton"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1-abyMw05t0s1E4za9hM9CfHU4_trz8iy/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                Resume
              </button>
            </div> */}
          </div>
        </div>
        <div className="fpageMainTextBlockTagline" style={{width:"50vw",zIndex:"-1" , alignSelf:"start", position:"relative", left:"4%"}}>
          <div className="fpageMainTextBlockh1">
            {"Building Digital Dreams that, Spark Creativity.".split(" ").map((word, index) => (
              <h1 style={{fontSize:"5rem"}} key={index}>{word} </h1>
            ))}
          </div>

        
        </div>
      
      </div>
      ) : (
        <div className="firstPage">
        

        <div className="fpLeftBlock">
          <div className="fpageMainTextBlock">
            <div className="fpageMainTextBlockName">
              <h2>Arnav Gupta</h2>
              <h3>Full Stack Developer</h3>
            </div>

            <div className="resumeLink">
              <button
                className="resumeLinkButton"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1-abyMw05t0s1E4za9hM9CfHU4_trz8iy/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                Resume
              </button>
            </div>
          </div>
        </div>
        <div className="fpageMainTextBlockTagline" style={{zIndex:"-1"}}>
          <div className="fpageMainTextBlockh1">
            {"Building Digital Dreams that, Spark Creativity.".split(" ").map((word, index) => (
              <h1 key={index}>{word}</h1>
            ))}
          </div>

        
        </div>
        <div className="fpRightBlock">
          <div className="imageBlock"></div>
        </div>
      </div>
      )}
      
    </div>
  );
}
