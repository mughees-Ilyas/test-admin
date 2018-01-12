import React from 'react';
import { List, Datagrid, TextField, DateField } from 'admin-on-rest';

export const TaskList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source='name'/>
            <TextField source="address" />
            <DateField source="date" />
            <TextField source="time" />
            <TextField source="status"/>
        </Datagrid>
    </List>
);