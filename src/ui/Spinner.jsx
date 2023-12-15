import styled from "styled-components";
import "../css/spinner.css";
const SpinnerContainer = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

function Spinner() {
  return (
    <SpinnerContainer>
      <div className="loader"></div>
    </SpinnerContainer>
  );
}

export default Spinner;
