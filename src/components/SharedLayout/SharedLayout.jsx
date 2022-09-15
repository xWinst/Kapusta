import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Loader } from 'components';

import { ModalTeam } from 'components/ModalTeam/ModalTeam';
import TeamBTN from 'components/TeamBTN/TeamBTN';

import React, { useEffect, useState } from 'react';

export const SharedLayout = () => {
    const isRefreshingUser = useSelector(state => state.auth.isRefreshingUser);
    const [open, setOpen] = useState(false);
    const closeModal = () => {
        setOpen(!open);
    };

    const toggleModal = () => {
        setOpen(!open);
    };

    useEffect(() => {
        const handleCloseModal = event => {
            if (event.code === 'Escape') {
                setOpen(!open);
            }
        };

        window.addEventListener('keydown', handleCloseModal);
        return () => window.removeEventListener('keydown', handleCloseModal);
    }, [open]);

    useEffect(() => {
        const body = document.querySelector('body');
        if (open) {
            body.classList.add('hidden');
        }

        return () => {
            body.classList.remove('hidden');
        };
    });

    return (
        <Container>
            <Header />
            {isRefreshingUser ? (
                <Loader />
            ) : (
                <Suspense fallback={<Loader />}>
                    <Outlet />
                    <ModalTeam open={open} handler={closeModal} />
                    <TeamBTN handler={toggleModal} />
                </Suspense>
            )}
        </Container>
    );
};

export default SharedLayout;
