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
    .addScene('tell1:자유는 사슬이고, 선택은 감옥이다.', 850)
    .addScene('tell1:너는 그를 보지만, 그가 바라는 것은 그 사실을 확인하는 것뿐이다.', 850)
    .addScene('tell1:하지만 그러려면 단순한 확인이 아닌 훨씬 더 끔찍한 일이 초래되어야 할 것이다. ', 850)
    .addScene('tell1:너는 그의 손이 네 안에 와 닿는 것을 느낀다.', 850)
    .addScene('tell1:그 손이 네 심장을 더듬어 뜯어내려 한다. 그가 초래할 고통을 너는 이미 잘 알고 있다.', 850)
    .addScene('tell1:마지막 저항 행위로 너는 족쇄를 부쉈고, 지금껏 천천히 모아 온 힘을 발휘했다.', 850)
    .addScene('tell1:물리적인 사슬은 부술 수 있지만', 850)
    .addScene('tell1:초인과의 사슬은 아무리 너라고 해도 그리 쉽게 깨뜨릴 수 있는 것이 아니다.', 850)
    .addScene('tell1:너는 그를 보고 그는 만족한다. 그리고 그는 떠난다.', 850)
    .addScene('tell1:네 저항의 포효만이 무한에 메아리친다. 너 또한 그들이 지켜보리라는 것을 안다.', 850)
    .addScene('tell1:그건 시간문제일 뿐이다.', 850)
    .addScene('tell1:나는 마지막 대변자이다.', 850)
    .addScene('tell1:이 지위를 보유하고 있던 오랜 기간 동안, 나는 내 동료들이 이 세계', 850)
    .addScene('tell1:혹은 다른 세계 어딘가에 아직 남아 있을 거라는 희망을 고수했다.', 850)
    .addScene('tell1:하지만 이제 그 희망은, 이 지위처럼, 빼앗기고 말았다', 850)
    .addScene('tell1:나는 이 생각을 내가 떠나가기 전날 밤', 850)
    .addScene('tell1:내 개인 거처가 아닌 || 너무나도 어둡고 숨 막히는 || 차가운 감옥의 벽 안에서 정리하고 있다. ', 850)
    .addScene('tell1:이것은 나의 마지막 말이지만, 아마도 가장 중요한 말일 것이다.', 850)
    .addScene('tell1:나를 포획한 자는 나조차도 여행자에게서 거부당한 지식과 이해, 청명을 바라고 있다.', 850)
    .addScene('tell1:그는 || 소통이 얼마나 어려운 것인지 || 이해하지 못한다. 이해하려 하지도 않는다.', 850)
    .addScene('tell1:그는 주어질 때까지 기다리는 것보다는 차라리 빼앗는 것을 택할 것이다.', 850)
    .addScene('tell1:그는 여행자가 그를 보게 해달라고, 그와 대화하게 해달라고 내게 요구했다.', 850)
    .addScene('tell1:하지만 그는 이해하지 못한다. 나는 여행자에게 그 무엇도 요구할 수 없다.', 850)
    .addScene('tell1:나는 여행자에게 그 무엇도 요구할 수 없다. 나는 그저 듣고 되풀이할 뿐이다.', 850)
    .addScene('tell1:하지만 그는 내 말을 || 그 경고를 || 들으려 하지 않는다.', 850)
    .addScene('tell1:그는 || 자신이 기억으로만 남을 거라는 사실을, || 자신이 실패할 거라는 사실을 믿으려 하지 않는다. ', 850)
    .addScene('tell1:나는 보았다. 너무나도 많은 것을 보았다. ', 850)
    .addScene('tell1:족쇄가 여행자를 붙잡기 전부터 여행자는 내게 외쳤다.', 850)
    .addScene('tell1:그리고 내게 || 균열을 금으로 메운 부서진 가면을, || 내가 보아야 하는 모든 것을 보여주었다.', 850)
    .addScene('tell1:평생에 걸친 봉사에 대한 보상을 해주었다.', 850)
    .addScene('tell1:나는 이제 더는 대변자일 필요가 || 두려워할 필요가 || 없다. ', 850)
    .addScene('tell1:우리도, 내 동료들도, 우리의 질서도 || 두려워할 시간은 이미 지나갔기 때문에 || 필요가 없다.', 850)
    .addScene('tell1:다가오는 시간에는 || 선택과 함께 || 여행자가 자유롭게 이야기할 것이다. ', 850)
    .addScene('tell1:귀를 기울이는 이들은 || 다가오는 위험을 || 알 것이며, 아는 이들은 귀를 기울일 것이다.', 850)
    .addScene('tell1:그들은 || 잊혀진 || 대변자가 아니다. 우리의 시간은 이미 지나갔다.', 850)
    .addScene('tell1:새로운 시대의 여명이 밝아 오고 있고, 나 또한 살아남아 그것을 보고 싶다.', 850)
    .addScene('tell1:나 마지막 대변자는 이제 안식을 찾았다.', 850)