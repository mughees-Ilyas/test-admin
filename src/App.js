import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
import star from 'material-ui/svg-icons/toggle/star';
import authClient from './authserver/authClient';


import { TaskList } from './components/tasks';

const App = () => (
    <Admin authClient={authClient} restClient={jsonServerRestClient('http://localhost:3000')}>
        <Resource name="Tasks" list={TaskList}  icon={star}  />
    </Admin>
);

export default App;