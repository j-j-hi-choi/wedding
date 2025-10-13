import { useCopyToClipboard } from "./wedding-util";

function Direction() {
  const { isCopied, copy } = useCopyToClipboard();
  const address = "대구 동구 동촌로 316 (방촌동 1113-320)";

  return (
    <div className="direction">
      <div className="direction-item">
        <div className="direction-label">주소</div>
        <div className="direction-content">
          <div className="direction-address">
            <span>{address}</span>
            <a
              onClick={() => copy("대구 동구 동촌로 316 (방촌동 1113-320)")}
              className="direction-button"
              style={{ color: isCopied(address) ? "#ff4e8f" : "#333" }}
            >
              {isCopied(address) ? "copied" : "copy"}
            </a>
          </div>
          <div className="direction-tel">
            <span>Tel. 053-939-2000</span>
            <a href={`tel:${"053-939-2000"}`} className="direction-button">
              call
            </a>
          </div>
        </div>
      </div>

      <div className="direction-item">
        <div className="direction-label">주차장</div>
        <div className="direction-content">자체주차장(총 1000대 수용가능)</div>
      </div>

      <div className="direction-item">
        <div className="direction-label">자가용</div>
        <div className="direction-content">
          경부고속도로 동대구IC에서 5분거리
        </div>
      </div>

      <div className="direction-item">
        <div className="direction-label">지하철</div>
        <div className="direction-content">
          방촌역(1호선)에서 하차 후 3번 출구(도보 5분거리)
        </div>
      </div>

      <div className="direction-item">
        <div className="direction-label">버스</div>
        <div className="direction-content">
          <p>방촌치안센터 : 618,719,805,818,836,동구1,동구1-1</p>
          <p>은하타운 : 156,518,651,708,802,814,북구3</p>
        </div>
      </div>
    </div>
  );
}

export default Direction;
