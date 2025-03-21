import loadFunction from "../utils";


function LoadingScreen() {
  return (
   <>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" id = "loadingEffect">
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cccoil-grad">
          <stop stopColor="HSL(120, 100%, 50%)" offset="0%" />
          <stop stopColor="HSL(200, 100%, 50%)" offset="100%" />
        </linearGradient>
        <style>
          {`
            .swirl {
              animation: fadeInFromCenter 1s forwards;
              opacity: 0;
            }
            @keyframes fadeInFromCenter {
              0% {
                stroke-dasharray: 0 2281;
              }
              100% {
                stroke-dasharray: var(--dasharray);
                opacity: var(--opacity);
              }
            }
              .swirl:nth-child(20) {
  animation-delay: 0s;
}
.swirl:nth-child(19) {
  animation-delay: 0.1s;
}
.swirl:nth-child(18) {
  animation-delay: 0.2s;
}
.swirl:nth-child(17) {
  animation-delay: 0.3s;
}
.swirl:nth-child(16) {
  animation-delay: 0.4s;
}
.swirl:nth-child(15) {
  animation-delay: 0.5s;
}
.swirl:nth-child(14) {
  animation-delay: 0.6s;
}
.swirl:nth-child(13) {
  animation-delay: 0.7s;
}
.swirl:nth-child(12) {
  animation-delay: 0.8s;
}
.swirl:nth-child(11) {
  animation-delay: 0.9s;
}
.swirl:nth-child(10) {
  animation-delay: 1.0s;
}
.swirl:nth-child(9) {
  animation-delay: 1.1s;
}
.swirl:nth-child(8) {
  animation-delay: 1.2s;
}
.swirl:nth-child(7) {
  animation-delay: 1.3s;
}
.swirl:nth-child(6) {
  animation-delay: 1.4s;
}
.swirl:nth-child(5) {
  animation-delay: 1.5s;
}
.swirl:nth-child(4) {
  animation-delay: 1.6s;
}
.swirl:nth-child(3) {
  animation-delay: 1.7s;
}
.swirl:nth-child(2) {
  animation-delay: 1.8s;
}
.swirl:nth-child(1) {
  animation-delay: 1.9s;
}
          `}
        </style>
      </defs>
      <g stroke="url(#cccoil-grad)" fill="none" strokeLinecap="round">
        <circle className="swirl" r="363" cx="400" cy="400" strokeWidth="4.5" strokeDasharray="1939 2281" transform="rotate(360, 400, 400)" style={{ '--dasharray': '1939 2281', '--opacity': 0.05 }} />
        <circle className="swirl" r="346.5" cx="400" cy="400" strokeWidth="4.5" strokeDasharray="1762 2177" transform="rotate(343, 400, 400)" style={{ '--dasharray': '1762 2177', '--opacity': 0.10 }} />
        <circle className="swirl" r="330" cx="400" cy="400" strokeWidth="4.5" strokeDasharray="1595 2073" transform="rotate(326, 400, 400)" style={{ '--dasharray': '1595 2073', '--opacity': 0.14 }} />
        <circle className="swirl" r="313.5" cx="400" cy="400" strokeWidth="4.5" strokeDasharray="1435 1970" transform="rotate(309, 400, 400)" style={{ '--dasharray': '1435 1970', '--opacity': 0.19 }} />
        <circle className="swirl" r="297" cx="400" cy="400" strokeWidth="4.5" strokeDasharray="1284 1866" transform="rotate(291, 400, 400)" style={{ '--dasharray': '1284 1866', '--opacity': 0.23 }} />
        <circle className="swirl" r="280.5" cx="400" cy="400" strokeWidth="4.5" strokeDasharray="1141 1762" transform="rotate(274, 400, 400)" style={{ '--dasharray': '1141 1762', '--opacity': 0.28 }} />
        <circle className="swirl" r="264" cx="400" cy="400" strokeWidth="4.5" strokeDasharray="1007 1659" transform="rotate(257, 400, 400)" style={{ '--dasharray': '1007 1659', '--opacity': 0.32 }} />
        <circle className="swirl" r="247.5" cx="400" cy="400" strokeWidth="4.5" strokeDasharray="881 1555" transform="rotate(240, 400, 400)" style={{ '--dasharray': '881 1555', '--opacity': 0.37 }} />
        <circle className="swirl" r="231" cx="400" cy="400" strokeWidth="4.5" strokeDasharray="764 1451" transform="rotate(223, 400, 400)" style={{ '--dasharray': '764 1451', '--opacity': 0.41 }} />
        <circle className="swirl" r="214.5" cx="400" cy="400" strokeWidth="4.5" strokeDasharray="655 1348" transform="rotate(206, 400, 400)" style={{ '--dasharray': '655 1348', '--opacity': 0.46 }} />
        <circle className="swirl" r="198" cx="400" cy="400" strokeWidth="4.5" strokeDasharray="554 1244" transform="rotate(189, 400, 400)" style={{ '--dasharray': '554 1244', '--opacity': 0.50 }} />
        <circle className="swirl" r="181.5" cx="400" cy="400" strokeWidth="4.5" strokeDasharray="462 1140" transform="rotate(171, 400, 400)" style={{ '--dasharray': '462 1140', '--opacity': 0.55 }} />
        <circle className="swirl" r="165" cx="400" cy="400" strokeWidth="4.5" strokeDasharray="378 1037" transform="rotate(154, 400, 400)" style={{ '--dasharray': '378 1037', '--opacity': 0.59 }} />
        <circle className="swirl" r="148.5" cx="400" cy="400" strokeWidth="4.5" strokeDasharray="302 933" transform="rotate(137, 400, 400)" style={{ '--dasharray': '302 933', '--opacity': 0.64 }} />
        <circle className="swirl" r="132" cx="400" cy="400" strokeWidth="4.5" strokeDasharray="235 829" transform="rotate(120, 400, 400)" style={{ '--dasharray': '235 829', '--opacity': 0.68 }} />
        <circle className="swirl" r="115.5" cx="400" cy="400" strokeWidth="4.5" strokeDasharray="176 726" transform="rotate(103, 400, 400)" style={{ '--dasharray': '176 726', '--opacity': 0.73 }} />
        <circle className="swirl" r="99" cx="400" cy="400" strokeWidth="4.5" strokeDasharray="126 622" transform="rotate(86, 400, 400)" style={{ '--dasharray': '126 622', '--opacity': 0.77 }} />
        <circle className="swirl" r="82.5" cx="400" cy="400" strokeWidth="4.5" strokeDasharray="84 518" transform="rotate(69, 400, 400)" style={{ '--dasharray': '84 518', '--opacity': 0.82 }} />
        <circle className="swirl" r="66" cx="400" cy="400" strokeWidth="4.5" strokeDasharray="50 415" transform="rotate(51, 400, 400)" style={{ '--dasharray': '50 415', '--opacity': 0.86 }} />
        <circle className="swirl" r="49.5" cx="400" cy="400" strokeWidth="4.5" strokeDasharray="25 311" transform="rotate(34, 400, 400)" style={{ '--dasharray': '25 311', '--opacity': 0.91 }} />
        <circle className="swirl" r="33" cx="400" cy="400" strokeWidth="4.5" strokeDasharray="8 207" transform="rotate(17, 400, 400)" style={{ '--dasharray': '8 207', '--opacity': 0.95 }} />
        <circle className="swirl" r="16.5" cx="400" cy="400" strokeWidth="4.5" strokeDasharray="0 104" style={{ '--dasharray': '0 104', '--opacity': 1.00 }} />
      </g>
    </svg>
    </>
  );
};

export default LoadingScreen;
