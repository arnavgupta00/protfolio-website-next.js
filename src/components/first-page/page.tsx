import "@/components/first-page/page.css";

export default function FirstPage() {
  return (
    <div>
      <div className="firstPage">
        <div className="fpLeftBlock">
          <div className="fpageMainTextBlock">
            <h1>Hello </h1>
            <h2>I am Arnav</h2>
            <div className="resumeLink">
                <button className="resumeLinkButton">Resume</button>
            </div>
            
          </div>
          
        </div>
        <div className="fpRightBlock">
            <div className="imageBlock"></div>
            
        </div>
      </div>
    </div>
  );
}
