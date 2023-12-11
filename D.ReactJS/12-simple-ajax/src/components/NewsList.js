/** 
 * 배열 데이터를 탐색하면서 배열으 원소 단위로 컴포넌트를 분리한 케이스
 * > 05-stylesheet 단원에서 작성한 파일 재사용
 */
import React from "react";
import styled from "styled-components";

const NewsListContainer = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    .list-item {
        border-top: 1px solid #eee;

        &:last-child {
            border-bottom: 1px solid #eeee;
        }

        .list-item-link {
            box-sizing: border-box;
            display: flex;
            flex-wrap: nowrap;
            flex-direction: row;
            align-items: center;
            text-decoration: none;
            color: #000;
            transition: all 0.1s;

            &:hover {
                background-color: #eeeeee55;
            }

            .thumbnail {
                width: 150px;
                height: 100px;
                display: block;
                object-fit: cover;
                flex: none;
            }

            .content {
                flex: 0 1 auto;
                padding: 5px 0 5px 20px;
                background-color: #ff01;

                h3 {
                    background-color: #f0f1;
                    box-sizing: border-box;
                    font-size: 18px;
                    font-weight: bold;
                    margin: 0;
                    margin-bottom: 10px;
                    
                    /** 말줄임 처리 */
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                }

                p {
                    background-color: #0601;
                    font-size: 14px;
                    margin: 0;
                    margin-bottom: 8px;
                    /** 말줄임 처리 */
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }

                ul {
                    background-color: #0061;
                    list-style: none;
                    padding: 0;
                    margin: 0;

                    li {
                        display: inline-block;
                        font-size: 12px;

                        &:first-child::after {
                            content: "|";
                            display: inline-block;
                            color: #555;
                            padding: 0 5px;
                        }
                    }
                }
            }
        }
    }
`;

const NewsList = ({ news }) => {
    return (
        <div>
            <NewsListContainer>
                {news.map(({ author, title, description, url, image, datetime }, i) => {
                    return (
                        <li className="list-item" key={i}>
                            <a className="list-item-link" href={url} target="_blank" rel="noreferrer">
                                <img className="thumbnail" src={image} alt={title} />
                                <div className="content">
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                    <ul>
                                        <li>{author}</li>
                                        <li>{new Date(datetime).toLocaleString()}</li>
                                    </ul>
                                </div>
                            </a>
                        </li>
                    )
                })}
            </NewsListContainer>
        </div>
    );
};

export default NewsList;