import './content.scss';
import { Container, Tabs, Tab, Alert} from 'react-bootstrap';
import Special from './Special';
import Audios from './Audios';
import Youtube from './Youtube';
import {useState} from 'react';
import Login from './Login';

type User ={username:string, password:string};

function Content(props:any) {
    const onTrigger = (num:any) => {
        props.getTabKey(num);
    }

    const [user,setUser] = useState({username:'',password:''});
    const [error, setError] = useState(false);
    const getUser = (u: User) =>{
        setUser(u);
        if(u?.username?.toLowerCase() !== 'whitney' || u?.password?.toLowerCase() !== 'thepooh')
        {
            setError(true);
            setTimeout(()=>setError(false),3000);
        }
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
                    {user?.username?.toLowerCase() === 'whitney' && user?.password?.toLowerCase() === 'thepooh'? <Special/> : <Login getUser={getUser}/> }
                    {error && <Container className="alert"><Alert variant="danger">Wrong username/password - maybe you're not supposed to view this content :P</Alert></Container>}
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
