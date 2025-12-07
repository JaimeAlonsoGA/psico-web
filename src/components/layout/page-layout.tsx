import React from "react";
import { Outlet } from "react-router-dom";
import { PageContent } from "./page-content";

const PageLayout = () => {
    return (
        <React.Fragment>
            <PageContent>
                <Outlet />
            </PageContent>
        </React.Fragment>
    );
};

export default PageLayout;