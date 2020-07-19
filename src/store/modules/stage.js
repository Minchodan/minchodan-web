import { useDispatch } from "react-redux";

export const INITIALIZE = "stage/INITIALIZE";
export const SET_STATE = "stage/SET_STATE";
export const INITIALIZE_ARRAY = "stage/INITIALIZE_ARRAY";
export const ADD_ARRAY = "stage/ADD_ARRAY";

const initialState = {
  level: 1,
  story: [
    {
      level: 1,
      type: "message",
      kind: "T",
      msg: "5일 후 약속한 장소에서 보자꾸나",
      time: 2000,
    },
    {
      level: 1,
      type: "message",
      kind: "M",
      msg: "네 알겠습니다. 그때 뵐게요!",
      time: 2000,
    },
    {
      level: 1,
      type: "message",
      kind: null,
      msg: "4시간 전",
      time: 1000,
    },
    {
      level: 1,
      type: "message",
      kind: "T",
      msg: "사소한 문제가 생긴 것 같구나",
      time: 2000,
    },
    {
      level: 1,
      type: "message",
      kind: "T",
      msg: "만약 이 메시지를 보면 약속된 장소로 가지 말고",
      time: 2000,
    },
    {
      level: 1,
      type: "message",
      kind: "T",
      msg: "메시지에 첨부한 위치로 가거라",
      time: 2000,
    },
    {
      level: 1,
      type: "message",
      kind: "T",
      msg: "나 대신 널 도와줄 수 있는 괴짜 친구를 찾을 수 있을 거란다.",
      time: 3000,
    },
    {
      level: 1,
      type: "description",
      kind: null,
      msg:
        "원래 계획대로였다면\n오늘 도시 외곽의 검문소에서 선생님을 만나 함께 도시로 이동할 예정이었지만, 선생님은 뭔가 바쁜 일이 있으신 것인지 메시지 한 통만 남기고선 전화기도 꺼진 체로 뭔가를 하고 계신가 봅니다. 아무래도 귀찮지만, 선생님이 보낸 메시지대로 해야만 할 것 같습니다.",
      time: 5000,
    },
    {
      level: 1,
      type: "button",
      kind: null,
      msg: "귀찮음을 무릅쓰고 목적지로 이동",
      time: 3000,
      onClickType: "NEXT_LEVEL",
    },
    {
      level: 2,
      type: "description",
      kind: null,
      msg:
        "이곳 노드 8의 외곽은 다른 도시에 비해서는 그럭저럭 살만한 곳입니다. 노드 8의 기술력과 밀집된 상업지역 덕분에 방문객이 많다 보니 다른 지역에 비해 그럭저럭 치안도 유지 되고 각종 혜택도 받으며 수혜를 누릴 수 있죠. 당신은 집 앞의 다리를 건너 평소 자주 이용하던 작은 매점을 지나 허름해 보이는 책방에 도착했습니다.",
      time: 5000,
    },
    {
      level: 2,
      type: "button",
      kind: null,
      msg: "책방으로 들어간다",
      time: 3000,
      onClickType: "NEXT_LEVEL",
    },
    {
      level: 3,
      type: "description",
      kind: null,
      msg:
        "책방 구석으로 발을 한 걸음씩 내디딜 때마다 조금씩 짙어지는 꿉꿉한 종이 냄새를 맡으며 주변을 살피던 중 당신은 한 남자를 발견했습니다. 덥수룩한 수염과 동그란 안경 그리고 캡모자를 푹 눌러쓴 그는 전에 선생님이 이야기 해주셨던 친과와 매우 닮은 것 같습니다.",
      time: 5000,
    },
    {
      level: 3,
      type: "button",
      kind: null,
      msg: "말을 건다",
      time: 3000,
      onClickType: "NEXT_LEVEL",
    },
    {
      level: 4,
      type: "description",
      kind: null,
      msg: `남자에게 선생님의 소개로 이곳에 왔다고 말한 당신은 선생님이 보낸 메세지를 보여주며 도시 외곽에서 어떻게 나가야 할지 묻는 당신에게 남자가 말합니다. "검문소를 통하지 않고 나갈 수 있는 방법은 도시에서 올라오는 환풍 파이프로 나가는 방법밖에 없어. 다른 곳은 다 저 빌어먹을 장벽 때문에 나가기는 불가능할 거야. 아무래도 일이 복잡해질 것 같으니 몇 가지 준비를 하는 동안 이 프로그램을 설치하거라." 그렇게 몇 마디 말을 남긴 후 남자는 책방 한 구석으로 사라졌다.`,
      time: 5000,
    },
    {
      level: 4,
      type: "button",
      kind: null,
      msg: "프로그램 설치를 위해 설명서를 읽어본다",
      time: 3000,
      onClickType: "NEXT_LEVEL",
    },
    {
      level: 5,
      type: "description",
      kind: null,
      msg: `"Scantool을 설치하시려면 print() 명령어를 이용해 설치할 프로그램 이름을 입력해서 설치 명령어를 출력하시오. 문장을 출력하시려면 출력하실 문자열을 ' 로 감싸야 합니다. ex: 'install' 한번 잘 따라서 프로그램을 설치해보자"`,
      time: 5000,
    },
    {
      level: 5,
      type: "button",
      kind: null,
      msg: "확인",
      time: 3000,
      onClickType: "CONFIRM_ANSWER",
      userAnswer: "print(install Scantool)",
      correctAnswer: "install Scantool",
    },
    {
      level: 6,
      type: "description",
      kind: null,
      msg: `올바른 문장을 출력시키자 새로운 프로그램이 설치되었다. 앞으로 전자기기들을 스캔하고 어떤 명령어로 작동하는지 조건을 알 수 있게 되었다! \n\n 때마침 남자가 다시 모습을 드러냅니다. "프로그램도 제대로 설치 한 것 같도 준비도 다 끝난 것 같으니 이제 한번 가보자고"`,
      time: 5000,
    },
    {
      level: 6,
      type: "button",
      kind: null,
      msg: "남자와 함께 밖으로 나선다",
      time: 3000,
      onClickType: "NEXT_LEVEL",
    },
    {
      level: 7,
      type: "description",
      kind: null,
      msg: `남자가 손에든 기계를 보여주며 말합니다. "내 손에 패널 보이지? 여기 나오는 걸 그대로 계산하면 돼" "일단 15246과 84652를 더한 값이 필요해 숫자 연산자 숫자를 입력하면 두 수가 계산된 결괏값이 나와 덧셈을 할 거면 + 연산자를 입력하면 되고"`,
      time: 5000,
    },
    {
      level: 7,
      type: "button",
      kind: null,
      msg: "확인",
      time: 3000,
      onClickType: "CONFIRM_ANSWER",
      userAnswer: "15246+84652",
      correctAnswer: "99898",
    },
    {
      level: 8,
      type: "description",
      kind: null,
      msg: `"다음에 결괏값에 2673을 빼. 전에 했던거에서 +를 -로 바꾸기만 하면 돼"`,
      time: 5000,
    },
    {
      level: 8,
      type: "button",
      kind: null,
      msg: "확인",
      time: 3000,
      onClickType: "CONFIRM_ANSWER",
      userAnswer: "99898-2673",
      correctAnswer: "97225",
    },
    {
      level: 9,
      type: "description",
      kind: null,
      msg: `"그 다음 결괏값을 4로 곱해줘. 마찬가지로 * 연산자를 입력하면 돼"`,
      time: 5000,
    },
    {
      level: 9,
      type: "button",
      kind: null,
      msg: "확인",
      time: 3000,
      onClickType: "CONFIRM_ANSWER",
      userAnswer: "97225*4",
      correctAnswer: "388900",
    },
    {
      level: 10,
      type: "description",
      kind: null,
      msg: `다음엔 결괏값에 2를 나눠줘
        / 를 사용하면 돼`,
      time: 5000,
    },
    {
      level: 10,
      type: "button",
      kind: null,
      msg: "확인",
      time: 3000,
      onClickType: "CONFIRM_ANSWER",
      userAnswer: "388900/2",
      correctAnswer: "194450.0",
    },
    {
      level: 11,
      type: "button",
      kind: null,
      msg: "소수점이 생겼는데요?",
      time: 3000,
      onClickType: "NEXT_LEVEL",
    },
    {
      level: 12,
      type: "description",
      kind: null,
      msg: `"이거 중요한 거니까 잘 기억해야 돼
        덧셈, 뺄셈, 곱셈은 정수로 결괏값이 나오는데
        나눗셈은 실수로 결괏값이 나와
        이거 까먹었다간 나중에 귀찮아지니까 꼭 기억해야 돼 알았어?
        예전엔 나눗셈도 정수가 나오긴 했는데 파이썬 3으로 넘어와서는
        이렇게 됐다니까....
        
        아무튼, 지겨운 계산시간은 끝났으니까 조금만 기다려"
        말을 마친 뒤 남자는 잠금장치를 이리저리 만지더니
        사무실의 문을 엽니다
        
        "여긴 대부분 아무도 없으니까 그냥 편하게 있으면 돼"
        그렇게 말한 남자는 이리저리 뒤지더니 다시 당신을 부릅니다
        "그 기계 한 번 더 써야되니까 잠깐 와봐 계산 하는 법을 하나도
        모른다고 했으니까 이참에 이것도 해보자
        똑같이 파이썬 프롬프트 켜고
        아까 한 것처럼 불러주는 거 계산 하면 돼"
        남자는 당신의 기계를 남자가 가지고 있던 기계와 연결한 뒤
        당신에게 다시 계산을 시켰습니다.
        
        "2435를 4로 나누고 소수점 뒤는 버려
        아까 했던 거랑 비슷하게 // 연산자를 사용 하면 돼"`,
      time: 5000,
    },
    {
      level: 12,
      type: "button",
      kind: null,
      msg: "확인",
      time: 3000,
      onClickType: "CONFIRM_ANSWER",
      userAnswer: "2435//4",
      correctAnswer: "608",
    },
    {
      level: 13,
      type: "description",
      kind: null,
      msg: `이다음엔 3으로 결괏값을 나누고 나머지만 구해
        % 연산자를 사용하면 돼`,
      time: 5000,
    },
    {
      level: 13,
      type: "button",
      kind: null,
      msg: "확인",
      time: 3000,
      onClickType: "CONFIRM_ANSWER",
      userAnswer: "608%3",
      correctAnswer: "2",
    },
    {
      level: 14,
      type: "description",
      kind: null,
      msg: `"결괏값의 10 거듭제곱 값이 필요해
        ** 연산자를 사용하면 쉽게 계산할 수 있을 거야"`,
      time: 5000,
    },
    {
      level: 14,
      type: "button",
      kind: null,
      msg: "확인",
      time: 3000,
      onClickType: "CONFIRM_ANSWER",
      userAnswer: "2**10",
      correctAnswer: "1024",
    },
    {
      level: 15,
      type: "description",
      kind: null,
      msg: `"다음으로는 결괏값에 5를 나눠"`,
      time: 5000,
    },
    {
      level: 15,
      type: "button",
      kind: null,
      msg: "확인",
      time: 3000,
      onClickType: "CONFIRM_ANSWER",
      userAnswer: "1024/5",
      correctAnswer: "204.8",
    },
    {
      level: 16,
      type: "description",
      kind: null,
      msg: `"거기서 2를 나누고 소수점 뒤는 버려"`,
      time: 5000,
    },
    {
      level: 16,
      type: "button",
      kind: null,
      msg: "확인",
      time: 3000,
      onClickType: "CONFIRM_ANSWER",
      userAnswer: "204.8//2",
      correctAnswer: "102.0",
    },
    {
      level: 17,
      type: "button",
      kind: null,
      msg: "아까는 결괏값이 정수였는데?",
      time: 3000,
      onClickType: "NEXT_LEVEL",
    },
    {
      level: 18,
      type: "description",
      kind: null,
      msg: `그건 정수끼리는 정수 결괏값으로 나오고
        실수를 하나라도 같이 계산하면 실수 결괏값으로 나와
        이번엔 실수계산 여러 개를 한번에 해보자
        결괏값에 231.1을 더하고 2.5를 곱한 뒤 0.03을 빼면 돼`,
      time: 5000,
    },
    {
      level: 18,
      type: "button",
      kind: null,
      msg: "확인",
      time: 3000,
      onClickType: "CONFIRM_ANSWER",
      userAnswer: "102.0+231.1*2.5-0.03",
      correctAnswer: "832.72",
    },
    {
      level: 19,
      type: "description",
      kind: null,
      msg: `그다음 결괏값에  0.2를 나눠 볼래?`,
      time: 5000,
    },
    {
      level: 19,
      type: "button",
      kind: null,
      msg: "확인",
      time: 3000,
      onClickType: "CONFIRM_ANSWER",
      userAnswer: "832.72/0.2",
      correctAnswer: "4163.599999999999",
    },
    {
      level: 20,
      type: "button",
      kind: null,
      msg: " 어? 계산결과가 이상한데..",
      time: 3000,
      onClickType: "NEXT_LEVEL",
    },
    {
      level: 21,
      type: "description",
      kind: null,
      msg: `"아아 실수 나눗셈은 조금 복잡했었지
            그거 이리 줘봐 이건 지금 딱히 배울 필요는 없으니까 
            일단은 내가 해줄께"
            선생님의 친구가 기계를 이리저리 만지고 나니
            정확한 값이 나왔습니다
            결괏값은 4163.6
            "마지막으로 값을 실수에서 정수로 만들자
        int() 괄호 안에 결괏값을 넣으면 정수로 만들어줄 거야
        그대로 출력만 시키면 돼"`,
      time: 5000,
    },
    {
      level: 21,
      type: "button",
      kind: null,
      msg: "확인",
      time: 3000,
      onClickType: "CONFIRM_ANSWER",
      userAnswer: "int(4163.6)",
      correctAnswer: "4163",
    },
    {
      level: 22,
      type: "description",
      kind: null,
      msg: `당신이 계산을 모두 하자 보관함이 열리고
        남자는 복잡해 보이는 기계를 이리저리 만지더니
        다시 당신을 부릅니다
        "여기 와서 이 코드 좀 수정해 줘야 할 것 같은데?
        코드 뒤에 변수 X를 실수로 바꿔주는 코드만 있으면 될 것 같아
        아까 실수를 정수로 만들 때랑은 반대로 int 대신 float를 쓰면 될 거야
        난 바람 좀 쐬고 올 테니까 그동안 해놓고 있어."
        
        당신은 변수에 대해 배웠던 기억이 다시 나기 시작했습니다
        이제 한번 코드를 작성해 봅시다.`,
      time: 5000,
    },
    {
      level: 22,
      type: "message",
      kind: null,
      msg: `
        변수:
        x = 10이라고 입력하면 10이 들어있는 변수 x가 만들어져. 즉, 변수 이름 = 값 형식이지
        이렇게 하면 변수가 생성되는 동시에 값이 할당(저장)할 수 있단다
        참고로 변수에는 숫자뿐만 아니라 문자열도 넣을 수 있단다
        
        변수 이름은 원하는 대로 지으면 되지만 다음과 같은 규칙은 꼭 지켜야 한단다.
        
        영문 문자 X 숫자 X
        대소문자를 구분
        문자부터 시작, 숫자부터 시작 불가
        _(밑줄 문자)로 시작할 수 있음
        특수 문자(+, -, *, /, $, @, &amp;, % 등)는 사용 불가
        파이썬의 키워드(if, for, while, and, or 등)는 사용 불가`,
      time: 1000,
    },
    {
      level: 22,
      type: "button",
      kind: null,
      msg: "확인",
      time: 3000,
      onClickType: "SET_CODE",
      code: `X = int(10 / 3)
      X = X*X-1
      `,
    },
    {
      level: 23,
      type: "description",
      kind: null,
      msg: `남자가 다시 사무실로 들어오며 말했습니다
      "오 그새 다 해놨군. 밖에 누전 차단기를 열어 놨으니까
      전기는 끊고, 도시 쪽으로 가는 알람은 안 울리게 해놓아 줘
      오기 전에 줬던 프로그램으로 대충 뭘 해야 할지 알 수 있을 거야"
      당신은 기계들이 돌아가면서 생긴 열 때문에 약간 더웠던 사무실을 빠져나와
      시원한 공기를 쐬며 전선들이 복잡하게 연결된 누전 차단기 앞에 섰습니다.`,
      time: 5000,
    },
    {
      level: 23,
      type: "button",
      kind: null,
      msg: "누전 차단기를 스캔한다",
      time: 3000,
      onClickType: "NEXT_LEVEL",
    },
    {
      level: 23,
      type: "description",
      kind: null,
      msg: `누전 차단기의 데이터 케이블 코드에 케이블을 끼운 후
      프로그램을 실행하자 프로그램이 어떻게 돌아가는지 파악을 한 당신은
      본격적으로 코드를 추가하기 위해 고민을 합니다.
      '첫 번째 출력은 전원이고, 두 번째 출력은 알람 비활성화랑 관련 있으니까
      0
      disable
      을 출력시키면 될 것 같은데...'`,
      time: 5000,
    },
    {
      level: 23,
      type: "button",
      kind: null,
      msg: "확인",
      time: 3000,
      onClickType: "CONFIRM_ANSWER",
      userAnswer: `0disable`,
      correctAnswer: "",
    },
    {
      level: 24,
      type: "description",
      kind: null,
      msg: `전원이 내려가자 사무실은 비상 전력으로 돌아가는 작은 전구 하나만 켜진 채로
        다른 기계들의 전원이 모두 꺼지고 주위는 쥐 죽은 듯 고요해졌다
        다시 사무실로 돌아가 보니 남자는 이것저것 건드려가며 복잡해 보이는 일을 한다
        손을 털고 일어나며 말했다.
        "여기서 볼일은 다 본 것 같네, 오늘은 이 정도 하고 내일 다시 보자고"
        그렇게 말을 한 체로 남자는 사라졌습니다.
        
        이만 늦었으니 당신도 오늘은 여기까지 하고
        집으로 돌아가서 푹 쉬어야 할 것 같습니다.`,
      time: 5000,
    },
    {
      level: 24,
      type: "button",
      kind: null,
      msg: "집으로 돌아간다",
      time: 3000,
      onClickType: "NEXT_LEVEL",
    },
    {
      level: 25,
      type: "message",
      kind: "TF",
      msg: `여기로 오기 전에 심부름 하나만 부탁할께
        지도에 표시한 위치의 건물에 있는 구형 노트북을 고쳐서 가지고 와줘
        도움이 필요하면 메시지 보내고`,
      time: 2000,
    },
    {
      level: 25,
      type: "button",
      kind: null,
      msg: "지도에 표시된 장소로 이동한다",
      time: 3000,
      onClickType: "NEXT_LEVEL",
    },
    {
      level: 26,
      type: "description",
      kind: null,
      msg: `당신은 오랫동안 방치되어 있어 보이는 창고 안으로 들어갔습니다
        구석구석에 걸쳐진 거미줄들과 여기저기 쌓여있는 먼지들을 속에서
        아주 오래된 노트북을 찾을 수 있었습니다.
        충전기를 연결하고 전원 버튼을 눌러보니 전원은 잘 들어오지만, 저장장치와의 연결이 제대로 되지 않았는지 오류 메시지가 뜬다
        메인보드를 스캔해보니 
        ssd 변수는 1번, hhd 변수는 3번, disk_drive 변수는 10번 포트로 지정을 해줘야 할 것 같습니다
        코드를 추가해 봅시다.`,
      time: 5000,
    },
  ],
  message: [],
  description: [],
  button: [],
};

export default function stage(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE:
      return {
        ...initialState,
      };
    case SET_STATE:
      return { ...state, [action.key]: action.value };
    case INITIALIZE_ARRAY:
      return {
        ...state,
        message: [],
        description: [],
        button: [],
      };
    case ADD_ARRAY:
      return {
        ...state,
        [action.key]: [...state[action.key], action.value],
      };
    default:
      return state;
  }
}
