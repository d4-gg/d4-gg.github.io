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
    .addScene('tell1:수호자의 우주선이 굉음과 함께 마지막으로 타이탄을 떠나는 모습을 지켜본 후', 850)
    .addScene('tell1:부사령관 슬론은 집무실로 들어가 군체에서 빼앗은 황금기 기술을 작동시켰다.', 850)
    .addScene('tell1:묵직한 동력원이 탄띠처럼 어깨에 걸려 있었다.', 850)
    .addScene('tell1:그녀는 그걸 목 너머로 늘어뜨린 후 크고 투박한 수트 안으로 발을 넣었다.', 850)
    .addScene('tell1:고개를 숙여 회색 두건으로 머리를 밀어 넣을 때 눈앞에 화면이 나타났다.', 850)
    .addScene('tell1:—아직—은 이해할 수 없는 언어였지만, 그녀는 초록색 옵션을 선택했다.', 850)
    .addScene('tell1:쉬잇 소리와 함께 수트는 그녀의 몸에 맞게 줄어들었다.', 850)
    .addScene('tell1:여전히 무겁긴 했지만, 제대로 움직일 수 있었다. ', 850)
    .addScene('tell1:그녀가 팔에 신경을 집중하자 그 부위에 딱지처럼 두꺼운 장갑판이 생겨났다. 꽤 인상적이었다.', 850)
    .addScene('tell1:전기 에너지를 형성해 보려 했지만 수트가 그녀의 빛을 차단했다.', 850)
    .addScene('tell1:어쩌면 빛이 수트를 통과할 수 있게 하는 방법을 배워야 하는 건지도 몰랐다.', 850)
    .addScene('tell1:그녀는 눈으로 다른 옵션을 선택하고, 다시 한번 선택하여 확인했다.', 850)
    .addScene('tell1:아무런 고통 없이 수트가 차가운 튜브를 그녀의 옆구리에 꽂았고, 배 근처 어딘가에 똬리를 틀었다. ', 850)
    .addScene('tell1:그걸로 몇 가지 의문에 대한 답을 확인할 수 있었다.', 850)
    .addScene('tell1:슬론은 휘청거리며 밖으로 나갔다. 폭풍이 몰아치고 있었다.', 850)
    .addScene('tell1:느긋하게 하늘 위에 떠 있는 침입자를 타이탄이 직접 몰아내려 하는 것만 같았다.', 850)
    .addScene('tell1:그녀는 돌풍 속으로 걸어 들어갔고, 빗방울이 그녀의 두 번째 피부를 두드렸다.', 850)
    .addScene('tell1:걸음을 내디딜 때마다 수트가 그녀의 걸음걸이에 조금씩 적응하면서 움직이기가 편해졌다.', 850)
    .addScene('tell1:기호가 번쩍이고, 군체 노예가 그녀를 향해 돌진했다. ', 850)
    .addScene('tell1:그녀는 적의 목덜미와 팔을 붙잡아 그대로 찢어 버렸다. 아주 간단했다.', 850)
    .addScene('tell1:그러고 나서 그녀는 웃었다. 수트는 그 소리를 전투의 함성으로 해석하여 증폭한 후 방송했다.', 850)
    .addScene('tell1:우렁찬 목소리가 비 내리는 착륙장 위, 버려진 컨테이너들 사이에서 메아리쳤고,', 850)
    .addScene('tell1:사이렌의 감시를 넘어 위쪽 피라미드를 향해 뻗어 나갔다.', 850)
    .addScene('tell1:번개가 하늘을 밝히고, 폭풍은 쉬지 않고 몰아쳤다.', 850)