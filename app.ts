enum GenderType{
    male = 'male',   //변수에 적용할때에는 gender:GenderType.male 이런식으로 선언/ male은 0의 값, female은 1의 값을 가짐
    female ='female',
    genderNeutral='neutral' //
}

let a = 5; //'타입추론'에 의해 자동으로 number로 정의된다.할당값을 기준으로 타입 추론

let student={//let 대신 const 사용으로 보안 업
    name:'Jake',
    course:'Getting Started with TypeScript',
    codingIQ:80,
    code: function(){
        console.log('brain is working hard');
    }
}
interface Student{ //interface앞은 대문자로 해주기 집합처럼 사용
    readonly studentID: number; //const처럼 값을 바꿀수 없다.
    studentName: string;
    age? : number;  // ?붙이면 있어도 되고 없어도 되는 변수로 변함
    gender: 'male' | 'female' | 'genderNeutral'; //enum과 같은 역할을 하는 literal type사용
    course: Boolean;
    addComment (comment : string) : string;
    addcomment ? : ( comment: string) => string;//두 개는 동일한 역할 (인터페이스 내부에 함수선언) string=반환형

}

//코드렌더링 할때 interface는 그냥 무시됨. 그냥 많은 정보를 제공할때 사용됨

function calculateCodingIQ(lostPoints: number) : Student//lostpoints=매개변수 any:매개변수의 타입 number반환값 함수 앞 function, 
function calculateCodingIQ (lostPoints){
    return {studentID: 111,
        studentName: 'git',
        age : 122,
        gender: 'fvfbf',
        course: true
    };
}

//유니언타입
let someValue : number | string //넘버나 스트링 중 하나가능 
someValue = 5;
//type aliases
type StrOrNum = number | string;
let someValue = StrOrNum;
//typeofoperator와 조건문 같이 사용하면서 유니언타입,typealias의 문제 해결
type StringOrNum = string | number;
let itemPrice = number;
//타입가드(코드검증을 수행하는것)
const setItemPrice = (price : StringOrNum): void => {
    if( typeof price === 'string'){//typeof는 그 변수의 타입을 반환한다.즉, 이 의미는 price의 타입이 string 이면...(===는 value와 datatype을 비교할때 사용)
        itemPrice =0;
    } else {
    itemPrice = price;
    }
};

setItemPrice (50);

//typescript에서의 함수작성 방법
class Employee{
 private _fullName : string;  //비공개 변수앞에 _underscore를 넣어준다(암묵적 룰)
 age : number;
 jobTitle: string;
 hourlyRate: number;
 workingHoursPerWeek : number;

constructor (fullName:string, age: number, jobTitle: string, hourlyRate:number, workingHoursPerWeek: number){
    //constructor 생성자
}
get fullName(){ //클라스 외부에서 getter와 setter에 접근가능하다. 변수인 age, jobTitle등 처럼. 불러올때()안붙여도된다.
    return this._fullName;
}
set fullName(value : string){
    this._fullName = value;
}
printEmployeeDetails = () :void => {
    console.log(`${this.fullName}의 직업은 ${this.jobTitle} 이고 일주일의 수입은 ${this.hourlyRate* workingHoursPerWeek} 달러이다.`)
}
}
//interface와 class의 차이는 무엇일까?
//(class는 선언+묶어주기, interface는묶어주기)

//인스턴스 생성하는법
let employee1 = new Employee();
employee1.printEmployeeDetails();
//
let employee2: Employee = new Employee('민수', 28, '주니어 개발자',40,35);

employee2.printEmployeeDetails();
//Access Modifier  클라스외부로부터의 접근제어 (public, private, protected)
employee1.fullName = '헨리';//setter불어오기

//클라스의 생성자에 Access Modifier 를 부여하면, 객체가 생성될때 컨스트럭터의 매개변수로 전달된 값은 객체의 프로퍼티값으로,
//자동으로 그 값이 초기화되고 할당된다.