import { Map, MapMarker } from "react-kakao-maps-sdk";

function KakaoMap() {
  return (
    <Map
      center={{ lat: 35.878169, lng: 128.673931 }}
      className="kakao-map"
      level={4}
    >
      <MapMarker position={{ lat: 35.878169, lng: 128.673931 }}>
        <div
          style={{
            width: "150px",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          M스타 하우스 ♥
        </div>
      </MapMarker>
    </Map>
  );
}

export default KakaoMap;
