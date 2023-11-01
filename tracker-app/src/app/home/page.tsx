'use client';
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import styled from "styled-components";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Home() {
    const auth = getAuth();
    const router = useRouter();
    const [authState, setAuthState] = useState(false);

    // AUTH STATE USEFFECT, CHECKS IF USER IS AUTHENTICATED //
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("User authenticated", user.displayName);
                setAuthState(true);
            } else {
                router.replace("/");
                console.log("Unauthenticated");
            }
        });

        return unsubscribe; // Cleanup the listener when the component unmounts
    }, [auth, router]);


    return (
        <HomeWrapper>
            {/* CHECK IF USER IS AUTHENTICATED BEFORE SHOWING HOMEPAGE */}
            {authState ? (
                <ContentWrapper>HOME</ContentWrapper>
            ) : (
                <div>Loading...</div>
            )}
        </HomeWrapper>
    )
}

const HomeWrapper = styled.div`
height: 100vh;    
bacgkround-color: #DFE3E4;
`

const ContentWrapper = styled.div``