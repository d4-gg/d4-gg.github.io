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
    .addScene('tell1:히무라 시노부의 일기', 850)
  .addScene('tell1:이전 일지는 삭제했다. 그것에 대해 할 말은..죽는 것보다 무서운 건, 이 벽 속에서 죽어가는 것뿐이다.', 850)
  .addScene('tell1:하지만 난 조국에 약속했다.', 850)
  .addScene('tell1:오늘 새 수호자 3명을 문으로 데리고 갔다. 그들 중 두 명은 파란색이었다. 진짜 파란색이었다.', 850)
  .addScene('tell1:눈을 뗄 수가 없었다. 이름은 테린 바이, 나디야였다. 세 번째는 엑소, 리-4였다.', 850)
  .addScene('tell1:테린은 내가 쳐다보는 걸 알고 웃었다. "이런 미남은 처음 보지?"', 850)
  .addScene('tell1:"파란색 사람을 보는 게 처음인 거야" 내가 말했다..', 600)
  .addScene('tell1:테린은 각성자에 대해 설명하려 했다. 하지만 그다지 많이 알지는 못했다. 수호자가 된 이후의 일은 기억을 하지 못했던 것이다.', 850)
  .addScene('tell1:그럼 수호자는 어떻게 이름을 정하는 건데? 내가 물었다. 테린이 설명하길, 엑소 수호자는 대개 이름을 기억하지만 다른 수호자들은 그렇지 않다고 한다.', 850)
  .addScene('tell1:각성자와 인간 수호자는 아무것도 기억을 못 해서 새 이름을 정한다고 한다.', 850)
  .addScene('tell1:그리고는 "멋있잖아! 테린 바이라는 이름을 잘 기억해 두라구. 잃어버린 전쟁지능 라스푸틴을 찾을 수호자의 이름이니까!"라고 말했다', 850)
  .addScene('tell1:테린이 그렇게 말할 때 리-4는 질린 듯이 보였다. 엑소치고는 인상적인 표정이었다.', 850)
  .addScene('tell1:테린이 라스푸틴과 바이코누르에 대해 한동안 얘기를 늘어놓았기 때문에 나는 화제를 돌리기 위해 나디야에게 이름을 어떻게 정했는지를 물었다. ', 850)
  .addScene('tell1:하지만 그녀는 눈만 돌릴 뿐이었다. "미카가 수다 떨라고 돈 주는 게 아니라서."', 850)
  .addScene('tell1:"돈을 받는다고?" 테린이 말했다.', 850)
  .addScene('tell1:리-4가 팔꿈치로 테린을 툭 쳤다.', 850)
  .addScene('tell1:"아우! 왜 쳐?"', 850)
  .addScene('tell1:"우리가 여기 온 이유를 기억나게 해 주려고." 리-4가 말했다.', 850)
  .addScene('tell1:그때 그녀의 목소리를 처음으로 들었다.', 850)
  .addScene('tell1:"여기 왜 온 건데?" 내가 물었다.', 850)
  .addScene('tell1:그녀는 전기 장치로 된 눈으로 나를 빤히 쳐다보았다. "오래된 빚이 있거든."', 850)
  .addScene('tell1:"미카한테?"', 850)
  .addScene('tell1:"아니."', 850)
  .addScene('tell1:나디야는 문 난간에 기대고 머리를 비스듬하게 뒤로 돌렸다. ', 850)
  .addScene('tell1:잠시 그녀를 밀어서 넘어뜨려 버릴까도 생각했다. ', 850)
  .addScene('tell1:"어쨌든 행운을 빌어." 나디야가 말했다.', 850)
  .addScene('tell1:"오래된 빚 따윈 관심 없어. 다른 사람이 나한테 빚을 지는 게 좋지."', 850)
  .addScene('tell1:그때 리-4가 어깨에 멘 저격총을 전광석화같이 뽑아 들었다. ', 850)
  .addScene('tell1:총이 나디야의 머리를 후려갈길 뻔했다.', 850)
  .addScene('tell1:리-4는 조준경을 눈에 맞추더니 총열을 벽에 붙이지도 않고 한 치의 흔들림도 없이 무기를 들었다. ', 850)
  .addScene('tell1:나디야의 궁시렁거림 외에는 아무 소리도 들리지 않았다.', 850)
  .addScene('tell1:이윽고 리가 총을 쏘았다.', 850)
  .addScene('tell1:멀리 수평선에서 그림자 하나가 쓰러졌다.', 850)
  .addScene('tell1:"몰락자야?" 테린이 말했다.', 850)
  .addScene('tell1:"왕이야." 리가 말했다.', 850)

  
 