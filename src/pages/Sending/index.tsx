/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";

import style from "./style.module.css";

import { colors } from "../../data/colors";
import { CgProfile } from "react-icons/cg";
import Navbar from "../../components/Navbar";

export default function index() {
  const colorButtons: string[] = ["Pink", "Blue", "Green", "Yellow"];
  const maxMessageLength: number = 240;

  const [cardColor, setCardColor] = useState<string>("Pink");
  const [message, setMessage] = useState<string>("");
  const [uploadedFile, setUploadedFile] = useState<File | undefined>(undefined);
  const [profileImage, setProfileImage] = useState<string>("");
  const hiddenFileInput = React.useRef<HTMLInputElement | null>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | null) => {
    setUploadedFile(event?.target.files?.[0]);
  };
  useEffect(() => {
    const readFileDataAsBase64 = async (): Promise<string> => {
      const file = uploadedFile;

      const arrayBufferToBase64 = (buffer: ArrayBuffer) => {
        var binary = "";
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
      };

      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event) => {
          const result = event.target?.result;
          resolve(
            typeof result === "string"
              ? result
              : arrayBufferToBase64(result ?? new ArrayBuffer(0))
          );
        };

        reader.onerror = (err) => {
          reject(err);
        };

        reader.readAsDataURL(file!);
      });
    };

    (async () => {
      setProfileImage((await readFileDataAsBase64()) ?? "");
    })();
  }, [uploadedFile, setProfileImage]);

  return (
    <div className={style.main}>
      <Navbar />
      <h2>Send a whisper to Casey!</h2>
      <div
        style={{ backgroundColor: colors[cardColor].lightColor }}
        className={style.whisperParams}
      >
        <div>
          <div className={style.profilePicture}>
            {profileImage ? (
              <img src={profileImage} alt="profile" />
            ) : (
              <button
                style={{ backgroundColor: colors[cardColor].darkColor }}
                onClick={(event) => {
                  hiddenFileInput.current?.click();
                }}
              >
                <CgProfile />
              </button>
            )}
            <span>{uploadedFile?.name}</span>
          </div>

          <input
            style={{ display: "none" }}
            type="file"
            ref={hiddenFileInput}
            onChange={handleChange}
          />
        </div>
        <textarea
          style={{ backgroundColor: colors[cardColor].darkColor }}
          cols={30}
          rows={10}
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          maxLength={240}
        />
        <p
          style={{
            color:
              message.length >= 230
                ? "#c00000"
                : message.length >= 210
                ? "#c08300"
                : "#3c195acd",
          }}
        >
          {maxMessageLength - message.length}
        </p>
        <ul className={style.colorsList}>
          {colorButtons.map((item) => {
            return (
              <li>
                <button
                  className={style[item.toLowerCase()]}
                  onClick={() => setCardColor(item)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
