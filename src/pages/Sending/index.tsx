/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import style from "./style.module.css";

import { colors } from "../../data/colors";
import { CgProfile } from "react-icons/cg";
import Navbar from "../../components/Navbar";
import Api from "../../api";

export default function index() {
  const colorButtons: string[] = ["Pink", "Blue", "Green", "Yellow"];
  const maxMessageLength: number = 240;

  const [cardColor, setCardColor] = useState<string>(
    colorButtons[Math.floor(Math.random() * colorButtons.length)]
  );
  const [message, setMessage] = useState<string>("");
  const [uploadedFile, setUploadedFile] = useState<File | undefined>(undefined);
  const [profileImage, setProfileImage] = useState<string>("");
  const hiddenFileInput = React.useRef<HTMLInputElement | null>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | null) => {
    setUploadedFile(event?.target.files?.[0]);
  };

  let { paramUser } = useParams<{ paramUser: string }>();
  const navigate = useNavigate();

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

  const handleSubmit = (
    paramUsername: string,
    Message: string,
    CardColor: string,
    ProfileImage: string
  ) => {
    const response = Api.SendWhisper(
      paramUsername,
      Message,
      CardColor,
      ProfileImage
    );
    response.then((res) => {
      if (res.status === 204) {
        navigate("/whispersent", { replace: true });
      }
    });
  };

  return (
    <div className={style.main}>
      <Navbar />
      <h2>Send a whisper to {paramUser}!</h2>
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
      <button
        style={{ backgroundColor: colors[cardColor].darkColor }}
        className={style.sendButton}
        onClick={() =>
          handleSubmit(paramUser!, message, cardColor, profileImage)
        }
      >
        Send
      </button>
    </div>
  );
}
