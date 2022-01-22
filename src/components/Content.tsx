import './content.scss';
import { Container, Tabs, Tab } from 'react-bootstrap';
import Special from './Special';
import Audios from './Audios';
import Youtube from './Youtube'

function Content(props:any) {
    const onTrigger = (num:any) => {
        props.getTabKey(num);
    }
    return (
        <Container className="base-second" id="content" fluid>
            <Tabs
                id="controlled-tab-example"
                activeKey={props.tab}
                onSelect={(e) => onTrigger(e)}
                className="wrapper"
            >
                <Tab eventKey="1" title="On-Special">
                    <Special/>
                </Tab>
                <Tab eventKey="2" title="Youtube">
                    <Youtube/>
                </Tab>
                <Tab eventKey="3" title="audio-only">
                    <Audios/>
                </Tab>
            </Tabs>
        </Container>
    );
}

export default Content;
