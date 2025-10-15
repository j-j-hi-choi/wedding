import { useState } from "react";
import { useCopyToClipboard } from "./wedding-util";

export type AccountType = {
  bank: string;
  number: string;
};

function Account() {
  const [isGroomOpen, setIsGroomOpen] = useState(false);
  const toggleGroomAccount = () => setIsGroomOpen(!isGroomOpen);

  const [isBrideOpen, setIsBrideOpen] = useState(false);
  const toggleBrideAccount = () => setIsBrideOpen(!isBrideOpen);

  const { isCopied, copy } = useCopyToClipboard();

  const groom1: AccountType = { bank: "농협", number: "3522257323463" };
  const groom2: AccountType = { bank: "국민", number: "90470100037167" };
  const groom3: AccountType = { bank: "국민", number: "72720200253222" };
  const bride1: AccountType = { bank: "대구은행", number: "508119830812" };
  const bride2: AccountType = { bank: "대구은행", number: "508134677971" };
  const bride3: AccountType = { bank: "농협", number: "3560441683133" };

  return (
    <div className="account-container">
      <div className="account-groom">
        <div
          className={`account-header ${isGroomOpen ? "open" : ""}`}
          style={{ backgroundColor: isGroomOpen ? "#bde0fe" : "#a2d2ff" }}
          onClick={toggleGroomAccount}
        >
          <span className="account-subject">신랑</span>
          <span className="account-icon">▼</span>
        </div>

        <div className={`account-content ${isGroomOpen ? "open" : ""}`}>
          <div className="account-content-wrapper">
            <div className="account-holder">
              <p>[혼주] 박병덕</p>
              <p>
                {groom1.bank} {groom1.number}
              </p>
            </div>
            <button
              className="account-copy"
              onClick={() => copy(`${groom1.bank} ${groom1.number}`)}
            >
              {isCopied(`${groom1.bank} ${groom1.number}`) ? "OK!" : "복사"}
            </button>
          </div>

          <div className="account-content-wrapper">
            <div className="account-holder">
              <p>[혼주] 정칠미</p>
              <p>
                {groom2.bank} {groom2.number}
              </p>
            </div>
            <button
              className="account-copy"
              onClick={() => copy(`${groom2.bank} ${groom2.number}`)}
            >
              {isCopied(`${groom2.bank} ${groom2.number}`) ? "OK!" : "복사"}
            </button>
          </div>

          <div className="account-content-wrapper">
            <div className="account-holder">
              <p>박호정</p>
              <p>
                {groom3.bank} {groom3.number}
              </p>
            </div>
            <button
              className="account-copy"
              onClick={() => copy(`${groom3.bank} ${groom3.number}`)}
            >
              {isCopied(`${groom3.bank} ${groom3.number}`) ? "OK!" : "복사"}
            </button>
          </div>
        </div>
      </div>

      <div className="account-bride">
        <div
          className={`account-header ${isBrideOpen ? "open" : ""}`}
          style={{ backgroundColor: isBrideOpen ? "#bde0fe" : "#a2d2ff" }}
          onClick={toggleBrideAccount}
        >
          <span className="account-subject">신부</span>
          <span className="account-icon">▼</span>
        </div>

        <div className={`account-content ${isBrideOpen ? "open" : ""}`}>
          <div className="account-content-wrapper">
            <div className="account-holder">
              <p>[혼주] 최동춘</p>
              <p>
                {bride1.bank} {bride1.number}
              </p>
            </div>
            <button
              className="account-copy"
              onClick={() => copy(`${bride1.bank} ${bride1.number}`)}
            >
              {isCopied(`${bride1.bank} ${bride1.number}`) ? "OK!" : "복사"}
            </button>
          </div>

          <div className="account-content-wrapper">
            <div className="account-holder">
              <p>[혼주] 노미해</p>
              <p>
                {bride2.bank} {bride2.number}
              </p>
            </div>
            <button
              className="account-copy"
              onClick={() => copy(`${bride2.bank} ${bride2.number}`)}
            >
              {isCopied(`${bride2.bank} ${bride2.number}`) ? "OK!" : "복사"}
            </button>
          </div>

          <div className="account-content-wrapper">
            <div className="account-holder">
              <p>최주희</p>
              <p>
                {bride3.bank} {bride3.number}
              </p>
            </div>
            <button
              className="account-copy"
              onClick={() => copy(`${bride3.bank} ${bride3.number}`)}
            >
              {isCopied(`${bride3.bank} ${bride3.number}`) ? "OK!" : "복사"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
