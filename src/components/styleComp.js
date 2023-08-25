// import "./StyleComp";
import "./styleComp.css";
function StyleComp() {
  const stylesVar = {
    backgroundColor: "red",
    textAlign: "center",
    fontSize: "25px"
  };
  return (
    <>
      <div style={stylesVar}>
        <h1
          style={{
            backgroundColor: "green",
            color: "red",
            fontSize: "70px",
            fontFamily: "monospace",
            opacity: "0.4"
          }}
        >
          check the div
        </h1>
        <p className="para">lorem test</p>
      </div>
    </>
  );
}

export default StyleComp;
