import { useEffect } from "react";
import { useCopyToClipboard } from "./wedding-util";

function Share() {
  const { isCopied, copy } = useCopyToClipboard();

  const ShareIcon = () => (
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
      <path d="M7 17l9.2-9.2M17 17V7H7" />
    </svg>
  );

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

  useEffect(() => {
    const kakaoApiKey = import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY;

    // kakao sdk script를 동적으로 로드
    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.8/kakao.min.js";
    script.integrity =
      "sha384-WUSirVbD0ASvo37f3qQZuDap8wy76aJjmGyXKOYgPL/NdAs8HhgmPlk9dz2XQsNv";
    script.crossOrigin = "anonymous";
    script.async = true;
    document.head.appendChild(script);

    // script가 로드된 후 init 실행
    script.onload = () => {
      if (window.Kakao) {
        if (!window.Kakao.isInitialized()) {
          window.Kakao.init(kakaoApiKey);
        }
      }
    };
  }, []);

  const currentUrl = "https://j-j-hi-choi.github.io/wedding";

  const handleShare = () => {
    console.log("kakao");
    const kakao = window.Kakao;
    kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "박호정​ෆ최주희 결혼합니다 -`ღ´- ", // 공유될 때 보이는 제목
        description: "25.12.06 엠스타하우스 모닝스타홀", // 제목 아래 설명
        imageUrl: "https://j-j-hi-choi.github.io/wedding/main-photo.jpg", // 썸네일 이미지
        link: {
          mobileWebUrl: currentUrl, // 모바일에서 공유했을 때 이동할 URL
          webUrl: currentUrl, // PC에서 공유했을 때 이동할 URL
        },
      },
      buttons: [
        {
          title: "자세히 보기!",
          link: {
            mobileWebUrl: currentUrl,
            webUrl: currentUrl,
          },
        },
      ],
    });
  };

  return (
    <div>
      <button
        className="kakao-share-btn"
        onClick={handleShare}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.08)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.05)";
        }}
      >
        <span>카카오톡 공유</span>
        <ShareIcon />
      </button>

      <button
        className="copy-url-btn"
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
