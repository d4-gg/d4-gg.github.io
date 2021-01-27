/*
 * TheaterJS, a typing effect mimicking human behavior.
 *
 * Github repository: 
 * https://github.com/Zhouzi/TheaterJS
 *
 */

var theater = theaterJS({ erase: 450})

theater
  .on('type:start, erase:start', function () {
    theater.getCurrentActor().$element.classList.add('actor__content--typing')
  })
  .on('type:end, erase:end', function () {
    theater.getCurrentActor().$element.classList.remove('actor__content--typing')
  })
  .on('type:start, erase:start', function () {
    if (theater.getCurrentActor().name === 'tell1') {
      document.body.classList.add('dark')
    } else {
     document.body.classList.add('dark')
    }
  })

theater
  .addActor('tell1', { speed: 0.8,accuracy: 1 })
    .addScene('tell1:타이탄이 그의 성소에 들어서자 반스 형제의 얼굴에 미소가 떠올랐다. 착각할 수 없는 냄새였다.', 850)
    .addScene('tell1:고대의 화약, 불타 버린 기름, 그을린 벡스 체액, 수백 번의 생을 거치며 끝없이 사용한 강철의 알싸한 내음까지.', 850)
    .addScene('tell1:"완벽한 역설을 갖고 있군." 반스가 최대한 차분한 목소리로 말했다. 그가 손을 뻗었다. "좀 봐도 될까?"', 850)
    .addScene('tell1:타이탄은 어깨를 으쓱한 후 가방에 손을 넣어 그 산탄총을 꺼냈다. 그리고 기다리고 있던 반스의 손에 총을 올려놓았다.', 850)
    .addScene('tell1:그는 총열을 손가락으로 더듬은 후 개머리판의 무게를 느껴 보았다. "아, 진짜 완벽한 역설은 아니군. 그렇지?"', 850)
    .addScene('tell1:타이탄은 당황한 표정을 지었다. 반스는 고개를 갸웃 기울이고 잠시 기다린 후 말을 이었다.', 850)
    .addScene('tell1:"이 무기는 세인트-14의 무덤에서 가져온 게 아니라 프랙탈린으로 작동시킨 테서렉트에서 가져온 거겠지?"', 850)
    .addScene('tell1:타이탄은 고개를 끄덕였다. 그리고 한참 동안 눈먼 상대를 가만히 바라보다가 말했다. "그 해시계가 만들었습니다."', 850)
    .addScene('tell1:반스의 손이 총을 꽉 잡았다. 산탄 일곱 발, 아니, 여덟 발이 들어 있어 묵직했다.', 850)
    .addScene('tell1:전술 탄창. 이걸 손에 넣기까지 시간이 꽤 걸렸을 것이다.', 850)
    .addScene('tell1:"이 무기를 위해 얼마나 많은 시간대를 아무 생각 없이 우리 시간대에 묶었지?"', 850)
    .addScene('tell1:"이 공허한 괴물을 만들기 위해 이 세계가 추가 현실을 얼마나 많이 짊어져야 했나?"', 850)
    .addScene('tell1:반스의 정신은 산탄총을 끌어당기는 무한한 거미줄 위를 헤엄쳤다.', 850)
    .addScene('tell1:"이걸 위해 프랙탈린을 얼마나 많이 희생해야 했어? 400개?" 그는 경악한 표정으로 잠시 말을 멈췄다. "그 이상인가?"', 850)
    .addScene('tell1:"트렌치 배럴도 붙어 있죠." 타이탄은 대수롭지 않다는 듯 말했다.', 850)
    .addScene('tell1:"내 성소에서 나가." 반스는 산탄총이 죽은 동물이라도 되는 것처럼 내려놓았다.', 850)
    .addScene('tell1:"그대는 모든 것의 최후를 앞당겼다. 나 또한 그에 따라 예언을 조정해야 하겠다."', 850)