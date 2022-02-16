import React, { useState } from "react";
import lodash from "lodash";

import Header from "../../components/header/Header";
import VideoDetail from "../../components/videos/VideoDetail";
import MostRepeatedWords from "../../components/Utils/MostRepeatedWords";

import useYoutubeDetails from "../../hooks/useYoutubeDetails";

import "./_homeScreen.css";
import "../../components/videos/_video.css";
import moment from "moment";

function HomeScreen() {
  const [term, setTerm] = useState("");
  const [days, setDays] = useState([0]);

  const details = useYoutubeDetails(term);

  const biggerNumber = Math.max.apply(null, days);
  const resultNumbers = details.filter((item) => item.duration <= biggerNumber);
  const convertNumbers = resultNumbers.map((item) => parseInt(item.duration));
  const sumMinutes = lodash.sum(convertNumbers);
  const daysToWatch = moment.duration(sumMinutes).asDays().toFixed(7);
  const mostRepeatedWord = MostRepeatedWords(resultNumbers);

  return (
    <>
      <Header
        HandleData={(data) => ({
          term: setTerm(data),
          day: setDays(Object.values(data).splice(1).map(Number)),
        })}
      />
      <div>
        <div className="watch-information">
          <h1 className="days-information">
            você levará {daysToWatch} dias para terminar de assistir os videos
          </h1>
          <div className="words-repeated">
            <h1 className="words-title">
              Abaixo as 5 palavras mais usadas no titulo e descrição dos vídeos
            </h1>
            <div className="words-list">
              <h3 className="word">{mostRepeatedWord[0]}</h3>
              <h3 className="word">{mostRepeatedWord[1]}</h3>
              <h3 className="word">{mostRepeatedWord[2]}</h3>
              <h3 className="word">{mostRepeatedWord[3]}</h3>
              <h3 className="word">{mostRepeatedWord[4]}</h3>
            </div>
          </div>
        </div>
        <VideoDetail data={details} />
      </div>
    </>
  );
}

export default HomeScreen;
