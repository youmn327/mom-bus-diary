import { stops } from "../data/stops";
import { useNavigate } from "react-router-dom";
import "./BusMap.css";

const BusMap = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="app-title">엄마의 버스 일기장</h1>
      <div className="line-container">
        {stops.map((stop, index) => (
          <div key={stop.id} className="stop-wrapper">
            {/* 정류장 */}
            <div className="bus-stop" onClick={() => navigate(`/diary/${stop.diaryId}`)}>
              <div className="stop-name">{stop.name}</div>
              🚌
              <div className="tooltip">
                <p>{stop.preview}</p>
              </div>
            </div>

            {/* 선 연결 (마지막 정류장 제외) */}
            {index !== stops.length - 1 && <div className="line" />}
          </div>
        ))}
      </div>
    </>
  );
};

export default BusMap;
