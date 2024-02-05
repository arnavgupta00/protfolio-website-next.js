import "@/components/first-page/page.css";

export default function FirstPage() {
  return (
    <div>
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
    </div>
  );
}
