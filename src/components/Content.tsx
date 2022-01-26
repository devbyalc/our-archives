import "./content.scss";
import { Container, Tabs, Tab, Alert } from "react-bootstrap";
import Special from "./Special";
import Audios from "./Audios";
import Youtube from "./Youtube";
import { useState, useEffect } from "react";
import Login from "./Login";
import type { Media, User } from "../types/main";

const query = `{
    mediaCollection {
      items {
        id
        title
        url
        source
      }
      }
    }`;

function Content(props: any) {
  const onTrigger = (num: any) => {
    props.getTabKey(num);
  };

  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState(false);
  const [videos, setVideo] = useState(null);
  const [audios, setAudio] = useState(null);

  const getUser = (u: User) => {
    setUser(u);
    if (
      u?.username?.toLowerCase() !== "whitney" ||
      u?.password?.toLowerCase() !== "thepooh"
    ) {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/34a2h56f97xn/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: "Bearer h5QLePvQVG76fI-jvfWLMDec_p_HYMvejJ85LNGKbYI",
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setVideo(
          data.mediaCollection.items.filter(
            (x: Media) => x.source === "youtube"
          )
        );
        setAudio(
          data.mediaCollection.items.filter(
            (x: Media) => x.source === "bandlab"
          )
        );
      });
  }, []);

  return (
    <Container className="base-second" id="content" fluid>
      <Tabs
        id="controlled-tab-example"
        activeKey={props.tab}
        onSelect={(e) => onTrigger(e)}
        className="wrapper"
      >
        <Tab eventKey="1" title="On-Special">
          {user?.username?.toLowerCase() === "whitney" &&
          user?.password?.toLowerCase() === "thepooh" ? (
            <Special />
          ) : (
            <Login getUser={getUser} />
          )}
          {error && (
            <Container className="alert">
              <Alert variant="danger">
                Wrong username/password - maybe you're not supposed to view this
                content :P
              </Alert>
            </Container>
          )}
        </Tab>
        <Tab eventKey="2" title="Youtube">
          <Youtube videos={videos} />
        </Tab>
        <Tab eventKey="3" title="audio-only">
          <Audios audios={audios} />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Content;
