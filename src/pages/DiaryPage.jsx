import { useParams, useNavigate } from "react-router-dom";

const diary = {
  "2025-04-01": "비 오는 출근길, 엄마는 풍무동입구에서 버스를 탔어요.",
  "2025-04-02": "풍무초등학교 근처엔 아이들이 뛰어놀았어요.",
  "2025-04-03": "사우역에서 일찍 내리고 커피를 마셨어요.",
};

const DiaryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const content = diary[id];

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>📝 {id} 일기</h2>
      <p style={styles.content}>{content || "일기를 찾을 수 없습니다."}</p>

      {/* 🔙 뒤로 가기 버튼 */}
      <button style={styles.button} onClick={() => navigate(-1)}>
        ← 뒤로 가기
      </button>
    </div>
  );
};

const styles = {
  page: {
    padding: "2rem",
    fontFamily: "Noto Sans KR, sans-serif",
    backgroundColor: "#fffdf7",
    minHeight: "100vh",
  },
  title: {
    fontSize: "20px",
    marginBottom: "1rem",
    color: "#333",
  },
  content: {
    fontSize: "15px",
    lineHeight: 1.6,
    color: "#444",
    marginBottom: "2rem",
  },
  button: {
    padding: "8px 14px",
    fontSize: "14px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#333",
    color: "#fff",
    cursor: "pointer",
  },
};

export default DiaryPage;
