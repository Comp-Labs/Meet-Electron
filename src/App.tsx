import { useEffect, useState } from 'react';
import { useDyteClient } from '@dytesdk/react-web-core';
import { DyteMeeting } from '@dytesdk/react-ui-kit';

import './App.scss';
import Home from './components/Home';

function App() {
  const [state, setState] = useState<'idle' | 'meeting'>('idle');
  const [meeting, initMeeting] = useDyteClient();

  useEffect(() => {
    console.log(window.location.href);
    const url = new URL(window.location.href);


    const authToken = url.searchParams.get('authToken');
    const roomName = url.searchParams.get('roomName') || '';
    // const authToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdkNDI2Yjc1LTUxOTctNDU3NC04MTMwLTVhZmUzNzhiYzg5YyIsImxvZ2dlZEluIjp0cnVlLCJpYXQiOjE2NzI1Njk2NDQsImV4cCI6MTY4MTIwOTY0NH0.T5SeyEWjU0CPm6mqyR5frMueZ2XWh0bd6Dn48afdB1YbS-frukW70zBu0zMgMGHWhZMFAzejY9cHGwn-B_FLrXh4KIhLfL3vf1datuBtcQrEVJR6mYnqXpcPQPFcRrE2-6mcG9i_-o-Ktzg9LyClyLh67U82rX5WHYFWrVvot2xReoqhhhw5KkNV1EoK01-8bdMmvnfu3ZefxB4MJ3_ZuAjkL1H0u5pqsybh8PoDAbLscznEile4jYwooC2YIGAwa_pvwNUCMQQuEzeIcK89jt1tblnnjNcF_X1LTAALFsbL85ZuSiIuFN5OwJj1wGDRwHsZQOVfMI2qjKeo-UsVrQ';
    // const roomName = 'camzsa-aukmpp';

// url.searchParams.get('authToken')
// url.searchParams.get('roomName') || ''

    if (!authToken) {
      return;
    }

    initMeeting({
      roomName: roomName,
      authToken: authToken,
      defaults: {
        audio: false,
        video: false,
      },
    });
    setState('meeting');
  }, []);

  if (!meeting && state === 'idle') {
    return <Home />;
  }

  return <DyteMeeting meeting={meeting!} showSetupScreen />;
}

export default App;
