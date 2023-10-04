/** 문제 1 */
const blood = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O'];

const result = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0};

for (let i=0; i<blood.length; i++) {
    if (blood[i] == "A") {
        result.A++;
    }
    if (blood[i] == "B") {
        result.B++;
    }
    if (blood[i] == "AB") {
        result.AB++;
    }
    if (blood[i] == "O") {
        result.O++;
    }
}

console.log(result);

/** 문제 2 */
const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
};

