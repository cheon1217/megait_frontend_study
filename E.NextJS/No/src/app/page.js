// Next.js에서 페이지 이동 기능을 제공하는 컴포넌트
import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <div>
            <h1>page</h1>

            <Link href="hello">hello.js로 이동</Link>

            <Link href="world">world.js로 이동</Link>
        </div>
    );
};

export default page;