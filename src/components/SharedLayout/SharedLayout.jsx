import { AppBar } from 'components/AppBar/AppBar';
import { LoaderText } from 'components/Loader/LoaderText';
import { Suspense  } from 'react';
import {Outlet} from 'react-router-dom';
import { Container} from "./SharedLayout.styled";

export const SharedLayout = () => {
    return (
        <Container>
            <AppBar />
            <Suspense fallback={<LoaderText />}>
            <Outlet />
            </Suspense>   
        </Container>
    )
};