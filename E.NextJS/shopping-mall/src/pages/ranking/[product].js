import React, { memo, useCallback, useState } from "react";

import styled from "styled-components";



const rankingContainer = styled.div`
    
`;

const ranking = memo(() => {
    const [product, setProduct] = useState();

    

    return (
        <div>
            <nav>
                <link href="/woman"></link>
                <link href="/man"></link>
                <link href="/accessory"></link>
            </nav>

        </div>
    );
});

export default ranking;