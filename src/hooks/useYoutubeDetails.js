import { useState, useEffect } from "react";

import momentDurationFormatSetup from "moment-duration-format";
import moment from "moment";

import youtube from "../services/api";

momentDurationFormatSetup(moment);

function useYoutubeIds({ term = "" }) {
  const [ids, setIds] = useState("");
  const [videoDetails, setVideoDetails] = useState([""]);

  useEffect(() => {
    const getTerm = async () => {
      if (term === "") {
        return;
      }

      const { data } = await youtube.get("/search", {
        params: {
          q: term,
        },
      });
      const idsFromYT = data.items
        .map((item) => item.id.videoId)
        .filter((e) => e);
      const formattedIds = idsFromYT.toString();

      setIds(formattedIds);
    };
    getTerm();
  }, [term]);

  useEffect(() => {
    if (ids === "") {
      return;
    }
    const getDetails = async () => {
      const { data } = await youtube.get("/videos", {
        params: {
          part: "id,contentDetails,snippet",
          id: ids,
        },
      });
      setVideoDetails(
        data.items.map((item) => ({
          id: item.id,
          duration: moment
            .duration(item.contentDetails.duration)
            .asMinutes()
            .toFixed(3),
          title: item.snippet.title,
          description: item.snippet.description,
        }))
      );
    };

    getDetails();
  }, [ids]);

  return videoDetails;
}

export default useYoutubeIds;
