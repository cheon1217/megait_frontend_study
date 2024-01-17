import React, { memo } from "react";
import Link from "next/link";

const index = memo(() => {
    return (
        <div>
            <h1>포트폴리오</h1>

            <ul>
                <li>
                    <Link href="/portfolio/publish">퍼블리싱</Link>
                </li>
                <li>
                    <Link href="/portfolio/frontend">프론트엔드</Link>
                </li>
                <li>
                    <Link href="/portfolio/backend">백엔드</Link>
                </li>
            </ul>
        </div>
    );
});

export default index;