import styled from "styled-components";

export const LoadingCircle = styled.div`
  .loader {
    width: 180px;
    height: 140px;
    display: block;
    margin: 5rem auto 20px;
    background-image: radial-gradient(
        circle 25px at 25px 25px,
        #dfbb42 100%,
        transparent 0
      ),
      radial-gradient(circle 50px at 50px 50px, #dfbb42 100%, transparent 0),
      radial-gradient(circle 25px at 25px 25px, #dfbb42 100%, transparent 0),
      radial-gradient(circle 15px at 15px 15px, #dfbb42 100%, transparent 0),
      linear-gradient(#dfbb42 50px, transparent 0);
    background-size: 50px 50px, 100px 75px, 50px 50px, 30px 32px, 136px 20px;
    background-repeat: no-repeat;
    background-position: 0px 30px, 30px 0px, 113px 29px, 147px 50px, 23px 60px;
    position: relative;
    box-sizing: border-box;
  }
  .loader::after {
    content: "";
    position: absolute;
    left: 2px;
    top: 65px;
    width: 2px;
    height: 6px;
    color: #dfbb42;
    box-sizing: border-box;
    animation: animloader 0.6s linear infinite;
  }

  @keyframes animloader {
    0% {
      box-shadow: 25px 0 #1883b4, 50px 0 #1883b4, 75px 0 #1883b4,
        100px 0 #1883b4, 125px 0 #1883b4, 150px 0 #1883b4, 25px 0 #1883b4,
        50px 0 #1883b4, 75px 0 #1883b4, 100px 0 #1883b4, 125px 0 #1883b4,
        150px 0 #1883b4;
    }
    50% {
      box-shadow: 25px 20px #1883b4, 50px 60px rgba(255, 255, 255, 0),
        75px 30px rgba(255, 255, 255, 0), 100px 70px rgba(255, 255, 255, 0),
        125px 40px #1883b4, 150px 60px rgba(255, 255, 255, 0), 25px 20px #1883b4,
        50px 30px #1883b4, 75px 10px #1883b4, 100px 30px #1883b4,
        125px 30px rgba(255, 255, 255, 0), 150px 30px rgba(255, 255, 255, 0);
    }
    100% {
      box-shadow: 25px 60px rgba(255, 255, 255, 0),
        50px 60px rgba(255, 255, 255, 0), 75px 50px rgba(255, 255, 255, 0),
        100px 70px rgba(255, 255, 255, 0), 125px 70px rgba(255, 255, 255, 0),
        150px 60px rgba(255, 255, 255, 0), 25px 80px rgba(255, 255, 255, 0),
        50px 80px rgba(255, 255, 255, 0), 75px 70px rgba(255, 255, 255, 0),
        100px 60px rgba(255, 255, 255, 0), 125px 30px rgba(255, 255, 255, 0),
        150px 30px rgba(255, 255, 255, 0);
    }
  }
`;
