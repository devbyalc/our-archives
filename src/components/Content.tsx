import './content.scss';
import { Container, Tabs, Tab } from 'react-bootstrap';
import Special from './Special';

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
                className="mb-3"
            >
                <Tab eventKey="1" title="On Special">
                    <Special/>
                </Tab>
                <Tab eventKey="2" title="Youtube">
                    
                </Tab>
                <Tab eventKey="3" title="audio-only">
                    
                </Tab>
            </Tabs>
        </Container>
    );
}

export default Content;