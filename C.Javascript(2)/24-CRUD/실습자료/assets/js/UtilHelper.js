/**
 * UtilHelper.js
 * 
 * 재사용 가능한 기능들을 모아 놓은 클래스
 */
class UtilHelper {
    static #current = null;

    /** 
     * 싱글톤 객체를 할당하여 리턴한다.
     * @returns UtilHelper 클래스의 객체
     */
    static getInstance() {
        if (UtilHelper.#current === null) {
            UtilHelper.#current = new UtilHelper();
        }

        return UtilHelper.#current;
    }

    /**
     * URL의 querysring을 JSON객체로 변환하여 리턴한다.
     * @returns json object
     */
    getQuery() {
        const query = new URLSearchParams(location.search);
        return Object.fromEntries(query);
    }

    /**
     * 쿠키에 저장된 값을 반환한다. 값이 없을 경우 undefined를 반환한다.
     * @param {string} name - 쿠키의 이름
     * @returns 쿠키값
     */
    getCookie(name) {
        const regex = new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)");

        let matches = document.cookie.match(regex);

        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    setCookie(name, value, maxAge) {
        const encName = encodeURIComponent(name);
        const encValue = encodeURIComponent(value);
        let updatedCookie = `${encName}=${encValue};`;

        updatedCookie += "path=/;";

        if (maxAge !== undefined) {
            updatedCookie += `max-age=${maxAge}`;
        }

        document.cookie = updatedCookie;
    }
}

const utilHelper = UtilHelper.getInstance();