import React, { memo } from "react";

import styled from "styled-components";

const ProfileContainer = styled.div`
    background-color: #f0f3;
`;

const Profile = memo(() => {
    return (
        <ProfileContainer>
            <h1>Profile</h1>
        </ProfileContainer>
    );
});

Profile.defaultProps = {};

export default Profile;