/**
 * FsLightBoxEx
 *  어떤 요소 (img, button, a 등)을 클릭했을 때
 *  지정된 이미지, 영상 등을 모달 팝업으로 표시하는 기능
 * 
 * https://fslightbox.com/
 * 
 * yarn add fslightbox-react
 */
import React, { memo, useState } from "react";
import styled from "styled-components";
import FsLightbox from "fslightbox-react";

import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import img5 from "../assets/img/img5.png";

const FsLightboxExContainer = styled.div``;

const Button = styled.button`
    border: 0;
    outline: none;
    cursor: pointer;
    padding: 0;
    margin: 0 5px;
`;

const FsLightboxEx = memo(() => {
    // 단일 이미지를 사용할 경우 모달창 표시 여부에 대한 상태값
    const [singleToggler, setSingleToggler] = useState(false);

    // 복수 이미지를 사용할 경우 모달창 표시 여부와 몇 번째 이미지를 표시할지에 대한 상태값
    const [multiToggler, setMultiToggler] = useState({
        open: false,
        index: 1
    });

    // 단일 Youtube 영상을 사용할 경우 모달창 표시 여부에 대한 상태값
    const [youtubeToggler, setYoutubeToggler] = useState(false);

    // 복수 Youtube 영상을 사용할 경우 모달창 표시 여부와 몇 번째 영상을 표시할지에 대한 상태값
    const [youtubeMultiToggler, setYoutubeMultiToggler] = useState({
        open: false,
        index: 1
    });

    return (
        <FsLightboxExContainer>
            <div>
                <h2>FsLightbox</h2>

                <h3>Single Gallery</h3>
                <div>
                    <Button onClick={e => {setSingleToggler(!singleToggler)}}>
                        <img src={img1} width="150" alt="img1" />
                    </Button>
                    <FsLightbox sources={[img1]} toggler={singleToggler} />
                </div>

                <h3>Multi Gallery</h3>
                <div>
                    <Button onClick={e => setMultiToggler({open: !multiToggler.open, index: 1})}>
                        <img src={img1} width="150" alt="img1" />
                    </Button>
                    <Button onClick={e => setMultiToggler({open: !multiToggler.open, index: 2})}>
                        <img src={img2} width="150" alt="img2" />
                    </Button>
                    <Button onClick={e => setMultiToggler({open: !multiToggler.open, index: 3})}>
                        <img src={img3} width="150" alt="img3" />
                    </Button>
                    <Button onClick={e => setMultiToggler({open: !multiToggler.open, index: 4})}>
                        <img src={img4} width="150" alt="img4" />
                    </Button>
                    <Button onClick={e => setMultiToggler({open: !multiToggler.open, index: 5})}>
                        <img src={img5} width="150" alt="img5" />
                    </Button>
                    <FsLightbox toggler={multiToggler.open} sources={[img1, img2, img3, img4, img5]} slide={multiToggler.index} />
                </div>

                <h3>Youtube Single link</h3>
                <div>
                    <Button onClick={e => setYoutubeToggler(!youtubeToggler)}>
                        <img src="https://img.youtube.com/vi/T6OqXQvuTAY/maxresdefault.jpg" width="150" alt="img1" />
                    </Button>
                    <FsLightbox toggler={youtubeToggler} sources={[
                        "https://www.youtube.com/watch?v=T6OqXQvuTAY"
                    ]} />
                </div>

                <h3>Youtube Multi link</h3>
                <div>
                    <Button onClick={e => setYoutubeMultiToggler({open: !youtubeMultiToggler.open, index: 1})}>
                        <img src="https://img.youtube.com/vi/h9ROC95ch0U/hqdefault.jpg" width="150" alt="img1" />
                    </Button>
                    <Button onClick={e => setYoutubeMultiToggler({open: !youtubeMultiToggler.open, index: 2})}>
                        <img src="https://img.youtube.com/vi/9hyj44M6nRo/hqdefault.jpg" width="150" alt="img1" />
                    </Button>
                    <Button onClick={e => setYoutubeMultiToggler({open: !youtubeMultiToggler.open, index: 3})}>
                        <img src="https://img.youtube.com/vi/maenJizrzCI/hqdefault.jpg" width="150" alt="img1" />
                    </Button>
                    <FsLightbox toggler={youtubeMultiToggler.open} sources={[
                        "https://www.youtube.com/watch?v=h9ROC95ch0U",
                        "https://www.youtube.com/watch?v=9hyj44M6nRo",
                        "https://www.youtube.com/watch?v=maenJizrzCI"
                    ]} slide={youtubeMultiToggler.index}/>
                </div>
            </div>
        </FsLightboxExContainer>
    );
});

export default FsLightboxEx;