import { useEffect, useRef, useState } from "react";
import * as _cards from "./assets/0_cards";
import * as _catalog from "./assets/1_catalog";
import * as _hermitage from "./assets/2_hermitage";
import * as _dinosaurs from "./assets/3_dinosaurs";
import * as _study from "./assets/4_study";
import * as _play from "./assets/5_play";
import * as _guide from "./assets/6_guide";
import * as _knockout from "./assets/7_knockout";
import * as _calendar from "./assets/8_calendar";
import * as _heretics from "./assets/9_heretics";
import { Footer } from "./components/Footer";
import { ImageGroup } from "./components/ImageGroup";
import { ImageViewer } from "./components/ImageViewer";
import { Loader } from "./components/Loader";
import { SliderSlick } from "./components/SliderSlick";

import "./App.scss";

const titles = {
  0: <span>Дизайнер книг</span>,
  1: (
    <span>
      Групповой автопортрет неизвестного <br /> с хвостом и на шпильках
    </span>
  ),
  2: <span>Долгий ясный день</span>,
  3: (
    <span>
      Палеонтологический сборник статей: <br /> про динозавров и не только
    </span>
  ),
  4: (
    <span>
      Анализ типографики археологических <br /> изданий: канон и его
      интерпретации
    </span>
  ),
  5: (
    <span>
      Пьеса <br /> «Дети проходных дворов»
    </span>
  ),
  6: (
    <span>
      192 часа <br /> на западном побережье
    </span>
  ),
  7: (
    <span>
      Книга художника <br /> «НОКАУТ»
    </span>
  ),
  8: <span>PERFORMANCE</span>,
  9: (
    <span>
      Книга художника <br /> «Песни еретиков»
    </span>
  ),
  10: <span>Образование</span>,
  11: <span>Контакты</span>,
};

const themes = {
  0: "white",
  1: "black",
};

const thresholds = [
  {
    limit: 855,
    titleIndex: 0,
    theme: themes[0],
  },
  {
    limit: 3699,
    titleIndex: 1,
    theme: themes[0],
  },
  {
    limit: 6544,
    titleIndex: 2,
    theme: themes[0],
  },
  {
    limit: 9388,
    titleIndex: 3,
    theme: themes[0],
  },
  {
    limit: 12243,
    titleIndex: 4,
    theme: themes[1],
  },
  {
    limit: 15085,
    titleIndex: 5,
    theme: themes[1],
  },
  {
    limit: 17929,
    titleIndex: 6,
    theme: themes[0],
  },
  {
    limit: 20771,
    titleIndex: 7,
    theme: themes[0],
  },
  {
    limit: 23058,
    titleIndex: 8,
    theme: themes[1],
  },
  {
    limit: 25748,
    titleIndex: 9,
    theme: themes[1],
  },
  {
    limit: 26938,
    titleIndex: 10,
    theme: themes[0],
  },
  {
    limit: 99699,
    titleIndex: 11,
    theme: themes[0],
  },
];

function _setTitle(scrollTop, setTitle) {
  for (const { limit, titleIndex } of thresholds) {
    if (scrollTop < limit) {
      setTitle(titles[titleIndex]);
      break;
    }
  }
}
function _setTheme(scrollTop, setTheme) {
  for (const { limit, theme } of thresholds) {
    if (scrollTop < limit) {
      setTheme(theme);
      break;
    }
  }
}

