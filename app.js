"use strict";
var GenderType;
(function (GenderType) {
    GenderType["male"] = "male";
    GenderType["female"] = "female";
    GenderType["genderNeutral"] = "neutral"; //
})(GenderType || (GenderType = {}));
var a = 5; //'타입추론'에 의해 자동으로 number로 정의된다.할당값을 기준으로 타입 추론
var student = {
    name: 'Jake',
    course: 'Getting Started with TypeScript',
    codingIQ: 80,
    code: function () {
        console.log('brain is working hard');
    }
};
function calculateCodingIQ(lostPoints) {
    return { studentID: 111,
        studentName: 'git',
        age: 122,
        gender: 'fvfbf',
        course: true
    };
}
//유니언타입
var someValue; //넘버나 스트링 중 하나가능 
someValue = 5;
var someValue = StrOrNum;
var itemPrice = number;
//타입가드(코드검증을 수행하는것)
var setItemPrice = function (price) {
    if (typeof price === 'string') { //typeof는 그 변수의 타입을 반환한다.즉, 이 의미는 price의 타입이 string 이면...
        itemPrice = 0;
    }
    else {
        itemPrice = price;
    }
};
setItemPrice(50);
//typescript에서의 함수작성 방법
var Employee = /** @class */ (function () {
    function Employee(fullName, age, jobTitle, hourlyRate, workingHoursPerWeek) {
        var _this = this;
        this.printEmployeeDetails = function () {
            console.log(_this.fullName + "\uC758 \uC9C1\uC5C5\uC740 " + _this.jobTitle + " \uC774\uACE0 \uC77C\uC8FC\uC77C\uC758 \uC218\uC785\uC740 " + _this.hourlyRate * workingHoursPerWeek + " \uB2EC\uB7EC\uC774\uB2E4.");
        };
        //constructor 생성자
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
//interface와 class의 차이는 무엇일까?
//(class는 선언+묶어주기, interface는묶어주기)
//인스턴스 생성하는법
var employee1 = new Employee();
employee1.printEmployeeDetails();
//
var employee2 = new Employee('민수', 28, '주니어 개발자', 40, 35);
employee2.printEmployeeDetails();
//Access Modifier  클라스외부로부터의 접근제어 (public, private, protected)
employee1.fullName = '헨리'; //setter불어오기
//클라스의 생성자에 Access Modifier 를 부여하면, 객체가 생성될때 컨스트럭터의 매개변수로 전달된 값은 객체의 프로퍼티값으로,
//자동으로 그 값이 초기화되고 할당된다.
