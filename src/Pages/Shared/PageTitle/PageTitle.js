import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({title}) => {
    return (
        <Helmet>
            <title> {title}- Bogura AC Corner</title>
        </Helmet>
    );
};

export default PageTitle;