function Header({ refs, scrollTop, theme }) {
  useEffect(() => {
    _setTitle(scrollTop, setTitle);
    _setTheme(scrollTop, setTheme);
  }, [scrollTop]);

  const [title, setTitle] = useState(titles["0"]);
  const [_theme, setTheme] = useState(theme);

  return (
    <header className={_theme}>
      <div className="logo ibm-plex-sans-regular">
        <a
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          Маминова Анна
        </a>
      </div>
      <h1 className="content-title ibm-plex-sans-bold">{title}</h1>
      <nav>
        <ul>
          <li>
            <a
              className="ibm-plex-sans-regular"
              onClick={() => {
                refs["education"].current.scrollIntoView();
              }}
            >
              Образование
            </a>
          </li>
          <li>
            <a
              className="ibm-plex-sans-regular"
              onClick={() => {
                refs["contacts"].current.scrollIntoView();
              }}
            >
              Контакты
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Card({ src, text, orientation, onClick }) {
  return (
    <>
      <div className="card-wrapper" onClick={onClick}>
        <img className={`card-image ${orientation}`} src={src} />
        <div className="white-card-wrapper">
          <div className="card-text ibm-plex-sans-bold">{text}</div>
        </div>
      </div>
    </>
  );
}

const cards = [
  {
    name: "catalog",
    src: _cards.card_1,
    text: (
      <span>
        Каталог выставки <br /> Петра Швецова
      </span>
    ),
    orientation: "horizontal",
  },
  {
    name: "hermitage",
    src: _cards.card_2,
    text: (
      <span>
        Документальная книга
        <br />
        про экспедицию
        <br />
        Государственного Эрмитажа
      </span>
    ),
    orientation: "horizontal",
  },
  {
    name: "dinosaurs",
    src: _cards.card_3,
    text: (
      <span>
        Палеонтологический
        <br />
        сборник статей:
        <br />
        про динозавров и не только
      </span>
    ),
    orientation: "horizontal",
  },
  {
    name: "study",
    src: _cards.card_4,
    text: (
      <span>
        Исследуя
        <br />
        типографику
      </span>
    ),
    orientation: "vertical",
  },
  {
    name: "play",
    src: _cards.card_5,
    text: (
      <span>
        Пьеса
        <br />
        «Дети проходных дворов»
      </span>
    ),
    orientation: "horizontal",
  },
  {
    name: "guide",
    src: _cards.card_6,
    text: (
      <span>
        Путеводитель
        <br />
        по трём штатам
      </span>
    ),
    orientation: "horizontal",
  },
  {
    name: "knockout",
    src: _cards.card_7,
    text: (
      <span>
        Книга художника
        <br />
        «НОКАУТ»
      </span>
    ),
    orientation: "horizontal",
  },
  {
    name: "performance",
    src: _cards.card_8,
    text: (
      <span>
        Календарь
        <br />
        перформансов
      </span>
    ),
    orientation: "vertical",
  },
  {
    name: "heretics",
    src: _cards.card_9,
    text: (
      <span>
        Книга художника
        <br />
        «Песни еретиков»
      </span>
    ),
    orientation: "horizontal",
  },
];

function Cards({ refs }) {
  return (
    <div className="cards main-container">
      {cards.map(({ src, text, orientation, link, name }, i) => {
        const ref = refs[name];
        const onClick = () => {
          ref.current.scrollIntoView();
        };

        return (
          <Card
            key={i}
            src={src}
            text={text}
            link={link}
            orientation={orientation}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
}

function Body({ children }) {
  return <div className="body-wrapper adaptive">{children}</div>;
}

function createHiddenImages(images) {
  return images.map((catalogImage, index) => {
    return (
      <ImageViewer key={index} className="hidden" hidden src={catalogImage} />
    );
  });
}

const catalogImages = [
  _catalog.catalog_1,
  _catalog.catalog_2,
  _catalog.catalog_3,
];

function Catalog({ refs }) {
  return (
    <div className="catalog">
      <div ref={refs} className="anchor"></div>{" "}
      <ImageGroup>
        {createHiddenImages(catalogImages)}
        <SliderSlick images={catalogImages} centerPadding={425} />
        <div className="main-container">
          <div className="main-container-text">
            <div className="main-container-info ibm-plex-sans-regular">
              <p>
                Каталог посвящен выставке Петра Швецова «Групповой
                <br />
                автопортрет неизвестного с хвостом и на шпильках».
                <br />
                Выставка проходила в 2022 году в галерее современного
                <br />
                искусства Марины Гисич в Санкт-Петербурге.
                <br />
                <br />
                Отличительной чертой каталога является калька,
                <br />
                на которой располагаются названия работ.
                <br />
                Зритель сначала видит имя героини и, перевернув
                <br />
                страницу, узнает как она выглядит на картине.
              </p>
            </div>

            <div className="main-container-setting">
              <p>
                Формат: 180 × 210 мм
                <br />
                Бумага: мел. глянц. 130 г/м², калька Spectral 80 г/м²
                <br />
                178 страниц
                <br />
                Фотограф: Маминова Диана
              </p>
            </div>
          </div>
          <ImageViewer className="image_4" src={_catalog.catalog_4} />
          <ImageViewer className="image_5" src={_catalog.catalog_5} />
          <ImageViewer className="image_6" src={_catalog.catalog_6} />
          <ImageViewer className="image_7" src={_catalog.catalog_7} />
          <ImageViewer className="image_8" src={_catalog.catalog_8} />
          <ImageViewer className="image_9" src={_catalog.catalog_9} />
        </div>
      </ImageGroup>
    </div>
  );
}

const hermitageImages = [
  _hermitage.hermitage_1,
  _hermitage.hermitage_2,
  _hermitage.hermitage_3,
];

function Hermitage({ refs }) {
  return (
    <div className="hermitage">
      <div ref={refs} className="anchor"></div>
      <ImageGroup>
        {createHiddenImages(hermitageImages)}
        <SliderSlick images={hermitageImages} centerPadding={425} />
        <div className="main-container">
          <div className="main-container-text">
            <div className="main-container-info ibm-plex-sans-regular">
              <p>
                Книга посвящена Северо-Западной Экспедиции
                <br />
                Государственного Эрмитажа. Раскопки ведутся
                <br />
                уже более 60 лет, за это время накопилось множество
                <br />
                документальных фотографий и находок.
                <br />
                <br /> Книга олицетворяет собой раскоп, а её страницы —
                <br />
                слои земли, именно поэтому в работе использовалась
                <br />
                тонированная бумага.
              </p>
            </div>

            <div className="main-container-setting">
              <p>
                Формат: 170 × 240 мм
                <br />
                Бумага: Colorlab 110 г/м² (G03, I03, G02)
                <br />
                372 страницы
                <br />
                Фотограф: Маминова Диана
              </p>
            </div>
          </div>

          <div className="gap-container-column">
            <div className="gap-container">
              <ImageViewer
                className="image_4_5_12_13-hermetage"
                src={_hermitage.hermitage_4}
              />
              <ImageViewer
                className="image_4_5_12_13-hermetage"
                src={_hermitage.hermitage_5}
              />
            </div>
            <div className="gap-container">
              <ImageViewer
                className="image_6_7_8_9-hermetage"
                src={_hermitage.hermitage_6}
              />
              <ImageViewer
                className="image_6_7_8_9-hermetage"
                src={_hermitage.hermitage_7}
              />
              <ImageViewer
                className="image_6_7_8_9-hermetage"
                src={_hermitage.hermitage_8}
              />
              <ImageViewer
                className="image_6_7_8_9-hermetage"
                src={_hermitage.hermitage_9}
              />
            </div>
          </div>
          <ImageViewer
            className="image_10_16-hermetage"
            src={_hermitage.hermitage_10}
          />
          <ImageViewer
            className="image_11_15-hermetage"
            src={_hermitage.hermitage_11}
          />
          <ImageViewer
            className="image_4_5_12_13-hermetage"
            src={_hermitage.hermitage_12}
          />
          <ImageViewer
            className="image_4_5_12_13-hermetage"
            src={_hermitage.hermitage_13}
          />
          <ImageViewer
            className="image_14-hermetage"
            src={_hermitage.hermitage_14}
          />
          <ImageViewer
            className="image_11_15-hermetage"
            src={_hermitage.hermitage_15}
          />
          <ImageViewer
            className="image_10_16-hermetage"
            src={_hermitage.hermitage_16}
          />
        </div>
      </ImageGroup>
    </div>
  );
}

const dinosaursImages = [
  _dinosaurs.dinosaurs_1,
  _dinosaurs.dinosaurs_2,
  _dinosaurs.dinosaurs_3,
];

function Dinosaurs({ refs }) {
  return (
    <div className="dinosaurs">
      <div ref={refs} className="anchor"></div>{" "}
      <ImageGroup>
        {createHiddenImages(dinosaursImages)}
        <SliderSlick images={dinosaursImages} centerPadding={425} />
        <div className="main-container">
          <div className="main-container-text ">
            <div className="main-container-info ibm-plex-sans-regular">
              <p>
                Современная интерпретация научно-популярной книги
                <br />
                про палеонтологию и динозавров. Адаптированные схемы,
                <br />
                таблицы и иллюстрации — все это поможет даже
                <br />
                не подготовленному читателю погрузиться в науку.
              </p>
            </div>

            <div className="main-container-setting dino-setings">
              <p>
                Формат: 210 × 297 мм
                <br />
                Бумага: мел. матовая 130 г/м²
                <br />
                146 страниц
                <br />
                Фотограф: Маминова Диана
              </p>
            </div>
            <div className="container-6-dino">
              <ImageViewer
                className="image_6-dino"
                src={_dinosaurs.dinosaurs_6}
              />
            </div>
          </div>

          <div className="container-45_7_dino">
            <div className="container-4_5_dino">
              <ImageViewer
                className="image_4_5_8_9-dino"
                src={_dinosaurs.dinosaurs_4}
              />
              <ImageViewer
                className="image_4_5_8_9-dino"
                src={_dinosaurs.dinosaurs_5}
              />
            </div>
            <ImageViewer
              className="image_7-dino"
              src={_dinosaurs.dinosaurs_7}
            />
          </div>
          <ImageViewer
            className="image_4_5_8_9-dino"
            src={_dinosaurs.dinosaurs_8}
          />
          <ImageViewer
            className="image_4_5_8_9-dino"
            src={_dinosaurs.dinosaurs_9}
          />
          <ImageViewer
            className="image_10-dino"
            src={_dinosaurs.dinosaurs_10}
          />
          <ImageViewer
            className="image_11_13-dino"
            src={_dinosaurs.dinosaurs_11}
          />
          <ImageViewer
            className="image_12-dino"
            src={_dinosaurs.dinosaurs_12}
          />
          <ImageViewer
            className="image_11_13-dino"
            src={_dinosaurs.dinosaurs_13}
          />
        </div>
      </ImageGroup>
    </div>
  );
}

const studyImages = [_study.study_1, _study.study_2, _study.study_3];

function Study({ refs }) {
  return (
    <div className="study black">
      <div ref={refs} className="anchor"></div>
      <ImageGroup>
        {createHiddenImages(studyImages)}
        <SliderSlick images={studyImages} centerPadding={425} />
        <div className="main-container">
          <div className="main-container-text">
            <div className="main-container-info ibm-plex-sans-regular">
              <p>
                Визуальное исследование, в котором рассмотрены
                <br />
                археологические книги с точки зрения дизайна и верстки.
                <br />
                <br />
                Главной задачей проекта было создать универсальную
                <br />
                сетку, которая смогла бы объединить страницы разных
                <br />
                изданий в одно целое. Итогом работы стала книга
                <br />
                в минималистичном стиле, в которой представлен путь
                <br />
                “археологической типографики” за последние 100 лет.
              </p>
            </div>

            <div className="main-container-setting p15">
              <p>
                Формат: 165 × 215 мм
                <br />
                Бумага: мел. глянц. 130 г/м²
                <br />
                184 страницы
                <br />
                Фотограф: Маминова Анна
              </p>
            </div>
            <ImageViewer className="image_6-study" src={_study.study_6} />
          </div>
          <div className="gap-container-column">
            <div className="gap-container">
              <ImageViewer
                className="image_4_5_8_9_10-study"
                src={_study.study_4}
              />
              <ImageViewer
                className="image_4_5_8_9_10-study"
                src={_study.study_5}
              />
            </div>
            <ImageViewer className="image_7-study" src={_study.study_7} />
          </div>
          <ImageViewer
            className="image_4_5_8_9_10-study"
            src={_study.study_8}
          />
          <ImageViewer
            className="image_4_5_8_9_10-study"
            src={_study.study_9}
          />
          <ImageViewer
            className="image_4_5_8_9_10-study"
            src={_study.study_10}
          />
          <div className="gap-container-column">
            <ImageViewer className="image_11_12-study" src={_study.study_11} />
            <ImageViewer className="image_11_12-study" src={_study.study_12} />
          </div>
          <ImageViewer className="image_13-study" src={_study.study_13} />
        </div>
      </ImageGroup>
    </div>
  );
}

const playImages = [_play.play_1, _play.play_2, _play.play_3];

function Play({ refs }) {
  return (
    <div className="play black">
      <div ref={refs} className="anchor"></div>
      <ImageGroup>
        {createHiddenImages(playImages)}
        <SliderSlick images={playImages} centerPadding={425} />
        <div className="main-container">
          <div className="main-container-text">
            <div className="main-container-info ibm-plex-sans-regular">
              <p>
                Книга переносит на страницы спектакль «Дети проходных
                <br />
                дворов vol. 2.0», который был поставлен на сцене Лендока
                <br />
                в Санкт-Петербурге. Постановка посвящена творчеству
                <br />
                группы «КИНО» и его влиянию на молодое поколение.
                <br />
                <br />
                Специально для книги был разработан акцидентный
                <br />
                шрифт по мотивам группы «КИНО», а колонэлементы
                <br />
                и плакатные развороты были вдохновлены образом
                <br />
                музыкальной кассеты.
              </p>
            </div>

            <div className="main-container-setting">
              <p>
                Формат: 144 × 210 мм
                <br />
                Бумага: офсетная 80 г/м²
                <br />
                72 страницы
                <br />
                Фотограф: Маминова Диана
              </p>
            </div>
          </div>
          <ImageViewer className="image_4_6-play" src={_play.play_4} />
          <ImageViewer className="image_5-play" src={_play.play_5} />
          <ImageViewer className="image_4_6-play" src={_play.play_6} />
          <ImageViewer className="image_7-play" src={_play.play_7} />
          <ImageViewer className="image_8-play" src={_play.play_8} />
          <ImageViewer className="image_9-play" src={_play.play_9} />
        </div>
      </ImageGroup>
    </div>
  );
}

const guideImages = [_guide.guide_1, _guide.guide_2, _guide.guide_3];

function Guide({ refs }) {
  return (
    <div className="guide">
      <div ref={refs} className="anchor"></div>
      <ImageGroup>
        {createHiddenImages(guideImages)}
        <SliderSlick images={guideImages} centerPadding={425} />
        <div className="main-container">
          <div className="main-container-text">
            <div className="main-container-info ibm-plex-sans-regular">
              <p>
                Путеводитель по западному побережью США, который
                <br />
                рассказывает про один из маршрутов путешествия по трем
                <br />
                штатам: Калифорния, Аризона и Невада.
                <br />
                <br />
                Главной особенностью книги является то, что большая
                <br />
                часть фотографий, а также путевые заметки были
                <br />
                предоставлены семьей путешественников.
                <br />
                Такой опыт помог превратить обычный путеводитель
                <br />в документальный фильм на страницах.
              </p>
            </div>
            <div className="main-container-setting guide-setings">
              <p>
                Формат: 170 × 250 мм
                <br />
                Бумага: мел. глянц. 130 г/м²
                <br />
                158 страниц
                <br />
                Фотограф: Маминова Диана
              </p>
            </div>
            <div className="second-container-guide">
              <div className="container-5-guide">
                <ImageViewer className="image_5-guide" src={_guide.guide_5} />
              </div>
              <div className="small-container-guide">
                <ImageViewer
                  className="image_6_7_8_9_10_11_12-guide"
                  src={_guide.guide_6}
                />
                <ImageViewer
                  className="image_6_7_8_9_10_11_12-guide"
                  src={_guide.guide_7}
                />
                <ImageViewer
                  className="image_6_7_8_9_10_11_12-guide"
                  src={_guide.guide_8}
                />
              </div>
              <ImageViewer className="image_14-guide" src={_guide.guide_14} />
            </div>
          </div>
          <div className="first-container-guide">
            <ImageViewer className="image_4-guide" src={_guide.guide_4} />
            <div className="small-container-guide">
              <ImageViewer
                className="image_6_7_8_9_10_11_12-guide"
                src={_guide.guide_9}
              />
              <ImageViewer
                className="image_6_7_8_9_10_11_12-guide"
                src={_guide.guide_10}
              />
              <ImageViewer
                className="image_6_7_8_9_10_11_12-guide"
                src={_guide.guide_11}
              />
              <ImageViewer
                className="image_6_7_8_9_10_11_12-guide"
                src={_guide.guide_12}
              />
            </div>
            <ImageViewer className="image_13-guide" src={_guide.guide_13} />
          </div>
        </div>
      </ImageGroup>
    </div>
  );
}

const knockoutImages = [
  _knockout.knockout_1,
  _knockout.knockout_2,
  _knockout.knockout_3,
];

function Knockout({ refs }) {
  return (
    <div className="knockout">
      <div ref={refs} className="anchor"></div>
      <ImageGroup>
        {createHiddenImages(knockoutImages)}
        <SliderSlick images={knockoutImages} centerPadding={425} />
        <div className="main-container">
          <div className="main-container-text">
            <div className="main-container-info ibm-plex-sans-regular">
              <p>
                «НОКАУТ» — книга художника, которая раскрывает тему
                <br />
                юмора и его психологии. На перчатках написаны шутки
                <br />
                и анекдоты, что является метафорой использования юмора
                <br />
                в повседневной жизни: для защиты, для нападения,
                <br />
                для уклонения.
              </p>
            </div>
            <div className="main-container-setting">
              <p>Фотограф: Маминова Диана</p>
            </div>
          </div>
          <ImageViewer
            className="image_4-knockout"
            src={_knockout.knockout_4}
          />
          <ImageViewer
            className="image_5_7-knockout"
            src={_knockout.knockout_5}
          />
          <ImageViewer
            className="image_6-knockout"
            src={_knockout.knockout_6}
          />
          <ImageViewer
            className="image_5_7-knockout"
            src={_knockout.knockout_7}
          />
          <ImageViewer
            className="image_8-knockout"
            src={_knockout.knockout_8}
          />
        </div>
      </ImageGroup>
    </div>
  );
}

const performanceImages = [
  _calendar.calendar_1,
  _calendar.calendar_2,
  _calendar.calendar_3,
];

function Performance({ refs }) {
  return (
    <div className="performance black">
      <div ref={refs} className="anchor"></div>
      <ImageGroup>
        {createHiddenImages(performanceImages)}
        <SliderSlick images={performanceImages} centerPadding={425} />
        <div className="main-container">
          <div className="main-container-text">
            <div className="main-container-info ibm-plex-sans-regular">
              <p>
                Календарь посвящен искусству перформанса
                <br />
                и его авторам. Каждый месяц рассказывает про новый
                <br />
                перформанс через типографические приемы.
              </p>
            </div>
          </div>
          <div className="container-4_5_performance">
            <ImageViewer
              className="image_4_5-performance"
              src={_calendar.calendar_4}
            />
            <ImageViewer
              className="image_4_5-performance"
              src={_calendar.calendar_5}
            />
          </div>
          <div className="container-small_performance">
            <ImageViewer
              className="image_4_6_8_10_11_12_13-performance"
              src={_calendar.calendar_6}
            />
            <ImageViewer
              className="image_4_6_8_10_11_12_13-performance"
              src={_calendar.calendar_8}
            />
          </div>
          <ImageViewer
            className="image_7_9-performance"
            src={_calendar.calendar_7}
          />
          <div className="container-small_performance">
            <ImageViewer
              className="image_4_6_8_10_11_12_13-performance"
              src={_calendar.calendar_10}
            />
            <ImageViewer
              className="image_4_6_8_10_11_12_13-performance"
              src={_calendar.calendar_11}
            />
          </div>
          <ImageViewer
            className="image_7_9-performance"
            src={_calendar.calendar_9}
          />
          <div className="container-small_performance">
            <ImageViewer
              className="image_4_6_8_10_11_12_13-performance"
              src={_calendar.calendar_12}
            />
            <ImageViewer
              className="image_4_6_8_10_11_12_13-performance"
              src={_calendar.calendar_13}
            />
          </div>
        </div>
      </ImageGroup>
    </div>
  );
}

const hereticsImages = [
  _heretics.heretics_1,
  _heretics.heretics_2,
  _heretics.heretics_3,
];

function Heretics({ refs }) {
  return (
    <div className="heretics black">
      <div ref={refs} className="anchor"></div>
      <ImageGroup>
        {createHiddenImages(hereticsImages)}
        <SliderSlick images={hereticsImages} centerPadding={425} />

        <div className="main-container">
          <div className="main-container-text">
            <div className="main-container-info ibm-plex-sans-regular">
              <p>
                Сборник стихотворений «Песни еретиков» посвящен отношениям
                человека и природы, в текстах описываются чувства людей, которые
                не могут найти покоя.
                <br />
                <br />
                Для создания иллюстраций был использован наждак, который помимо
                тактильных ощущений передает звуки стихотворений.
              </p>
            </div>

            <div className="main-container-setting ibm-plex-sans-regular">
              <p>
                Формат: 297 × 420 мм
                <br />
                Бумага: акварельная тонированная, наждачная
                <br />
                9 страниц
                <br />
                Фотограф: Маминова Диана
              </p>
            </div>
          </div>

          <ImageViewer
            className="image_4-heretics"
            src={_heretics.heretics_4}
          />
          <ImageViewer
            className="image_5-heretics"
            src={_heretics.heretics_5}
          />
          <div className="container-6-789">
            <ImageViewer
              className="image_6-heretics"
              src={_heretics.heretics_6}
            />
            <div className="container-789">
              <ImageViewer
                className="image_7_8_9_11_12-heretics"
                src={_heretics.heretics_7}
              />
              <ImageViewer
                className="image_7_8_9_11_12-heretics"
                src={_heretics.heretics_8}
              />
              <ImageViewer
                className="image_7_8_9_11_12-heretics"
                src={_heretics.heretics_9}
              />
            </div>
          </div>
          <ImageViewer
            className="image_10_13-heretics"
            src={_heretics.heretics_10}
          />
          <div className="container-11-12">
            <ImageViewer
              className="image_7_8_9_11_12-heretics"
              src={_heretics.heretics_11}
            />
            <ImageViewer
              className="image_7_8_9_11_12-heretics"
              src={_heretics.heretics_12}
            />
          </div>
          <ImageViewer
            className="image_10_13-heretics"
            src={_heretics.heretics_13}
          />
        </div>
      </ImageGroup>
    </div>
  );
}

function Education({ refs }) {
  return (
    <div className="education flex-column-container">
      <div ref={refs} className="anchor"></div>
      <div className="line_1" />

      <p className="education-text education-text_18 ibm-plex-sans-regular ">
        <a href="https://design.hse.ru" target="_blank">
          <b className="education-text_30 ibm-plex-sans-semibold ">
            Школа дизайна НИУ ВШЭ
          </b>
          <br />
          Национальный исследовательский университет «Высшая школа экономики»
          <br />
        </a>
        <br />
        <b className="education-text education-text_30 ibm-plex-sans-semibold">
          Коммуникационный дизайн
        </b>
        <br />
        2020-2024
      </p>

      <div className="line_2" />

      <p className="education-text education-text_18 ibm-plex-sans-regular">
        Практика & Стажировка в брендинговом агентстве
        <br />
        <a href="https://www.terminaldesign.ru" target="_blank">
          <b className="ibm-plex-sans-semibold">«Терминал дизайн»</b>
        </a>
      </p>

      <div className="line_3" />

      <p className="education-text education-text_18 ibm-plex-sans-regular">
        Английский язык — <b className="ibm-plex-sans-semibold">С1</b>
        <br />
        Немекий язык — <b className="ibm-plex-sans-semibold">B1</b>
      </p>

      <div className="line_4" />

      <p className="education-text education-text_18 ibm-plex-sans-regular">
        <b className="ibm-plex-sans-semibold education-text_30">
          Художественная школа «Александрино»
        </b>
        <br />
        2009-2018
      </p>

      <div className="line_5" />
    </div>
  );
}

function Contacts({ refs }) {
  return (
    <div className="contacts flex-column-container">
      <div ref={refs} className="anchor"></div>
      <div className="line_6" />

      <div className="contacts-text">
        <p className="ibm-plex-sans-regular">
          {"Почта: "}
          <a href="mailto:annatypography@mail.ru&subject=Сотрудничество">
            <b className="ibm-plex-sans-semibold">annatypography@mail.ru</b>
          </a>
          <br />
          {"ВКонтакте: "}
          <a href="https://vk.com/anna_typography" target="_blank">
            <b className="ibm-plex-sans-semibold">@anna_typography</b>
          </a>
          <br />
          {"Телеграм: "}
          <a href="https://t.me/annatypography" target="_blank">
            <b className="ibm-plex-sans-semibold">@annatypography</b>
          </a>
        </p>
      </div>
      <div className="line_7" />
      <div className="contacts-text ibm-plex-sans-semibold">
        <p>
          <a href="tel:+79062706203">
            <b>+7 906-270-62-03</b>
          </a>
        </p>
      </div>
      <div className="line_8" />
      <div className="contacts-text ibm-plex-sans-semibold">
        <p>
          <b>Санкт-Петербург</b>
        </p>
      </div>
      <div className="line_9" />
    </div>
  );
}

function App() {
  const catalogRef = useRef(null);
  const hermitageRef = useRef(null);
  const dinosaursRef = useRef(null);
  const studyRef = useRef(null);
  const playgRef = useRef(null);
  const guideRef = useRef(null);
  const knockoutRef = useRef(null);
  const performanceRef = useRef(null);
  const hereticsRef = useRef(null);
  const educationRef = useRef(null);
  const contactsRef = useRef(null);

  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [theme, setTheme] = useState(themes[0]);

  useEffect(() => {
    _setTheme(scrollTop, setTheme);
  }, [scrollTop]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className={theme}>
      <Header
        refs={{
          education: educationRef,
          contacts: contactsRef,
        }}
        scrollTop={scrollTop}
        theme={theme}
      />
      <Body>
        <Cards
          refs={{
            catalog: catalogRef,
            hermitage: hermitageRef,
            dinosaurs: dinosaursRef,
            study: studyRef,
            play: playgRef,
            guide: guideRef,
            knockout: knockoutRef,
            performance: performanceRef,
            heretics: hereticsRef,
          }}
        />
        <Catalog refs={catalogRef} />
        <Hermitage refs={hermitageRef} />
        <Dinosaurs refs={dinosaursRef} />
        <Study refs={studyRef} />
        <Play refs={playgRef} />
        <Guide refs={guideRef} />
        <Knockout refs={knockoutRef} />
        <Performance refs={performanceRef} />
        <Heretics refs={hereticsRef} />
        <Education refs={educationRef} />
        <Contacts refs={contactsRef} />
      </Body>
      <Footer />
    </div>
  );
}

export default App;
