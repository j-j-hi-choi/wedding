import { useCopyToClipboard } from "./wedding-util";

function Share() {
  const { isCopied, copy } = useCopyToClipboard();

  const CopyIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  );

  const copyButtonStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: "320px",
    padding: "16px 20px",
    border: "none",
    borderRadius: "16px",
    cursor: "pointer",
    fontFamily: "ryuryu",
    fontSize: "1.5rem",
    fontWeight: "600",
    textAlign: "left",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
    backgroundColor: "#F5F1E9", // 파스텔 베이지
    color: "#A89B85",
  };

  const currentUrl = "https://juhichoi.github.io/j_h_wedding/";

  return (
    <div>
      <button
        style={copyButtonStyle}
        onClick={() => copy(currentUrl)}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.08)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.05)";
        }}
      >
        <span>
          {isCopied(currentUrl)
            ? "청첩장 주소 복사하기 OK!"
            : "청첩장 주소 복사하기"}
        </span>
        <CopyIcon />
      </button>
    </div>
  );
}

export default Share;
