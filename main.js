// Sơ đồ 3 khối
// Input: Nhập một số nguyên từ người dùng và thêm vào mảng numbers.
// Process: Thực hiện các thao tác trên mảng numbers dựa trên yêu cầu của người dùng (ví dụ: tính tổng, đếm, tìm số nhỏ nhất...).
// Output: Hiển thị kết quả của các thao tác trong phần tử HTML có ID là result.

let numbers = [];

// Thêm số vào mảng
function addNumber() {
    const input = document.getElementById("inputNumber").value;
    if (input !== "") {
        numbers.push(parseInt(input));
        document.getElementById("inputNumber").value = "";
        document.getElementById("arrayDisplay").innerText = "Mảng: [" + numbers.join(", ") + "]";
    }
}

// 1. Tổng các số dương trong mảng
function sumPositiveNumbers() {
    let sum = 0;
    for (let num of numbers) {
        if (num > 0) sum += num;
    }
    displayResult("Tổng số dương: " + sum);
}

// 2. Đếm có bao nhiêu số dương trong mảng
function countPositiveNumbers() {
    let count = 0;
    for (let num of numbers) {
        if (num > 0) count++;
    }
    displayResult("Số dương: " + count);
}

// 3. Tìm số nhỏ nhất trong mảng
function findMin() {
    if (numbers.length === 0) return displayResult("Mảng trống.");
    let min = Math.min(...numbers);
    displayResult("Số nhỏ nhất: " + min);
}

// 4. Tìm số dương nhỏ nhất trong mảng
function findMinPositive() {
    const positiveNumbers = numbers.filter(num => num > 0);
    if (positiveNumbers.length === 0) return displayResult("Không có số dương.");
    let minPositive = Math.min(...positiveNumbers);
    displayResult("Số dương nhỏ nhất: " + minPositive);
}

// 5. Tìm số chẵn cuối cùng trong mảng
function findLastEven() {
    for (let i = numbers.length - 1; i >= 0; i--) {
        if (numbers[i] % 2 === 0) return displayResult("Số chẵn cuối cùng: " + numbers[i]);
    }
    displayResult("Không có số chẵn.");
}

// 6. Đổi chỗ hai giá trị trong mảng
function swap() {
    let pos1 = parseInt(prompt("Nhập vị trí thứ nhất:"));
    let pos2 = parseInt(prompt("Nhập vị trí thứ hai:"));
    if (pos1 >= 0 && pos2 >= 0 && pos1 < numbers.length && pos2 < numbers.length) {
        [numbers[pos1], numbers[pos2]] = [numbers[pos2], numbers[pos1]];
        document.getElementById("arrayDisplay").innerText = "Mảng: [" + numbers.join(", ") + "]";
    } else {
        displayResult("Vị trí không hợp lệ.");
    }
}

// 7. Sắp xếp mảng theo thứ tự tăng dần
function sortArray() {
    numbers.sort((a, b) => a - b);
    document.getElementById("arrayDisplay").innerText = "Mảng: [" + numbers.join(", ") + "]";
    displayResult("Đã sắp xếp mảng.");
}

// 8. Tìm số nguyên tố đầu tiên trong mảng
function findFirstPrime() {
    for (let num of numbers) {
        if (isPrime(num)) return displayResult("Số nguyên tố đầu tiên: " + num);
    }
    displayResult("Không có số nguyên tố.");
}

// Hàm kiểm tra số nguyên tố
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 9. Đếm số nguyên trong mảng
function countIntegers() {
    displayResult("Số lượng số nguyên: " + numbers.length);
}

// 10. So sánh số lượng số âm và số dương
function comparePositiveNegative() {
    let positives = numbers.filter(num => num > 0).length;
    let negatives = numbers.filter(num => num < 0).length;
    displayResult(positives > negatives ? "Số dương nhiều hơn" : positives < negatives ? "Số âm nhiều hơn" : "Số lượng bằng nhau");
}

// Hiển thị kết quả
function displayResult(result) {
    document.getElementById("result").innerText = result;
}
