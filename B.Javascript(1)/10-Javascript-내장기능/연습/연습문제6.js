function solution(participant, completion) {
    var answer = "";

    /*for (let i=0; i<participant.length; i++) {
        const p = participant[i];
        if (!completion.includes(p)) {
            answer = p;
            break;
        }
    }*/

    /*participant.some((v, i) => {
        if (!completion.includes(v)) {
            answer = v;
            return true;
        }
    });*/

    answer = participant.find(v => !completion.includes(v));

    return answer;
}

// "leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// 출력결과: "leo"가 출력
console.log(solution(["leo", "kiki", "eden"], 
                     ["eden", "kiki"]));

// "vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// 출력결과: "vinko"가 출력
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], 
                     ["josipa", "filipa", "marina", "nikola"]));

// "steave"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// 출력결과: "steave"가 출력
console.log(solution(["mislav", "stanko", "steave", "ana"], 
                     ["stanko", "ana", "mislav"]));