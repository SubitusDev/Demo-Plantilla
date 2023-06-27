const Wave = ({ children, active, color, wUp, wDown }) => {
  let waveUp, waveDown;

  switch (wUp) {
    case 1:
      waveUp =
        "M0,64L80,90.7C160,117,320,171,480,186.7C640,203,800,181,960,181.3C1120,181,1280,203,1360,213.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z";
      break;
    case 2:
      waveUp =
        "M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,256C672,288,768,288,864,256C960,224,1056,160,1152,122.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";
      break;
    case 3:
      waveUp =
        "M0,64L60,74.7C120,85,240,107,360,144C480,181,600,235,720,224C840,213,960,139,1080,117.3C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z";
      break;
    default:
      waveUp = "";
  }

  switch (wDown) {
    case 1:
      waveDown =
        "M0,288L80,250.7C160,213,320,139,480,117.3C640,96,800,128,960,160C1120,192,1280,224,1360,240L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z";
      break;
    case 2:
      waveDown =
      "M0,32L60,37.3C120,43,240,53,360,96C480,139,600,213,720,240C840,267,960,245,1080,229.3C1200,213,1320,203,1380,197.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z";
      break;
    case 3:
      waveDown =
      "M0,64L60,64C120,64,240,64,360,101.3C480,139,600,213,720,240C840,267,960,245,1080,208C1200,171,1320,117,1380,90.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z";
      break;
    default:
      waveDown = "";
  }

  return (
    <>
      {active && (
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill={color} fillOpacity="1" d={waveUp}></path>
          </svg>
        </div>
      )}
      <div style={{ background: active ? color : "" }}>{children}</div>
      {active && (
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill={color} fillOpacity="1" d={waveDown}></path>
          </svg>
        </div>
      )}
    </>
  );
};
