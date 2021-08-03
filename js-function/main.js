// 상품 데이터
const data = [
    { name: '초콜렛', price: 2000 },
    { name: '아이스크림', price: 1000 },
    { name: '컵라면', price: 1600 },
    { name: '볼펜', price: 2500 },
    { name: '아메리카노', price: 4000 },
    { name: '과자', price: 3000 },
    { name: '탄산수', price: 1200 },
    { name: '떡볶이', price: 3500 },
    { name: '노트', price: 1500 },
    { name: '껌', price: 500 }
];

// 사용자 입력 받기
const line = prompt('최대 금액을 입력해주세요.');
const amount = +line;

// 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
const item = getItemByAmount(data, amount);

const msg = item ? 
    `${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.` : 
    '살 수 있는 상품이 없습니다.';

// 결과 출력
alert(msg);

// 아래에 getItemByAmount 함수를 작성하세요.
function getItemByAmount(array, amount) {

    if ((0 <= amount) && (amount < Number.MAX_SAFE_INTEGER)) { //유효한 숫자 범위 내에서 함수 실행문
        const list = array.filter(item => (item.price <= amount)); //가진 금액보다 작은 가격의 리스트 필터
        let maxItem = list[0]; //최대가격 상품을 찾기 위한 초기값
        for (let i = 1; i < list.length; i++) { //최대가격 상품 검색
            if (list[i].price > maxItem.price) { //최대가격 상품 업데이트 조건
                maxItem = list[i];
            }
        }
        return maxItem; //최대 가격 상품 리턴
    } else { //유효하지 않은 범위 null 리턴
        return null;
    }

}