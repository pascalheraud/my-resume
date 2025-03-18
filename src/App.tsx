import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.scss";
import {
  faArrowsToCircle,
  faCircleHalfStroke,
  faCompass,
  faGears,
  faGlasses,
  faGraduationCap,
  faHandHoldingHand,
  faList,
  faLocationDot,
  faMusic,
  faPersonCircleQuestion,
  faPersonWalking,
  faSkullCrossbones,
  faSun,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import fr from "./assets/fr.svg";
import en from "./assets/gb.svg";
import it from "./assets/it.svg";
import { useTranslation } from "react-i18next";
import { LanguagesType } from "./i18n";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function App() {
  const { t, i18n } = useTranslation();
  const [displayMap, setDisplayMap] = useState(false);
  const [mode, setMode] = useState<"dark" | "geek" | "sun">("sun");

  useEffect(() => {
    if (displayMap) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [displayMap]);

  function onClickMap() {
    setDisplayMap(!displayMap);
  }

  function dynamicClass(
    other: string,
    condition: boolean,
    conditionnalClass: string
  ): string {
    return other + (condition ? " " + conditionnalClass : "");
  }

  async function changeLanguage(language: LanguagesType) {
    await i18n.changeLanguage(language);
  }

  async function onClickEnglish() {
    await changeLanguage("en");
  }

  async function onClickFrench() {
    await changeLanguage("fr");
  }

  function Map() {
    if (displayMap) {
      return (
        <div className="map-container" onClick={onClickMap}>
          <div className="banner">
            <FontAwesomeIcon icon={faXmark} className="cross" />
          </div>
          <div className="map">
            <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=6.017806828022004%2C45.43156126520245%2C6.022098362445832%2C45.43345103159134&amp;layer=mapnik"></iframe>
            <br />
          </div>
        </div>
      );
    }
  }

  function Top() {
    return (
      <div className="top">
        <div className="photo">
          <img src="/pascal-heraud.png"></img>
        </div>
        <div className="name">
          <div className="first">Pascal</div>
          <div className="last">HERAUD</div>
        </div>
        <div className="tools">
          <div className="tools-group">
            <div
              className="tool"
              onClick={() => setMode("geek")}
              title={t("Mode Geek")}
            >
              <FontAwesomeIcon
                icon={faGlasses}
                className={dynamicClass("icon", mode == "geek", "selected")}
              />
            </div>
            <div
              className="tool"
              onClick={() => setMode("dark")}
              title={t("Mode Sombre")}
            >
              <FontAwesomeIcon
                icon={faCircleHalfStroke}
                className={dynamicClass("icon", mode == "dark", "selected")}
              />
            </div>
            <div
              className="tool"
              onClick={() => setMode("sun")}
              title={t("Mode Clair")}
            >
              <FontAwesomeIcon
                icon={faSun}
                className={dynamicClass("icon", mode == "sun", "selected")}
              />
            </div>
          </div>
          <div className="tools-group">
            <div className="tool" onClick={onClickFrench}>
              <img
                src={fr}
                className={dynamicClass(
                  "icon",
                  i18n.language === "fr",
                  "selected"
                )}
                title={t("Ce CV en Français")}
              />
            </div>
            <div className="tool" onClick={onClickEnglish}>
              <img
                src={en}
                className={dynamicClass(
                  "icon language",
                  i18n.language === "en",
                  "selected"
                )}
                title={t("Ce CV en Anglais")}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  function Item(props: {
    children: React.ReactNode;
    className?: string;
    icon?: IconProp;
    image?: string;
    onClick?: () => void;
  }): React.ReactNode {
    return (
      <div
        className={"item" + (props.className ? " " + props.className : "")}
        onClick={props.onClick}
      >
        {props.icon ? (
          <FontAwesomeIcon icon={props.icon} className="icon" />
        ) : undefined}
        {props.image ? <img src={props.image} className="icon" /> : undefined}
        {props.children}
      </div>
    );
  }

  function AboutMe() {
    return (
      <div className="about-me">
        <div className="section">
          <div className="title">{t("Contact")}</div>
          <Item className="location" icon={faLocationDot} onClick={onClickMap}>
            Pontcharra, France
          </Item>
          <Map />
          <Item className="social" icon={faLinkedin}>
            <a href="https://www.linkedin.com/in/pascal-heraud" target="_blank">
              @pascal-heraud
            </a>
          </Item>
          <Item className="social" icon={faGithub}>
            <a href="https://github.com/pascalheraud" target="_blank">
              @pascalheraud
            </a>
          </Item>
          <Item className="social" icon={faSkullCrossbones}>
            <a href="https://www.root-me.org/pascal242?lang=fr" target="_blank">
              @pascal242
            </a>
          </Item>
        </div>
        <div className="section">
          <div className="title">{t("Formation")}</div>
          <Item className="" icon={faGraduationCap}>
            BAC E (1989)
          </Item>
          <Item className="" icon={faGraduationCap}>
            DEA Informatique (1995)
          </Item>
        </div>
        <div className="section">
          <div className="title">{t("Langues")}</div>
          <Item
            image={fr}
            className={dynamicClass(
              "item language",
              i18n.language === "fr",
              "selected"
            )}
            onClick={onClickFrench}
          >
            {t("Français")} (C2)
          </Item>
          <Item
            image={fr}
            className={dynamicClass(
              "language",
              i18n.language === "en",
              "selected"
            )}
            onClick={onClickEnglish}
          >
            {t("Anglais")} (B2)
          </Item>
          <Item image={it} className="language">
            {t("Italien")} (A1)
          </Item>
        </div>
        <div className="section">
          <div className="title">{t("Compétences générales")}</div>
          <Item icon={faArrowsToCircle}>{t("Orienté résultat")}</Item>
          <Item icon={faGears}>{t("Pragmatique")}</Item>
          <Item icon={faPersonCircleQuestion}>{t("Curieux")}</Item>
          <Item icon={faList}>{t("Rigoureux")}</Item>
        </div>
        <div className="section">
          <div className="title">{t("Intérêts")}</div>
          <Item icon={faPersonWalking}>{t("Sport")}</Item>
          <Item icon={faCompass}>{t("Voyage")}</Item>
          <Item icon={faMusic}>{t("Chant/Musique")}</Item>
          <Item icon={faHandHoldingHand}>{t("Bénévolat")}</Item>
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        "my-resume " + mode + "-mode" + (displayMap ? " fixed-mode" : "")
      }
    >
      <Top />
      <div className="content">
        <AboutMe />
        <div className="main">
          <div className="experience"></div>
          <div className="experience"></div>
          <div className="skills"></div>
        </div>
      </div>
    </div>
  );
}
