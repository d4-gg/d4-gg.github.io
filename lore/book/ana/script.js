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
    .addScene('tell1:아나 브레이는 다른 수호자들과 달리 부활 당시 가지고 있던', 850)
    .addScene('tell1:사원증에 과거와 이름이 적혀 있어 자신의 과거를 알고 있는 특이한 케이스다.', 850)
    .addScene('tell1:황금기에 클로비스 브레이에게 입양되었으며 그를 위해 일했다.', 850)
    .addScene('tell1:아나는 스스로를 심리언어학자로 부르며 전쟁 지능 라스푸틴에', 850)
    .addScene('tell1:인간처럼 생각하는 방법을 가르쳤다.', 850)
    .addScene('tell1:수호자로서의 아나는 여섯 기둥 중 하나로 황혼의 틈 전투 에서', 850)
    .addScene('tell1:샤크스와 트루스, 은케치-32, 리우 펑, 압디와 함께 떼거지로 몰려드는 몰락자 가문 연합군의 진군을 저지하고', 850)
    .addScene('tell1:역공의 기회를 마련하여 전쟁을 승리로 이끈 전설들 중 한명이다.', 850)
    .addScene('tell1:이 전투에서 몰락자 대장에게 고스트와 같이 공격받아 그대로 추락하여 죽은 것으로 알려졌다', 850)
    .addScene('tell1:하지만, 그녀는 자신의 신분을 숨기고 화성의 클로비스 브레이 시설을 연구하고 탐험하기 위해 선봉대를 떠났다. ', 850)
    .addScene('tell1:붉은 전쟁이 발발하자 그녀는 다시 선봉대로 돌아왔다.', 850)
    .addScene('tell1:그녀와 자발라는 여전히 라스푸틴이 인류를 구하기 위해 어떤 역할을 해야 하는지에 대해서는 의견이 다르지만', 850)
    .addScene('tell1:수호자들이 라스푸틴의 발키리를 사용해 벌레 신 "솔"을 물리칠 수 있도록 도왔다.', 850)
  