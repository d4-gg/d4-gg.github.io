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
    .addScene('tell1:애셔 미르는 조수의 우주선이 마지막으로 궤도를 향해 날아오르는 모습을 보며, ', 850)
    .addScene('tell1:그제야 그들이 함께해낸 일이 얼마나 만족스러웠는지 제대로 표현하지 않았다는 사실을 깨달았다.', 850)
    .addScene('tell1:그는 편지를 남길까도 잠깐 생각해 봤지만, 지금 당장 더 시급하게 생각해 봐야 할 문제들이 떠올랐다.', 850)
    .addScene('tell1:우선순위의 내림차순으로 처리를 시작한다면, 조수에게 연락하는 일까지는 도달하지 못할 가능성이 컸고,', 850)
    .addScene('tell1:그렇다면 그 행위 자체가 무의미해질 것으로 예상됐다.', 850)
    .addScene('tell1:그래서 그는 그냥 피라미디온으로 향했다.', 850)
    .addScene('tell1:벡스는 태어나지 않지만 만들어지지도 않는다. 이 난문제를 해결하기 위해 애셔는 이오에 왔다. ', 850)
    .addScene('tell1:그는 피라미드 또한 그 외계 자원과 미지의 힘을 활용하여 같은 목적으로 여기까지 왔을 거라고 추론했다. ', 850)
    .addScene('tell1:어둠의 함선이 직접 벡스의 비밀을 찾아온 것이다.', 850)
    .addScene('tell1:하지만 이곳은 이미 애셔 미르가 점령했고, 그는 그걸 지키기 위해 싸울 준비가 되어 있었다.', 850)
    .addScene('tell1:그는 곧 피라미디온 입구에 도착했다. 예상했던 대로 벡스 경비대가 대응을 시작했지만 그는 모든 준비가 되어 있었다. ', 850)
    .addScene('tell1:그는 적의 부서진 사체들을 쌓아 두고 안으로 들어갔다.', 850)
    .addScene('tell1:그는 처음 백여 마리 벡스를 파괴했다. 그리고 다시 백여 마리를 파괴했다.', 850)
    .addScene('tell1:미노타우르가 포효하며 그의 앞에 나타났지만 그는 금속 주먹으로 적의 방산충 핵을 박살냈다.', 850)
    .addScene('tell1:그는 작동을 멈춘 갈고리 모양의 팔다리를 넘어 앞으로 나아갔다. 죽은 체액과 끈적한 냉매에 발이 미끄러졌다.', 850)
    .addScene('tell1:애셔는 입안에 고인 피를 삼키고 다시 앞으로 나아갔다.', 850)
    .addScene('tell1:그는 소용돌이치는 문 앞에서 잠시 멈춰 서서 그 불규칙한 파동을 잠시 바라봤다. ', 850)
    .addScene('tell1:그리고 정확히 원하는 순간에 안으로 들어섰다. 그는 천천히 걸어서 주위를 휘도는 듯한 레이저 격자를 통과했다.', 850)
    .addScene('tell1:그는 발아래 지면이 깜빡이며 미친 듯이 흔들리는 동안 중력의 회오리바람에 침착하게 매달려 있었다.', 850)
    .addScene('tell1:그리고 벡스는 관찰하기 시작했다.', 850)
    .addScene('tell1:피라미디온의 통로에는 반짝이는 빨간색 눈이 줄지어 서 있었다.', 850)
    .addScene('tell1: 금속 마네킹들이 멍청히 서서 꿈틀거리며 지나가는 애셔를 보고 몸을 부들부들 떨었다.', 850)
    .addScene('tell1:낯익은 지역이 눈앞에 펼쳐졌다. 점판암 진창과 표백제의 뭉근한 악취가 스며 나오는 입체 구멍이었다.', 850)
    .addScene('tell1:하늘이 있을 곳을 바라보자 불가능한 형체가, 프랙탈의 모순이 또 하나 보였다.', 850)
    .addScene('tell1:리 위 높은 곳, 펜로즈의 소용돌이에서 잔잔한 방산충 호수가 금속 해안을 부드럽게 두드렸다.', 850)
    .addScene('tell1:그는 금속 팔을 들어 호수를 향해 뻗었다. 그리고 육체의 팔을 뻗었다.', 850)
    .addScene('tell1:그는 두 손을 뻗어 호수를 끌어내렸다.', 850)
  