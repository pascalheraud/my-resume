import "@fontsource/esteban/400.css";
import "@fontsource/fira-code/400.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowsToCircle,
  faBurger,
  faCalendar,
  faCircleHalfStroke,
  faClock,
  faCompass,
  faDownload,
  faGears,
  faGlasses,
  faGlobe,
  faGraduationCap,
  faHandHoldingHand,
  faList,
  faLocationDot,
  faMagnifyingGlassMinus,
  faMagnifyingGlassPlus,
  faMusic,
  faPersonCircleQuestion,
  faPersonWalking,
  faPrint,
  faSkullCrossbones,
  faSquareCaretRight,
  faSquareUpRight,
  faSun,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import fr from "./assets/fr.svg";
import en from "./assets/gb.svg";
import it from "./assets/it.svg";
import { LanguagesType } from "./i18n";
import "./scss/App.scss";

export default function App() {
  const { t, i18n } = useTranslation();
  const [displayMap, setDisplayMap] = useState(false);
  const [mode, setMode] = useState<"dark" | "geek" | "sun">("sun");
  const [fontSize, setFontSize] = useState(5);
  const [displayBurger, setDisplayBurger] = useState(false);

  useEffect(() => {
    if (displayMap) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [displayMap]);

  function onclickBurger() {
    setDisplayBurger(!displayBurger);
  }

  const changeFontSize = useCallback(
    (inc: number) => {
      document
        .getElementsByTagName("html")[0]
        .classList.remove("size-" + fontSize);
      setFontSize(fontSize + inc);
      document
        .getElementsByTagName("html")[0]
        .classList.add("size-" + (fontSize + inc));
    },
    [fontSize]
  );

  const onClickSmaller = useCallback(() => {
    if (fontSize > 1) {
      changeFontSize(-1);
    }
  }, [fontSize, changeFontSize]);

  const onClickBigger = useCallback(() => {
    if (fontSize < 10) {
      changeFontSize(1);
    }
  }, [fontSize, changeFontSize]);

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

  const changeLanguage = useCallback(
    async (language: LanguagesType) => {
      await i18n.changeLanguage(language);
    },
    [i18n]
  );

  const onClickEnglish = useCallback(async () => {
    await changeLanguage("en");
  }, [changeLanguage]);

  const onClickFrench = useCallback(async () => {
    await changeLanguage("fr");
  }, [changeLanguage]);

  const onKey = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key.toLocaleUpperCase()) {
        case "-":
          onClickSmaller();
          break;
        case "+":
          onClickBigger();
          break;
        case "G":
          setMode("geek");
          break;
        case "D":
          setMode("dark");
          break;
        case "L":
          setMode("sun");
          break;
        case "F":
          onClickFrench();
          break;
        case "E":
          onClickEnglish();
          break;
      }
    },
    [onClickBigger, onClickEnglish, onClickFrench, onClickSmaller]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
    };
  }, [onKey]);

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
        <div className="section">
          <div className="photo">
            <img src="./pascal-heraud.jpg"></img>
          </div>
          <div className="name">
            <div className="first">Pascal</div>
            <div className="last">HERAUD</div>
          </div>
          <div className={"tools" + (displayBurger ? " visible" : "")}>
            <div className="tools-list">
              <div className="tools-group">
                <div className="tool">
                  <a
                    href={t("./2/Pascal-HERAUD-fr.pdf")}
                    title={t("Télécharger")}
                  >
                    <FontAwesomeIcon icon={faDownload} className="icon" />
                  </a>
                </div>
                <div
                  className="tool"
                  onClick={() => window.print()}
                  title={t("Imprimer (Raccourci : Ctrl-P)")}
                >
                  <FontAwesomeIcon icon={faPrint} className="icon" />
                </div>
                <div
                  className="tool"
                  title={t("Code source sur GitHub")}
                >
                  <a
                    href="https://github.com/pascalheraud/my-resume"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                  </a>
                </div>
              </div>
              <div className="tools-group">
                <div
                  className="tool"
                  onClick={onClickSmaller}
                  title={t("Diminuer la police (Raccourci : -)")}
                >
                  <FontAwesomeIcon
                    icon={faMagnifyingGlassMinus}
                    className="icon"
                  />
                </div>
                <div
                  className="tool"
                  onClick={onClickBigger}
                  title={t("Agrandir la police (Raccourci : +)")}
                >
                  <FontAwesomeIcon
                    icon={faMagnifyingGlassPlus}
                    className="icon"
                  />
                </div>
              </div>
              <div className="tools-group">
                <div
                  className="tool"
                  onClick={() => setMode("geek")}
                  title={t("Mode Geek (Raccourci : G)")}
                >
                  <FontAwesomeIcon
                    icon={faGlasses}
                    className={dynamicClass("icon", mode == "geek", "selected")}
                  />
                </div>
                <div
                  className="tool"
                  onClick={() => setMode("dark")}
                  title={t("Mode Sombre (Raccourci : D)")}
                >
                  <FontAwesomeIcon
                    icon={faCircleHalfStroke}
                    className={dynamicClass("icon", mode == "dark", "selected")}
                  />
                </div>
                <div
                  className="tool"
                  onClick={() => setMode("sun")}
                  title={t("Mode Clair (Raccourci : L)")}
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
                    title={t("Ce CV en Français (Raccourci : F)")}
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
                    title={t("Ce CV en Anglais (Raccourci : E)")}
                  />
                </div>
              </div>
            </div>
            <div className="burger" onClick={onclickBurger}>
              <FontAwesomeIcon icon={faBurger} />
            </div>
          </div>
        </div>
        <div className="section job">
          {t("Développeur Senior Java/JS Fullstack")}
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
        <div className="sections">
          <div className="section">
            <div className="title">{t("Contact")}</div>
            <Item
              className="location"
              icon={faLocationDot}
              onClick={onClickMap}
            >
              Pontcharra, France
            </Item>
            <Map />
            <Item className="social" icon={faGlobe}>
              <a href="https://heraud.ovh" target="_blank">
                https://heraud.ovh
              </a>
            </Item>
            <Item className="social" icon={faLinkedin}>
              <a
                href="https://www.linkedin.com/in/pascal-heraud"
                target="_blank"
              >
                @pascal-heraud
              </a>
            </Item>
            <Item className="social" icon={faGithub}>
              <a href="https://github.com/pascalheraud" target="_blank">
                @pascalheraud
              </a>
            </Item>
            <Item className="social" icon={faSkullCrossbones}>
              <a
                href="https://www.root-me.org/pascal242?lang=fr"
                target="_blank"
              >
                @pascal242
              </a>
            </Item>
          </div>
          <div className="section">
            <div className="title">{t("Formation")}</div>
            <Item icon={faGraduationCap}>{t("BAC E")} (1989)</Item>
            <Item icon={faGraduationCap}>{t("DEA Informatique")} (1995)</Item>
            <Item icon={faGraduationCap}>
              {t("Stages en micro électronique (FPGAs)")}
            </Item>
          </div>
          <div className="section">
            <div className="title">{t("Langues")}</div>
            <Item
              image={fr}
              className={dynamicClass(
                "language selectable",
                i18n.language === "fr",
                "selected"
              )}
              onClick={onClickFrench}
            >
              {t("Français")} (C2)
            </Item>
            <Item
              image={en}
              className={dynamicClass(
                "language selectable",
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
        <div className="section technologies">
          <div className="title">{t("Perspectives")}</div>
          <div className="techs">
            <div className="backend">{t("Fullstack (Java et/ou JS)")}</div>
            <div className="backend">{t("Formateur")}</div>
            <div className="backend">{t("Blockchain")}</div>
            <div className="backend">{t("Crypto monnaies")}</div>
            <div className="backend">{t("Réseaux de neurones / IA")}</div>
            <div className="backend">{t("Secteur des énergies")}</div>
            <div className="backend">{t("Développement durable")}</div>
            <div className="backend">{t("Innovation technologique")}</div>
            <div className="backend">{t("Cybersécurité")}</div>
          </div>
        </div>
        <div className="sections">
          <div className="section technologies">
            <div className="title">{t("Compétences techniques")}</div>
            <div className="techs">
              <div className="backend">Java ({t("ans", { count: 30 })})</div>
              <div className="backend">
                Postgresql ({t("ans", { count: 15 })})
              </div>
              <div className="backend">Postgis ({t("ans", { count: 15 })})</div>
              <div className="backend">Oracle ({t("ans", { count: 5 })})</div>
              <div className="backend">Tomcat ({t("ans", { count: 10 })})</div>
              <div className="backend">
                Hibernate ({t("ans", { count: 10 })})
              </div>
              <div className="backend">
                Spring MVC ({t("ans", { count: 15 })})
              </div>
              <div className="backend">Junit ({t("ans", { count: 20 })})</div>
              <div className="build">Maven ({t("ans", { count: 20 })})</div>
              <div className="build">Docker ({t("ans", { count: 10 })})</div>
              <div className="build">Gitlab ({t("ans", { count: 10 })})</div>
              <div className="build">Git ({t("ans", { count: 10 })})</div>
              <div className="frontend">
                Typescript ({t("ans", { count: 5 })})
              </div>
              <div className="frontend">
                Selenium ({t("ans", { count: 15 })})
              </div>
              <div className="frontend">Vue.js ({t("ans", { count: 7 })})</div>
              <div className="frontend">
                Capacitor ({t("ans", { count: 1 })})
              </div>
              <div className="frontend">React ({t("mois", { count: 2 })})</div>
              <div className="frontend">
                Angular ({t("mois", { count: 2 })})
              </div>
              <div className="devops">Zabbix ({t("ans", { count: 15 })})</div>
              <div className="devops">Ansible ({t("ans", { count: 15 })})</div>
              <div className="devops">Debian ({t("ans", { count: 15 })})</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function LaRoueVerte() {
    return (
      <div className="occupation">
        <div className="header">
          <div className="company">La Roue Verte</div>
          <div className="job">
            {t(" Associé / Architecte / Développeur / Devops")}
          </div>
          <div className="infos">
            <div className="location">
              <FontAwesomeIcon icon={faLocationDot} className="icon" />
              Grenoble
            </div>
            <div className="period">
              <FontAwesomeIcon icon={faCalendar} className="icon" />
              2011-2025
            </div>
            <div className="duration">
              <FontAwesomeIcon icon={faClock} className="icon" />
              {t("ans", { count: 11 })}
            </div>
          </div>
        </div>
        <div className="missions">
          <GZ />
          <IllicovPhase1 />
          <IllicovPhase2 />
        </div>
      </div>
    );
  }

  function Caesar() {
    return (
      <div className="mission">
        <div className="title">
          <div className="job">
            <FontAwesomeIcon icon={faSquareCaretRight} className="icon" />
            {t(
              "Technicien de mainenance / Développeur progiciel de gestion d'aggrégats"
            )}
            <div className="duration">
              <FontAwesomeIcon icon={faClock} className="icon" />
              {t("ans", { count: 2 })}
            </div>
          </div>
        </div>
        <div className="tasks">
          <ul>
            <li>{t("Maintenance et installation sur site ")}</li>
            <li>{t("Développement")}</li>
          </ul>
        </div>
        <div className="technologies">
          <div className="backend">Windev</div>
        </div>
      </div>
    );
  }

  function SMA() {
    return (
      <div className="mission">
        <div className="title">
          <div className="job">
            <FontAwesomeIcon icon={faSquareCaretRight} className="icon" />
            {t("R&D projet de recherche d'un Système Multi Agents")}
            <div className="duration">
              <FontAwesomeIcon icon={faClock} className="icon" />
              {t("ans", { count: 2 })}
            </div>
          </div>
        </div>
        <div className="tasks">
          <ul>
            <li>
              {t(
                "Développement d'une librairie de manipulation de graphes conceptuels"
              )}
            </li>
            <li>{t("Développement d'interfaces graphiques")}</li>
          </ul>
        </div>
        <div className="technologies">
          <div className="backend">Smalltalk</div>
          <div className="backend">VisualWorks</div>
          <div className="db">Oracle</div>
        </div>
      </div>
    );
  }

  function Aegis() {
    return (
      <div className="occupation">
        <div className="header">
          <div className="company">Aegis</div>
          <div className="job">
            {t(" Technicien maintenance / Développeur")}
          </div>
          <div className="infos">
            <div className="location">
              <FontAwesomeIcon icon={faLocationDot} className="icon" />
              Le Bourget du Lac
            </div>
            <div className="period">
              <FontAwesomeIcon icon={faCalendar} className="icon" />
              1996-2000
            </div>
            <div className="duration">
              <FontAwesomeIcon icon={faClock} className="icon" />
              {t("ans", { count: 4 })}
            </div>
          </div>
        </div>
        <div className="missions">
          <Caesar />
          <SMA />
        </div>
      </div>
    );
  }

  function ObjetDirect() {
    return (
      <div className="occupation">
        <div className="header">
          <div className="company">
            Objet Direct / Viseo{" "}
            <a
              href="https://www.viseo.com/fr/"
              target="_blank"
              className="box-link"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>{" "}
          </div>
          <div className="job">
            {t(" Consultant / Développeur / Architecte / Formateur")}
          </div>
          <div className="infos">
            <div className="location">
              <FontAwesomeIcon icon={faLocationDot} className="icon" />
              Grenoble
            </div>
            <div className="period">
              <FontAwesomeIcon icon={faCalendar} className="icon" />
              2000-2011
            </div>
            <div className="duration">
              <FontAwesomeIcon icon={faClock} className="icon" />
              {t("ans", { count: 11 })}
            </div>
          </div>
        </div>
        <div className="missions">
          <Kelkoo2 />
          <ST />
          <Kelkoo1 />
          <HP />
          <CreditAgricole />
        </div>
      </div>
    );
  }

  function CreditAgricole() {
    return (
      <div className="mission">
        <div className="title">
          <div className="job">
            <FontAwesomeIcon icon={faSquareCaretRight} className="icon" />
            {t("Architecture et développement du dossier client")}
          </div>
          <div className="duration">
            <FontAwesomeIcon icon={faClock} className="icon" />
            {t("mois_en", { count: 18, year: 2000 })}
          </div>
        </div>
        <div className="company">
          AMT / Crédit Agricole Technologies et Services
          <a
            href="https://www.linkedin.com/company/credit-agricole-technologies-et-services/?originalSubdomain=fr"
            target="_blank"
            className="box-link"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
          <div className="location">
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            Annecy
          </div>
        </div>
        <div className="tasks">
          <ul>
            <li>
              {t(
                "Premiers développements d'une architecture multi-couches conçue pour la refonte d'une application web"
              )}
            </li>
            <li>{t("Prototypage et expérimentation")}</li>
            <li>{t("Interface avec les services métiers Cobol")}</li>
          </ul>
        </div>
        <div className="technologies">
          <div className="backend">Weblogic</div>
          <div className="backend">Java</div>
          <div className="build">Visual Source Safe</div>
          <div className="frontend">CSS</div>
          <div className="frontend">Javascript</div>
          <div className="frontend">XML / XSLT</div>
        </div>
      </div>
    );
  }

  function HP() {
    return (
      <div className="mission">
        <div className="title">
          <div className="job">
            <FontAwesomeIcon icon={faSquareCaretRight} className="icon" />
            {t("Développement d'un site de gestion de licences")}
          </div>
          <div className="duration">
            <FontAwesomeIcon icon={faClock} className="icon" />
            {t("ans_en", { count: 10, year: 2001 })}
          </div>
        </div>
        <div className="company">
          Hewlett Packard
          <a href="https://www.hpe.com/" target="_blank" className="box-link">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
          <div className="location">
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            Grenoble
          </div>
        </div>
        <div className="tasks">
          <ul>
            <li>{t("Développement de l'application web")}</li>
            <li>{t("Design et développement d'un moteur CORBA en C++")}</li>
          </ul>
        </div>
        <div className="technologies">
          <div className="backend">Oracle</div>
          <div className="backend">Java</div>
          <div className="backend">Struts</div>
          <div className="backend">C++</div>
          <div className="backend">CORBA</div>
          <div className="build">CVS</div>
          <div className="frontend">CSS</div>
          <div className="frontend">Javascript</div>
          <div className="frontend">jQuery</div>
        </div>
      </div>
    );
  }

  function Kelkoo1() {
    return (
      <div className="mission">
        <div className="title">
          <div className="job">
            <FontAwesomeIcon icon={faSquareCaretRight} className="icon" />
            {t("Développement du nouveau moteur d'indexation d'offres")}
          </div>
          <div className="duration">
            <FontAwesomeIcon icon={faClock} className="icon" />
            {t("ans_en", { count: 3, year: 2003 })}
          </div>
        </div>
        <div className="company">
          Kelkoo
          <a href="https://www.kelkoo.fr/" target="_blank" className="box-link">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
          <div className="location">
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            Grenoble
          </div>
        </div>
        <div className="tasks">
          <ul>
            <li>
              {t("Développement et conception d'une architecture par messages")}
            </li>
            <li>{t("Développement des indexations")}</li>
          </ul>
        </div>
        <div className="technologies">
          <div className="backend">Mysql</div>
          <div className="backend">Java</div>
          <div className="backend">Apache Lucene</div>
          <div className="build">SVN</div>
        </div>
      </div>
    );
  }

  function Kelkoo2() {
    return (
      <div className="mission">
        <div className="title">
          <div className="job">
            <FontAwesomeIcon icon={faSquareCaretRight} className="icon" />
            {t("Création et déploiements des packages de monitoring")}
          </div>
          <div className="duration">
            <FontAwesomeIcon icon={faClock} className="icon" />
            {t("ans_en", { count: 1, year: 2010 })}
          </div>
        </div>
        <div className="company">
          Kelkoo
          <a href="https://www.kelkoo.fr/" target="_blank" className="box-link">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
          <div className="location">
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            Grenoble
          </div>
        </div>
        <div className="tasks">
          <ul>
            <li>
              {t(
                "Développement des sondes Nagios pour monitoring des WebServices Kelkoo"
              )}
            </li>
            <li>{t("Packaging et mise en production")}</li>
          </ul>
        </div>
        <div className="technologies">
          <div className="backend">Nagios</div>
          <div className="backend">Perl</div>
          <div className="build">SVN</div>
        </div>
      </div>
    );
  }

  function ST() {
    return (
      <div className="mission">
        <div className="title">
          <div className="job">
            <FontAwesomeIcon icon={faSquareCaretRight} className="icon" />
            {t(
              "Référent technique pour l'Architecture et développements d'applications web"
            )}
          </div>
          <div className="duration">
            <FontAwesomeIcon icon={faClock} className="icon" />
            {t("ans_en", { count: 3, year: 2006 })}
          </div>
        </div>
        <div className="company">
          STMicroelectronics
          <a href="https://www.st.com/" target="_blank" className="box-link">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
          <div className="location">
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            Crolles
          </div>
        </div>
        <div className="tasks">
          <ul>
            <li>
              {t(
                'Mise en place du "Cadre de cohérence Web" : Ensemble de composants et règles pour le développement d\'applications web'
              )}
            </li>
            <li>{t("Conception / Développement des composants")}</li>
            <li>{t("Coaching et formation des équipes de développement")}</li>
            <li>
              {t(
                "Contexte international avec les équipes d'HP Services (Grande-Bretagne, USA), ST Catagne (Italie)"
              )}
            </li>
          </ul>
        </div>
        <div className="technologies">
          <div className="backend">Oracle</div>
          <div className="backend">Java</div>
          <div className="backend">Struts</div>
          <div className="backend">XML</div>
          <div className="build">ClearCase</div>
          <div className="build">ClearQuest</div>
          <div className="frontend">Javascript</div>
          <div className="frontend">Applets</div>
          <div className="frontend">jQuery</div>
        </div>
      </div>
    );
  }

  function RandoVTT() {
    return (
      <div className="mission">
        <div className="title">
          <div className="job">
            <FontAwesomeIcon icon={faSquareCaretRight} className="icon" />
            {t("Moteur de recherche de traces GPS pour le VTT")}
          </div>
          <div className="duration">
            <FontAwesomeIcon icon={faClock} className="icon" />
            {t("ans_en", { count: 10, year: 2010 })}
          </div>
        </div>
        <div className="company">
          RandoVTT.com
          <a
            href="http://web.archive.org/web/20210210201532/http://www.randovtt.com/"
            target="_blank"
            className="box-link"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <div className="tasks">
          <ul>
            <li>
              {t(
                "Robot d'indexation des traces GPS sur les principaux sites de partage de traces"
              )}
            </li>
            <li>
              {t(
                "Moteur de recherche géographique de traces par une sélection sur une carte"
              )}
            </li>
            <li>{t("Site internet d'affichage des traces")}</li>
          </ul>
        </div>
        <div className="technologies">
          <div className="backend">Postgresql</div>
          <div className="backend">Postgis</div>
          <div className="backend">Java</div>
          <div className="backend">Spring MVC</div>
          <div className="frontend">Javascript</div>
          <div className="frontend">jQuery</div>
        </div>
      </div>
    );
  }

  function Diaps() {
    return (
      <div className="mission">
        <div className="title">
          <div className="job">
            <FontAwesomeIcon icon={faSquareCaretRight} className="icon" />
            {t("Outil d'aide à la rédaction des rapports de Graphothérapie")}
            <a
              href="https://github.com/pascalheraud/diaps"
              target="_blank"
              className="box-link"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <div className="duration">
            <FontAwesomeIcon icon={faClock} className="icon" />
            {t("ans_en", { count: 1, year: 2020 })}
          </div>
        </div>
        <div className="tasks">
          <ul>
            <li>
              {t(
                "Création d'un prototype de site internet pour une amie graphothérapeute"
              )}
            </li>
            <li>
              {t(
                "Recueil des besoins et conception de l'interface du prototype"
              )}
            </li>
            <li>
              {t("Moteur de génération d'un rapport à partir d'un modèle word")}
            </li>
            <li>
              {t("Projet en cours de finalisation et de commercialisation")}
            </li>
          </ul>
        </div>
        <div className="technologies">
          <div className="backend">Postgresql</div>
          <div className="backend">Postgis</div>
          <div className="backend">Java</div>
          <div className="backend">Spring Boot</div>
          <div className="backend">FlyDB</div>
          <div className="backend">Doc4J</div>
          <div className="backend">Spring MVC</div>
          <div className="frontend">Typescript</div>
          <div className="frontend">jQuery</div>
        </div>
      </div>
    );
  }

  function GrimpeRadar() {
    return (
      <div className="mission">
        <div className="title">
          <div className="job">
            <FontAwesomeIcon icon={faSquareCaretRight} className="icon" />
            {t("Moteur de recherche de salles d'escalade")}
            <a
              href="https://pascalheraud.github.io/grimpe-radar/"
              target="_blank"
              className="box-link"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
            <a
              href="https://github.com/pascalheraud/grimpe-radar/"
              target="_blank"
              className="box-link"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <div className="duration">
            <FontAwesomeIcon icon={faClock} className="icon" />{" "}
            {t("jours_en", { count: 3, year: 2025 })}
          </div>
        </div>
        <div className="tasks">
          <ul>
            <li>
              {t(
                "Création d'une application sans base de données pour se former sur Angular"
              )}
            </li>
            <li>
              {t(
                "Utilisation d'un service open data des équipements sportifs de France"
              )}
            </li>
            <li>
              {t(
                "Utilisation d'un service d'autocomplétion d'adresse en France (BAN)"
              )}
            </li>
          </ul>
        </div>
        <div className="technologies">
          <div className="frontend">Typescript</div>
          <div className="frontend">Angular</div>
        </div>
      </div>
    );
  }

  function BanAutocompleteNG() {
    return (
      <div className="mission">
        <div className="title">
          <div className="job">
            <FontAwesomeIcon icon={faSquareCaretRight} className="icon" />
            {t(
              "Composant de saisie d'adresse par autocomplétion sur les adresses françaises fournies par la BAN"
            )}
            <a
              href="https://github.com/pascalheraud/ban-autocomplete-ng/"
              target="_blank"
              className="box-link"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <div className="duration">
            <FontAwesomeIcon icon={faClock} className="icon" />
            {t("semaines_en", { count: 1, year: 2025 })}
          </div>
        </div>
        <div className="tasks">
          <ul>
            <li>
              {t(
                "Développement, test, documentation et publication du composant sur npmjs"
              )}
            </li>
          </ul>
        </div>
        <div className="technologies">
          <div className="frontend">Typescript</div>
          <div className="frontend">Angular</div>
        </div>
      </div>
    );
  }

  function DataBuilder() {
    return (
      <div className="mission">
        <div className="title">
          <div className="job">
            <FontAwesomeIcon icon={faSquareCaretRight} className="icon" />
            {t("Composant de manipulation de dates")}
            <a
              href="https://github.com/LaRoueVerte/datebuilder"
              target="_blank"
              className="box-link"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <div className="duration">
            <FontAwesomeIcon icon={faClock} className="icon" />
            {t("jours_en", { count: 2, year: 2025 })}
          </div>
        </div>
        <div className="tasks">
          <ul>
            <li>
              {t("Développement, test, documentation et release du composant")}
            </li>
          </ul>
        </div>
        <div className="technologies">
          <div className="backend">Java</div>
        </div>
      </div>
    );
  }

  function ElectricytyMap() {
    return (
      <div className="mission">
        <div className="job">
          <div className="title">
            <FontAwesomeIcon icon={faSquareCaretRight} className="icon" />
            {t("Réalisation d'un parseur de données d'énergie")}
            <a
              href="https://github.com/electricitymaps/electricitymaps-contrib"
              target="_blank"
              className="box-link"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
            <div className="duration">
              <FontAwesomeIcon icon={faClock} className="icon" />
              {t("jours_en", { count: 2, year: 2018 })}
            </div>
          </div>
        </div>
        <div className="tasks">
          <ul>
            <li>
              {t(
                "Réalisation d'un parser de données fournies par un producteur d'énergie pour les intégrer dans le site Electricity Maps"
              )}
              <a
                href="https://app.electricitymaps.com"
                target="_blank"
                className="box-link"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </li>
          </ul>
        </div>
        <div className="technologies">
          <div className="backend">Python</div>
        </div>
      </div>
    );
  }

  function GZ() {
    return (
      <div className="mission">
        <div className="title">
          <div className="job">
            <FontAwesomeIcon icon={faSquareCaretRight} className="icon" />
            {t("Développement de sites de covoiturage en marque blanche")}{" "}
            <a
              href="https://www.laroueverte.com"
              target="_blank"
              className="box-link"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
            <a
              href="http://web.archive.org/web/20250309010341/http://laroueverte.com/"
              target="_blank"
              className="box-link"
            >
              <FontAwesomeIcon icon={faSquareUpRight} />
            </a>
            <a
              href="https://www.covoiturage76.net/"
              target="_blank"
              className="box-link"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
            <a
              href="http://web.archive.org/web/20220408151649/https://www.covoiturage76.net/"
              target="_blank"
              className="box-link"
            >
              <FontAwesomeIcon icon={faSquareUpRight} />
            </a>
          </div>
          <div className="duration">
            <FontAwesomeIcon icon={faClock} className="icon" />
            {t("ans", { count: 6 })}
          </div>
        </div>
        <div className="tasks">
          <ul>
            <li>
              {t("Mise en place de l'architecture logicielle et matérielle")}
            </li>
            <li>{t("Architecture et conception de l'application")}</li>
            <li>{t("Migration postgreSQL depuis MySQL")}</li>
            <li>{t("Conception d'un mécanisme de marque blanche")}</li>
            <li>
              {t(
                "Conception et implémentation d'un moteur de matching de covoiturage"
              )}
            </li>
            <li>
              {t(
                "Développement et conception d'un Dealer Locator en pur Javascript"
              )}
            </li>
            <li>
              {t(
                "Intégration d'APIs de partenaires (Sitra/Apidae, Covoiturage, SSO, ...)"
              )}
            </li>
            <li>
              {t(
                "Développement d'un site de covoiturage pour le CNFPT. Intégration automatique des données des sessions"
              )}
            </li>
            <li>{t("Fourniture d'APIs de covoiturage aux partenaires")}</li>
            <li>{t("Réalisation d'une App Android hybride avec Crosswalk")}</li>
            <li>
              {t("Déploiement / Administration / Monitoring en production")}
            </li>
          </ul>
        </div>
        <div className="technologies">
          <div className="db">Postgresql</div>
          <div className="db">Postgis</div>
          <div className="backend">Jboss</div>
          <div className="backend">Java 8</div>
          <div className="backend">Hibernate</div>
          <div className="backend">Spring MVC</div>
          <div className="build">Maven</div>
          <div className="build">Ant</div>
          <div className="build">Docker</div>
          <div className="build">SVN/GIT</div>
          <div className="build">Jenkins</div>
          <div className="build">Redmine</div>
          <div className="frontend">CSS</div>
          <div className="frontend">Javascript</div>
          <div className="frontend">jQuery</div>
          <div className="frontend">Google maps</div>
          <div className="devops">Zabbix</div>
          <div className="devops">Ansible</div>
          <div className="devops">Debian</div>
        </div>
      </div>
    );
  }

  function IllicovPhase1() {
    return (
      <div className="mission">
        <div className="title">
          <div className="job">
            <FontAwesomeIcon icon={faSquareCaretRight} className="icon" />
            {t("Développement d'un site de covoiturage de lignes illicov.fr")}
            <a href="https://illicov.fr" target="_blank" className="box-link">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
            <a
              href="http://web.archive.org/web/20240130164747/https://illicov.fr/"
              target="_blank"
              className="box-link"
            >
              <FontAwesomeIcon icon={faSquareUpRight} />
            </a>
            <div className="duration">
              <FontAwesomeIcon icon={faClock} className="icon" />
              {t("ans", { count: 3 })}
            </div>
          </div>
        </div>
        <div className="tasks">
          <ul>
            <li>
              {t("Mise en place de l'architecture logicielle et matérielle")}
            </li>
            <li>{t("Architecture et conception de l'application")}</li>
            <li>
              {t(
                "Conception et implémentation d'un moteur de matching de covoiturage"
              )}
            </li>
            <li>{t("Mise en place de procédures de développement")}</li>
            <li>
              {t("Déploiement / Administration / Monitoring en production")}
            </li>
          </ul>
        </div>
        <div className="technologies">
          <div className="db">Postgresql</div>
          <div className="db">Postgis</div>
          <div className="backend">Tomcat</div>
          <div className="backend">Java 17</div>
          <div className="backend">Spring MVC</div>
          <div className="backend">Spring JDBC</div>
          <div className="backend">Junit</div>
          <div className="build">Maven</div>
          <div className="build">Docker</div>
          <div className="build">Git</div>
          <div className="build">Gitlab</div>
          <div className="frontend">SCSS</div>
          <div className="frontend">Javascript</div>
          <div className="frontend">Selenium</div>
          <div className="frontend">Vue.js</div>
          <div className="frontend">Open street maps</div>
          <div className="devops">Zabbix</div>
          <div className="devops">Ansible</div>
          <div className="devops">Debian</div>
        </div>
      </div>
    );
  }

  function IllicovPhase2() {
    return (
      <div className="mission">
        <div className="title">
          <div className="job">
            <FontAwesomeIcon icon={faSquareCaretRight} className="icon" />
            {t(
              "Modernisation et extension d'un site de covoiturage de lignes illicov.fr"
            )}{" "}
            <a href="https://illicov.fr" className="box-link" target="_blank">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
            <a
              href="http://web.archive.org/web/20240130164747/https://illicov.fr/"
              target="_blank"
              className="box-link"
            >
              <FontAwesomeIcon icon={faSquareUpRight} />
            </a>
          </div>
          <div className="duration">
            <FontAwesomeIcon icon={faClock} className="icon" />
            {t("ans", { count: 5 })}
          </div>
        </div>
        <div className="tasks">
          <ul>
            <li>{t("Modernisation de la stack front")}</li>
            <li>
              {t(
                "Développement d'une application Mobile hybride iOS / Android"
              )}
            </li>
            <li>
              {t("Déploiement / Administration / Monitoring en production")}
            </li>
          </ul>
        </div>
        <div className="technologies">
          <div className="db">Postgresql</div>
          <div className="db">Postgis</div>
          <div className="backend">Tomcat</div>
          <div className="backend">Java 17</div>
          <div className="backend">Spring MVC</div>
          <div className="backend">Spring JDBC</div>
          <div className="backend">Junit</div>
          <div className="build">Maven</div>
          <div className="build">Docker</div>
          <div className="build">Git</div>
          <div className="build">Gitlab</div>
          <div className="frontend">SCSS</div>
          <div className="frontend">Typescript</div>
          <div className="frontend">Selenium</div>
          <div className="frontend">Vue.js</div>
          <div className="frontend">Open street maps</div>
          <div className="frontend">Jest/Vitest</div>
          <div className="frontend">Capacitor</div>
          <div className="devops">Zabbix</div>
          <div className="devops">Ansible</div>
          <div className="devops">Debian</div>
        </div>
      </div>
    );
  }

  function PersonalProjects() {
    return (
      <div className="occupation">
        <div className="header">
          <div className="company">
            {t(
              "L'informatique étant une passion, il est essentiel pour moi d'explorer de nouvelles technologies et de participer au développement du logiciel libre"
            )}
          </div>
        </div>
        <div className="missions">
          <RandoVTT />
          <Diaps />
          <GrimpeRadar />
          <BanAutocompleteNG />
          <DataBuilder />
          <ElectricytyMap />
        </div>
      </div>
    );
  }

  return (
    <>
      <base target="_blank" />
      <title>{t("CV de Pascal HERAUD")}</title>
      <div
        className={
          "my-resume " +
          mode +
          "-mode" +
          (displayMap ? " fixed-mode" : "") +
          (" size-" + fontSize)
        }
      >
        <div className="container">
          <Top />
          <div className="content">
            <AboutMe />
            <div className="main">
              <div className="experiences">
                <div className="title">{t("Expériences")}</div>
                <div className="occupations">
                  <LaRoueVerte />
                  <ObjetDirect />
                  <Aegis />
                </div>
              </div>
              <div className="experiences personal">
                <div className="title">{t("Projets personnels")}</div>
                <div className="occupations">
                  <PersonalProjects />
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
